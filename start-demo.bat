@echo off
REM ==== Campero Course Platform — one-click demo launcher (Windows) ====
cd /d "%~dp0"
set PORT=8099
echo.
echo   Campero Course Platform demo
echo   Starting a local server on http://localhost:%PORT% ...
echo   (Keep this window open during the demo. Close it to stop.)
echo.

where python >nul 2>nul
if %ERRORLEVEL%==0 (
  start "" "http://localhost:%PORT%/demo-start.html"
  python -m http.server %PORT%
  goto :eof
)
where py >nul 2>nul
if %ERRORLEVEL%==0 (
  start "" "http://localhost:%PORT%/demo-start.html"
  py -m http.server %PORT%
  goto :eof
)
where npx >nul 2>nul
if %ERRORLEVEL%==0 (
  start "" "http://localhost:%PORT%/demo-start.html"
  npx --yes serve -l %PORT%
  goto :eof
)

echo   Could not find Python or Node.
echo   Install Python from https://python.org (check "Add to PATH"), then run this again.
echo   Or open this folder in VS Code and use the "Live Server" extension.
pause
