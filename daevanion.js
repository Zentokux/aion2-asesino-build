// Aion 2 Global S1 — Daevanion Boards para Asesino PvE
// NO inventamos la grilla. Solo listamos los nodos skill confirmados por couga54
// y damos el ORDEN de desbloqueo recomendado para que sea progresivo.
// Para la topología visual exacta, el usuario debe usar el planner interactivo
// de couga54: https://couga54.github.io/aion2-guides/en/assassin/#daevanion

const SKILL_ICON_FILE = {
  heart: 'heart_gore.webp', quick: 'quick_slice.webp', insignia: 'insignia_explosion.webp',
  savage: 'savage_roar.webp', shadow: 'shadowstrike.webp', ambush: 'ambush.webp',
  flash: 'flash_slice.webp', storm: 'storm_rampage.webp', whirl: 'whirlwind_slice.webp',
  infiltrate: 'infiltrate.webp', shadowfall: 'shadow_fall.webp', defiance: 'defiance.webp',
  rear: 'rear_smite.webp', exploit: 'exploit_weakness.webp', assault: 'assault_stance.webp',
  impact: 'impact_hit.webp', poison: 'apply_poison.webp', sixthsense: 'sixth_sense.webp',
  ambushstance: 'ambush_stance.webp', defbreak: 'defense_break.webp', determination: 'determination.webp',
};

