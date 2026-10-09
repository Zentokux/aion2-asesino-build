// Aion 2 Global S1 — Asesino PvE: planificador de puntos de habilidad nivel por nivel (v2)
// El plan se CALCULA (no está escrito a mano), así que siempre respeta tres reglas del juego:
//   1. Presupuesto: solo gastas los puntos que ya ganaste (203 subiendo del 1 al 45).
//   2. Tope por nivel: al aprender una habilidad puede llegar a rango 2, y luego +1 cada 3 niveles de personaje
//      (Estocada al corazón se aprende en el 4 → rango 10 en el 28).
//   3. Los estigmas NO usan puntos de habilidad: se suben con Esquirlas de Estigma.
// Prioridades de couga54: las 5 habilidades clave a 10 (Estocada al corazón, Explosión de insignia, Corte rápido,
// Emboscada, Desenfreno de tormenta), Rugido bestial a 8 (especialización de +20 % de velocidad), y las 4 pasivas clave.
// Nombres: cliente en español (metabot.gg/es_ES). Niveles de aprendizaje: metabot.

const SP_PER_LEVEL = {
  1:0, 2:0, 3:0, 4:1, 5:2, 6:2, 7:2, 8:3, 9:3, 10:3,
  11:4, 12:4, 13:4, 14:4, 15:4,
  16:5, 17:5, 18:5, 19:5, 20:5, 21:5, 22:5, 23:5, 24:5, 25:5,
  26:5, 27:5, 28:5, 29:5, 30:5,
  31:6, 32:6, 33:6, 34:6, 35:6, 36:6, 37:6, 38:6, 39:6, 40:6,
  41:6, 42:6, 43:6, 44:7, 45:7
};
const MAX_LVL = 45;

