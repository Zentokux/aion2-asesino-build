// Aion 2 Global S1 — Macros y barra de habilidades en gráfico (motor común), al estilo de couga54:
// barra de ejemplo como en el juego, líneas apiladas, pasos de la macro del juego y "lo que pulsas".
// Los datos de cada clase van en macros-<clase>.js (window.MACRO_SETS) y se pintan en <div class="mset" data-set="...">.
// Los nombres salen de SKILLS / STIGMAS (planner-<clase>.js) y los iconos de renderIcon (icons.js).

(function () {
  const css = `
.mset{margin:0.5rem 0 1.5rem}
.mset h4{margin:1.1rem 0 0.4rem;color:var(--accent);font-size:0.98rem}
.hbar{margin:14px 0 18px;padding:14px 14px 10px;border-radius:10px;background:var(--bg-2);border:1px solid var(--border)}
.hbar-title{font-weight:700;font-size:0.92rem;margin-bottom:10px}
.hbar-scroll{overflow-x:auto;padding-bottom:4px}
.hbar-grid{display:grid;gap:5px;min-width:430px}
.hbar-col{display:grid;grid-template-rows:repeat(4,auto) auto;gap:5px;min-width:0}
.hbar-slot{display:block;aspect-ratio:1;max-width:58px;width:100%;justify-self:center;border-radius:7px;background:var(--bg-3);border:1px solid var(--border);overflow:hidden}
.hbar-slot img,.hbar-slot .aion-icon{display:block;width:100%!important;height:100%!important;object-fit:cover;border-radius:0}
.hbar-slot.is-empty{opacity:0.45}
.hbar-col.is-macro .hbar-slot:not(.is-empty){border-color:var(--accent);box-shadow:0 0 0 1px var(--accent) inset}
.hbar-key{justify-self:center;margin-top:2px;min-width:28px;padding:1px 6px;border-radius:5px;border:1px solid var(--border);background:var(--bg-3);font:700 0.66rem monospace;text-align:center;color:var(--text-dim);white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis}
.hbar-col.is-macro .hbar-key{color:var(--accent);border-color:var(--accent)}
.hbar-note{margin:8px 0 0;font-size:0.78rem;color:var(--text-dim)}
.hotlines{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr));gap:12px;margin:10px 0 16px}
.hotline{padding:14px;border-radius:10px;background:var(--bg-2);border:1px solid var(--border)}
.hotline-head{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.hotline-head .key,.macroseq .key{display:inline-block;min-width:30px;padding:2px 7px;border-radius:6px;border:1px solid var(--accent);color:var(--accent);font:700 0.72rem monospace;text-align:center}
.hotline-name{font-weight:700;font-size:0.92rem}
.hotline-skills{list-style:none;margin:0;padding:0;display:grid;gap:6px}
.hotline-skills li{display:flex;align-items:center;gap:10px;padding:5px 8px;border-radius:9px;background:var(--bg-3);border:1px solid var(--border)}
.hotline-skills li.is-first{border-color:var(--accent);background:linear-gradient(90deg,rgba(212,175,55,0.16),transparent 70%),var(--bg-3)}
.hotline-skills img,.hotline-skills .aion-icon{width:32px!important;height:32px!important;border-radius:7px;flex:none}
.hl-n{flex:none;width:20px;text-align:center;font:700 0.72rem monospace;color:var(--accent)}
.hl-name{font-size:0.88rem;font-weight:600}
.hotline-order{margin:8px 0 0;font:500 0.7rem monospace;color:var(--text-dim)}
.hotline-note{margin:8px 0 0;font-size:0.84rem;color:var(--text-dim)}
.macroseq{list-style:none;margin:10px 0 14px;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.macroseq li{display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:10px;background:var(--bg-2);border:1px solid var(--border)}
.macroseq img,.macroseq .aion-icon{width:28px!important;height:28px!important;border-radius:6px}
.ms-n{font:700 0.75rem monospace;color:var(--accent)}
.ms-d{font:500 0.72rem monospace;color:var(--text-dim)}
.presslist{list-style:none;margin:10px 0 14px;padding:0;display:grid;gap:10px}
.presslist li{display:grid;grid-template-columns:130px minmax(0,1fr);gap:4px 12px;align-items:baseline}
.press-how{font:700 0.68rem monospace;letter-spacing:0.08em;text-transform:uppercase;color:var(--accent)}
.press-what{line-height:1.7}
.ri{white-space:nowrap}
.ri img,.ri .aion-icon{display:inline-block!important;width:22px!important;height:22px!important;vertical-align:middle;border-radius:5px;margin:0 4px 0 1px}
@media (max-width:640px){.presslist li{grid-template-columns:1fr}}
`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const info = k => (typeof SKILLS !== 'undefined' && SKILLS[k]) || (typeof STIGMAS !== 'undefined' && STIGMAS[k]) || null;
  const name = k => (info(k) || { name: k }).name;
  const icon = (k, sz) => `<span title="${esc(name(k))}">${renderIcon(k, sz)}</span>`;
  // [[clave]] dentro de un texto → icono + nombre en negrita
  const rich = t => String(t).replace(/\[\[([\w]+)\]\]/g, (m, k) => `<span class="ri">${renderIcon(k, 22)}<strong>${esc(name(k))}</strong></span>`);

  function hotbar(h) {
    const gaps = h.gaps || [];
    const tmpl = [];
    let cells = '';
    h.cols.forEach((c, i) => {
      if (gaps.includes(i)) { tmpl.push('.35fr'); cells += '<span aria-hidden="true"></span>'; }
      tmpl.push('minmax(30px,1fr)');
      const slots = c.slots.map(k => k
        ? `<span class="hbar-slot" title="${esc(name(k))}">${renderIcon(k, 56)}</span>`
        : '<span class="hbar-slot is-empty" aria-hidden="true"></span>').join('');
      cells += `<div class="hbar-col${c.macro ? ' is-macro' : ''}">${slots}<span class="hbar-key" title="${esc(c.key)}">${esc(c.key)}</span></div>`;
    });
    return `<figure class="hbar"><figcaption class="hbar-title">${esc(h.title || 'Barra de ejemplo')}</figcaption>
      <div class="hbar-scroll"><div class="hbar-grid" style="grid-template-columns:${tmpl.join(' ')}">${cells}</div></div>
      <p class="hbar-note">${h.note || 'Como en el juego: una línea apilada lanza primero la habilidad de abajo; las líneas doradas son las que pulsa la macro. Pasa el ratón por un icono para ver la habilidad.'}</p></figure>`;
  }

  function line(l) {
    const n = l.skills.length;
    const items = l.skills.map((k, i) => `<li class="${i === n - 1 ? 'is-first' : ''}"><span class="hl-n">${n - i}</span>${icon(k, 32)}<span class="hl-name">${esc(name(k))}</span></li>`).join('');
    return `<div class="hotline"><div class="hotline-head"><span class="key">${esc(l.key)}</span><span class="hotline-name">${esc(l.name)}</span></div>
      <ol class="hotline-skills">${items}</ol>
      <p class="hotline-order">Orden del juego, de arriba abajo. 1 = mayor prioridad: la casilla de abajo.</p>
      ${l.note ? `<p class="hotline-note">${rich(l.note)}</p>` : ''}</div>`;
  }

  function macro(m) {
    const steps = m.steps.map((s, i) => `<li><span class="ms-n">${i + 1}</span>${s.icon ? icon(s.icon, 28) : ''}<span>${esc(s.label)}</span>${s.key ? `<span class="key">${esc(s.key)}</span>` : ''}<span class="ms-d">${esc(s.delay || '10 ms')}</span></li>`).join('');
    return `${m.intro ? `<p>${rich(m.intro)}</p>` : ''}<ol class="macroseq">${steps}</ol>${m.note ? `<p class="hotline-note">${rich(m.note)}</p>` : ''}`;
  }

  function press(p) {
    return '<ul class="presslist">' + p.map(([how, what]) => `<li><span class="press-how">${esc(how)}</span><span class="press-what">${rich(what)}</span></li>`).join('') + '</ul>';
  }

  function render(set) {
    let h = '';
    if (set.intro) h += `<p>${rich(set.intro)}</p>`;
    if (set.hotbar) h += hotbar(set.hotbar);
    if (set.lines) h += `<h4>${esc(set.linesTitle || '1. Líneas de la barra')}</h4>` + `<div class="hotlines">${set.lines.map(line).join('')}</div>`;
    if (set.macro) h += `<h4>${esc(set.macroTitle || '2. Macro del juego')}</h4>` + macro(set.macro);
    if (set.press) h += `<h4>${esc(set.pressTitle || '3. Lo que pulsas de verdad')}</h4>` + press(set.press);
    if (set.outro) h += `<div class="callout ${set.outroClass || 'info'}">${rich(set.outro)}</div>`;
    return h;
  }

  function buildMacros() {
    if (!window.MACRO_SETS) return;
    document.querySelectorAll('.mset[data-set]').forEach(el => {
      const set = window.MACRO_SETS[el.dataset.set];
      el.innerHTML = set ? render(set) : '';
    });
  }
  window.renderRich = rich;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildMacros);
  else buildMacros();
})();