// Blue nodes (skill +1) confirmados por couga54 en cada board para Asesino PvE
// Fuente textual: https://couga54.github.io/aion2-guides/en/assassin/
// NO incluimos posiciones (x,y) porque couga54 no publica el mapa textual —
// solo cita qué skills tienen nodo en cada board.
const BOARDS = [
  {
    id: 'nezekan',
    name: 'Nezekan',
    unlockLvl: 12,
    color: '#4ea8de',
    totalDP: 134,
    targetDP: 63,
    focus: 'Combat Speed + Cooldown Reduction',
    corners: '2× Combat Speed +1.5% / 2× CDR +1.5%',
    fullBoard: 'Combat Speed +3%, CDR +3%',
    // Blue nodes couga54 textual: Heart Gore, Storm Rampage, Quick Slice, Ambush, Insignia Explosion
    blues: [
      { skill: 'heart',    name: 'Heart Gore +1',          why: 'DPS core #1 — nodo prioritario' },
      { skill: 'insignia', name: 'Insignia Explosion +1',  why: 'DPS #2 — nodo prioritario' },
      { skill: 'quick',    name: 'Quick Slice +1',         why: 'DPS weave + reduce CD IE' },
      { skill: 'storm',    name: 'Storm Rampage +1',       why: 'Rk 16 breakpoint: −1s all CDs on hit' },
      { skill: 'ambush',   name: 'Ambush +1',              why: 'Rk 16 breakpoint: +2 consecutive uses' },
    ],
    tip: 'Al desbloquear Nezekan en Lv 12: primero camino al centro, luego los 5 blues clave, después esquinas CS/CDR. 63 DP objetivo (de 134 totales del board).'
  },
  {
    id: 'zikel',
    name: 'Zikel',
    unlockLvl: 20,
    color: '#f59e0b',
    totalDP: 134,
    targetDP: 59,
    focus: 'Damage Boost + Damage Tolerance',
    corners: '2× Damage Boost +1.5% / 2× Damage Tolerance +1.5%',
    fullBoard: 'DB +3%, DT +3%',
    // Blue nodes couga54: Quick Slice, Insignia Explosion, Storm Rampage, Ambush (repeated from Nez but accessible here)
    blues: [
      { skill: 'quick',    name: 'Quick Slice +1',         why: 'repite — llega a Rk 12 breakpoint' },
      { skill: 'insignia', name: 'Insignia Explosion +1',  why: 'repite — llega a Rk 16 (−3s CD + MH)' },
      { skill: 'storm',    name: 'Storm Rampage +1',       why: 'camino hacia Rk 16' },
      { skill: 'ambush',   name: 'Ambush +1',              why: 'camino hacia Rk 16' },
    ],
    tip: 'Zikel desbloqueado en Lv 20. 59 DP objetivo. Prioriza las 2 esquinas Damage Boost (ofensivas) y pasa por los 4 blues de camino.'
  },
  {
    id: 'vaizel',
    name: 'Vaizel',
    unlockLvl: 30,
    color: '#ff4d6d',
    totalDP: 134,
    targetDP: 60,
    focus: '⭐ Critical Damage (BOARD #1 PvE MAX DPS)',
    corners: '2× Crit Damage Boost +1.5% / 2× Crit Damage Tolerance +1.5%',
    fullBoard: 'CDB +3%, CDT +3%, Crit Hit +55',
    // Blue nodes couga54: Heart Gore, Quick Slice (ambos repetidos aquí para llegar a Rk 20)
    blues: [
      { skill: 'heart',    name: 'Heart Gore +1',          why: 'tercer nodo → Rk 20 (reset multi-hit)' },
      { skill: 'quick',    name: 'Quick Slice +1',         why: 'tercer nodo → Rk 20 (Multi-Hit +50%)' },
    ],
    tip: '⭐ EL BOARD #1 Asesino PvE. 60 DP objetivo. Prioriza AMBAS esquinas Crit Damage Boost (ofensivas). Los 2 blues llevan Heart Gore y Quick Slice hacia Rk 20.'
  },
  {
    id: 'triniel',
    name: 'Triniel',
    unlockLvl: 40,
    color: '#a855f7',
    totalDP: 168,
    targetDP: 85,
    focus: 'Multi-Hit Chance (sinergia reset-on-crit)',
    corners: '2× Multi-Hit +1.5% / 2× MH Resist +1.5%',
    fullBoard: 'MH +4.5%, HP +1500, Crit Hit +75',
    // Blue nodes couga54 textual: Shadowstrike, Flash Slice, Defiance (nodos exclusivos de Triniel)
    blues: [
      { skill: 'shadow',   name: 'Shadowstrike +1',        why: 'Rk 12 breakpoint: +20% Crit Damage 10s' },
      { skill: 'flash',    name: 'Flash Slice +1',         why: 'Rk 12 breakpoint: +1 consecutive use' },
      { skill: 'defiance', name: 'Defiance +1',            why: 'Rk 12-16: swap heal → damage tolerance' },
    ],
    tip: 'Triniel desbloqueado en Lv 40. 85 DP objetivo (board más grande, 168 totales). Prioriza esquinas Multi-Hit Chance (sinergia brutal con reset-on-crit de Heart Gore).'
  },
  {
    id: 'azphel',
    name: 'Azphel',
    unlockLvl: 45,
    color: '#8f98a8',
    totalDP: 232,
    targetDP: 0,
    focus: '⚠️ PvP SKIP para PvE puro',
    corners: '4× PvP Damage Boost / Tolerance',
    fullBoard: 'Solo stats PvP, 0 skill nodes',
    blues: [],
    tip: 'Azphel desbloqueado en Lv 45. ⚠️ SKIP para PvE puro — es 100% stats PvP, no tiene skill nodes. Usa currency separada (Azphel Points), no roba recursos de los otros boards.'
  }
];

function renderBoardCard(board) {
  const bluesList = board.blues.length
    ? board.blues.map((b, i) => `
        <li class="blue-step">
          <span class="step-num">${i + 1}</span>
          <img src="icons/${SKILL_ICON_FILE[b.skill]}" class="step-icon" alt="${b.skill}" onerror="this.style.display='none'">
          <div class="step-info">
            <strong>${b.name}</strong>
            <small>${b.why}</small>
          </div>
        </li>`).join('')
    : '<li class="blue-step empty">Sin skill nodes (board PvP, skip en PvE).</li>';

  const ownedCount = board.blues.filter((b, i) => localStorage.getItem(`aion2_board_${board.id}_blue_${i}`) === 'true').length;

  return `
    <div class="board-card" data-board="${board.id}" style="border-left-color:${board.color}">
      <div class="board-card-header">
        <div>
          <h3 style="color:${board.color}">${board.name} Board <span class="muted">— Lv ${board.unlockLvl}</span></h3>
          <div class="board-badges">
            <span class="badge" style="color:${board.color};border-color:${board.color}">${board.targetDP} DP objetivo</span>
            <span class="badge muted">${board.totalDP} DP total disponibles</span>
          </div>
        </div>
        <div class="board-progress">
          <div class="progress-count">${ownedCount}/${board.blues.length}</div>
          <small class="muted">blues desbloqueados</small>
        </div>
      </div>

      <p class="board-focus"><strong>Foco:</strong> ${board.focus}</p>
      <p class="board-corners"><strong>Esquinas (unique):</strong> ${board.corners}</p>

      <h4>Orden progresivo de blues (skill nodes +1)</h4>
      <ol class="blues-list" data-board="${board.id}">
        ${bluesList}
      </ol>

      <p class="board-full-note"><strong>Full board si completas todo:</strong> ${board.fullBoard}</p>
      <div class="callout info"><strong>Guía couga54:</strong> ${board.tip}</div>
    </div>
  `;
}

