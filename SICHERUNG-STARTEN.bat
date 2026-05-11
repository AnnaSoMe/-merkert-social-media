@echo off
chcp 65001 >nul
title Automatische GitHub-Sicherung

echo.
echo ========================================
echo   Automatische Sicherung wird gestartet
echo ========================================
echo.

cd /d "C:\Users\annam\Projekte\merkert-social-media"

:: Prüfen ob überhaupt Änderungen vorhanden sind
"C:\Program Files\Git\bin\git.exe" diff --quiet --cached
"C:\Program Files\Git\bin\git.exe" diff --quiet
"C:\Program Files\Git\bin\git.exe" status --porcelain > "%TEMP%\git_status.tmp"

for /f %%A in ("%TEMP%\git_status.tmp") do set FILESIZE=%%~zA
if "%FILESIZE%"=="0" (
    echo Keine Aenderungen vorhanden – Sicherung uebersprungen.
    echo.
    pause
    exit /b 0
)

:: Nutzereingabe: Beschreibung der Änderungen
echo Was wurde geaendert? (Enter druecken fuer "Automatische Sicherung")
set /p BESCHREIBUNG="> "
if "%BESCHREIBUNG%"=="" set BESCHREIBUNG=Automatische Sicherung

:: Datum und Uhrzeit ermitteln
for /f "tokens=1-3 delims=." %%a in ("%date%") do set DATUM=%%a.%%b.%%c
for /f "tokens=1-2 delims=:" %%a in ("%time:~0,5%") do set UHRZEIT=%%a:%%b

:: Alle Änderungen stagen und committen
"C:\Program Files\Git\bin\git.exe" add .
"C:\Program Files\Git\bin\git.exe" commit -m "%BESCHREIBUNG% – %DATUM% %UHRZEIT% Uhr"
set COMMIT_RESULT=%errorlevel%

if %COMMIT_RESULT% equ 0 (
    echo.
    echo Aenderungen werden zu GitHub hochgeladen...
    "C:\Program Files\Git\bin\git.exe" push origin main
    set PUSH_RESULT=%errorlevel%
) else (
    set PUSH_RESULT=1
)

echo.
echo ========================================
if %COMMIT_RESULT% equ 0 if %PUSH_RESULT% equ 0 (
    echo   SICHERUNG ERFOLGREICH ABGESCHLOSSEN!
    echo   %BESCHREIBUNG%
    echo   Datum: %DATUM%  Uhrzeit: %UHRZEIT% Uhr
) else if %COMMIT_RESULT% neq 0 (
    echo   Keine Aenderungen zum Sichern gefunden.
) else (
    echo   FEHLER beim Hochladen zu GitHub!
    echo   Bitte Internetverbindung pruefen.
)
echo ========================================
echo.
pause
