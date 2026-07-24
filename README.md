# Dardania Design — Website-Code

## Dateien
- `index.html` — Startseite (Angebot, Preise, Kontaktformular, Cookie-Banner)
- `impressum.html`, `datenschutz.html` — Rechtstexte (Platzhalter, siehe unten)
- `styles.css`, `script.js` — Styling & Funktionalität
- `fonts/` — Ordner für die lokal gehosteten Schriftdateien (noch leer)

## 1. Google Fonts lokal einbinden (Pflicht, sonst Abmahnrisiko)
Der Code erwartet zwei selbst gehostete Schriften unter `fonts/`:

- `manrope-variable.woff2` (Fallback: `manrope-800.woff2`)
- `inter-variable.woff2` (Fallback: `inter-400.woff2`)

So lädst du sie legal herunter und hostest sie selbst (keine Verbindung mehr
zu `fonts.googleapis.com` oder `fonts.gstatic.com`, d.h. keine Übermittlung
von Besucher-IP-Adressen an Google-Server):

1. Gehe auf https://fonts.google.com, suche "Manrope" bzw. "Inter".
2. Lade jeweils die Schriftfamilie herunter (Button "Download family").
   Beide stehen unter der SIL Open Font License — Selbst-Hosting ist erlaubt.
3. Konvertiere die `.ttf`-Dateien bei Bedarf mit einem Tool wie
   https://transfonter.org (lokal ausführbar) in `.woff2`.
4. Lege die Dateien mit genau den obigen Dateinamen in den Ordner `fonts/`.

Alternativ: ersetze die `@font-face`-Regeln in `styles.css` durch andere
selbst gehostete Schriften deiner Wahl — Hauptsache, es bleibt bei einer
lokalen Einbindung ohne externen CDN-Aufruf.

## 2. Rechtstexte vervollständigen
`impressum.html` und `datenschutz.html` enthalten Platzhalter in eckigen
Klammern `[...]`. Diese müssen vor dem Go-Live durch die effektiven Angaben
ersetzt werden (Firmenname, Adresse, Hosting-Anbieter, ggf. eingesetzte
Analyse-Tools). Beide Texte sind als Gerüst gedacht und ersetzen keine
Rechtsberatung — insbesondere `datenschutz.html` sollte vor der
Veröffentlichung von einer Fachperson geprüft werden.

## 3. Kontaktformular an einen echten Versand anschliessen
Aktuell zeigt das Formular nach Validierung nur eine Erfolgsmeldung an
(clientseitig) und sendet noch nichts. In `script.js`, Abschnitt
"Kontaktformular", ist ein auskommentierter `fetch(...)`-Aufruf vorbereitet.
Trage dort deinen echten Endpunkt ein (eigenes Backend, oder ein
Formular-Dienst mit Sitz/Verarbeitung, die in `datenschutz.html` genannt ist).

## 4. Logo
`.logo-mark` ist aktuell ein einfacher farbiger Platzhalter-Block in
`styles.css`. Ersetze ihn bei Bedarf durch ein `<img>`-Tag mit eurem
tatsächlichen Logo.
