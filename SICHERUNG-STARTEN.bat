@echo off
chcp 65001 >nul
title Automatische GitHub-Sicherung

echo.
echo ========================================
echo   Automatische Sicherung wird gestartet
echo ========================================
echo.

cd /d "C:\Users\annam\Projekte\merkert-social-media"

"C:\Program Files\Git\bin\git.exe" add .

for /f "tokens=1-3 delims=." %%a in ("%date%") do set DATUM=%%a.%%b.%%c
for /f "tokens=1-2 delims=:" %%a in ("%time:~0,5%") do set UHRZEIT=%%a:%%b

"C:\Program Files\Git\bin\git.exe" commit -m "Automatische Sicherung - %DATUM% %UHRZEIT% Uhr"

if %errorlevel% equ 0 (
    echo.
    echo Neue Aenderungen werden zu GitHub hochgeladen...
    "C:\Program Files\Git\bin\git.exe" push origin main
) else (
    echo.
    echo Keine neuen Aenderungen seit der letzten Sicherung.
)

echo.
echo ========================================
if %errorlevel% equ 0 (
    echo   SICHERUNG ERFOLGREICH ABGESCHLOSSEN!
    echo   Datum: %DATUM%  Uhrzeit: %UHRZEIT% Uhr
) else (
    echo   Alle Dateien waren bereits gesichert.
)
echo ========================================
echo.
pause
