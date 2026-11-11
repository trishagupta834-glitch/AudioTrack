@echo off
title AudioTrack Server Launcher
cd /d "%~dp0"

echo ========================================================
echo        Starting AudioTrack Server (Port 5000)
echo ========================================================
echo.

node "gateway\server.js"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Server failed to start!
    echo Trying fallback Python launcher...
    python "gateway\server.js"
)

pause
