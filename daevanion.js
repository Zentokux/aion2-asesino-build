// Aion 2 Global S1 — Daevanion Boards Asesino PvE
// Vista PROGRESIVA: cada board como secuencia de pasos conectados en orden,
// basado en el route amarillo de couga54 (https://couga54.github.io/aion2-guides/en/assassin/)
// Total: 288 pts (Nez 63 + Zik 65 + Vai 69 + Tri 91 + Azp 0)

const SKILL_ICON = {
  heart: 'heart_gore.webp', quick: 'quick_slice.webp', insignia: 'insignia_explosion.webp',
  savage: 'savage_roar.webp', shadow: 'shadowstrike.webp', ambush: 'ambush.webp',
  flash: 'flash_slice.webp', storm: 'storm_rampage.webp', whirl: 'whirlwind_slice.webp',
  infiltrate: 'infiltrate.webp', shadowfall: 'shadow_fall.webp', defiance: 'defiance.webp',
  rear: 'rear_smite.webp', exploit: 'exploit_weakness.webp', assault: 'assault_stance.webp',
  impact: 'impact_hit.webp', poison: 'apply_poison.webp', sixthsense: 'sixth_sense.webp',
  ambushstance: 'ambush_stance.webp', defbreak: 'defense_break.webp', determination: 'determination.webp',
};

const SKILL_LABEL = {
  heart: 'Desgarro de Corazón', quick: 'Tajo Rápido', insignia: 'Explosión de Insignia',
  savage: 'Rugido Salvaje', shadow: 'Golpe de Sombra', ambush: 'Emboscada',
  flash: 'Tajo Relámpago', storm: 'Furia Tormentosa', whirl: 'Tajo Torbellino',
  infiltrate: 'Infiltración', shadowfall: 'Caída de Sombra', defiance: 'Desafío',
  rear: 'Golpe Trasero', exploit: 'Explotar Debilidad', assault: 'Postura de Asalto',
  impact: 'Golpe de Impacto', poison: 'Aplicar Veneno', sixthsense: 'Sexto Sentido',
  ambushstance: 'Postura de Emboscada', defbreak: 'Ruptura de Defensa', determination: 'Determinación',
};

