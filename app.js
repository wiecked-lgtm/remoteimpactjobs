/* Renders jobs and issues from data.js. No build step needed. */
(function () {
  var RAW = window.RIJ || { ISSUES: [], JOBS: [] };
  /* Embargo: a new issue goes online on the Friday after it is sent (send date + 3 days),
     unless the issue sets its own "webFrom": "YYYY-MM-DD". */
  function webFrom(i) {
    if (i.webFrom) return i.webFrom;
    var d = new Date(i.date + 'T00:00:00'); d.setDate(d.getDate() + 3);
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  var LIVE = RAW.ISSUES.filter(function (i) { return webFrom(i) <= todayStr(); });
  var liveNums = LIVE.map(function (i) { return i.n; });
  var D = { ISSUES: LIVE, JOBS: RAW.JOBS.filter(function (j) { return liveNums.indexOf(j.issue) !== -1; }) };
  var page = document.body.getAttribute('data-page');
  var CAT_LABEL = { marketing: 'Marketing', communications: 'Communications', also: 'Also worth a look' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function isOpen(j) { return !j.deadline || j.deadline >= today(); }
  function fmtDate(iso) {
    var m = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var p = iso.split('-');
    return parseInt(p[2], 10) + ' ' + m[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }
  function latest() { return D.ISSUES[0]; }
  function jobsOf(n) { return D.JOBS.filter(function (j) { return j.issue === n; }); }

  /* Data for the job_click event in consent.js (sent only after consent) */
  function issueDate(n) { var i = RAW.ISSUES.filter(function (x) { return x.n === n; })[0]; return i ? i.date : ''; }
  function jobAttrs(j) {
    return ' data-job="1" data-job-org="' + esc(j.org) + '" data-job-title="' + esc(j.title) + '" data-job-category="' + esc(j.category) +
      '" data-issue-date="' + esc(issueDate(j.issue)) + '" data-featured="' + (j.featured ? 'yes' : 'no') + '"';
  }
  function card(j, opts) {
    opts = opts || {};
    var closed = !isOpen(j);
    var cls = j.category === 'communications' ? 'cm' : 'mk';
    var tag = opts.showCategory ? '<span class="tag">' + esc(CAT_LABEL[j.category]) + '</span>' : '';
    return '<div class="job ' + cls + (closed ? ' closed' : '') + '">' + tag +
      '<h3>' + esc(j.title) + '</h3>' +
      '<p class="org">' + esc(j.org) + ' · ' + esc(j.field) + '</p>' +
      '<p class="meta">' + esc(j.meta) + (closed ? ' · <span class="closed-label">Closed</span>' : '') + '</p>' +
      (j.desc ? '<p>' + esc(j.desc) + '</p>' : '') +
      (closed ? '' : '<a href="' + esc(j.url) + '" target="_blank" rel="noopener"' + jobAttrs(j) + '>View the role →</a>') +
      '</div>';
  }
  function jotw(j) {
    return '<section class="jotw"><p class="eyebrow">Job of the week</p>' +
      '<h3>' + esc(j.title) + '</h3>' +
      '<p class="org">' + esc(j.org) + ' · ' + esc(j.field) + '</p>' +
      '<p class="meta">' + esc(CAT_LABEL[j.category]) + ' · ' + esc(j.meta) + '</p>' +
      '<p>' + esc(j.desc) + '</p>' +
      (isOpen(j) ? '<a class="btn btn-teal" href="' + esc(j.url) + '" target="_blank" rel="noopener"' + jobAttrs(j) + '>View the role</a>' : '<p class="closed-label">Closed</p>') +
      '</section>';
  }
  function alsoItem(j) {
    return '<li><strong>' + esc(j.title) + '</strong> · ' + esc(j.org) + ' · ' + esc(j.meta) +
      (isOpen(j) ? ' · <a href="' + esc(j.url) + '" target="_blank" rel="noopener"' + jobAttrs(j) + '>View</a>' : ' · <span class="closed-label">Closed</span>') + '</li>';
  }
  function set(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  /* Home */
  if (page === 'home' && latest()) {
    var L = latest(), lj = jobsOf(L.n).filter(isOpen);
    var top = lj.filter(function (j) { return j.jobOfWeek; })
      .concat(lj.filter(function (j) { return !j.jobOfWeek && j.category === 'marketing'; }).slice(0, 2))
      .concat(lj.filter(function (j) { return j.category === 'communications'; }).slice(0, 2));
    set('top-jobs', top.map(function (j) { return card(j, { showCategory: true }); }).join(''));
    set('latest-issue',
      '<a class="issue-link" href="/issues/' + L.date + '"><span class="issue-date">' + fmtDate(L.date) + '</span>' +
      '<strong>' + esc(L.title) + '</strong><span class="more">Read this issue →</span></a>');
  }

  /* Jobs */
  if (page === 'jobs') {
    var open = D.JOBS.filter(isOpen).sort(function (a, b) {
      var order = { marketing: 0, communications: 1, also: 2 };
      return (b.issue - a.issue) || (order[a.category] - order[b.category]);
    });
    var fields = open.map(function (j) { return j.field; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();
    var fSel = document.getElementById('f-field');
    fields.forEach(function (f) { var o = document.createElement('option'); o.value = f; o.textContent = f; fSel.appendChild(o); });

    function render() {
      var c = document.getElementById('f-cat').value, f = fSel.value, noUk = document.getElementById('f-uk').checked;
      var list = open.filter(function (j) {
        return (!c || j.category === c) && (!f || j.field === f) && (!noUk || !j.ukPermit);
      });
      set('job-count', list.length + (list.length === 1 ? ' open job' : ' open jobs'));
      set('job-list', list.length ? list.map(function (j) { return card(j, { showCategory: true }); }).join('')
        : '<p class="empty">No jobs found. Change the filters.</p>');
    }
    ['f-cat', 'f-field', 'f-uk'].forEach(function (id) { document.getElementById(id).addEventListener('change', render); });
    render();
  }

  /* Issues archive */
  if (page === 'issues') {
    set('issue-list', D.ISSUES.map(function (i) {
      var count = jobsOf(i.n).filter(function (j) { return j.category !== 'also'; }).length;
      return '<a class="issue-link" href="/issues/' + i.date + '"><span class="issue-date">' + fmtDate(i.date) + ' · ' + count + ' jobs</span>' +
        '<strong>' + esc(i.title) + '</strong><span class="more">Read this issue →</span></a>';
    }).join(''));
  }

  /* Single issue */
  if (page === 'issue') {
    var m = location.pathname.match(/issues\/(\d{4}-\d{2}-\d{2})/) || location.search.match(/d=(\d{4}-\d{2}-\d{2})/);
    var d = m ? m[1] : (latest() && latest().date);
    /* A direct link works from the send date (Tuesday). Until its web date (Friday)
       the issue is not listed anywhere and asks search engines not to index it. */
    var I = RAW.ISSUES.filter(function (i) { return i.date === d && i.date <= todayStr(); })[0];
    if (!I) { set('issue', '<p>This issue does not exist. <a href="/issues">Back to all issues</a></p>'); return; }
    if (webFrom(I) > todayStr()) {
      var robots = document.createElement('meta');
      robots.name = 'robots'; robots.content = 'noindex';
      document.head.appendChild(robots);
    }
    document.title = I.title + ' · Remote Impact Jobs';
    var n = I.n, J = RAW.JOBS.filter(function (j) { return j.issue === n; });
    var w = J.filter(function (j) { return j.jobOfWeek; });
    var mk = J.filter(function (j) { return j.category === 'marketing' && !j.jobOfWeek; });
    var cm = J.filter(function (j) { return j.category === 'communications' && !j.jobOfWeek; });
    var al = J.filter(function (j) { return j.category === 'also'; });
    var line = '<img class="divider" src="/assets/dashed-line.png" alt="" aria-hidden="true">';
    set('issue-head', '<p class="eyebrow">Weekly issue</p><h1 class="issue-title">' + esc(I.title) + '</h1><p class="issue-date">' + fmtDate(I.date) + '</p>');
    set('issue',
      I.intro +
      w.map(jotw).join('') +
      (mk.length ? '<h2 id="marketing">Marketing</h2>' + mk.map(function (j) { return card(j); }).join('') : '') +
      (cm.length ? line + '<h2 id="communications">Communications</h2>' + cm.map(function (j) { return card(j); }).join('') : '') +
      (I.practice ? line + '<h2>' + esc(I.practice.title) + '</h2>' + I.practice.html : '') +
      (al.length ? '<h2>' + esc(I.alsoTitle || 'Also worth a look') + '</h2><ul class="hybrid">' + al.map(alsoItem).join('') + '</ul>' : '') +
      document.getElementById('nectar-tpl').innerHTML +
      (I.closing || '') +
      '<img class="signoff" src="/assets/signoff.png" alt="Hummingbird flying away with a letter" width="150"><p>Stephanie</p>');
  }
})();