const SKILLS = {
  // Activas clave (a rango 10 con puntos)
  heart:        { name: 'Estocada al corazón',     nameEn: 'Heart Gore',          color: '#ff4d6d', unlock: 4,  cap: 10, type: 'Activa clave',  note: 'Tu golpe principal (~30 % del daño). Con crítico se restablece.' },
  insignia:     { name: 'Explosión de insignia',   nameEn: 'Insignia Explosion',  color: '#ff4d6d', unlock: 14, cap: 10, type: 'Activa clave',  note: 'Detona las insignias (~25 % del daño). Úsala cada vez que esté lista.' },
  quick:        { name: 'Corte rápido',            nameEn: 'Quick Slice',         color: '#ff4d6d', unlock: 1,  cap: 10, type: 'Activa clave',  note: 'Ataque básico: recupera PM y entra entre cada habilidad.' },
  ambush:       { name: 'Emboscada',               nameEn: 'Ambush',              color: '#ff4d6d', unlock: 3,  cap: 10, type: 'Activa clave',  note: 'Golpe por la espalda. Una de las 5 clave de couga54.' },
  storm:        { name: 'Desenfreno de tormenta',  nameEn: 'Storm Rampage',       color: '#ff4d6d', unlock: 5,  cap: 10, type: 'Activa clave',  note: 'Ráfaga de golpes. Una de las 5 clave de couga54.' },
  savage:       { name: 'Rugido bestial',          nameEn: 'Savage Roar',         color: '#f59e0b', unlock: 1,  cap: 10, type: 'Activa (a 8)',  note: 'Graba insignias. A rango 8 abre +20 % de velocidad de habilidad; el 9-10 solo con puntos extra.' },
  // Activas que se quedan en rango 1
  shadow:       { name: 'Ataque sigiloso',         nameEn: 'Shadowstrike',        color: '#64748b', unlock: 1,  cap: 10, type: 'Activa (rango 1)', note: 'Apertura. Sube con Daevanion, no con puntos.' },
  whirl:        { name: 'Corte torbellino',        nameEn: 'Whirlwind Slice',     color: '#64748b', unlock: 7,  cap: 10, type: 'Activa (rango 1)', note: 'Área. No vale puntos en JcE.' },
  flash:        { name: 'Corte de destello',       nameEn: 'Flash Slice',         color: '#64748b', unlock: 8,  cap: 10, type: 'Activa (rango 1)', note: 'Desplazamiento. Sube con Daevanion.' },
  infiltrate:   { name: 'Infiltración',            nameEn: 'Infiltrate',          color: '#64748b', unlock: 10, cap: 10, type: 'Activa (rango 1)', note: 'Te acerca al objetivo.' },
  shadowfall:   { name: 'Caída sombría',           nameEn: 'Shadow Fall',         color: '#64748b', unlock: 12, cap: 10, type: 'Activa (rango 1)', note: 'Derribo.' },
  defiance:     { name: 'Eliminación de impacto',  nameEn: 'Defiance',            color: '#64748b', unlock: 16, cap: 10, type: 'Activa (rango 1)', note: 'Libera de control. En JcE solo de emergencia.' },
  // Pasivas clave (prioridad de couga54 para el equipo: 1 Impacto trasero, 2 Explotar / Postura de agresión, 3 Determinación)
  rear:         { name: 'Impacto trasero',         nameEn: 'Rear Smite',          color: '#d4af37', unlock: 11, cap: 10, type: 'Pasiva clave',  note: 'La pasiva más fuerte: daño por la espalda y JcE.' },
  exploit:      { name: 'Explotar debilidades',    nameEn: 'Exploit Weakness',    color: '#d4af37', unlock: 6,  cap: 10, type: 'Pasiva clave',  note: 'Más daño contra objetivos debilitados.' },
  assault:      { name: 'Postura de agresión',     nameEn: 'Assault Stance',      color: '#d4af37', unlock: 13, cap: 10, type: 'Pasiva clave',  note: 'Aumenta tu daño.' },
  determination:{ name: 'Determinación',           nameEn: 'Determination',       color: '#d4af37', unlock: 25, cap: 10, type: 'Pasiva clave',  note: 'Daño contra objetivos con poca vida. Se aprende en el 25: a nivel 45 su tope es 8.' },
  // Pasivas solo con puntos sobrantes o que no se suben
  sixthsense:   { name: 'Maximización de sexto sentido', nameEn: 'Heightened Sixth Sense', color: '#a3a3a3', unlock: 1, cap: 10, type: 'Pasiva (sobrantes)', note: 'Solo con puntos extra: no vale una línea de equipo.' },
  ambushstance: { name: 'Postura de emboscada',    nameEn: 'Ambush Stance',       color: '#a3a3a3', unlock: 17, cap: 10, type: 'Pasiva (sobrantes)', note: 'Solo con puntos extra.' },
  impact:       { name: 'Acierto de impacto',      nameEn: 'Impact Hit',          color: '#64748b', unlock: 15, cap: 10, type: 'Pasiva (JcJ)',  note: 'Solo 3,3 % a rango 10: guárdala para JcJ.' },
  poison:       { name: 'Aplicación de veneno',    nameEn: 'Apply Poison',        color: '#64748b', unlock: 9,  cap: 10, type: 'Pasiva (no)',   note: 'Menos del 1 % de tu daño.' },
  defbreak:     { name: 'Grieta defensiva',        nameEn: 'Defense Break',       color: '#64748b', unlock: 21, cap: 10, type: 'Pasiva (JcJ)',  note: 'Pasiva de JcJ.' },
  revitalization:{ name: 'Pacto de resurrección',  nameEn: 'Revitalization Contract', color: '#64748b', unlock: 23, cap: 10, type: 'Pasiva (sobrantes)', note: 'Solo si te sobran puntos.' },
};

// Estigmas (orden de subida de couga54): ranura que abre cada nivel y rango objetivo.
// Se suben con Esquirlas de Estigma (1-5: 1, 6-10: 2, 11-15: 4, 16-20: 8). Al 45, Tiro de daga sombría deja su ranura a Puñal de Triniel.
const STIGMAS = {
  s_shadowblade: { name: 'Tiro de daga sombría', nameEn: 'Throw Shadowblade', unlock: 22, slot: 1, target: 10, until: 44, note: 'Primero, a rango 10: se restablece al matar, ideal para ir de grupo en grupo. Solo para farmear, no para jefes.' },
  s_fang:    { name: 'Colmillo salvaje',    nameEn: 'Savage Fang',      unlock: 27, slot: 2, target: 15, note: 'Para grupos: 5 insignias de golpe. A 15 da +10 % de daño JcE durante 10 s.' },
  s_clone:   { name: 'Clon ilusorio',       nameEn: 'Illusive Clone',   unlock: 32, slot: 3, target: 20, note: 'Tu ráfaga: 20 s sin enfriamiento de Estocada al corazón. Desde que lo tengas, gasta en él las esquirlas hasta 20.' },
  s_swift:   { name: 'Pacto de celeridad',  nameEn: 'Swift Contract',   unlock: 37, slot: 4, target: 15, note: '+20 % de velocidad de combate. 15 basta para empezar; 20 da +10 % más.' },
  s_triniel: { name: 'Puñal de Triniel',    nameEn: "Triniel's Dagger", unlock: 45, slot: 1, target: 10, note: 'Entra en la ranura de Tiro de daga sombría para jefes. A 10, cada golpe recorta un 10 % los enfriamientos que quedan.' },
};

