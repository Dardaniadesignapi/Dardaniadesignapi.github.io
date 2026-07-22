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

## Bereits erledigt
- Alte, inkonsistente Version von `portfolio.html`/`preise.html` (anderes Design, andere Navigation, Copyright 2025) ersetzt durch eine durchgängige Version im aktuellen Design.
- Widerspruch „20+ Projekte" (Startseite) vs. „11+ Projekte" (Portfolio) aufgelöst — beide zeigen jetzt 11+.
- Bilddateiname mit Leerzeichen/Klammern (`Design ohne Titel(17).png`) aus dem Code entfernt, überall `logo-mark.png` verwendet.
- Meta-Description, Canonical, Open Graph, Twitter-Card und Theme-Color jetzt auf **jeder** Seite vorhanden (vorher nur auf der Startseite).
- Strukturierte Daten (JSON-LD, `ProfessionalService`) für Schweiz **und** Kosovo ergänzt.
- Responsive: mobiles Hamburger-Menü, Grid-Layouts, die auf Smartphone auf eine Spalte fallen, `loading="lazy"` auf Portfolio-Bildern.
- `robots.txt` + `sitemap.xml` ergänzt (fehlten komplett).
- Eigene `404.html` statt Standardfehlerseite.