// Para cada board, secuencia LINEAL del route (orden couga54, en qué echar los puntos)
// type: 'special' (esquina 4pt), 'skill' (3pt), 'passive' (2pt), 'stat1' (1pt), 'stat23' (2-3pt), 'center' (0pt)
const BOARDS = [
  {
    id: 'nezekan',
    name: 'Nezekan',
    unlockLvl: 12,
    color: '#4ea8de',
    totalDP: 63,
    focus: 'Combat Speed + Cooldown Reduction',
    fullBoard: 'Combat Speed +3%, CDR +3%',
    route: [
      { type: 'center', label: 'Centro (gratis)', cost: 0 },
      { type: 'special', label: 'Esquina ★ Combat Speed +1.5%', cost: 4 },
      { type: 'stat1', label: 'Attack +5', cost: 1 },
      { type: 'stat1', label: 'Attack +5', cost: 1 },
      { type: 'skill', skill: 'heart', cost: 3 },
      { type: 'stat1', label: 'Crit Hit +5', cost: 1 },
      { type: 'stat1', label: 'CS Path', cost: 1 },
      { type: 'stat23', label: 'Attack +10', cost: 2 },
      { type: 'stat1', label: 'CDR Path', cost: 1 },
      { type: 'skill', skill: 'quick', cost: 3 },
      { type: 'stat1', label: 'CDR Path', cost: 1 },
      { type: 'skill', skill: 'insignia', cost: 3 },
      { type: 'skill', skill: 'shadow', cost: 3 },
      { type: 'stat1', label: 'Crit Hit +5', cost: 1 },
      { type: 'passive', skill: 'rear', cost: 2 },
      { type: 'stat1', label: 'CDR Path', cost: 1 },
      { type: 'stat1', label: 'CDR Path', cost: 1 },
      { type: 'stat23', label: 'CDR +1.5%', cost: 3 },
      { type: 'special', label: 'Esquina ★ CDR +1.5%', cost: 4 },
      { type: 'stat1', label: 'Bajada SE', cost: 1 },
      { type: 'stat1', label: 'Bajada SE', cost: 1 },
      { type: 'skill', skill: 'shadowfall', cost: 3 },
      { type: 'stat1', label: 'Attack +5', cost: 1 },
      { type: 'stat1', label: 'Attack +5', cost: 1 },
      { type: 'skill', skill: 'savage', cost: 3 },
      { type: 'stat1', label: 'Base inferior', cost: 1 },
      { type: 'stat1', label: 'Base inferior', cost: 1 },
      { type: 'special', label: 'Esquina ★ Combat Speed +1.5% (SW)', cost: 4 },
      { type: 'stat1', label: 'Base inferior', cost: 1 },
      { type: 'stat1', label: 'Base inferior', cost: 1 },
      { type: 'special', label: 'Esquina ★ CDR +1.5% (SE)', cost: 4 },
      { type: 'stat1', label: 'Attack +5', cost: 1 },
      { type: 'stat23', label: 'Multi-Hit +1', cost: 3 },
    ],
    tip: 'Nezekan desbloqueado Lv 12. 63 pts total. Prioriza las 3 esquinas que couga54 marca en route (CS NW + CDR NE + CS/CDR SW/SE). Blues clave: Heart Gore, Quick Slice, Insignia Explosion, Shadowstrike, Shadow Fall, Savage Roar.'
  },

  {
    id: 'zikel',
    name: 'Zikel',
    unlockLvl: 20,
    color: '#f59e0b',
    totalDP: 65,
    focus: 'Damage Boost + Damage Tolerance',
    fullBoard: 'DB +3%, DT +3%',
    route: [
      { type: 'center', label: 'Centro (gratis)', cost: 0 },
      { type: 'special', label: 'Esquina ★ Damage Boost +1.5% (NW)', cost: 4 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'skill', skill: 'insignia', cost: 3 },
      { type: 'passive', skill: 'assault', cost: 2 },
      { type: 'skill', skill: 'savage', cost: 3 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'special', label: 'Esquina ★ Damage Boost +1.5% (NE)', cost: 4 },
      { type: 'skill', skill: 'quick', cost: 3 },
      { type: 'stat1', label: 'Fila 3', cost: 1 },
      { type: 'stat1', label: 'Fila 3', cost: 1 },
      { type: 'passive', skill: 'ambushstance', cost: 2 },
      { type: 'stat1', label: 'Camino al centro', cost: 1 },
      { type: 'stat23', label: 'Attack +10', cost: 3 },
      { type: 'stat1', label: 'Camino al centro', cost: 1 },
      { type: 'stat1', label: 'Camino al centro', cost: 1 },
      { type: 'stat1', label: 'Camino abajo', cost: 1 },
      { type: 'stat1', label: 'Camino abajo', cost: 1 },
      { type: 'stat1', label: 'Camino abajo', cost: 1 },
      { type: 'skill', skill: 'infiltrate', cost: 3 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'skill', skill: 'insignia', cost: 3 },
      { type: 'passive', skill: 'poison', cost: 2 },
      { type: 'skill', skill: 'heart', cost: 3 },
      { type: 'special', label: 'Esquina ★ Damage Tolerance +1.5% (SW)', cost: 4 },
      { type: 'stat1', label: 'Base inferior', cost: 1 },
      { type: 'stat1', label: 'Base inferior', cost: 1 },
      { type: 'stat1', label: 'Base inferior', cost: 1 },
      { type: 'special', label: 'Esquina ★ Damage Tolerance +1.5% (SE)', cost: 4 },
    ],
    tip: 'Zikel desbloqueado Lv 20. 65 pts total. 4 esquinas en route (ambas Damage Boost ofensivas + 2 Damage Tolerance). Blues clave: Insignia Explosion ×2, Quick Slice, Savage Roar, Infiltrate, Heart Gore. Pasivas: Assault Stance, Ambush Stance, Apply Poison.'
  },

  {
    id: 'vaizel',
    name: 'Vaizel',
    unlockLvl: 30,
    color: '#ff4d6d',
    totalDP: 69,
    focus: '⭐ Critical Damage (BOARD #1 PvE MAX DPS)',
    fullBoard: 'CDB +3%, CDT +3%, Crit Hit +55',
    route: [
      { type: 'center', label: 'Centro (gratis)', cost: 0 },
      { type: 'special', label: 'Esquina ★ Crit Damage Boost +1.5% (NW)', cost: 4 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'passive', skill: 'sixthsense', cost: 2 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'skill', skill: 'insignia', cost: 3 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'passive', skill: 'poison', cost: 2 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'special', label: 'Esquina ★ Crit Damage Boost +1.5% (NE)', cost: 4 },
      { type: 'stat1', label: 'Bajada al centro', cost: 1 },
      { type: 'stat1', label: 'Bajada al centro', cost: 1 },
      { type: 'passive', skill: 'determination', cost: 2 },
      { type: 'stat1', label: 'Bajada al centro', cost: 1 },
      { type: 'stat1', label: 'Bajada al centro', cost: 1 },
      { type: 'stat1', label: 'Centro expand →', cost: 1 },
      { type: 'stat1', label: 'Centro expand →', cost: 1 },
      { type: 'skill', skill: 'heart', cost: 3 },
      { type: 'stat1', label: 'Fila 5', cost: 1 },
      { type: 'stat1', label: 'Fila 5', cost: 1 },
      { type: 'skill', skill: 'quick', cost: 3 },
      { type: 'stat1', label: 'Centro expand ←', cost: 1 },
      { type: 'stat1', label: 'Centro expand ←', cost: 1 },
      { type: 'skill', skill: 'insignia', cost: 3 },
      { type: 'stat1', label: 'Fila 6', cost: 1 },
      { type: 'stat1', label: 'Fila 6', cost: 1 },
      { type: 'stat23', label: 'Attack +10', cost: 3 },
      { type: 'stat1', label: 'Bajada SW', cost: 1 },
      { type: 'skill', skill: 'storm', cost: 3 },
      { type: 'stat1', label: 'Bajada SW', cost: 1 },
      { type: 'stat1', label: 'Bajada SW', cost: 1 },
      { type: 'stat1', label: 'Base SW', cost: 1 },
      { type: 'special', label: 'Esquina ★ Crit Damage Tolerance +1.5% (SW)', cost: 4 },
      { type: 'skill', skill: 'defiance', cost: 3 },
      { type: 'stat1', label: 'Base SE', cost: 1 },
      { type: 'special', label: 'Esquina ★ Crit Damage Tolerance +1.5% (SE)', cost: 4 },
    ],
    tip: '⭐ BOARD #1 Asesino PvE. 69 pts total. 4 esquinas en route (2 CDB ofensivas + 2 CDT defensivas). Blues clave: Heart Gore, Quick Slice, Insignia Explosion ×2, Storm Rampage, Defiance. Pasivas: Sixth Sense, Apply Poison, Determination.'
  },

  {
    id: 'triniel',
    name: 'Triniel',
    unlockLvl: 40,
    color: '#a855f7',
    totalDP: 91,
    focus: 'Multi-Hit Chance (sinergia reset-on-crit)',
    fullBoard: 'MH +4.5%, HP +1500, Crit Hit +75',
    route: [
      { type: 'center', label: 'Centro (gratis)', cost: 0 },
      { type: 'special', label: 'Esquina ★ Multi-Hit +1.5% (NW)', cost: 4 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'skill', skill: 'shadow', cost: 3 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'skill', skill: 'ambush', cost: 3 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'special', label: 'Esquina ★ Multi-Hit +1.5% (N)', cost: 4 },
      { type: 'stat1', label: 'Borde superior', cost: 1 },
      { type: 'special', label: 'Esquina ★ Multi-Hit +1.5% (NE)', cost: 4 },
      { type: 'skill', skill: 'insignia', cost: 3 },
      { type: 'stat1', label: 'Fila 3', cost: 1 },
      { type: 'passive', skill: 'exploit', cost: 2 },
      { type: 'stat1', label: 'Fila 3', cost: 1 },
      { type: 'passive', skill: 'determination', cost: 2 },
      { type: 'stat1', label: 'Camino al centro', cost: 1 },
      { type: 'skill', skill: 'rear', cost: 3 },
      { type: 'skill', skill: 'quick', cost: 3 },
      { type: 'stat1', label: 'Fila 5', cost: 1 },
      { type: 'stat1', label: 'Fila 5', cost: 1 },
      { type: 'stat1', label: 'Centro expand', cost: 1 },
      { type: 'skill', skill: 'heart', cost: 3 },
      { type: 'stat1', label: 'Fila 6', cost: 1 },
      { type: 'stat1', label: 'Fila 6', cost: 1 },
      { type: 'skill', skill: 'insignia', cost: 3 },
      { type: 'skill', skill: 'savage', cost: 3 },
      { type: 'stat1', label: 'Fila 8', cost: 1 },
      { type: 'stat1', label: 'Fila 8', cost: 1 },
      { type: 'passive', skill: 'determination', cost: 2 },
      { type: 'stat1', label: 'Bajada SW', cost: 1 },
      { type: 'stat1', label: 'Bajada SW', cost: 1 },
      { type: 'stat1', label: 'Bajada SW', cost: 1 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'skill', skill: 'shadowfall', cost: 3 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'skill', skill: 'storm', cost: 3 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'passive', skill: 'ambushstance', cost: 2 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'skill', skill: 'quick', cost: 3 },
      { type: 'stat1', label: 'Fila inferior', cost: 1 },
      { type: 'stat1', label: 'Base', cost: 1 },
      { type: 'stat1', label: 'Base', cost: 1 },
      { type: 'special', label: 'Esquina ★ Multi-Hit +1.5% (SW)', cost: 4 },
      { type: 'special', label: 'Esquina ★ Multi-Hit +1.5% (S)', cost: 4 },
      { type: 'special', label: 'Esquina ★ Multi-Hit +1.5% (SE)', cost: 4 },
    ],
    tip: 'Triniel desbloqueado Lv 40. 91 pts (board más grande). 6 esquinas Multi-Hit en route (sinergia brutal con reset-on-crit de Heart Gore). Blues clave: Shadowstrike, Ambush, Insignia Explosion ×2, Rear Smite, Quick Slice ×2, Heart Gore, Savage Roar, Shadow Fall, Storm Rampage.'
  },

  {
    id: 'azphel',
    name: 'Azphel',
    unlockLvl: 45,
    color: '#8f98a8',
    totalDP: 0,
    focus: '⚠️ PvP — SKIP para PvE puro',
    fullBoard: 'Solo stats PvP (DB/DT/Status Chance/Resist)',
    route: [
      { type: 'center', label: 'Centro — board 100% PvP', cost: 0 },
    ],
    tip: 'Azphel es 100% PvP. 0 pts en route PvE. Si harás arenas/sieges, prioriza las 4 esquinas PvP DB. En PvE puro, no gastar DP aquí.'
  }
];