// Orden de compra: cada nivel se gasta todo lo posible, de arriba abajo, sin pasar el tope ni el objetivo.
const PRIORITY = [
  ['heart', 10], ['insignia', 10], ['quick', 10], ['savage', 8], ['ambush', 10], ['storm', 10],
  ['rear', 10], ['exploit', 10], ['assault', 10], ['determination', 10],
];
// Solo cuando lo de arriba ya está completo (o con piedras de sabiduría).
const EXTRA = [['savage', 10], ['sixthsense', 10], ['ambushstance', 10]];

const MILESTONES = {
  1:  { special: '🎯 Empiezas sin puntos hasta el nivel 4. Practica: Ataque sigiloso → Emboscada → Rugido bestial → Corte rápido entre cada golpe, siempre por la espalda.' },
  4:  { special: '🎯 Primer punto de habilidad. Estocada al corazón: ponla en la Q y úsala sin parar.' },
  12: { special: '⭐ Se abre el tablero Daevanion Nezekan (ver sección Daevanion).' },
  14: { special: '🔓 Explosión de insignia: ponla en tu barra principal y súbela cada vez que puedas.' },
  20: { special: '⭐ Se abre el tablero Zikel.' },
  22: { special: '⭐ Ascensión: ranura de estigma 1 → Tiro de daga sombría, súbelo a 10 (se restablece al matar). Los estigmas se suben con Esquirlas de Estigma, no con estos puntos.' },
  27: { special: '⭐ Ranura de estigma 2 → Colmillo salvaje, para los grupos de monstruos.' },
  30: { special: '⭐ Se abre Vaizel, el tablero n.º 1 del Asesino en JcE (Daño Crítico).' },
  32: { special: '⭐ Ranura de estigma 3 → Clon ilusorio. Desde ahora las esquirlas van a él hasta rango 20.' },
  37: { special: '⭐ Ranura de estigma 4 → Pacto de celeridad. Úsalo junto con Clon ilusorio y Colmillo salvaje.' },
  40: { special: '⭐ Se abre Triniel (Multigolpe; sobre todo JcJ, puede esperar).' },
  45: { special: '🏆 Nivel 45: para jefes, cambia Tiro de daga sombría por Puñal de Triniel (rango 10). Azphel es JcJ: no le pongas puntos en JcE.' },
};

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
let currentLvl = parseInt(plGet('aion2_planner_lvl', '1'), 10);
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
  plSet('aion2_planner_lvl', String(lv));
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
        ${[1, 4, 14, 22, 30, 40, 45].map(l => `<button class="plv-jump" data-jump="${l}">Nv. ${l}</button>`).join('')}
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
    const reach10 = id => { for (let l = 1; l <= MAX_LVL; l++) if (STATES[l].ranks[id] >= 10) return l; return null; };
    const key = ['heart', 'insignia', 'quick', 'ambush', 'storm'];
    sum.innerHTML = `
      <div class="stat"><div class="label">Puntos del 1 al 45</div><div class="value">${final.cum}</div></div>
      <div class="stat"><div class="label">Sin gastar al 45</div><div class="value" style="color:var(--ok)">${final.bank}</div></div>
      <div class="stat"><div class="label">Activas clave a 10</div><div class="value">${key.filter(id => final.ranks[id] >= 10).length} / 5</div></div>
      <div class="stat"><div class="label">Pasivas clave a 10</div><div class="value">${['rear', 'exploit', 'assault'].filter(id => final.ranks[id] >= 10).length} / 3 <small>+ Determinación ${final.ranks.determination}</small></div></div>
    `;
    const when = document.getElementById('plannerWhen');
    if (when) {
      when.innerHTML = [...key, 'rear', 'exploit', 'assault'].map(id => `<li>${renderIcon(id, 22)} <strong>${SKILLS[id].name}</strong> a rango 10: nivel ${reach10(id)}</li>`).join('')
        + `<li>${renderIcon('savage', 22)} <strong>Rugido bestial</strong> a rango 8: nivel ${(() => { for (let l = 1; l <= MAX_LVL; l++) if (STATES[l].ranks.savage >= 8) return l; })()}</li>`
        + `<li>${renderIcon('determination', 22)} <strong>Determinación</strong> a rango ${final.ranks.determination} (su tope a nivel 45)</li>`;
    }
  }

  renderLevel(currentLvl);
}

document.addEventListener('DOMContentLoaded', initPlanner);
window.buildPlanner = initPlanner;
window.PLANNER_STATES = STATES;
