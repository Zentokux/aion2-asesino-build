// Aion 2 Global S1 — Asesino PvE Progressive Planner
// Plan corregido por agente verificador (consenso metabot.gg + corpus.gg + aion2-meta + couga54)
// Skills core (HG, QS, IE) suben en paralelo; Rear Smite desde Lv 15; Illusive Clone a Rk 10 ASAP

const SP_PER_LEVEL = {
  1:0, 2:0, 3:0, 4:1, 5:2, 6:2, 7:2, 8:3, 9:3, 10:3,
  11:4, 12:4, 13:4, 14:4, 15:4,
  16:5, 17:5, 18:5, 19:5, 20:5, 21:5, 22:5, 23:5, 24:5, 25:5,
  26:5, 27:5, 28:5, 29:5, 30:5,
  31:6, 32:6, 33:6, 34:6, 35:6, 36:6, 37:6, 38:6, 39:6, 40:6,
  41:6, 42:6, 43:6, 44:7, 45:7
};

const SKILLS = {
  // Activas DPS Core (prioridad #1)
  heart:        { name: 'Heart Gore',             color: '#ff4d6d', unlock: 4,  cap: 10, type: 'Activa (DPS Core)',  note: '~30% del daño endgame. Resetea CD en crit.', keep1: false },
  quick:        { name: 'Quick Slice',            color: '#ff4d6d', unlock: 1,  cap: 10, type: 'Activa (DPS Core)',  note: 'LMB spam + MP + reduce CD IE', keep1: false },
  insignia:     { name: 'Insignia Explosion',     color: '#ff4d6d', unlock: 14, cap: 10, type: 'Activa (DPS Core)',  note: '~25% del daño endgame', keep1: false },
  // Activas secundarias
  savage:       { name: 'Savage Roar',            color: '#f59e0b', unlock: 1,  cap: 10, type: 'Activa (AoE)',       note: 'Genera Insignias', keep1: false },
  // Activas que SE DEJAN EN RK 1 (confirmado "damage loss" por meta)
  shadow:       { name: 'Shadowstrike',           color: '#06b6d4', unlock: 1,  cap: 10, type: 'Activa (Opener)',    note: 'Opener + stun. Déjalo Rk 1-3, no vale la pena subir.', keep1: true },
  ambush:       { name: 'Ambush',                 color: '#06b6d4', unlock: 3,  cap: 10, type: 'Activa (Combo)',     note: '+30% daño trasero. Déjalo Rk 1 (damage loss según corpus.gg).', keep1: true },
  flash:        { name: 'Flash Slice',            color: '#06b6d4', unlock: 8,  cap: 10, type: 'Activa (Movilidad)', note: 'Reposición + blind. Déjalo Rk 1.', keep1: true },
  infiltrate:   { name: 'Infiltrarse',            color: '#06b6d4', unlock: 10, cap: 10, type: 'Activa (Defensiva)', note: 'Panic esquiva. Déjalo Rk 1.', keep1: true },
  shadowfall:   { name: 'Shadow Fall',            color: '#475569', unlock: 12, cap: 10, type: 'Activa (CC)',        note: 'Knockdown. Déjalo Rk 1.', keep1: true },
  storm:        { name: 'Storm Rampage',          color: '#f59e0b', unlock: 5,  cap: 10, type: 'Activa (AoE)',       note: 'Daño staggered. Déjalo Rk 1.', keep1: true },
  whirl:        { name: 'Whirlwind Slice',        color: '#f59e0b', unlock: 7,  cap: 10, type: 'Activa (AoE)',       note: 'AoE packs. Déjalo Rk 1.', keep1: true },
  defiance:     { name: 'Defiance (Desafío)',     color: '#22c55e', unlock: 16, cap: 10, type: 'Activa (Panic)',     note: 'CC break + heal 20%. Déjalo Rk 1, úsalo como botón de pánico.', keep1: true },

  // Pasivas CORE PvE (subir a Rk 10)
  rear:         { name: 'Rear Smite',             color: '#d4af37', unlock: 11, cap: 10, type: 'Pasiva (Core)',      note: '+3% dmg trasero + PvE. Pasiva #1.', keep1: false },
  exploit:      { name: 'Exploit Weakness',       color: '#d4af37', unlock: 6,  cap: 10, type: 'Pasiva (Core)',      note: '+Crit Chance', keep1: false },
  assault:      { name: 'Assault Stance',         color: '#d4af37', unlock: 13, cap: 10, type: 'Pasiva (Core)',      note: '+Crit Damage', keep1: false },
  impact:       { name: 'Impact Hit',             color: '#a3a3a3', unlock: 20, cap: 10, type: 'Pasiva (PvP)',       note: 'Solo 3.3% proc extra a Rk 10 — es pasiva PvP, baja prioridad PvE. Déjalo Rk 1.', keep1: true },

  // Pasivas automáticas (no requieren SP para activar efecto base)
  poison:       { name: 'Apply Poison',           color: '#84cc16', unlock: 9,  cap: 10, type: 'Pasiva (Auto)',      note: '15% veneno + −12% healing en objetivo. Auto-activada, no gastes SP temprano.', keep1: true },
  ambushstance: { name: 'Ambush Stance',          color: '#a16207', unlock: 17, cap: 10, type: 'Pasiva (Aux)',       note: 'Buff post-movimiento. Opcional, baja prioridad.', keep1: true },
  defbreak:     { name: 'Defense Break',          color: '#d4af37', unlock: 21, cap: 10, type: 'Pasiva (Core)',      note: '−12% def a enemigos staggered. Pasiva Core PvE según meta.', keep1: false },
  determination:{ name: 'Determination',          color: '#d4af37', unlock: 25, cap: 10, type: 'Pasiva (Core)',      note: 'Bono de resiliencia. Pasiva Core PvE.', keep1: false },
  sixthsense:   { name: 'Heightened Sixth Sense', color: '#a3a3a3', unlock: 1,  cap: 10, type: 'Pasiva (Base)',      note: '+Evasión base. Déjalo Rk 1.', keep1: true },

  // Stigmas (4 slots)
  s_clone:      { name: 'Illusive Clone',         color: '#a855f7', unlock: 22, cap: 20, type: 'Stigma Slot 1',      note: 'Heart Gore CD=0 por 20s. Rushear a Rk 10.', keep1: false },
  s_swift:      { name: 'Swift Contract',         color: '#a855f7', unlock: 27, cap: 20, type: 'Stigma Slot 2',      note: '+Attack Speed. Mini-burst cada ~45s.', keep1: false },
  s_triniel:    { name: "Triniel's Dagger",       color: '#a855f7', unlock: 32, cap: 20, type: 'Stigma Slot 3',      note: 'Reduce CDs 10%.', keep1: false },
  s_fang:       { name: 'Savage Fang',            color: '#a855f7', unlock: 37, cap: 20, type: 'Stigma Slot 4',      note: 'Carga 5 Insignias instantáneas.', keep1: false },
};

