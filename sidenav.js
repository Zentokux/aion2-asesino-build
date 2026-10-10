// Menú lateral fijo a la izquierda (las tres clases): acceso rápido a dónde poner puntos y a las
// secciones principales; marca en cuál estás. En pantallas muy estrechas pasa a una barra abajo.
(function () {
  var ITEMS = [
    ['progression', 'Puntos de habilidad', '📈'],
    ['stigmas', 'Esquirlas de estigma', '🔷'],
    ['daevanion', 'Puntos Daevanion', '🌌'],
    ['comprension', 'Comprensión de raza', '🐾'],
    ['stats', 'Stats y equipo', '🛡️'],
    ['rotations', 'Rotaciones', '🔁']
  ];
  var css = '' +
    '.sidenav{position:fixed;left:12px;top:50%;transform:translateY(-50%);z-index:150;width:190px;' +
    'background:rgba(20,24,34,.96);border:1px solid var(--accent);border-radius:12px;padding:10px 8px;' +
    'max-height:86vh;overflow-y:auto;box-shadow:0 8px 28px rgba(0,0,0,.55);backdrop-filter:blur(8px)}' +
    '.sidenav b{display:block;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:var(--accent);padding:2px 10px 8px}' +
    '.sidenav a{display:flex;gap:9px;align-items:center;color:var(--text);text-decoration:none;padding:9px 10px;' +
    'border-radius:8px;font-size:.9rem;border-left:3px solid transparent;transition:all .15s;line-height:1.25}' +
    '.sidenav a:hover{color:var(--accent);background:var(--bg-3)}' +
    '.sidenav a.on{color:var(--accent);background:var(--bg-3);border-left-color:var(--accent);font-weight:600}' +
    '.sidenav hr{border:0;border-top:1px solid var(--border);margin:6px 4px}' +
    '.sidenav .up{color:var(--text-dim);font-size:.82rem}' +
    '@media (min-width:701px){body{padding-left:214px}}' +
    '@media (max-width:700px){.sidenav{left:0;right:0;top:auto;bottom:0;transform:none;width:auto;max-height:none;' +
    'display:flex;overflow-x:auto;overflow-y:hidden;border-radius:0;border-width:2px 0 0;padding:6px}' +
    '.sidenav b,.sidenav hr{display:none}.sidenav a{white-space:nowrap;border-left:0;border-bottom:3px solid transparent}' +
    '.sidenav a.on{border-left-color:transparent;border-bottom-color:var(--accent)}body{padding-bottom:60px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var nav = document.createElement('aside'); nav.className = 'sidenav'; nav.setAttribute('aria-label', 'Acceso rápido');
  nav.innerHTML = '<b>Dónde poner puntos</b>' + ITEMS.filter(function (it) { return document.getElementById(it[0]); })
    .map(function (it, i) {
      return (i === 4 ? '<hr>' : '') + '<a href="#' + it[0] + '" data-id="' + it[0] + '"><span>' + it[2] + '</span>' + it[1] + '</a>';
    }).join('') + '<hr><a href="#top" class="up" data-id="">⬆ Arriba</a>';
  document.body.appendChild(nav);

  var links = [].slice.call(nav.querySelectorAll('a[data-id]'));
  function top(el) { return el.getBoundingClientRect().top + window.scrollY; }
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var el = a.dataset.id && document.getElementById(a.dataset.id);
      window.scrollTo({ top: el ? top(el) - 70 : 0, behavior: 'smooth' });
      if (el) history.replaceState(null, '', '#' + a.dataset.id);
    });
  });
  // Marca la sección visible: la última cuyo inicio ya pasó bajo la barra superior.
  // Comprensión está dentro de Mascotas: se marca desde su título hasta el final de esa sección.
  function marcar() {
    var y = window.scrollY + 120, act = null;
    links.forEach(function (a) {
      var el = a.dataset.id && document.getElementById(a.dataset.id); if (!el) return;
      var fin = (el.closest('section') || el); fin = top(fin) + fin.offsetHeight;
      if (top(el) <= y && y < fin) act = a;
    });
    links.forEach(function (a) { a.classList.toggle('on', a === act); });
  }
  window.addEventListener('scroll', marcar, { passive: true });
  window.addEventListener('resize', marcar);
  marcar();
})();
