// Aion 2 Global S1 — Tableros Daevanion (motor común a todas las clases, v8)
// Dibuja los tableros de window.DV_CLASS (daevanion-<clase>.js) y calcula el orden de clics en dvOrder().
// Cada clase define: data (tableros), icons (id de habilidad → ruta del icono), notas (por id de tablero)
// y prio(tablero, nodo) → número (menor = antes).
const DVC = window.DV_CLASS;
const DAEVANION = DVC.data, DV_ICON = DVC.icons, DV_NOTA = DVC.notas || {}, dvPrio = DVC.prio;

const DV_TIPO = {
  S: 'Inicio', G: 'Atributo · 1 pt', A: 'Habilidad activa +1 · 3 pts',
  P: 'Habilidad pasiva +1 · 2 pts', N: 'Nodo especial · 4 pts', M: 'Atributo mayor · 2-3 pts',
};

// Orden de clics: desde lo ya abierto, ir al nodo de la ruta con mejor prioridad por el camino más barato.
function dvOrder(board) {
  const N = board.n;
  const key = (r, c) => r + ',' + c;
  const at = {};
  N.forEach((n, i) => { at[key(n[0], n[1])] = i; });
  const adj = N.map(() => []);
  board.l.forEach(([x1, y1, x2, y2, on]) => {
    if (!on) return;
    const a = at[key(y1, x1)], b = at[key(y2, x2)];
    if (a === undefined || b === undefined) return;
    adj[a].push(b); adj[b].push(a);
  });
  const start = N.findIndex(n => n[2] === 'S');
  const owned = new Set([start]);
  const order = [];
  let left = N.map((n, i) => i).filter(i => N[i][4] && i !== start);
  while (left.length) {
    const dist = {}, prev = {}, done = new Set();
    owned.forEach(i => { dist[i] = 0; prev[i] = -1; });
    for (;;) {
      let best = -1, bd = Infinity;
      for (const k in dist) if (!done.has(+k) && dist[k] < bd) { bd = dist[k]; best = +k; }
      if (best < 0) break;
      done.add(best);
      adj[best].forEach(nb => {
        if (owned.has(nb)) return;
        const nd = bd + N[nb][3];
        if (dist[nb] === undefined || nd < dist[nb]) { dist[nb] = nd; prev[nb] = best; }
      });
    }
    const reach = left.filter(i => dist[i] !== undefined);
    if (!reach.length) break;
    reach.sort((a, b) => (dvPrio(board, N[a]) * 1000 + dist[a]) - (dvPrio(board, N[b]) * 1000 + dist[b]));
    const path = [];
    for (let x = reach[0]; !owned.has(x); x = prev[x]) path.unshift(x);
    path.forEach(x => { owned.add(x); order.push(x); });
    left = left.filter(i => !owned.has(i));
  }
  return order;
}

function dvGet(k, def) { try { const v = localStorage.getItem(k); return v === null ? def : v; } catch (e) { return def; } }
function dvSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function dvEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

function dvShape(n, extraClass) {
  const [r, c, t, , on, label, sk] = n;
  const x = c + 0.5, y = r + 0.5;
  const cls = 'dv-node t' + t + (on ? ' on' : ' off') + (extraClass || '');
  if (t === 'S') return `<g class="${cls}"><circle cx="${x}" cy="${y}" r="0.5" fill="url(#dvGlow)"/><circle cx="${x}" cy="${y}" r="0.34" class="dv-start"/></g>`;
  if (t === 'G') return `<g class="${cls}"><circle cx="${x}" cy="${y}" r="0.19" class="dv-stat"/></g>`;
  if (t === 'M') return `<g class="${cls}"><circle cx="${x}" cy="${y}" r="0.26" class="dv-stat"/><circle cx="${x}" cy="${y}" r="0.12" class="dv-stat-core"/></g>`;
  if (t === 'N') return `<g class="${cls}"><rect x="${x - 0.25}" y="${y - 0.25}" width="0.5" height="0.5" rx="0.06" transform="rotate(45 ${x} ${y})" class="dv-special"/></g>`;
  const img = DV_ICON[sk] ? `<image href="${DV_ICON[sk]}" x="${x - 0.31}" y="${y - 0.31}" width="0.62" height="0.62" preserveAspectRatio="xMidYMid slice"/>` : '';
  return `<g class="${cls}"><rect x="${x - 0.34}" y="${y - 0.34}" width="0.68" height="0.68" rx="0.08" class="dv-skillbg"/>${img}<rect x="${x - 0.34}" y="${y - 0.34}" width="0.68" height="0.68" rx="0.08" class="dv-skillframe"/></g>`;
}

