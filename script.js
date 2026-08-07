/* ==========================================================================
   Dardania Design — script.js
   1) Cookie-Consent: blockiert die Seite beim ersten Laden bis zur Wahl
   2) Mobiles Menü
   3) Kontaktformular: Validierung inkl. Pflicht-Checkbox Datenschutz
   ========================================================================== */

(function () {
  "use strict";

  var CONSENT_KEY = "dardania_cookie_consent"; // { necessary: true, stats: bool, ts: string }

  var overlay = document.getElementById("cookie-overlay");
  var banner = document.getElementById("cookie-banner");
  var reopenBtn = document.getElementById("cookie-reopen");
  var settingsToggle = document.getElementById("cookie-settings-toggle");
  var optionsPanel = document.getElementById("cookie-options");
  var statsCheckbox = document.getElementById("consent-stats");
  var acceptAllBtn = document.getElementById("cookie-accept-all");
  var acceptSelectionBtn = document.getElementById("cookie-accept-selection");
  var rejectBtn = document.getElementById("cookie-reject");
  var footerCookieLink = document.getElementById("footer-cookie-link");

  function readConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(consent) {
    consent.necessary = true;
    consent.ts = new Date().toISOString();
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    } catch (e) {
      /* localStorage nicht verfügbar (z. B. privater Modus) - Banner bleibt
         beim nächsten Laden erneut sichtbar, aber wir blockieren die
         aktuelle Sitzung trotzdem nicht doppelt. */
    }
    applyConsent(consent);
  }

  function applyConsent(consent) {
    // Hier ansetzen, um Skripte NUR bei Zustimmung nachzuladen, z. B.:
    // if (consent.stats) { loadAnalyticsScript(); }
    document.dispatchEvent(new CustomEvent("dardania:consent-updated", { detail: consent }));
  }

  function showBanner() {
    overlay.hidden = false;
    banner.hidden = false;
    reopenBtn.hidden = true;
    document.body.classList.add("no-scroll");
    banner.querySelector(".btn-primary").focus();
  }

  function hideBanner() {
    overlay.hidden = true;
    banner.hidden = true;
    reopenBtn.hidden = false;
    document.body.classList.remove("no-scroll");
  }

  function init() {
    var existing = readConsent();
    if (existing) {
      applyConsent(existing);
      hideBanner();
    } else {
      // Erster Besuch: Banner blockiert die Seite, bis eine Wahl getroffen wurde.
      showBanner();
    }
  }

  settingsToggle.addEventListener("click", function () {
    var expanded = settingsToggle.getAttribute("aria-expanded") === "true";
    settingsToggle.setAttribute("aria-expanded", String(!expanded));
    optionsPanel.hidden = expanded;
  });

  acceptAllBtn.addEventListener("click", function () {
    statsCheckbox.checked = true;
    writeConsent({ stats: true });
    hideBanner();
  });

  acceptSelectionBtn.addEventListener("click", function () {
    writeConsent({ stats: statsCheckbox.checked });
    hideBanner();
  });

  rejectBtn.addEventListener("click", function () {
    statsCheckbox.checked = false;
    writeConsent({ stats: false });
    hideBanner();
  });

  function reopenBanner(e) {
    if (e) e.preventDefault();
    var existing = readConsent() || { stats: false };
    statsCheckbox.checked = !!existing.stats;
    showBanner();
  }

  reopenBtn.addEventListener("click", reopenBanner);
  footerCookieLink.addEventListener("click", reopenBanner);

  // Escape schliesst das Banner NICHT beim ersten Besuch (erzwungene Wahl),
  // aber beim erneuten Öffnen über den Reopen-Button schon.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !banner.hidden && readConsent()) {
      hideBanner();
    }
  });

  init();
})();

/* ---------- Mobiles Menü ---------- */
(function () {
  "use strict";
  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ---------- Jahr im Footer ---------- */
(function () {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();

/* ---------- Kontaktformular ---------- */
(function () {
  "use strict";
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var consentBox = document.getElementById("privacy-consent");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!consentBox.checked) {
      status.textContent = "Bitte stimme der Datenschutzerklärung zu, um die Anfrage zu senden.";
      status.classList.add("error");
      consentBox.focus();
      return;
    }

    // Übertragung via FormSubmit.co (kein eigenes Backend nötig, kostenlos).
    // WICHTIG: Nach der allerersten echten Einsendung schickt FormSubmit eine
    // Bestätigungs-E-Mail an info@dardaniadesign.com — dort auf den Aktivierungs-
    // Link klicken, danach funktionieren alle weiteren Einsendungen automatisch.
    var submitBtn = form.querySelector("button[type=submit], .btn-primary");
    if (submitBtn) submitBtn.disabled = true;

    fetch("https://formsubmit.co/ajax/info@dardaniadesign.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    })
      .then(function (res) { if (!res.ok) throw new Error("send-failed"); })
      .then(function () { showSuccess(); })
      .catch(function () { showError(); })
      .finally(function () { if (submitBtn) submitBtn.disabled = false; });
  });

  function showSuccess() {
    status.textContent = "Danke! Deine Anfrage wurde übermittelt — wir melden uns innert 24 Stunden.";
    status.classList.add("success");
    form.reset();
  }

  function showError() {
    status.textContent = "Da ist etwas schiefgelaufen. Bitte versuch es nochmal oder schreib uns direkt an info@dardaniadesign.com.";
    status.classList.add("error");
  }
})();
