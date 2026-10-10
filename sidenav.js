// Menú lateral fijo a la izquierda (las tres clases): salta a las secciones principales y marca
// en cuál estás. En pantallas estrechas pasa a una barra abajo que se desplaza en horizontal.
(function () {
  var ITEMS = [
    ['progression', 'Progresión', '📈'],
    ['comprension', 'Comprensión de raza', '🐾'],
    ['daevanion', 'Daevanion', '🌌'],
    ['rotations', 'Rotaciones', '🔁'],
    ['stats', 'Stats y equipo', '🛡️']
  ];
  var css = '' +
    '.sidenav{position:fixed;left:12px;top:50%;transform:translateY(-50%);z-index:150;width:178px;' +
    'background:rgba(20,24,34,.94);border:1px solid var(--border);border-radius:10px;padding:8px;' +
    'max-height:80vh;overflow-y:auto;box-shadow:0 6px 24px rgba(0,0,0,.45);backdrop-filter:blur(8px)}' +
    '.sidenav b{display:block;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);padding:4px 8px 6px}' +
    '.sidenav a{display:flex;gap:8px;align-items:center;color:var(--text-dim);text-decoration:none;padding:8px 10px;' +
    'border-radius:7px;font-size:.88rem;border-left:3px solid transparent;transition:all .15s}' +
    '.sidenav a:hover{color:var(--accent);background:var(--bg-3)}' +
    '.sidenav a.on{color:var(--accent);background:var(--bg-3);border-left-color:var(--accent);font-weight:600}' +
    '@media (min-width:901px){body{padding-left:200px}}' +
    '@media (max-width:900px){.sidenav{left:0;right:0;top:auto;bottom:0;transform:none;width:auto;max-height:none;' +
    'display:flex;overflow-x:auto;overflow-y:hidden;border-radius:0;border-width:1px 0 0;padding:6px}' +
    '.sidenav b{display:none}.sidenav a{white-space:nowrap;border-left:0;border-bottom:3px solid transparent}' +
    '.sidenav a.on{border-left-color:transparent;border-bottom-color:var(--accent)}body{padding-bottom:56px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var nav = document.createElement('aside'); nav.className = 'sidenav'; nav.setAttribute('aria-label', 'Ir a sección');
  nav.innerHTML = '<b>Ir a</b>' + ITEMS.filter(function (it) { return document.getElementById(it[0]); })
    .map(function (it) { return '<a href="#' + it[0] + '" data-id="' + it[0] + '"><span>' + it[2] + '</span>' + it[1] + '</a>'; }).join('');
  document.body.appendChild(nav);

  var links = [].slice.call(nav.querySelectorAll('a'));
  function top(el) { return el.getBoundingClientRect().top + window.scrollY; }
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var el = document.getElementById(a.dataset.id);
      if (el) window.scrollTo({ top: top(el) - 70, behavior: 'smooth' });
      history.replaceState(null, '', '#' + a.dataset.id);
    });
  });
  // Marca la sección visible: la última cuyo inicio ya pasó bajo la barra superior.
  // Comprensión está dentro de Mascotas: se marca desde su título hasta el final de esa sección.
  function marcar() {
    var y = window.scrollY + 120, act = null;
    links.forEach(function (a) {
      var el = document.getElementById(a.dataset.id); if (!el) return;
      var fin = (el.closest('section') || el); fin = top(fin) + fin.offsetHeight;
      if (top(el) <= y && y < fin) act = a;
    });
    links.forEach(function (a) { a.classList.toggle('on', a === act); });
  }
  window.addEventListener('scroll', marcar, { passive: true });
  window.addEventListener('resize', marcar);
  marcar();
})();
