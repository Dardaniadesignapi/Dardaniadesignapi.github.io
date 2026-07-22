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

  /* Contact form: client-side validation + mailto handoff
     (site is static hosting with no backend — replace this block with a
     Formspree/other endpoint call if a server-side handler is added later) */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
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

      var paket = form.paket ? form.paket.value : '';
      var subject = encodeURIComponent('Projektanfrage von ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'E-Mail: ' + email + '\n' +
        'Interessiertes Paket: ' + paket + '\n\n' +
        'Nachricht:\n' + message
      );

      window.location.href = 'mailto:info@dardaniadesign.com?subject=' + subject + '&body=' + body;

      status.textContent = 'Dein E-Mail-Programm öffnet sich gleich mit deiner Nachricht — falls nicht, schreib uns direkt an info@dardaniadesign.com.';
      status.dataset.state = 'success';
    });
  }
});
