[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$readingDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputPath = Join-Path $readingDirectory 'reading-manifest.js'
$excludedNames = @(
    'reading-shell-test.html'
)

function ConvertTo-DisplayTitle {
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
    $title = ($title -replace '\s*\([^)]*(?:母版|規格|提示|選項)[^)]*\)\s*$', '').Trim()

    if ([string]::IsNullOrWhiteSpace($title)) {
        return $Fallback
    }

    return $title
}

$items = Get-ChildItem -LiteralPath $readingDirectory -Filter 'reading-*.html' -File |
    Where-Object { $_.Name -notin $excludedNames } |
    Sort-Object Name |
    ForEach-Object {
        $html = Get-Content -LiteralPath $_.FullName -Raw
        [ordered]@{
            file = $_.Name
            title = ConvertTo-DisplayTitle -Html $html -Fallback $_.BaseName
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
