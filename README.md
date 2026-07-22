# Dardania Design — Website (Neuaufsetzung Juli 2026)

## Was drin ist
- `index.html` – Startseite (One-Page: Angebot, Ablauf, Portfolio-Vorschau, Zusatzleistungen, FAQ, Kontakt)
- `portfolio.html` – alle 11 Projekte, mit Filter (Alle / Web / Branding)
- `impressum.html`, `datenschutz.html` – jetzt vorhanden und verlinkt (vorher 404)
- `konfigurator.html` – Platzhalter, siehe Hinweis auf der Seite selbst
- `404.html` – eigene Fehlerseite statt Standard-GitHub-404
- `css/style.css`, `js/script.js` – ein gemeinsames Stylesheet/Script für alle Seiten (vorher: zwei verschiedene Designs auf einer Domain)
- `robots.txt`, `sitemap.xml` – für Google/Bing

## Vor dem Hochladen auf GitHub
1. **Bilder-Ordner** `/images/` mit allen bestehenden Bildern (logo-mark.png, loco.png, reno.png, orgesa1.png, sam.png, morina.png, nertil.png, qk-logo.png, beiqi.png, behotek.png, flameglass-after.png, perfectglass.png, og-image.png) unverändert dazulegen — die neuen Seiten verlinken auf dieselben Dateinamen wie vorher.
2. **Impressum ergänzen**: In `impressum.html` sind zwei Felder mit `[BITTE ERGÄNZEN]` markiert (UID/Handelsregisternummer). Ich kann diese Nummern nicht erfinden — bitte selbst eintragen oder kurz mit einer Treuhandstelle klären, was für Dardania Design als Kosovo-Firma mit Schweizer Kundschaft nötig ist.
3. **Konfigurator**: Die ursprüngliche 10-Schritte-Logik war auf der Live-Seite nicht abrufbar (nur ein leeres Gerüst „Schritt 1 von 10"). Ich habe die Seite so überarbeitet, dass sie nicht mehr kaputt wirkt, aber die eigentliche Schritt-für-Schritt-Funktion fehlt noch. Sag mir, was die 10 Schritte inhaltlich abfragen sollen, dann baue ich sie im nächsten Schritt.
4. **Kontaktformular**: Funktioniert ohne Backend über `mailto:` (öffnet das E-Mail-Programm des Besuchers vorausgefüllt). Für ein Formular, das ohne E-Mail-Programm direkt im Hintergrund sendet, bräuchtest du einen Dienst wie Formspree (kostenlos für kleine Volumen) — sag Bescheid, dann baue ich das ein.

## Offene Preis-Frage (aus dem letzten Audit)
Der Basic-Preis (99 CHF/Monat, 1 Seite, 12–24 Monate Mindestlaufzeit) liegt über dem, was Wettbewerber wie amai! (ab 35 CHF/Monat) für vergleichbare Abo-Websites verlangen. Ich habe die Zahl unverändert übernommen, da das eine Geschäftsentscheidung ist — nicht Teil des technischen Rebuilds.

## Update (3. Überarbeitung)
- **Logo ist zurück**: Header/Footer zeigen jetzt wieder das Logo-Bild (`logo-mark.png`) — ohne zusätzlichen Text daneben, damit nichts doppelt steht.
- **Konfigurator-Link** war aus der Hauptnavigation verschwunden — wieder ergänzt (Start- und Portfolio-Seite).
- **Interne Hinweise entfernt**: Die orangen "Hinweis für dich (Lami)"-Kästen auf Impressum/Datenschutz/Konfigurator waren aus Versehen öffentlich sichtbar — komplett entfernt. Die unausgefüllten UID/Handelsregister-Zeilen im Impressum sind ebenfalls raus, da keine Nummer vorliegt.
- **Zusatzleistungen reduziert**: "Social Media Setup" und "Print & Produkte" komplett entfernt (werden nicht mehr angeboten). Es bleibt nur noch Logo/Logo+Branding.
- **Preise aktualisiert** (siehe Begründung im Chat):
  - Logo Design: 750 → **890 CHF** (Schweizer Marktdurchschnitt für KMU liegt bei CHF 600–1'500, 750 war eher unterpreist)
  - Logo + Branding: 1'200 → **1'490 CHF** (Marktvergleich: Branding-Pakete mit Visitenkarte/Guidelines liegen bei Agenturen ab CHF 1'900+)
  - Website-Abo Basic: 99 → **79 CHF/Monat** (bzw. 849.–/Jahr) — gesenkt, weil neu eine 30%-Anzahlung dazukommt und der Gesamtpreis sonst über dem Marktniveau für eine Landingpage läge
  - Standard (189.–) und Pro (ab 350.–) unverändert — lagen bereits im Marktrahmen
  - **Neu**: 30% Anzahlung vom Gesamtpreis bei Vertragsstart, danach die reguläre Monatsrate — jetzt in Preis-Sektion und FAQ vermerkt
- **Kontaktformular sendet jetzt wirklich direkt** — es öffnet sich kein E-Mail-Programm mehr. Das läuft über **Formspree** (kostenloser Formular-Dienst für statische Seiten wie GitHub Pages). **Du musst noch etwas tun, sonst sendet das Formular nicht:**
  1. Gehe auf [formspree.io](https://formspree.io), kostenlos registrieren.
  2. Neues Formular erstellen, den Endpoint kopieren (sieht aus wie `https://formspree.io/f/abcd1234`).
  3. In **zwei Stellen** in `index.html` den Platzhalter `https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID` durch deinen echten Endpoint ersetzen (im `<form>`-Tag) **und** in `js/script.js` die Variable `FORM_ENDPOINT` ganz oben im Kontaktformular-Block anpassen.
  Bis das erledigt ist, zeigt das Formular eine Fehlermeldung statt zu senden.

## Update (2. Überarbeitung)
- **Doppeltes "Dardania Design" im Header/Footer behoben**: Vorher stand neben dem Logo-Bild zusätzlich der Text "Dardania Design" — falls `logo-mark.png` bei euch bereits den vollen Schriftzug enthält, erschien der Name zweimal. Header und Footer zeigen jetzt nur noch einen reinen Text-Wortmarke ("Dardania**Design**", Design in Rot). Das Logo-Bild wird nirgends mehr im sichtbaren Inhalt geladen — `logo-mark.png` wird nur noch als Favicon (Browser-Tab-Icon) referenziert.
- **Hero neu gestaltet**: Das generische "Browser-Fenster"-Mockup wurde durch ein eigenständiges Element ersetzt — ein rotierter Stempel mit "48" (eure eigentliche Positionierung: Live in 48 Stunden) plus zwei Standort-Badges (Sierre / Prizren).
- **Responsive-Design gehärtet**: globale Absicherung gegen horizontales Scrollen (`overflow-x: hidden`), zusätzlicher Breakpoint für sehr kleine Handys (<480px), Hero-CTAs stapeln sich auf Mobile sauber untereinander, Stat-Kacheln brechen kontrolliert um.
- `CNAME` (Inhalt: `www.dardaniadesign.com`) liegt jetzt im Paket – falls noch nicht im Repo vorhanden, mit hochladen.

## Bereits erledigt
- Alte, inkonsistente Version von `portfolio.html`/`preise.html` (anderes Design, andere Navigation, Copyright 2025) ersetzt durch eine durchgängige Version im aktuellen Design.
- Widerspruch „20+ Projekte" (Startseite) vs. „11+ Projekte" (Portfolio) aufgelöst — beide zeigen jetzt 11+.
- Bilddateiname mit Leerzeichen/Klammern (`Design ohne Titel(17).png`) aus dem Code entfernt, überall `logo-mark.png` verwendet.
- Meta-Description, Canonical, Open Graph, Twitter-Card und Theme-Color jetzt auf **jeder** Seite vorhanden (vorher nur auf der Startseite).
- Strukturierte Daten (JSON-LD, `ProfessionalService`) für Schweiz **und** Kosovo ergänzt.
- Responsive: mobiles Hamburger-Menü, Grid-Layouts, die auf Smartphone auf eine Spalte fallen, `loading="lazy"` auf Portfolio-Bildern.
- `robots.txt` + `sitemap.xml` ergänzt (fehlten komplett).
- Eigene `404.html` statt Standardfehlerseite.
