/* Google Analytics 4, loaded only after the visitor has agreed.
   Replace GA_ID with your Measurement ID (G-...). */
(function () {
  var GA_ID = 'G-P0E6VXH46V';
  var KEY = 'rij-analytics-consent';
  var isGerman = document.documentElement.lang === 'de';
  var policy = 'datenschutz.html';

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadGA() {
    if (window.__gaLoaded || GA_ID.indexOf('XXXX') !== -1) return;
    window.__gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, { cookie_domain: location.hostname });
  }

  function removeGACookies() {
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name.indexOf('_ga') === 0) {
        var host = location.hostname.replace(/^www\./, '');
        ['', '; domain=' + host, '; domain=.' + host].forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
        });
      }
    });
  }

  function showBanner() {
    if (document.getElementById('consent')) return;
    var t = isGerman ? {
      text: 'Darf ich Google Analytics nutzen, um zu sehen, wie viele Menschen diese Seite besuchen und woher sie kommen? Dabei werden Cookies gesetzt und Daten an Google übertragen. Mehr dazu in der <a href="' + policy + '">Datenschutzerklärung</a>.',
      yes: 'Akzeptieren', no: 'Ablehnen'
    } : {
      text: 'May I use Google Analytics to see how many people visit this page and where they come from? This involves setting cookies and sending data to Google. You can find out more in the <a href="' + policy + '">privacy policy</a>.',
      yes: 'Accept', no: 'Decline'
    };
    var box = document.createElement('div');
    box.id = 'consent';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    box.innerHTML = '<p>' + t.text + '</p><div class="consent-btns">' +
      '<button type="button" class="btn btn-teal" data-v="granted">' + t.yes + '</button>' +
      '<button type="button" class="btn btn-teal" data-v="denied">' + t.no + '</button></div>';
    box.addEventListener('click', function (e) {
      var v = e.target.getAttribute && e.target.getAttribute('data-v');
      if (!v) return;
      save(v);
      box.remove();
      if (v === 'granted') loadGA(); else removeGACookies();
    });
    document.body.appendChild(box);
  }

  window.openConsent = function (e) { if (e) e.preventDefault(); showBanner(); };

  document.addEventListener('DOMContentLoaded', function () {
    var c = read();
    if (c === 'granted') loadGA();
    else if (c !== 'denied') showBanner();
  });
})();
