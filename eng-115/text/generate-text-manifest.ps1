[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$textDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputPath = Join-Path $textDirectory 'text-manifest.js'

function Get-HtmlTitle {
    param(
        [Parameter(Mandatory)] [string]$Html,
        [Parameter(Mandatory)] [string]$Fallback
    )
    $match = [regex]::Match($Html, '(?is)<title\b[^>]*>(.*?)</title>')
    if (-not $match.Success) { return $Fallback }
    $title = [System.Net.WebUtility]::HtmlDecode($match.Groups[1].Value)
    $title = ($title -replace '\s+', ' ').Trim()
    if ([string]::IsNullOrWhiteSpace($title)) { return $Fallback }
    return $title
}

# 正式教材是本資料夾第一層的 HTML；外框 index.html 與子資料夾中的測試檔不列入。
$items = Get-ChildItem -LiteralPath $textDirectory -Filter '*.html' -File |
    Where-Object { $_.Name -ne 'index.html' } |
    Sort-Object Name |
    ForEach-Object {
        $html = Get-Content -LiteralPath $_.FullName -Raw
        [ordered]@{ file = $_.Name; title = Get-HtmlTitle -Html $html -Fallback $_.BaseName }
    }

$jsonLines = foreach ($item in $items) { "  $($item | ConvertTo-Json -Compress)" }
$content = @(
    '// 此檔由 generate-text-manifest.ps1 產生；教材名稱直接取自各 HTML 的 <title>。'
    'window.TEXT_MANIFEST = ['
    ($jsonLines -join ",`n")
    '];'
) -join "`n"

[System.IO.File]::WriteAllText($outputPath, "$content`n", [System.Text.UTF8Encoding]::new($false))
Write-Output "已更新：$outputPath"
Write-Output "教材數量：$($items.Count)"
