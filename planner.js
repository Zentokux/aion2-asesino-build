// Aion 2 Global S1 — Planificador de puntos de habilidad nivel por nivel (motor común, v2)
// El plan se CALCULA (no está escrito a mano), así que siempre respeta tres reglas del juego:
//   1. Presupuesto: solo gastas los puntos que ya ganaste (203 subiendo del 1 al 45).
//   2. Tope por nivel: al aprender una habilidad puede llegar a rango 2, y luego +1 cada 3 niveles de personaje.
//   3. Los estigmas NO usan puntos de habilidad: se suben con Esquirlas de Estigma.
// Los datos de cada clase (SKILLS, STIGMAS, PRIORITY, EXTRA, MILESTONES, PLANNER_SUMMARY, PLANNER_KEY)
// van en planner-<clase>.js, que se carga antes que este archivo.
// Opcional: PLANNER_JUMPS (hitos de la barra y botones de salto); si no está, se usan los del Asesino.
const JUMPS = (typeof PLANNER_JUMPS !== 'undefined') ? PLANNER_JUMPS : [1, 4, 14, 22, 30, 40, 45];

const SP_PER_LEVEL = {
  1:0, 2:0, 3:0, 4:1, 5:2, 6:2, 7:2, 8:3, 9:3, 10:3,
  11:4, 12:4, 13:4, 14:4, 15:4,
  16:5, 17:5, 18:5, 19:5, 20:5, 21:5, 22:5, 23:5, 24:5, 25:5,
  26:5, 27:5, 28:5, 29:5, 30:5,
  31:6, 32:6, 33:6, 34:6, 35:6, 36:6, 37:6, 38:6, 39:6, 40:6,
  41:6, 42:6, 43:6, 44:7, 45:7
};
const MAX_LVL = 45;

function skillRankCost(toRank) {
  if (toRank <= 1) return 0;
  if (toRank <= 4) return 1;
  if (toRank <= 7) return 2;
  if (toRank <= 10) return 4;
  return 0;
}
// Tope de rango por nivel de personaje
function rankCap(lv, unlock) {
  if (lv < unlock) return 0;
  return Math.min(10, 2 + Math.floor((lv - unlock) / 3));
}

function computeState() {
  const states = {};
  const ranks = {};
  Object.keys(SKILLS).forEach(id => { ranks[id] = 0; });
  let cum = 0, bank = 0;

  for (let lv = 1; lv <= MAX_LVL; lv++) {
    const spGained = SP_PER_LEVEL[lv];
    cum += spGained;
    bank += spGained;

    const unlocks = [];
    Object.entries(SKILLS).forEach(([id, s]) => {
      if (s.unlock === lv) { ranks[id] = 1; unlocks.push(id); }
    });
    Object.entries(STIGMAS).forEach(([id, s]) => { if (s.unlock === lv) unlocks.push(id); });

    const bought = {};
    let spent = 0;
    const buy = list => {
      for (let again = true; again;) {
        again = false;
        for (const [id, target] of list) {
          const lim = Math.min(target, rankCap(lv, SKILLS[id].unlock));
          if (ranks[id] >= lim) continue;
          const c = skillRankCost(ranks[id] + 1);
          if (bank < c) continue;
          bank -= c; spent += c; ranks[id]++;
          bought[id] = bought[id] || { from: ranks[id] - 1, cost: 0 };
          bought[id].cost += c;
          again = true;
          break;
        }
      }
    };
    buy(PRIORITY);
    const coreDone = PRIORITY.every(([id, t]) => ranks[id] >= Math.min(t, rankCap(MAX_LVL, SKILLS[id].unlock)));
    if (coreDone) buy(EXTRA);

    const investments = Object.entries(bought).map(([id, b]) => ({ id, skill: SKILLS[id], from: b.from, to: ranks[id], cost: b.cost }));
    const capped = PRIORITY.filter(([id, t]) => ranks[id] > 0 && ranks[id] < t && ranks[id] >= rankCap(lv, SKILLS[id].unlock)).map(([id]) => id);
    const m = MILESTONES[lv] || {};
    states[lv] = { lvl: lv, spGained, cum, bank, spent, special: m.special, note: m.note, unlocks, investments, capped, ranks: { ...ranks } };
  }
  return states;
}