// Costo para subir A ese rango (skill activa/pasiva). Rk 11+ no con SP.
function skillRankCost(toRank) {
  if (toRank <= 1) return 0;
  if (toRank <= 4) return 1;
  if (toRank <= 7) return 2;
  if (toRank <= 10) return 4;
  return 0;
}
function stigmaRankCost(toRank) {
  if (toRank <= 1) return 0;
  if (toRank <= 5) return 1;
  if (toRank <= 10) return 2;
  if (toRank <= 15) return 4;
  if (toRank <= 20) return 8;
  return 0;
}

// PLAN NIVEL POR NIVEL (plan corregido por agente verificador: skills core en paralelo)
// Formato: lvl: [ { skillId, to } ]  (sube a ese rango exacto; costo auto-calculado)
// Mensajes especiales con { msg: '...', milestone: true }
const PLAN = {
  1:  { special: '🎯 NIVEL INICIAL — practica combo: Shadowstrike → Ambush → Heart Gore → Savage Roar → spam Quick Slice (LMB). Golpea SIEMPRE por detrás.' },
  2:  { note: 'Sigue sin ganar SP. Aprende a cancelar animaciones intercalando Quick Slice entre skills.' },
  3:  { special: '🔓 Ambush desbloqueado! Sin SP todavía. Practica la secuencia Shadowstrike + Ambush para dominar el posicionamiento trasero.' },
  4:  { special: '🎯 PRIMER PUNTO DE SKILL!', actions: [{ s: 'heart', to: 2 }] },
  5:  { actions: [{ s: 'quick', to: 2 }, { s: 'heart', to: 3 }] },
  6:  { actions: [{ s: 'insignia_pre', skip: true }, { s: 'quick', to: 3 }, { s: 'heart', to: 4 }] },
  7:  { actions: [{ s: 'heart', to: 5 }] },
  8:  { actions: [{ s: 'quick', to: 4 }, { s: 'heart', to: 6 }] },
  9:  { actions: [{ s: 'quick', to: 5 }], bank: 1 },
  10: { actions: [{ s: 'heart', to: 7 }, { s: 'savage', to: 2 }] },
  11: { special: '🔓 Rear Smite (passive) desbloqueada', actions: [{ s: 'heart', to: 8 }, { s: 'rear', to: 2 }], note: 'Heart Gore Rk 8: Specialty 1 desbloqueada (Absorb HP)' },
  12: { actions: [{ s: 'quick', to: 6 }, { s: 'quick', to: 7 }] },
  13: { actions: [{ s: 'quick', to: 8 }], note: 'Quick Slice Rk 8: Specialty 1' },
  14: { special: '🔓 Insignia Explosion desbloqueada!', actions: [{ s: 'insignia', to: 2 }, { s: 'insignia', to: 3 }, { s: 'insignia', to: 4 }, { s: 'insignia', to: 5 }] },
  15: { actions: [{ s: 'insignia', to: 6 }, { s: 'rear', to: 3 }, { s: 'exploit', to: 2 }] },
  16: { actions: [{ s: 'insignia', to: 7 }, { s: 'insignia', to: 8 }], note: 'IE Rk 8: Specialty 1' },
  17: { actions: [{ s: 'exploit', to: 3 }, { s: 'exploit', to: 4 }, { s: 'rear', to: 4 }, { s: 'savage', to: 3 }] },
  18: { actions: [{ s: 'heart', to: 9 }, { s: 'rear', to: 5 }] },
  19: { actions: [{ s: 'heart', to: 10 }], note: 'HEART GORE Rk 10 MAX por SP (Specialty 2 abre vía Daevanion)' },
  20: { actions: [{ s: 'quick', to: 9 }, { s: 'exploit', to: 5 }] },
  21: { actions: [{ s: 'quick', to: 10 }, { s: 'rear', to: 6 }], note: 'QUICK SLICE Rk 10 MAX por SP' },
  22: { special: '⭐ ASCENSIÓN! Slot stigma 1 → equipa Illusive Clone', actions: [{ s: 's_clone', to: 5 }] },
  23: { actions: [{ s: 'insignia', to: 9 }, { s: 'assault', to: 2 }] },
  24: { actions: [{ s: 'insignia', to: 10 }, { s: 'assault', to: 3 }], note: 'IE Rk 10 MAX por SP' },
  25: { actions: [{ s: 's_clone', to: 7 }, { s: 'assault', to: 4 }] },
  26: { actions: [{ s: 's_clone', to: 9 }, { s: 'assault', to: 5 }] },
  27: { special: '⭐ Slot stigma 2 → equipa Swift Contract', actions: [{ s: 's_clone', to: 10 }, { s: 's_swift', to: 3 }] },
  28: { actions: [{ s: 's_swift', to: 5 }, { s: 'savage', to: 4 }, { s: 'savage', to: 5 }] },
  29: { actions: [{ s: 'savage', to: 6 }, { s: 'savage', to: 7 }, { s: 's_swift', to: 6 }] },
  30: { special: '⭐ VAIZEL BOARD DESBLOQUEADO (Lv 30) — prioriza esquinas Crit Damage Boost', actions: [{ s: 's_swift', to: 8 }, { s: 'savage', to: 8 }] },
  31: { actions: [{ s: 's_swift', to: 10 }, { s: 'exploit', to: 6 }], note: 'Swift Contract Rk 10' },
  32: { special: '⭐ Slot stigma 3 → equipa Triniel\'s Dagger', actions: [{ s: 's_triniel', to: 5 }, { s: 'rear', to: 7 }] },
  33: { actions: [{ s: 's_triniel', to: 7 }, { s: 'exploit', to: 7 }, { s: 'exploit', to: 8 }], note: 'Exploit Weakness Rk 8 Specialty' },
  34: { actions: [{ s: 's_triniel', to: 9 }, { s: 'rear', to: 8 }], note: 'Rear Smite Rk 8 Specialty' },
  35: { actions: [{ s: 's_triniel', to: 10 }, { s: 'rear', to: 9 }, { s: 'rear', to: 10 }], note: 'Rear Smite Rk 10 MAX + Triniel\'s Dagger Rk 10' },
  36: { actions: [{ s: 'exploit', to: 9 }, { s: 'exploit', to: 10 }], note: 'Exploit Weakness Rk 10 MAX' },
  37: { special: '⭐ Slot stigma 4 → equipa Savage Fang', actions: [{ s: 's_fang', to: 5 }, { s: 'assault', to: 6 }] },
  38: { actions: [{ s: 's_fang', to: 7 }, { s: 'assault', to: 7 }, { s: 'assault', to: 8 }], note: 'Assault Stance Rk 8 Specialty' },
  39: { actions: [{ s: 's_fang', to: 9 }, { s: 'assault', to: 9 }] },
  40: { special: '⭐ TRINIEL BOARD DESBLOQUEADO (Lv 40) — camino Multi-Hit Chance', actions: [{ s: 's_fang', to: 10 }, { s: 'assault', to: 10 }], note: 'Assault Stance + Savage Fang a Rk 10' },
  41: { actions: [{ s: 'defbreak', to: 5 }, { s: 'savage', to: 6 }], note: 'META FIX: Defense Break es Core PvE (−12% def). Savage Roar NO vale Rk 10 — déjalo Rk 6 (filler).' },
  42: { actions: [{ s: 'defbreak', to: 6 }, { s: 'defbreak', to: 7 }, { s: 'defbreak', to: 8 }], note: 'Defense Break Rk 8 Specialty' },
  43: { actions: [{ s: 'defbreak', to: 9 }, { s: 'defbreak', to: 10 }], note: 'Defense Break Rk 10 MAX' },
  44: { actions: [{ s: 'determination', to: 5 }, { s: 'determination', to: 6 }], note: 'Determination sube como última pasiva core. Impact Hit queda en Rk 1 (es PvP, no PvE).' },
  45: { special: '🏆 CAP LV 45 ALCANZADO! Azphel Board disponible (SKIP para PvE puro)', actions: [{ s: 'determination', to: 7 }, { s: 'determination', to: 8 }], note: 'Determination Rk 8 Specialty. Impact Hit queda Rk 1 (correctamente, es PvP).' },
};

