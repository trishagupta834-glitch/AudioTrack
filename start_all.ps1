Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "       Starting AudioTrack Server (Port 5000)          " -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $PSScriptRoot

try {
    node "gateway\server.js"
} catch {
    Write-Host "[ERROR] Could not start server: $_" -ForegroundColor Red
}

Read-Host -Prompt "Press Enter to exit..."