function buildAllBoards() {
  const container = document.getElementById('boardsContainer');
  if (!container) return;
  container.innerHTML = '';

  // Link al planner real + disclaimer honesto
  const header = document.createElement('div');
  header.className = 'daevanion-intro';
  header.innerHTML = `
    <div class="callout crit">
      <strong>⚠️ Topología visual exacta no publicada.</strong> couga54 no publica el mapa textual de qué nodo va en qué (x,y). Para visualizar la grilla interactiva REAL usa el planner oficial de couga54:
      <p style="margin-top:0.5rem">
        <a href="https://couga54.github.io/aion2-guides/en/assassin/#daevanion" target="_blank" rel="noopener" style="color:var(--accent);font-size:1.05rem;text-decoration:underline">
          → Abrir planner Daevanion de couga54 ↗
        </a>
      </p>
      Esta sección da el <strong>orden progresivo</strong> de qué blues (skill nodes +1) priorizar en cada board. Sin inventar posiciones.
    </div>
    <div class="daevanion-order-summary">
      <strong>Orden de prioridad entre boards (al desbloquearlos):</strong>
      <ol style="margin-top:0.5rem">
        <li><strong>Vaizel (Lv 30)</strong> — board #1 PvE, esquinas Crit Damage Boost</li>
        <li><strong>Triniel (Lv 40)</strong> — Multi-Hit Chance (sinergia Heart Gore)</li>
        <li><strong>Nezekan (Lv 12)</strong> — esquinas CDR + 5 blues clave</li>
        <li><strong>Zikel (Lv 20)</strong> — esquinas Damage Boost</li>
        <li><strong>Azphel (Lv 45)</strong> — SKIP si PvE puro</li>
      </ol>
      <p style="margin-top:0.5rem"><strong>Total DP ruta PvE:</strong> 63 + 59 + 60 + 85 = <strong>267 DP</strong> (couga54 exacto).</p>
    </div>
  `;
  container.appendChild(header);

  // Boards cards
  const grid = document.createElement('div');
  grid.className = 'boards-grid';
  BOARDS.forEach(b => {
    grid.insertAdjacentHTML('beforeend', renderBoardCard(b));
  });
  container.appendChild(grid);

  // Click handler para marcar blues como desbloqueados
  container.addEventListener('click', e => {
    const step = e.target.closest('.blue-step');
    if (!step) return;
    const list = step.closest('.blues-list');
    if (!list) return;
    const boardId = list.dataset.board;
    const idx = Array.from(list.children).indexOf(step);
    const key = `aion2_board_${boardId}_blue_${idx}`;
    const current = localStorage.getItem(key) === 'true';
    const newState = !current;
    localStorage.setItem(key, newState);
    step.classList.toggle('owned', newState);
    // Actualizar contador
    const board = BOARDS.find(b => b.id === boardId);
    const owned = board.blues.filter((_, i) => localStorage.getItem(`aion2_board_${boardId}_blue_${i}`) === 'true').length;
    const counter = step.closest('.board-card').querySelector('.progress-count');
    if (counter) counter.textContent = `${owned}/${board.blues.length}`;
  });

  // Cargar estado guardado
  container.querySelectorAll('.blues-list').forEach(list => {
    const boardId = list.dataset.board;
    list.querySelectorAll('.blue-step').forEach((step, i) => {
      const key = `aion2_board_${boardId}_blue_${i}`;
      if (localStorage.getItem(key) === 'true') step.classList.add('owned');
    });
  });
}

window.buildAllBoards = buildAllBoards;
document.addEventListener('DOMContentLoaded', buildAllBoards);