function dvBadge(n, step) {
  const [r, c, t] = n;
  const big = t !== 'G';
  const x = c + 0.5 + (big ? 0.3 : 0), y = r + 0.5 - (big ? 0.3 : 0);
  return `<g class="dv-badge" data-step="${step}"><circle cx="${x}" cy="${y}" r="${big ? 0.17 : 0.19}"/><text x="${x}" y="${y}" dy="0.065" font-size="${step > 9 ? 0.17 : 0.2}">${step}</text></g>`;
}

function dvBoardSVG(board, order) {
  const { w, h, n, l } = board;
  const stepOf = {};
  order.forEach((idx, s) => { stepOf[idx] = s + 1; });
  let s = `<svg class="dv-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Tablero ${board.nombre}">`;
  s += `<defs><radialGradient id="dvGlow"><stop offset="0" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="1" stop-color="#e8b65a" stop-opacity="0"/></radialGradient>
        <radialGradient id="dvBg"><stop offset="0" stop-color="#2a2a22"/><stop offset="0.55" stop-color="#11141b"/><stop offset="1" stop-color="#0a0c11"/></radialGradient></defs>`;
  s += `<rect width="${w}" height="${h}" fill="url(#dvBg)"/>`;
  for (let k = 1; k <= Math.floor(w / 2); k++) s += `<circle cx="${w / 2}" cy="${h / 2}" r="${k}" class="dv-ring"/>`;
  l.filter(x => !x[4]).forEach(([x1, y1, x2, y2]) => { s += `<line x1="${x1 + 0.5}" y1="${y1 + 0.5}" x2="${x2 + 0.5}" y2="${y2 + 0.5}" class="dv-line"/>`; });
  l.filter(x => x[4]).forEach(([x1, y1, x2, y2]) => { s += `<line x1="${x1 + 0.5}" y1="${y1 + 0.5}" x2="${x2 + 0.5}" y2="${y2 + 0.5}" class="dv-line on"/>`; });
  n.forEach((node, i) => { s += `<g class="dv-hit" data-i="${i}">${dvShape(node)}</g>`; });
  order.forEach((idx, k) => { s += `<g class="dv-hit" data-i="${idx}">${dvBadge(n[idx], k + 1)}</g>`; });
  s += `<circle class="dv-next-ring" r="0.45" cx="-5" cy="-5"/></svg>`;
  return s;
}

// Suma de lo que da la ruta completa: habilidades +N y atributos totales
function dvResumen(board, order) {
  const skills = {}, stats = {};
  order.forEach(i => {
    const [, , t, , , label, sk] = board.n[i];
    if (t === 'A' || t === 'P') {
      const name = label.replace(/ \+\d+$/, '');
      skills[name] = skills[name] || { n: 0, sk, t };
      skills[name].n++;
    } else {
      const m = label.match(/^(.*) \+([\d,]+)(\s?%)?$/);
      if (!m) return;
      const name = m[1], pct = !!m[3];
      stats[name] = stats[name] || { v: 0, pct };
      stats[name].v += parseFloat(m[2].replace(',', '.'));
    }
  });
  const fmt = v => (Math.round(v * 10) / 10).toString().replace('.', ',');
  const sk = Object.entries(skills).sort((a, b) => b[1].n - a[1].n || a[0].localeCompare(b[0]))
    .map(([name, o]) => `<li class="dv-chip ${o.t === 'P' ? 'pas' : 'act'}">${DV_ICON[o.sk] ? `<img src="${DV_ICON[o.sk]}" alt="">` : ''}${dvEsc(name)} <b>+${o.n}</b></li>`).join('');
  const st = Object.entries(stats).sort((a, b) => (b[1].pct - a[1].pct) || a[0].localeCompare(b[0]))
    .map(([name, o]) => `<li class="dv-chip ${o.pct ? 'esp' : ''}">${dvEsc(name)} <b>+${fmt(o.v)}${o.pct ? ' %' : ''}</b></li>`).join('');
  return `<div class="dv-sum"><h5>Habilidades que sube</h5><ul>${sk}</ul><h5>Atributos que suma</h5><ul>${st}</ul></div>`;
}

