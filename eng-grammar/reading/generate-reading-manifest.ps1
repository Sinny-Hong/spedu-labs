[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$readingDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputPath = Join-Path $readingDirectory 'reading-manifest.js'
function Get-HtmlTitle {
    param(
        [Parameter(Mandatory)]
        [string]$Html,
        [Parameter(Mandatory)]
        [string]$Fallback
    )

    $match = [regex]::Match($Html, '(?is)<title\b[^>]*>(.*?)</title>')
    if (-not $match.Success) {
        return $Fallback
    }

    $title = [System.Net.WebUtility]::HtmlDecode($match.Groups[1].Value)
    $title = ($title -replace '\s+', ' ').Trim()

    if ([string]::IsNullOrWhiteSpace($title)) {
        return $Fallback
    }

    return $title
}

# 正式教材一律使用 reading-*.html；外框 index.html 與子資料夾中的測試檔不會進入清單。
$items = Get-ChildItem -LiteralPath $readingDirectory -Filter 'reading-*.html' -File |
    Sort-Object Name |
    ForEach-Object {
        $html = Get-Content -LiteralPath $_.FullName -Raw
        [ordered]@{
            file = $_.Name
            title = Get-HtmlTitle -Html $html -Fallback $_.BaseName
        }
    }

$jsonLines = foreach ($item in $items) {
    $json = $item | ConvertTo-Json -Compress
    "  $json"
}

$content = @(
    '// 此檔由 generate-reading-manifest.ps1 產生；請勿手動維護教材清單。'
    'window.READING_MANIFEST = ['
    ($jsonLines -join ",`n")
    '];'
) -join "`n"

[System.IO.File]::WriteAllText($outputPath, "$content`n", [System.Text.UTF8Encoding]::new($false))
Write-Output "已更新：$outputPath"
Write-Output "教材數量：$($items.Count)"
