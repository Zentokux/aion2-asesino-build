// Aion 2 Global S1 — galería de mascotas (motor común). Pinta window.PETS (mascotas-datos.js) en <div id="petGallery">.
// Atributos opcionales del contenedor: data-destacar="clave1,clave2" (marca las recomendadas) y data-familia="Cogni" (pestaña inicial).
(function () {
  const css = `
.pg-tabs{display:flex;flex-wrap:wrap;gap:6px;margin:0.6rem 0}
.pg-tab{background:var(--bg-3);border:1px solid var(--border);color:var(--text-dim);border-radius:8px;padding:6px 12px;font:inherit;font-size:0.85rem;cursor:pointer}
.pg-tab.active{border-color:var(--accent);color:var(--accent);background:rgba(212,175,55,0.1)}
.pg-tab b{font-weight:700}
.pg-head{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin:0.4rem 0 0.6rem}
.pg-effect{font-size:0.85rem;color:var(--text-dim)}
.pg-effect strong{color:var(--text)}
.pg-search{background:var(--bg-3);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:6px 10px;font:inherit;font-size:0.85rem;min-width:220px}
.pg-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px}
.pg-card{display:flex;gap:10px;align-items:center;padding:8px;border-radius:10px;background:var(--bg-3);border:1px solid var(--border)}
.pg-card.is-top{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent) inset}
.pg-card img{width:64px;height:64px;border-radius:50%;flex:none;background:#0b0d12;border:2px solid var(--border);object-fit:cover}
.pg-card.is-top img{border-color:var(--accent)}
.pg-info{min-width:0;line-height:1.3}
.pg-name{font-weight:600;font-size:0.88rem;color:var(--accent)}
.pg-src{font-size:0.76rem;color:var(--text-dim)}
.pg-lv{display:inline-block;font:700 0.68rem monospace;padding:0 5px;border-radius:5px;background:var(--bg-2);border:1px solid var(--border);color:var(--text);margin-right:3px}
.pg-badge{display:inline-block;font-size:0.65rem;font-weight:700;color:#111;background:var(--accent);border-radius:5px;padding:0 5px;margin-left:4px;vertical-align:middle}
.pg-count{font-size:0.8rem;color:var(--text-dim);margin-top:0.5rem}
`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  const FAMILIAS = [
    { g: 'Cogni', efecto: 'Puntos de Vida +30, Crítico +2, Might +1' },
    { g: 'Natura', efecto: 'Stamina +9, Resistencia Crítica +2, Precision +1' },
    { g: 'Fera', efecto: 'Velocidad de montura en tierra +3, Precisión +2, Dexterity +1' },
    { g: 'Varian', efecto: '−0,3 % de coste de aguante al esprintar en montura, Evasión +2, Constitution +1' },
    { g: 'Special', label: 'Especial', efecto: 'Sin bono de familia: se compran o salen de cofres' },
  ];
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

  function build() {
    const box = document.getElementById('petGallery');
    if (!box || !window.PETS) return;
    const top = new Set((box.dataset.destacar || '').split(',').map(s => s.trim()).filter(Boolean));
    let fam = box.dataset.familia || 'Cogni', q = '';

    box.innerHTML = `<div class="pg-tabs">${FAMILIAS.map(f => `<button type="button" class="pg-tab" data-g="${f.g}">${f.label || f.g} <b>${PETS.filter(p => p.g === f.g).length}</b></button>`).join('')}</div>
      <div class="pg-head"><div class="pg-effect"></div><input type="search" class="pg-search" placeholder="Buscar mascota o monstruo…" aria-label="Buscar mascota"></div>
      <div class="pg-grid"></div><div class="pg-count"></div>`;

    function paint() {
      const f = FAMILIAS.find(x => x.g === fam);
      box.querySelectorAll('.pg-tab').forEach(t => t.classList.toggle('active', t.dataset.g === fam));
      box.querySelector('.pg-effect').innerHTML = `<strong>Efecto de colección de ${f.label || f.g}</strong> (cada mascota a nivel 3): ${esc(f.efecto)}`;
      const ql = q.toLowerCase();
      const list = PETS.filter(p => p.g === fam && (!ql || (p.n + ' ' + (p.m || '') + ' ' + (p.z || '')).toLowerCase().includes(ql)))
        .sort((a, b) => (top.has(b.k) - top.has(a.k)) || ((a.lv || 999) - (b.lv || 999)) || a.n.localeCompare(b.n));
      box.querySelector('.pg-grid').innerHTML = list.map(p => {
        const src = p.lv
          ? `<span class="pg-lv">Nv. ${p.lv}</span>Almas: ${esc(p.m)}${p.z ? ' · ' + esc(p.z) : ''}${p.mas ? ` <small>(+${p.mas} monstruo${p.mas > 1 ? 's' : ''} más)</small>` : ''}`
          : esc(p.f || '');
        return `<div class="pg-card${top.has(p.k) ? ' is-top' : ''}"><img src="icons/pets/${p.k}.webp" width="64" height="64" alt="${esc(p.n)}" loading="lazy">
          <div class="pg-info"><div class="pg-name">${esc(p.n)}${top.has(p.k) ? '<span class="pg-badge">Recomendada</span>' : ''}</div><div class="pg-src">${src}</div></div></div>`;
      }).join('');
      box.querySelector('.pg-count').textContent = list.length + ' mascota' + (list.length === 1 ? '' : 's') + (q ? ' encontradas' : '') + ' · ordenadas por el nivel del monstruo que suelta sus almas (las más fáciles primero).';
    }
    box.querySelectorAll('.pg-tab').forEach(t => t.addEventListener('click', () => { fam = t.dataset.g; paint(); }));
    box.querySelector('.pg-search').addEventListener('input', e => {
      q = e.target.value.trim();
      if (q) { const hit = PETS.find(p => (p.n + ' ' + (p.m || '')).toLowerCase().includes(q.toLowerCase())); if (hit && !PETS.some(p => p.g === fam && (p.n + ' ' + (p.m || '')).toLowerCase().includes(q.toLowerCase()))) fam = hit.g; }
      paint();
    });
    paint();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