const TOTAL_PTS = BOARDS.reduce((s, b) => s + b.totalDP, 0);

function nodeColor(type) {
  if (type === 'center') return '#f4c430';
  if (type === 'special') return '#f4c430';
  if (type === 'skill') return '#4ea8de';
  if (type === 'passive') return '#22c55e';
  if (type === 'stat23') return '#4ea8de';
  return '#5a6478';
}

function nodeIcon(step) {
  if (step.type === 'skill' || step.type === 'passive') {
    if (step.skill && SKILL_ICON[step.skill]) {
      return `<img src="icons/${SKILL_ICON[step.skill]}" alt="${step.skill}" onerror="this.style.display='none'">`;
    }
  }
  if (step.type === 'special') return '<span class="step-glyph">◆</span>';
  if (step.type === 'center') return '<span class="step-glyph">●</span>';
  if (step.type === 'stat23') return '<span class="step-glyph">◉</span>';
  return '<span class="step-glyph">○</span>';
}

function stepLabel(step) {
  if (step.skill) return SKILL_LABEL[step.skill] + ' +1';
  return step.label || '';
}

function typeLabel(type) {
  if (type === 'center') return 'centro';
  if (type === 'special') return 'special · 4 pt';
  if (type === 'skill') return 'skill · 3 pt';
  if (type === 'passive') return 'passive · 2 pt';
  if (type === 'stat23') return 'stat 2-3 pt';
  return 'stat · 1 pt';
}