// Build cumulative state for each level
function computeState() {
  const states = {};
  const ranks = {};
  Object.keys(SKILLS).forEach(id => { ranks[id] = SKILLS[id].unlock <= 1 ? 1 : 0; });
  let cum = 0;
  let bank = 0;

  for (let lv = 1; lv <= 45; lv++) {
    const spGained = SP_PER_LEVEL[lv];
    cum += spGained;

    // Apply unlocks
    const unlocks = [];
    Object.entries(SKILLS).forEach(([id, s]) => {
      if (s.unlock === lv && ranks[id] === 0) {
        ranks[id] = 1;
        unlocks.push(s);
      }
    });

    const plan = PLAN[lv] || {};
    let spent = 0;
    const investments = [];
    if (plan.actions) {
      plan.actions.forEach(act => {
        if (act.skip) return;
        const skill = SKILLS[act.s];
        if (!skill) return;
        const from = ranks[act.s];
        const to = act.to;
        let cost = 0;
        for (let r = from + 1; r <= to; r++) {
          cost += (skill.type === 'Stigma') ? stigmaRankCost(r) : skillRankCost(r);
        }
        ranks[act.s] = to;
        spent += cost;
        investments.push({ skill, from, to, cost });
      });
    }

    bank += (spGained - spent);

    states[lv] = {
      lvl: lv,
      spGained,
      cum,
      bank,
      spent,
      special: plan.special,
      note: plan.note,
      unlocks,
      investments,
      ranks: { ...ranks }
    };
  }
  return states;
}