function buildAllBoards() {
  const container = document.getElementById('boardsContainer');
  if (!container) return;
  const boards = DAEVANION.map(b => {
    const order = dvOrder(b);
    const cost = order.reduce((s, i) => s + b.n[i][3], 0);
    return { ...b, order, cost };
  });
  const total = boards.reduce((s, b) => s + b.cost, 0);

  container.innerHTML = `
    <div class="dv">
      <div class="dv-tabs" role="tablist">
        ${boards.map((b, i) => `<button type="button" role="tab" class="dv-tab${i === 0 ? ' active' : ''}" data-b="${i}">
          <b>${b.nombre}</b><span>Nv. ${b.nivel} · <i>${b.cost} pts</i></span></button>`).join('')}
      </div>
      <div class="dv-body">
        <div class="dv-stage"></div>
        <div class="dv-side">
          <div class="dv-info" aria-live="polite"></div>
          <div class="dv-ctrl">
            <div class="dv-ctrl-row">
              <button type="button" class="dv-btn" data-d="-1" aria-label="Paso anterior">←</button>
              <div class="dv-count"></div>
              <button type="button" class="dv-btn" data-d="1" aria-label="Paso siguiente">→</button>
            </div>
            <input type="range" class="dv-range" min="0" value="0" aria-label="Pasos hechos">
            <p class="dv-hint">Mueve la barra hasta los puntos que ya gastaste: los pasos hechos se ponen en verde y el siguiente clic parpadea en el tablero.</p>
          </div>
        </div>
      </div>
      <div class="dv-foot">
        <span><b>${total}</b> puntos en total (ruta JcE de couga54)</span>
        <span class="dv-legend">
          <span><i class="k k-stat"></i>atributo · 1</span>
          <span><i class="k k-pas"></i>pasiva · 2</span>
          <span><i class="k k-act"></i>activa · 3</span>
          <span><i class="k k-esp"></i>especial · 4</span>
          <span><i class="k k-ruta"></i>ruta</span>
          <span><i class="k k-num">7</i>orden de clic</span>
        </span>
      </div>
      <div class="dv-note"></div>
      <details class="dv-list-wrap" open><summary>Orden de clics, paso a paso</summary><ol class="dv-list"></ol></details>
      <div class="dv-sumwrap"></div>
    </div>`;

  const $ = sel => container.querySelector(sel);
  let cur = 0, done = 0;

  function info(i) {
    const b = boards[cur];
    const n = b.n[i];
    const k = b.order.indexOf(i);
    const where = n[2] === 'S' ? 'Punto de partida, gratis.'
      : k >= 0 ? `Paso <b>${k + 1}</b> de ${b.order.length} · llevas <b>${b.order.slice(0, k + 1).reduce((s, j) => s + b.n[j][3], 0)}</b> pts al tomarlo`
      : 'Fuera de la ruta: no lo tomes.';
    $('.dv-info').innerHTML = `<div class="dv-info-t">${dvEsc(n[5])}</div><div class="dv-info-m">${DV_TIPO[n[2]]}</div><div class="dv-info-w">${where}</div>`;
  }

  function nextInfo() {
    const b = boards[cur];
    if (!b.order.length) { $('.dv-info').innerHTML = `<div class="dv-info-t">Sin ruta JcE</div><div class="dv-info-w">${DV_NOTA[b.id]}</div>`; return; }
    if (done >= b.order.length) { $('.dv-info').innerHTML = `<div class="dv-info-t">✓ Tablero terminado</div><div class="dv-info-w">Tienes los ${b.cost} pts de la ruta.</div>`; return; }
    const i = b.order[done], n = b.n[i];
    $('.dv-info').innerHTML = `<div class="dv-info-k">Siguiente clic · paso ${done + 1}</div><div class="dv-info-t">${dvEsc(n[5])}</div><div class="dv-info-m">${DV_TIPO[n[2]]}</div>`;
  }

  function paint() {
    const b = boards[cur];
    const spent = b.order.slice(0, done).reduce((s, i) => s + b.n[i][3], 0);
    $('.dv-count').innerHTML = b.order.length
      ? `Paso <b>${done}</b> / ${b.order.length}<small>${spent} / ${b.cost} pts</small>` : `<small>0 pts en JcE</small>`;
    $('.dv-range').max = b.order.length;
    $('.dv-range').value = done;
    container.querySelectorAll('.dv-btn')[0].disabled = done <= 0;
    container.querySelectorAll('.dv-btn')[1].disabled = done >= b.order.length;
    const svg = $('.dv-svg');
    svg.querySelectorAll('.dv-badge').forEach(g => {
      const st = +g.dataset.step;
      g.classList.toggle('done', st <= done);
      g.classList.toggle('next', st === done + 1);
    });
    const ring = svg.querySelector('.dv-next-ring');
    if (done < b.order.length) {
      const n = b.n[b.order[done]];
      ring.setAttribute('cx', n[1] + 0.5); ring.setAttribute('cy', n[0] + 0.5);
      ring.style.display = '';
    } else ring.style.display = 'none';
    container.querySelectorAll('.dv-list li').forEach((li, k) => {
      li.classList.toggle('done', k < done);
      li.classList.toggle('next', k === done);
    });
    nextInfo();
    dvSet('aion2_dv8_' + b.id, String(done));
  }

  function show(bi) {
    cur = bi;
    const b = boards[bi];
    container.querySelectorAll('.dv-tab').forEach((t, k) => { t.classList.toggle('active', k === bi); t.setAttribute('aria-selected', k === bi); });
    $('.dv-stage').innerHTML = dvBoardSVG(b, b.order);
    $('.dv-note').innerHTML = DV_NOTA[b.id] || '';
    let acc = 0;
    $('.dv-list').innerHTML = b.order.map((i, k) => {
      const n = b.n[i]; acc += n[3];
      const ico = DV_ICON[n[6]] ? `<img src="${DV_ICON[n[6]]}" alt="">` : `<i class="k ${n[2] === 'N' ? 'k-esp' : 'k-stat'}"></i>`;
      return `<li data-k="${k}" class="t${n[2]}"><span class="no">${k + 1}</span>${ico}<span class="tx">${dvEsc(n[5])}</span><span class="pt">${n[3]} · ${acc}</span></li>`;
    }).join('');
    $('.dv-list-wrap').style.display = b.order.length ? '' : 'none';
    $('.dv-ctrl').style.display = b.order.length ? '' : 'none';
    $('.dv-sumwrap').innerHTML = b.order.length ? dvResumen(b, b.order) : '';
    done = Math.min(b.order.length, Math.max(0, parseInt(dvGet('aion2_dv8_' + b.id, '0'), 10) || 0));
    paint();
  }

  container.addEventListener('click', e => {
    const tab = e.target.closest('.dv-tab');
    if (tab) { show(+tab.dataset.b); return; }
    const btn = e.target.closest('.dv-btn');
    if (btn) { done = Math.max(0, Math.min(boards[cur].order.length, done + +btn.dataset.d)); paint(); return; }
    const li = e.target.closest('.dv-list li');
    if (li) { const k = +li.dataset.k; done = (done === k + 1) ? k : k + 1; paint(); return; }
    const hit = e.target.closest('.dv-hit');
    if (hit) info(+hit.dataset.i);
  });
  container.addEventListener('mouseover', e => { const hit = e.target.closest('.dv-hit'); if (hit) info(+hit.dataset.i); });
  $('.dv-stage').addEventListener('mouseleave', nextInfo);
  $('.dv-range').addEventListener('input', e => { done = +e.target.value; paint(); });

  show(0);
}

window.buildAllBoards = buildAllBoards;
document.addEventListener('DOMContentLoaded', buildAllBoards);
