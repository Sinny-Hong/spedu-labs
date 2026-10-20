[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$topicDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputPath = Join-Path $topicDirectory 'topic-manifest.js'

function Get-NaturalSortKey {
    param([Parameter(Mandatory)] [string]$Name)
    return [regex]::Replace($Name.ToLowerInvariant(), '\d+', { param($match) $match.Value.PadLeft(20, '0') })
}

$items = Get-ChildItem -LiteralPath $topicDirectory -Filter '*.html' -File |
    Where-Object { $_.Name -notmatch '^[._~]' -and $_.Name -notmatch '(?i)(^index\.html$|library|backup|bak|copy|temp|tmp|備份)' } |
    Sort-Object { Get-NaturalSortKey $_.Name } |
    ForEach-Object {
        $html = Get-Content -LiteralPath $_.FullName -Raw
        $match = [regex]::Match($html, '(?is)<title\b[^>]*>(.*?)</title>')
        $title = if ($match.Success) { [System.Net.WebUtility]::HtmlDecode($match.Groups[1].Value) } else { '' }
        $title = ($title -replace '\s+', ' ').Trim()
        if (-not $title) { $title = $_.BaseName }
        [ordered]@{ file = $_.Name; title = $title }
    }

$jsonLines = foreach ($item in $items) { "  $($item | ConvertTo-Json -Compress)" }
$content = @(
    '// 此檔由 generate-topic-manifest.ps1 產生，供離線與掃描失敗時使用。'
    'window.TOPIC_MANIFEST = ['
    ($jsonLines -join ",`n")
    '];'
) -join "`n"

[System.IO.File]::WriteAllText($outputPath, "$content`n", [System.Text.UTF8Encoding]::new($false))
Write-Output "已更新：$outputPath"
Write-Output "教材數量：$($items.Count)"