const STATES = computeState();
let currentLvl = parseInt(localStorage.getItem('aion2_planner_lvl') || '1', 10);
if (currentLvl < 1 || currentLvl > 45) currentLvl = 1;

function renderLevel(lv) {
  const s = STATES[lv];
  if (!s) return;

  // Update level number display
  const lvlNum = document.getElementById('plvLvlNum');
  if (lvlNum) lvlNum.textContent = lv;

  // Progress bar
  const prog = document.getElementById('plvProgress');
  if (prog) prog.style.width = ((lv - 1) / 44 * 100).toFixed(1) + '%';

  // Slider
  const slider = document.getElementById('plvSlider');
  if (slider && slider.value != lv) slider.value = lv;

  // Points row
  document.getElementById('plvSP').innerHTML = `
    <div class="pts-box"><div class="label">+SP este nivel</div><div class="value gained">+${s.spGained}</div></div>
    <div class="pts-box"><div class="label">Acumulado</div><div class="value">${s.cum}</div></div>
    <div class="pts-box"><div class="label">Banco (no gastados)</div><div class="value" style="color:${s.bank >= 0 ? 'var(--info)' : 'var(--crit)'}">${s.bank}</div></div>
    <div class="pts-box"><div class="label">Gastados aquí</div><div class="value">${s.spent}</div></div>
  `;

  // Special/note
  const notesHtml = [];
  if (s.special) notesHtml.push(`<div class="plv-special">⭐ ${s.special}</div>`);
  if (s.note) notesHtml.push(`<div class="plv-note">💡 ${s.note}</div>`);
  document.getElementById('plvNotes').innerHTML = notesHtml.join('');

  // Unlocks
  const unlocksEl = document.getElementById('plvUnlocks');
  if (s.unlocks.length) {
    unlocksEl.innerHTML = '<h4>🔓 Desbloqueado en este nivel:</h4>' + s.unlocks.map(u =>
      `<div class="unlock-item"><span class="skill-mini">${renderIcon(Object.entries(SKILLS).find(([k,v]) => v === u)[0], 40)}</span><span><strong>${u.name}</strong> <em>(${u.type})</em><br><small>${u.note}</small></span></div>`
    ).join('');
    unlocksEl.style.display = 'block';
  } else {
    unlocksEl.style.display = 'none';
  }

  // Investments
  const invEl = document.getElementById('plvInvest');
  if (s.investments.length) {
    invEl.innerHTML = '<h4>💰 Dónde invertir tus puntos:</h4>' + s.investments.map(inv =>
      `<div class="invest-item">
        <span class="skill-mini">${renderIcon(Object.entries(SKILLS).find(([k,v]) => v === inv.skill)[0], 40)}</span>
        <div class="invest-info">
          <strong>${inv.skill.name}</strong>
          <span class="invest-change">Rk <b>${inv.from}</b> → Rk <b>${inv.to}</b></span>
          <span class="invest-cost">−${inv.cost} SP</span>
        </div>
      </div>`
    ).join('');
    invEl.style.display = 'block';
  } else if (s.spGained > 0) {
    invEl.innerHTML = '<h4>💰 Puntos de este nivel:</h4><p class="empty-msg">Guardados en el banco para el próximo nivel.</p>';
    invEl.style.display = 'block';
  } else {
    invEl.innerHTML = '<p class="empty-msg">No ganas Skill Points en este nivel.</p>';
    invEl.style.display = 'block';
  }

  // Current state grid - all skills with their rank
  const stateEl = document.getElementById('plvState');
  const skillCards = Object.entries(SKILLS).map(([id, sk]) => {
    const rank = s.ranks[id];
    const unlocked = rank > 0;
    const maxed = rank >= sk.cap;
    const pct = (rank / sk.cap * 100).toFixed(0);
    const justChanged = s.investments.some(inv => inv.skill.name === sk.name);
    return `<div class="state-card ${unlocked ? '' : 'locked'} ${maxed ? 'maxed' : ''} ${justChanged ? 'just-changed' : ''}" title="${sk.note}">
      <div class="state-head">
        <span class="skill-mini">${renderIcon(id, 40)}</span>
        <div class="state-info">
          <div class="state-name">${sk.name}</div>
          <div class="state-type">${sk.type}</div>
        </div>
        <div class="state-rank">${unlocked ? 'Rk ' + rank + '/' + sk.cap : '🔒 Lv ' + sk.unlock}</div>
      </div>
      <div class="state-bar"><div class="state-bar-fill" style="width:${unlocked ? pct : 0}%;background:${sk.color}"></div></div>
    </div>`;
  }).join('');
  stateEl.innerHTML = '<h4>📊 Estado de todas tus skills al terminar Lv ' + lv + ':</h4><div class="state-grid">' + skillCards + '</div>';

  // Prev/Next buttons state
  document.getElementById('plvPrev').disabled = (lv <= 1);
  document.getElementById('plvNext').disabled = (lv >= 45);

  // Save
  localStorage.setItem('aion2_planner_lvl', String(lv));
}