function buildProgressiveRoute(board) {
  let acum = 0;
  const steps = board.route.map((step, i) => {
    acum += step.cost;
    const num = i; // 0 = centro
    const isCenter = step.type === 'center';
    const icon = nodeIcon(step);
    const color = nodeColor(step.type);
    const label = stepLabel(step);
    const typeTxt = typeLabel(step.type);
    const costTxt = step.cost > 0 ? `+${step.cost} pt` : 'gratis';
    const key = `aion2_dv_${board.id}_${num}`;
    return `<li class="route-node ${isCenter ? 'center' : ''}" data-board="${board.id}" data-order="${num}" style="--node-color:${color}">
      <div class="node-connector"></div>
      <div class="node-number">${num === 0 ? '•' : num}</div>
      <div class="node-icon-wrap">${icon}</div>
      <div class="node-info">
        <div class="node-label">${label}</div>
        <div class="node-meta"><span class="node-type">${typeTxt}</span> · <span class="node-cost">${costTxt}</span> · <span class="node-acum">acum ${acum}</span></div>
      </div>
      <div class="node-check">✓</div>
    </li>`;
  });
  return steps.join('');
}

// === Gráfico estilo tiles del juego Aion 2 ===
// Grilla cuadrada de tiles con glifos rúnicos (como la captura in-game)
// Nodos del route se muestran coloreados/brillantes, resto como tiles neutras