const STATES = computeState();
function plGet(k, def) { try { const v = localStorage.getItem(k); return v === null ? def : v; } catch (e) { return def; } }
function plSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
let currentLvl = parseInt(plGet(PLANNER_KEY, '1'), 10);
if (!(currentLvl >= 1 && currentLvl <= MAX_LVL)) currentLvl = 1;

function renderLevel(lv) {
  const s = STATES[lv];
  if (!s) return;

  const lvlNum = document.getElementById('plvLvlNum');
  if (lvlNum) lvlNum.textContent = lv;
  const prog = document.getElementById('plvProgress');
  if (prog) prog.style.width = ((lv - 1) / (MAX_LVL - 1) * 100).toFixed(1) + '%';
  const slider = document.getElementById('plvSlider');
  if (slider && slider.value != lv) slider.value = lv;

  document.getElementById('plvSP').innerHTML = `
    <div class="pts-box"><div class="label">Ganas en este nivel</div><div class="value gained">+${s.spGained}</div></div>
    <div class="pts-box"><div class="label">Ganados en total</div><div class="value">${s.cum}</div></div>
    <div class="pts-box"><div class="label">Gastas aquí</div><div class="value">${s.spent}</div></div>
    <div class="pts-box"><div class="label">Te quedan sin gastar</div><div class="value" style="color:var(--info)">${s.bank}</div></div>
  `;

  const notesHtml = [];
  if (s.special) notesHtml.push(`<div class="plv-special">${s.special}</div>`);
  if (s.capped.length && !s.investments.length && s.spGained > 0) {
    notesHtml.push(`<div class="plv-note">💡 Todo lo importante está en su tope de este nivel: guarda los puntos para los próximos niveles.</div>`);
  }
  document.getElementById('plvNotes').innerHTML = notesHtml.join('');

  const unlocksEl = document.getElementById('plvUnlocks');
  if (s.unlocks.length) {
    unlocksEl.innerHTML = '<h4>🔓 Se desbloquea en este nivel:</h4>' + s.unlocks.map(id => {
      const u = SKILLS[id] || STIGMAS[id];
      const type = SKILLS[id] ? u.type : `Estigma · ranura ${u.slot}`;
      return `<div class="unlock-item"><span class="skill-mini">${renderIcon(id, 40)}</span><span><strong>${u.name}</strong> <em>(${type})</em><br><small>${u.note}</small></span></div>`;
    }).join('');
    unlocksEl.style.display = 'block';
  } else {
    unlocksEl.style.display = 'none';
  }

  const invEl = document.getElementById('plvInvest');
  if (s.investments.length) {
    invEl.innerHTML = '<h4>💰 Dónde poner tus puntos:</h4>' + s.investments.map(inv =>
      `<div class="invest-item">
        <span class="skill-mini">${renderIcon(inv.id, 40)}</span>
        <div class="invest-info">
          <strong>${inv.skill.name}</strong>
          <span class="invest-change">Rango <b>${inv.from}</b> → <b>${inv.to}</b>${inv.to === 8 ? ' · abre especialización' : ''}</span>
          <span class="invest-cost">−${inv.cost} pts</span>
        </div>
      </div>`
    ).join('');
  } else if (s.spGained > 0) {
    invEl.innerHTML = '<h4>💰 Puntos de este nivel:</h4><p class="empty-msg">Guárdalos: ninguna habilidad importante puede subir más todavía.</p>';
  } else {
    invEl.innerHTML = '<p class="empty-msg">En este nivel no ganas puntos de habilidad.</p>';
  }
  invEl.style.display = 'block';

  const stateEl = document.getElementById('plvState');
  const changed = new Set(s.investments.map(i => i.id));
  const skillCards = Object.entries(SKILLS).map(([id, sk]) => {
    const rank = s.ranks[id];
    const unlocked = rank > 0;
    const cap = rankCap(lv, sk.unlock);
    const pct = (rank / sk.cap * 100).toFixed(0);
    const atCap = unlocked && rank >= cap && rank < 10;
    return `<div class="state-card ${unlocked ? '' : 'locked'} ${rank >= 10 ? 'maxed' : ''} ${changed.has(id) ? 'just-changed' : ''}" title="${sk.note}">
      <div class="state-head">
        <span class="skill-mini">${renderIcon(id, 40)}</span>
        <div class="state-info">
          <div class="state-name">${sk.name}</div>
          <div class="state-type">${sk.type} · <small style="color:var(--text-dim)">${sk.nameEn}</small></div>
        </div>
        <div class="state-rank">${unlocked ? 'Rango ' + rank + '/10' + (atCap ? '<br><small style="color:var(--text-dim)">tope nv. ' + lv + '</small>' : '') : '🔒 Nv. ' + sk.unlock}</div>
      </div>
      <div class="state-bar"><div class="state-bar-fill" style="width:${unlocked ? pct : 0}%;background:${sk.color}"></div></div>
    </div>`;
  }).join('');
  const stigmaCards = Object.entries(STIGMAS).map(([id, st]) => {
    const open = lv >= st.unlock;
    const out = st.until && lv > st.until;
    const status = out ? 'Fuera<br><small style="color:var(--text-dim)">solo para farmear</small>'
      : open ? 'Objetivo ' + st.target + '<br><small style="color:var(--text-dim)">con esquirlas</small>' : '🔒 Nv. ' + st.unlock;
    return `<div class="state-card ${open && !out ? '' : 'locked'}" title="${st.note}">
      <div class="state-head">
        <span class="skill-mini">${renderIcon(id, 40)}</span>
        <div class="state-info">
          <div class="state-name">${st.name}</div>
          <div class="state-type">Estigma · ranura ${st.slot} · <small style="color:var(--text-dim)">${st.nameEn}</small></div>
        </div>
        <div class="state-rank">${status}</div>
      </div>
    </div>`;
  }).join('');
  stateEl.innerHTML = '<h4>📊 Cómo quedan tus habilidades al terminar el nivel ' + lv + ':</h4><div class="state-grid">' + skillCards + stigmaCards + '</div>';

  document.getElementById('plvPrev').disabled = (lv <= 1);
  document.getElementById('plvNext').disabled = (lv >= MAX_LVL);
  plSet(PLANNER_KEY, String(lv));
}