function changeLevel(delta) {
  const next = currentLvl + delta;
  if (next < 1 || next > 45) return;
  currentLvl = next;
  renderLevel(currentLvl);
  // smooth scroll to top of planner
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
        <span class="plv-of">/ 45</span>
      </div>
      <button id="plvNext" class="plv-arrow">Siguiente →</button>
    </div>
    <div class="plv-progress-wrap"><div class="plv-progress" id="plvProgress"></div></div>
    <div class="plv-slider-wrap">
      <input type="range" id="plvSlider" min="1" max="45" value="1" class="plv-slider">
      <div class="plv-slider-marks">
        <span data-lv="4">4</span><span data-lv="14">14</span><span data-lv="22">22</span><span data-lv="30">30</span><span data-lv="40">40</span><span data-lv="45">45</span>
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
        <button class="plv-jump" data-jump="1">Lv 1</button>
        <button class="plv-jump" data-jump="4">Lv 4</button>
        <button class="plv-jump" data-jump="14">Lv 14</button>
        <button class="plv-jump" data-jump="22">Lv 22</button>
        <button class="plv-jump" data-jump="30">Lv 30</button>
        <button class="plv-jump" data-jump="40">Lv 40</button>
        <button class="plv-jump" data-jump="45">Lv 45</button>
      </span>
      <button id="plvNext2" class="plv-arrow">Siguiente →</button>
    </div>
  `;

  document.getElementById('plvPrev').addEventListener('click', () => changeLevel(-1));
  document.getElementById('plvNext').addEventListener('click', () => changeLevel(1));
  document.getElementById('plvPrev2').addEventListener('click', () => changeLevel(-1));
  document.getElementById('plvNext2').addEventListener('click', () => changeLevel(1));

  // Slider
  document.getElementById('plvSlider').addEventListener('input', e => {
    currentLvl = parseInt(e.target.value, 10);
    renderLevel(currentLvl);
  });

  // Marks click
  document.querySelectorAll('.plv-slider-marks span').forEach(sp => {
    sp.addEventListener('click', () => {
      currentLvl = parseInt(sp.dataset.lv, 10);
      renderLevel(currentLvl);
    });
  });

  // Quick jump buttons
  document.querySelectorAll('.plv-jump').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLvl = parseInt(btn.dataset.jump, 10);
      renderLevel(currentLvl);
    });
  });

  // Keyboard arrows
  document.addEventListener('keydown', e => {
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
    const planner = document.getElementById('progression');
    if (!planner) return;
    const rect = planner.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!visible) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); changeLevel(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); changeLevel(1); }
  });

  // Summary stats
  const sum = document.getElementById('plannerSummary');
  if (sum) {
    const final = STATES[45];
    sum.innerHTML = `
      <div class="stat"><div class="label">Total SP (Lv 45)</div><div class="value">${final.cum}</div></div>
      <div class="stat"><div class="label">Banco final</div><div class="value" style="color:${final.bank >= 0 ? 'var(--ok)' : 'var(--crit)'}">${final.bank}</div></div>
      <div class="stat"><div class="label">Skills a Rk 10</div><div class="value">${Object.entries(final.ranks).filter(([k,v]) => SKILLS[k].type !== 'Stigma' && v >= 10).length}</div></div>
      <div class="stat"><div class="label">Stigmas a Rk 10</div><div class="value">${Object.entries(final.ranks).filter(([k,v]) => SKILLS[k].type === 'Stigma' && v >= 10).length}</div></div>
    `;
  }

  renderLevel(currentLvl);
}

document.addEventListener('DOMContentLoaded', initPlanner);
// Also expose for manual init after dynamic DOM
window.buildPlanner = initPlanner;
