[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$textDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputPath = Join-Path $textDirectory 'text-manifest.js'

function Get-HtmlTitle {
    param(
        [Parameter(Mandatory)] [string]$Html,
        [Parameter(Mandatory)] [string]$FileName
    )
    $match = [regex]::Match($Html, '(?is)<title\b[^>]*>(.*?)</title>')
    if (-not $match.Success) { throw "找不到 <title>：$FileName" }
    $title = [System.Net.WebUtility]::HtmlDecode($match.Groups[1].Value)
    $title = ($title -replace '\s+', ' ').Trim()
    if ([string]::IsNullOrWhiteSpace($title)) { throw "<title> 不可為空白：$FileName" }
    return $title
}

function Get-NaturalSortKey {
    param([Parameter(Mandatory)] [string]$Name)
    return [regex]::Replace($Name.ToLowerInvariant(), '\d+', { param($match) $match.Value.PadLeft(20, '0') })
}

# 掃描本資料夾第一層正式教材；入口、備份、測試與暫存檔不列入。
$excludedPattern = '(?i)(^index\.html$|library|backup|bak|copy|test|temp|tmp|備份|測試)'
$items = Get-ChildItem -LiteralPath $textDirectory -Filter '*.html' -File |
    Where-Object { $_.Name -notmatch $excludedPattern -and $_.Name -notmatch '^[._~]' } |
    Sort-Object { Get-NaturalSortKey $_.Name } |
    ForEach-Object {
        $html = Get-Content -LiteralPath $_.FullName -Raw
        [ordered]@{ file = $_.Name; title = Get-HtmlTitle -Html $html -FileName $_.Name }
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