// Glifo rúnico según tipo de nodo
function glyph(type) {
  if (type === 'center') return '✦';
  if (type === 'special') return 'ν'; // U/V rune
  if (type === 'skill') return 'Μ';   // M mayús
  if (type === 'passive') return 'ν';
  if (type === 'stat23') return 'Σ';  // sigma
  return 'Μ'; // stat1 por default
}

// Color del glifo según tipo + si está en route
function glyphColor(type, inRoute) {
  if (type === 'center') return '#f4c430';
  if (type === 'special') return '#f4c430';
  if (!inRoute) return '#3a4050'; // tiles neutras oscuras
  if (type === 'skill') return '#4ea8de';
  if (type === 'passive') return '#22c55e';
  if (type === 'stat23') return '#4ea8de';
  return '#d4b65a'; // stat1 route = dorado tenue
}

// Posición snake: layout 8 cols en grilla CENTRADA en una grilla visible más grande
function buildSnakeSVG(board) {
  const GRID_COLS = 11; // grilla visible 11×11 estilo juego
  const GRID_ROWS = 11;
  const ROUTE_COLS = 8;
  const CELL = 56;
  const PAD = 20;
  const totalW = GRID_COLS * CELL + PAD * 2;
  const totalH = GRID_ROWS * CELL + PAD * 2;
  const route = board.route;

  // Snake pattern dentro de la grilla, centrada
  const startCol = Math.floor((GRID_COLS - ROUTE_COLS) / 2); // 1 u 2
  const routeRows = Math.ceil(route.length / ROUTE_COLS);
  const startRow = Math.floor((GRID_ROWS - routeRows) / 2);

  function pos(idx) {
    const r = Math.floor(idx / ROUTE_COLS);
    const colInRow = idx % ROUTE_COLS;
    const localX = r % 2 === 0 ? colInRow : (ROUTE_COLS - 1 - colInRow);
    return [startCol + localX, startRow + r];
  }

  // Mapa de posiciones route por (x,y)
  const routeMap = {};
  route.forEach((step, idx) => {
    const [x, y] = pos(idx);
    routeMap[`${x},${y}`] = { step, idx };
  });

  let svg = `<svg viewBox="0 0 ${totalW} ${totalH}" class="snake-svg" preserveAspectRatio="xMidYMin meet">`;
  svg += `<defs>
    <linearGradient id="tileGrad-${board.id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2a2a2e"/>
      <stop offset="100%" stop-color="#15161a"/>
    </linearGradient>
    <radialGradient id="glowUnlock-${board.id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#4ea8de" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#4ea8de" stop-opacity="0"/>
    </radialGradient>
    <filter id="tileShadow-${board.id}">
      <feGaussianBlur stdDeviation="1"/>
    </filter>
  </defs>`;
  svg += `<rect x="0" y="0" width="${totalW}" height="${totalH}" fill="#0a0b0f" rx="8"/>`;

  // === DIBUJAR TODAS las tiles de la grilla 11x11 estilo juego ===
  for (let gy = 0; gy < GRID_ROWS; gy++) {
    for (let gx = 0; gx < GRID_COLS; gx++) {
      const cx = PAD + gx * CELL + CELL/2;
      const cy = PAD + gy * CELL + CELL/2;
      const key = `${gx},${gy}`;
      const routeInfo = routeMap[key];
      const tsz = CELL - 10;

      // Fondo tile tipo piedra oscura (always visible)
      svg += `<g class="tile ${routeInfo ? 'in-route' : 'neutral'}" ${routeInfo ? `data-board="${board.id}" data-order="${routeInfo.idx}" style="cursor:pointer"` : ''}>`;
      svg += `<rect x="${cx - tsz/2}" y="${cy - tsz/2}" width="${tsz}" height="${tsz}" fill="url(#tileGrad-${board.id})" stroke="#3a3a40" stroke-width="1.5" rx="4"/>`;

      // Glow azul si este tile está en el route (como "activable")
      if (routeInfo) {
        const step = routeInfo.step;
        if (step.type !== 'center') {
          // Borde azul brillante alrededor del tile
          svg += `<rect x="${cx - tsz/2}" y="${cy - tsz/2}" width="${tsz}" height="${tsz}" fill="none" stroke="#4ea8de" stroke-width="2.5" rx="4" opacity="0.9"/>`;
          svg += `<rect x="${cx - tsz/2 - 3}" y="${cy - tsz/2 - 3}" width="${tsz + 6}" height="${tsz + 6}" fill="none" stroke="#4ea8de" stroke-width="1" rx="6" opacity="0.4"/>`;
        }

        // Contenido del tile según tipo
        if (step.type === 'center') {
          // Centro: emblema dorado grande
          svg += `<circle cx="${cx}" cy="${cy}" r="${tsz/2 - 2}" fill="#f4c430" stroke="#fff8dc" stroke-width="2" opacity="0.95"/>`;
          svg += `<text x="${cx}" y="${cy + 7}" text-anchor="middle" fill="#2b1810" font-size="22" font-weight="900" style="pointer-events:none">✦</text>`;
        } else if (step.type === 'special') {
          // Esquina especial dorada
          svg += `<rect x="${cx - tsz/2 + 3}" y="${cy - tsz/2 + 3}" width="${tsz - 6}" height="${tsz - 6}" fill="#f4c430" stroke="#fff8dc" stroke-width="1.5" rx="3" opacity="0.85"/>`;
          svg += `<text x="${cx}" y="${cy + 7}" text-anchor="middle" fill="#2b1810" font-size="20" font-weight="900" style="pointer-events:none">ν</text>`;
        } else if ((step.type === 'skill' || step.type === 'passive') && step.skill && SKILL_ICON[step.skill]) {
          // Skill/Passive: icono real
          const iconSz = tsz - 10;
          svg += `<image href="icons/${SKILL_ICON[step.skill]}" x="${cx - iconSz/2}" y="${cy - iconSz/2}" width="${iconSz}" height="${iconSz}" style="pointer-events:none"/>`;
          // Badge número pequeño abajo derecha
          svg += `<circle cx="${cx + tsz/2 - 6}" cy="${cy + tsz/2 - 6}" r="9" fill="#f4c430" stroke="#0a0b0f" stroke-width="1.5"/>`;
          svg += `<text x="${cx + tsz/2 - 6}" y="${cy + tsz/2 - 3}" text-anchor="middle" fill="#000" font-size="9" font-weight="900" style="pointer-events:none">${routeInfo.idx}</text>`;
        } else {
          // Stat: glifo rúnico coloreado
          const g = glyph(step.type);
          const col = glyphColor(step.type, true);
          svg += `<text x="${cx}" y="${cy + 8}" text-anchor="middle" fill="${col}" font-size="24" font-weight="900" style="pointer-events:none; font-family:serif">${g}</text>`;
          // Badge número pequeño
          svg += `<circle cx="${cx + tsz/2 - 6}" cy="${cy + tsz/2 - 6}" r="8" fill="#f4c430" stroke="#0a0b0f" stroke-width="1.5"/>`;
          svg += `<text x="${cx + tsz/2 - 6}" y="${cy + tsz/2 - 3}" text-anchor="middle" fill="#000" font-size="8" font-weight="900" style="pointer-events:none">${routeInfo.idx}</text>`;
        }
      } else {
        // Tile neutra (no route): glifo gris apagado aleatorio
        const neutralGlyphs = ['Μ', 'ν', 'Σ', 'Μ', 'Μ']; // más Μ que otros, estilo juego
        const seed = (gx * 7 + gy * 13) % neutralGlyphs.length;
        svg += `<text x="${cx}" y="${cy + 7}" text-anchor="middle" fill="#3a4050" font-size="18" font-weight="700" style="pointer-events:none; font-family:serif">${neutralGlyphs[seed]}</text>`;
      }

      svg += `</g>`;
    }
  }

  svg += '</svg>';
  return svg;
}

