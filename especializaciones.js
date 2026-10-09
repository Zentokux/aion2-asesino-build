// Aion 2 Global S1 — Especializaciones de las habilidades activas (motor común), como el panel del juego:
// las cinco opciones de cada habilidad con su nivel requerido (las ranuras se abren con la habilidad a nivel 8, 12 y 20).
// Datos por clase en especializaciones-<clase>.js (window.SPEC_DATA); se pinta en <div id="specList">.
// Marca la elección de couga54: dorado = tomar en las dos primeras ranuras; discontinuo = tercera ranura, a nivel 20.

(function () {
  const css = `
.spec-legend{display:flex;flex-wrap:wrap;gap:6px 16px;margin:6px 0 14px;font-size:0.82rem;color:var(--text-dim)}
.spec-legend span{display:inline-flex;align-items:center;gap:6px}
.spec-legend i{display:inline-block;width:14px;height:14px;border-radius:4px;border:1px solid var(--border);background:var(--bg-3)}
.spec-legend i.on{border-color:var(--accent);background:rgba(212,175,55,0.25)}
.spec-legend i.a20{border:1px dashed var(--accent)}
.spec-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:12px;margin:10px 0 18px}
.spec-card{padding:14px;border-radius:10px;background:var(--bg-2);border:1px solid var(--border)}
.spec-head{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.spec-head img,.spec-head .aion-icon{width:40px!important;height:40px!important;border-radius:8px;flex:none}
.spec-name{font-weight:700;font-size:0.95rem}
.spec-rank{margin-left:auto;padding:1px 8px;border-radius:5px;border:1px solid var(--accent);color:var(--accent);font:700 0.72rem monospace;white-space:nowrap}
.spec-note{font-size:0.86rem;color:var(--text-dim);margin:0 0 6px}
.spec-opts{list-style:none;margin:0;padding:0;display:grid;gap:5px}
.spec-opts li{display:flex;align-items:flex-start;gap:8px;padding:6px 8px;border-radius:8px;background:var(--bg-3);border:1px solid var(--border);font-size:0.84rem;line-height:1.4;color:var(--text-dim)}
.spec-opts li.on{border-color:var(--accent);background:linear-gradient(90deg,rgba(212,175,55,0.18),transparent 75%),var(--bg-3);color:var(--text)}
.spec-opts li.a20{border:1px dashed var(--accent);color:var(--text)}
.spec-lv{flex:none;min-width:24px;height:20px;padding:0 4px;border-radius:5px;background:#3a2a1a;color:#f5d38a;font:700 0.72rem/20px monospace;text-align:center}
.spec-tag{flex:none;margin-left:auto;font:700 0.64rem monospace;letter-spacing:0.05em;color:var(--accent);white-space:nowrap}
`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

  function card(h) {
    const opts = h.o.map(o => {
      const cls = o[2] === 1 ? 'on' : o[2] === 2 ? 'a20' : '';
      const tag = o[2] === 1 ? 'ELIGE' : o[2] === 2 ? 'A 20' : '';
      return `<li class="${cls}"><span class="spec-lv">${o[0]}</span><span>${esc(o[1])}</span>${tag ? `<span class="spec-tag">${tag}</span>` : ''}</li>`;
    }).join('');
    return `<div class="spec-card"><div class="spec-head">${renderIcon(h.k, 40)}<span class="spec-name">${esc(h.n)}</span>${h.r ? `<span class="spec-rank">${esc(h.r)}</span>` : ''}</div>
      <ul class="spec-opts">${opts}</ul></div>`;
  }

  function buildSpecs() {
    const el = document.getElementById('specList');
    if (!el || !window.SPEC_DATA) return;
    el.innerHTML = `<div class="spec-legend">
        <span><i class="on"></i>Elige (couga54)</span>
        <span><i class="a20"></i>Tercera ranura, con la habilidad a 20</span>
        <span><i></i>No la usa</span>
        <span><b class="spec-lv">8</b>nivel de habilidad que pide la opción</span>
      </div><p class="spec-note">Cada habilidad tiene <strong>3 ranuras</strong>, que se abren cuando llega a nivel <strong>8, 12 y 20</strong>. En cada ranura pones una opción cuyo nivel ya alcanzaste. Las doradas son las dos que toma couga54 con la habilidad a 16; la discontinua, la que añade en la tercera ranura al llegar a 20. Si la habilidad va a 20 sin discontinua, las tres doradas son las suyas.</p><div class="spec-grid">${window.SPEC_DATA.map(card).join('')}</div>`;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildSpecs);
  else buildSpecs();
})();
