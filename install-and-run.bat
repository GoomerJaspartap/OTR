@echo off
echo OTR Website - Windows Installer
echo ================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing Node.js...
    echo Please download and install Node.js from https://nodejs.org/
    echo After installation, run this script again.
    pause
    exit /b 1
)

echo Node.js is installed. Installing dependencies...
npm install

echo Building the project...
npm run build

echo.
echo Setup complete!
echo Starting the website...
echo The website will open in your browser at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

REM Open browser after 2 seconds
timeout /t 2 /nobreak >nul
start http://localhost:3000

REM Start the development server
npm run dev