function buildAllBoards() {
  const container = document.getElementById('boardsContainer');
  if (!container) return;
  container.innerHTML = '';

  // Header intro
  const header = document.createElement('div');
  header.className = 'daev-intro';
  header.innerHTML = `
    <div class="callout info">
      <strong>Vista progresiva simplificada:</strong> cada board aparece como una secuencia conectada paso 1 → 2 → 3... en el orden exacto del route amarillo de couga54. Click en cada paso para marcarlo como desbloqueado. Para ver la grilla visual real (con layout exacto en celdas), usa el <a href="https://couga54.github.io/aion2-guides/en/assassin/#daevanion" target="_blank" rel="noopener" style="color:var(--accent)">planner oficial de couga54 ↗</a>.
    </div>
    <div class="daev-totals-top">
      <strong>${TOTAL_PTS} points in total</strong>
      <small>Nez ${BOARDS[0].totalDP} · Zik ${BOARDS[1].totalDP} · Vai ${BOARDS[2].totalDP} · Tri ${BOARDS[3].totalDP} · Azp ${BOARDS[4].totalDP}</small>
    </div>
  `;
  container.appendChild(header);

  // Tabs
  const tabs = document.createElement('div');
  tabs.className = 'board-tabs';
  BOARDS.forEach((b, i) => {
    const btn = document.createElement('button');
    btn.innerHTML = `<strong style="color:${b.color}">${b.name}</strong><br><small style="color:var(--text-dim)">Lv ${b.unlockLvl} · ${b.totalDP} pts</small>`;
    btn.dataset.board = b.id;
    if (i === 0) btn.classList.add('active');
    tabs.appendChild(btn);
  });
  container.appendChild(tabs);

  // Panels
  BOARDS.forEach((b, i) => {
    const panel = document.createElement('div');
    panel.className = 'board-panel' + (i === 0 ? ' active' : '');
    panel.id = 'board-' + b.id;

    const totalSteps = b.route.length - 1; // sin centro
    const ownedCount = b.route.filter((_, idx) => idx > 0 && localStorage.getItem(`aion2_dv_${b.id}_${idx}`) === 'true').length;

    const snakeSvg = b.totalDP > 0 ? buildSnakeSVG(b) : '';
    panel.innerHTML = `
      <div class="board-header">
        <h3 style="color:${b.color}">${b.name} <span class="muted">— Lv ${b.unlockLvl}</span></h3>
        <div class="board-meta">
          <span class="badge" style="color:${b.color};border-color:${b.color}">${b.totalDP} pts route couga54</span>
          <span class="badge">${b.focus}</span>
          <span class="badge ok" id="count-${b.id}">${ownedCount} / ${totalSteps} pasos</span>
        </div>
        <p class="board-full"><strong>Full board si completas:</strong> ${b.fullBoard}</p>
        <div class="callout info"><strong>Guía couga54:</strong> ${b.tip}</div>
      </div>

      ${b.totalDP > 0 ? `
      <h4>📊 Gráfico simple — ruta conectada (click en nodo para marcar)</h4>
      <div class="snake-wrap">${snakeSvg}</div>
      ` : ''}

      <h4>📝 Modo progresivo — paso 1, 2, 3, 4...</h4>
      <ul class="progressive-route" data-board="${b.id}">
        ${buildProgressiveRoute(b)}
      </ul>
    `;
    container.appendChild(panel);
  });

  // Tabs switch
  tabs.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.board-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('board-' + btn.dataset.board).classList.add('active');
    });
  });

  // Click to mark (lista textual Y gráfico snake)
  function toggleStep(boardId, order) {
    if (order === '0' || order === 0) return; // centro no clickeable
    const key = `aion2_dv_${boardId}_${order}`;
    const current = localStorage.getItem(key) === 'true';
    const newState = !current;
    localStorage.setItem(key, newState);
    // Sincronizar lista textual
    const listNode = container.querySelector(`.route-node[data-board="${boardId}"][data-order="${order}"]`);
    if (listNode) listNode.classList.toggle('owned', newState);
    // Sincronizar tile del gráfico
    const tile = container.querySelector(`.tile.in-route[data-board="${boardId}"][data-order="${order}"]`);
    if (tile) tile.classList.toggle('owned', newState);
    // Update counter
    const board = BOARDS.find(b => b.id === boardId);
    const totalSteps = board.route.length - 1;
    const ownedCount = board.route.filter((_, idx) => idx > 0 && localStorage.getItem(`aion2_dv_${board.id}_${idx}`) === 'true').length;
    const counter = document.getElementById('count-' + boardId);
    if (counter) counter.textContent = `${ownedCount} / ${totalSteps} pasos`;
  }

  container.addEventListener('click', e => {
    // Click en lista textual
    const node = e.target.closest('.route-node');
    if (node && !node.classList.contains('center')) {
      toggleStep(node.dataset.board, node.dataset.order);
      return;
    }
    // Click en tile del gráfico (nuevo estilo juego)
    const tile = e.target.closest('.tile.in-route');
    if (tile) {
      toggleStep(tile.dataset.board, tile.dataset.order);
    }
  });

  // Load saved (ambos list y tiles)
  container.querySelectorAll('.route-node').forEach(node => {
    const key = `aion2_dv_${node.dataset.board}_${node.dataset.order}`;
    if (localStorage.getItem(key) === 'true') node.classList.add('owned');
  });
  container.querySelectorAll('.tile.in-route').forEach(node => {
    const key = `aion2_dv_${node.dataset.board}_${node.dataset.order}`;
    if (localStorage.getItem(key) === 'true') node.classList.add('owned');
  });
}

window.buildAllBoards = buildAllBoards;
document.addEventListener('DOMContentLoaded', buildAllBoards);
