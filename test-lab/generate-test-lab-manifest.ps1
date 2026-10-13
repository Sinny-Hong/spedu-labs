[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$labDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputPath = Join-Path $labDirectory 'test-lab-manifest.js'

function Get-HtmlTitle {
    param(
        [Parameter(Mandatory)] [string]$Html,
        [Parameter(Mandatory)] [string]$FileName
    )

    $match = [regex]::Match($Html, '(?is)<title\b[^>]*>(.*?)</title>')
    if (-not $match.Success) { return [System.IO.Path]::GetFileNameWithoutExtension($FileName) }
    $title = [System.Net.WebUtility]::HtmlDecode($match.Groups[1].Value)
    $title = ($title -replace '\s+', ' ').Trim()
    if ([string]::IsNullOrWhiteSpace($title)) {
        return [System.IO.Path]::GetFileNameWithoutExtension($FileName)
    }
    return $title
}

function Get-NaturalSortKey {
    param([Parameter(Mandatory)] [string]$Name)
    return [regex]::Replace($Name.ToLowerInvariant(), '\d+', { param($match) $match.Value.PadLeft(20, '0') })
}

$excludedPattern = '(?i)(^index\.html$|library|backup|bak|copy|temp|tmp|備份)'
$items = Get-ChildItem -LiteralPath $labDirectory -Filter '*.html' -File |
    Where-Object { $_.Name -notmatch $excludedPattern -and $_.Name -notmatch '^[._~]' } |
    Sort-Object { Get-NaturalSortKey $_.Name } |
    ForEach-Object {
        $html = Get-Content -LiteralPath $_.FullName -Raw
        [ordered]@{
            file = $_.Name
            title = Get-HtmlTitle -Html $html -FileName $_.Name
        }
    }

$jsonLines = foreach ($item in $items) {
    "  $($item | ConvertTo-Json -Compress)"
}

$content = @(
    '// 此檔由 generate-test-lab-manifest.ps1 產生，作為離線與 API 失敗時的備援清單。'
    'window.TEST_LAB_MANIFEST = ['
    ($jsonLines -join ",`n")
    '];'
) -join "`n"

[System.IO.File]::WriteAllText($outputPath, "$content`n", [System.Text.UTF8Encoding]::new($false))
Write-Output "已更新：$outputPath"
Write-Output "測試頁數量：$($items.Count)"
