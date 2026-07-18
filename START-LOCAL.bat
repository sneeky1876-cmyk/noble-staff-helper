@echo off
setlocal
title Noble Staff Helper - Local Server
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found on this computer.
  echo Install Node.js, then double-click this file again.
  echo.
  pause
  exit /b 1
)

start "" powershell.exe -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Milliseconds 900; Start-Process 'http://127.0.0.1:4242/'"
node serve-local.cjs

if errorlevel 1 (
  echo.
  pause
)
