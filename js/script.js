// Dardania Design — site script
document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('menu-open', open);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  /* Portfolio filter (only present on portfolio.html) */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.portfolio-card');
  if (filterButtons.length && cards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        var category = btn.dataset.filter;
        cards.forEach(function (card) {
          var match = category === 'all' || card.dataset.category.indexOf(category) !== -1;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* Contact form: sends directly via Formspree — no email program is opened.
     SETUP REQUIRED: replace FORM_ENDPOINT below with your own Formspree endpoint.
     1) Go to https://formspree.io, sign up free, create a form.
     2) Copy the endpoint it gives you (looks like https://formspree.io/f/xxxxabcd).
     3) Paste it below instead of the placeholder. Until this is done, the form
        will show an error instead of sending. */
  var FORM_ENDPOINT = 'https://formspree.io/f/xqerdaqa';

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var submitBtn = form.querySelector('button[type="submit"]');
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        status.textContent = 'Bitte fülle Name, E-Mail und Nachricht aus.';
        status.dataset.state = 'error';
        return;
      }
      if (!emailPattern.test(email)) {
        status.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.';
        status.dataset.state = 'error';
        return;
      }
      if (FORM_ENDPOINT.indexOf('REPLACE_WITH_YOUR_FORM_ID') !== -1) {
        status.textContent = 'Formular ist noch nicht angeschlossen (Formspree-Endpoint fehlt) — bitte per E-Mail an info@dardaniadesign.com schreiben.';
        status.dataset.state = 'error';
        return;
      }

      submitBtn.disabled = true;
      status.textContent = 'Wird gesendet …';
      status.dataset.state = '';

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (response) {
        submitBtn.disabled = false;
        if (response.ok) {
          status.textContent = 'Danke! Deine Anfrage ist angekommen — wir melden uns innert 24 Stunden.';
          status.dataset.state = 'success';
          form.reset();
        } else {
          status.textContent = 'Senden hat nicht geklappt. Bitte versuch es nochmal oder schreib uns direkt an info@dardaniadesign.com.';
          status.dataset.state = 'error';
        }
      }).catch(function () {
        submitBtn.disabled = false;
        status.textContent = 'Senden hat nicht geklappt (keine Verbindung). Bitte versuch es nochmal oder schreib uns direkt an info@dardaniadesign.com.';
        status.dataset.state = 'error';
      });
    });
  }
});