function changeLevel(delta) {
  const next = currentLvl + delta;
  if (next < 1 || next > MAX_LVL) return;
  currentLvl = next;
  renderLevel(currentLvl);
  document.getElementById('progression').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initPlanner() {
  const container = document.getElementById('plannerBody');
  if (!container) return;

  container.innerHTML = `
    <div class="plv-nav">
      <button id="plvPrev" class="plv-arrow">← Anterior</button>
      <div class="plv-current">
        <span class="plv-label">NIVEL</span>
        <span class="plv-num" id="plvLvlNum">1</span>
        <span class="plv-of">/ ${MAX_LVL}</span>
      </div>
      <button id="plvNext" class="plv-arrow">Siguiente →</button>
    </div>
    <div class="plv-progress-wrap"><div class="plv-progress" id="plvProgress"></div></div>
    <div class="plv-slider-wrap">
      <input type="range" id="plvSlider" min="1" max="${MAX_LVL}" value="1" class="plv-slider">
      <div class="plv-slider-marks">
        ${JUMPS.slice(1).map(l => `<span data-lv="${l}">${l}</span>`).join('')}
      </div>
    </div>
    <div class="plv-points-row" id="plvSP"></div>
    <div id="plvNotes"></div>
    <div class="plv-section" id="plvUnlocks"></div>
    <div class="plv-section" id="plvInvest"></div>
    <div class="plv-section" id="plvState"></div>
    <div class="plv-nav plv-nav-bottom">
      <button id="plvPrev2" class="plv-arrow">← Anterior</button>
      <span class="plv-quick-jumps">
        ${JUMPS.map(l => `<button class="plv-jump" data-jump="${l}">Nv. ${l}</button>`).join('')}
      </span>
      <button id="plvNext2" class="plv-arrow">Siguiente →</button>
    </div>
  `;

  document.getElementById('plvPrev').addEventListener('click', () => changeLevel(-1));
  document.getElementById('plvNext').addEventListener('click', () => changeLevel(1));
  document.getElementById('plvPrev2').addEventListener('click', () => changeLevel(-1));
  document.getElementById('plvNext2').addEventListener('click', () => changeLevel(1));
  document.getElementById('plvSlider').addEventListener('input', e => {
    currentLvl = parseInt(e.target.value, 10);
    renderLevel(currentLvl);
  });
  document.querySelectorAll('.plv-slider-marks span').forEach(sp => {
    sp.addEventListener('click', () => { currentLvl = parseInt(sp.dataset.lv, 10); renderLevel(currentLvl); });
  });
  document.querySelectorAll('.plv-jump').forEach(btn => {
    btn.addEventListener('click', () => { currentLvl = parseInt(btn.dataset.jump, 10); renderLevel(currentLvl); });
  });
  document.addEventListener('keydown', e => {
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
    const planner = document.getElementById('progression');
    if (!planner) return;
    const rect = planner.getBoundingClientRect();
    if (!(rect.top < window.innerHeight && rect.bottom > 0)) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); changeLevel(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); changeLevel(1); }
  });

  const sum = document.getElementById('plannerSummary');
  if (sum) {
    const final = STATES[MAX_LVL];
    const S = PLANNER_SUMMARY;
    const reach = (id, r) => { for (let l = 1; l <= MAX_LVL; l++) if (STATES[l].ranks[id] >= r) return l; return null; };
    const at10 = ids => ids.filter(id => final.ranks[id] >= 10).length;
    const note = S.passivesNote ? ` <small>+ ${SKILLS[S.passivesNote].name} ${final.ranks[S.passivesNote]}</small>` : '';
    sum.innerHTML = `
      <div class="stat"><div class="label">Puntos del 1 al 45</div><div class="value">${final.cum}</div></div>
      <div class="stat"><div class="label">Sin gastar al 45</div><div class="value" style="color:var(--ok)">${final.bank}</div></div>
      <div class="stat"><div class="label">${S.activesLabel}</div><div class="value">${at10(S.actives)} / ${S.actives.length}</div></div>
      <div class="stat"><div class="label">${S.passivesLabel}</div><div class="value">${at10(S.passives)} / ${S.passives.length}${note}</div></div>
    `;
    const when = document.getElementById('plannerWhen');
    if (when) {
      when.innerHTML = S.when.map(([id, r]) => {
        const l = reach(id, r);
        const txt = l ? `a rango ${r}: nivel ${l}` : `queda en rango ${final.ranks[id]} al 45` + (final.ranks[id] >= rankCap(MAX_LVL, SKILLS[id].unlock) ? ' (su tope)' : '');
        return `<li>${renderIcon(id, 22)} <strong>${SKILLS[id].name}</strong> ${txt}</li>`;
      }).join('');
    }
  }

  renderLevel(currentLvl);
}

document.addEventListener('DOMContentLoaded', initPlanner);
window.buildPlanner = initPlanner;
window.PLANNER_STATES = STATES;
