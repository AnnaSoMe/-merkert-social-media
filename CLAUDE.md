# Merkert Social Media – Projektkontext für Claude Code

## Was ist das?
Ein Online-Shop der DVAG-Vermögensberatern personalisierte Social-Media-Posts verkauft.
Jeder Post wird mit dem Foto des Beraters personalisiert – kein Download ohne Foto.
Kein DVAG-Branding in den Posts. Posts gehören dem Berater persönlich.

## Inhaberin
Anna Merkert – selbstständige Vermögensberaterin
Website: merkert-social-media.de

## 5 Content-Säulen
1. Teamaufbau & Benefits (live)
2. Produktkommunikation (in Planung)
3. Personal Brand (in Planung)
4. Kundenkommunikation (in Planung)
5. Memes & Humor (live)

## Preismodell
- Starter: €49 einmalig (5 Posts)
- Bundle: €89 einmalig (10 Posts)
- Feed Starter Bundle: €99 einmalig (15 Posts, 6 Designs)
- Flatrate: €149/Monat (500+ Posts)
- Direktionspaket: €499 einmalig (alle Posts, beliebig viele Berater)
- Meme Einzelpost: €4,90 | Meme Bundle: €19 (5er-Pack)
- News-Paket: €49/Ausgabe (nur für Flatrate-Kunden)
- Berater-Rabatt über Coach/Gruppenleiter: Bundle €69 statt €89

## Design-DNA
- Farben: Cream #F5F0E8, Coral #C67B5A, Dunkelbraun #2C2420, Grün #4A6741
- Typografie: Georgia (Serif, Headlines), DM Sans (Body)
- Stil: warm, professionell, erdtöne, kein DVAG-Branding

## Was fertig ist (in index.html)
- Homepage mit Hero, Navigation
- Design-Showcase (10 Layouts in einem dunklen Grid)
- Design-Quiz (8 Schritte: Willkommen, Foto, Zielgruppe, Postet-selbst,
  Design-Stil, Farbe, Feed-Preview, Inhalte)
- Feed-Preview mit Instagram-Handy-Frame
- 4-stufiger Konfigurator (Format, Design, Farbe, Foto-Upload)
- 16 Farbpaletten (10 Erdtöne + 6 Vollfarben)
- Pricing-Section (alle Pakete)
- Warenkorb
- Meme-Generator mit Claude API
- About-Section

## Was noch fehlt / nächste Schritte
- Echte Post-Inhalte befüllen (Texte für alle Säulen)
- Stripe-Integration für echte Zahlungen
- Bannerbear API für automatische Bild-Personalisierung
- Eigene Domain verbinden (netlify.com/drop zum Starten)
- Fotos in /fotos/ Ordner ablegen statt Base64 im HTML

## Dateien
- index.html → die komplette Homepage (Prototyp)
- fotos/ → Annas Fotos hier ablegen (DSC08895.jpg, DSC09113.jpg)
- assets/ → CSS, JS, Icons wenn später ausgelagert
- posts/ → Post-Texte und Inhalte

## Tech-Stack (aktuell)
Reines HTML/CSS/JS – keine Abhängigkeiten, läuft direkt im Browser.

## Tech-Stack (geplant)
- Hosting: Netlify
- Payments: Stripe
- Bild-Personalisierung: Bannerbear
- Datenbank: Supabase
- E-Mail: Resend
