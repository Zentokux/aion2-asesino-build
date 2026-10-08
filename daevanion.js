// Aion 2 Global S1 — Daevanion Boards: grilla completa + camino PvE
// Cada board tiene ~85-100 nodos reales (134-168 DP). La grilla de fondo
// representa los stat nodes, encima destaca el camino recomendado numerado.

const BOARD_SIZE = 15;

// Mapping skill key → icon file (localhost icons/)
const SKILL_ICON_FILE = {
  heart: 'heart_gore.webp', quick: 'quick_slice.webp', insignia: 'insignia_explosion.webp',
  savage: 'savage_roar.webp', shadow: 'shadowstrike.webp', ambush: 'ambush.webp',
  flash: 'flash_slice.webp', storm: 'storm_rampage.webp', whirl: 'whirlwind_slice.webp',
  infiltrate: 'infiltrate.webp', shadowfall: 'shadow_fall.webp', defiance: 'defiance.webp',
  rear: 'rear_smite.webp', exploit: 'exploit_weakness.webp', assault: 'assault_stance.webp',
  impact: 'impact_hit.webp', poison: 'apply_poison.webp', sixthsense: 'sixth_sense.webp',
  ambushstance: 'ambush_stance.webp', defbreak: 'defense_break.webp', determination: 'determination.webp',
};

// Pattern para generar stat nodes de fondo (densidad similar a couga54)
function hasBackgroundNode(x, y) {
  const cx = 7, cy = 7;
  const dx = x - cx, dy = y - cy;
  if (x === cx || y === cy) return true;
  if (x === 0 || x === 14 || y === 0 || y === 14) return true;
  if (Math.abs(dx) === Math.abs(dy)) return true;
  if ((x + y) % 2 === 0 && Math.max(Math.abs(dx), Math.abs(dy)) <= 5) return true;
  return false;
}

const BOARDS = [
  {
    id: 'nezekan',
    name: 'Nezekan',
    unlockLvl: 12,
    color: '#4ea8de',
    totalDP: 134,
    focus: 'Combat Speed + CDR (couga54: 63 DP objetivo)',
    cornerStats: ['Combat Speed +1.5%', 'Combat Speed +1.5%', 'CDR +1.5%', 'CDR +1.5%'],
    fullBoard: 'Combat Speed +3%, CDR +3%',
    cornerType: 'CS/CDR',
    // Path couga54: blue nodes Heart Gore, Storm Rampage, Quick Slice, Ambush, Insignia Explosion
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 6, type: 'stat', label: 'Attack +5', order: 1, cost: 1 },
      { x: 7, y: 5, type: 'epic', label: 'Heart Gore +1 (blue)', order: 2, cost: 3, skill: 'heart' },
      { x: 7, y: 4, type: 'stat', label: 'Crit Hit +5', order: 3, cost: 1 },
      { x: 7, y: 3, type: 'epic', label: 'Insignia Explosion +1 (blue)', order: 4, cost: 3, skill: 'insignia' },
      { x: 7, y: 2, type: 'stat', label: 'Attack +5', order: 5, cost: 1 },
      { x: 7, y: 1, type: 'epic', label: 'Quick Slice +1 (blue)', order: 6, cost: 3, skill: 'quick' },
      { x: 7, y: 0, type: 'stat', label: 'Combat Speed +0.5%', order: 7, cost: 1 },
      { x: 6, y: 0, type: 'stat', label: 'CS Path', order: 8, cost: 1 },
      { x: 5, y: 0, type: 'epic', label: 'Storm Rampage +1 (blue)', order: 9, cost: 3, skill: 'storm' },
      { x: 4, y: 0, type: 'stat', label: 'CS Path', order: 10, cost: 1 },
      { x: 3, y: 0, type: 'rare', label: 'Rear Smite +1', order: 11, cost: 2, skill: 'rear' },
      { x: 2, y: 0, type: 'stat', label: 'Attack +5', order: 12, cost: 1 },
      { x: 1, y: 0, type: 'stat', label: 'CS Path', order: 13, cost: 1 },
      { x: 0, y: 0, type: 'unique', label: '★ Combat Speed +1.5% (esquina)', order: 14, cost: 4 },
      { x: 8, y: 7, type: 'stat', label: 'Attack +5', order: 15, cost: 1 },
      { x: 9, y: 7, type: 'epic', label: 'Ambush +1 (blue)', order: 16, cost: 3, skill: 'ambush' },
      { x: 10, y: 7, type: 'stat', label: 'Crit Hit +5', order: 17, cost: 1 },
      { x: 11, y: 7, type: 'stat', label: 'CDR Path', order: 18, cost: 1 },
      { x: 12, y: 7, type: 'rare', label: 'Assault Stance +1', order: 19, cost: 2, skill: 'assault' },
      { x: 13, y: 7, type: 'stat', label: 'CDR Path', order: 20, cost: 1 },
      { x: 14, y: 7, type: 'stat', label: 'Attack +5', order: 21, cost: 1 },
      { x: 14, y: 6, type: 'stat', label: 'CDR Path', order: 22, cost: 1 },
      { x: 14, y: 5, type: 'rare', label: 'Exploit Weakness +1', order: 23, cost: 2, skill: 'exploit' },
      { x: 14, y: 4, type: 'stat', label: 'CDR +0.5%', order: 24, cost: 1 },
      { x: 14, y: 3, type: 'stat', label: 'CDR +0.5%', order: 25, cost: 1 },
      { x: 14, y: 2, type: 'stat', label: 'CDR +0.5%', order: 26, cost: 1 },
      { x: 14, y: 1, type: 'stat', label: 'CDR +0.5%', order: 27, cost: 1 },
      { x: 14, y: 0, type: 'unique', label: '★ CDR +1.5% (esquina)', order: 28, cost: 4 },
    ],
    tip: 'couga54: blue nodes Heart Gore + Insignia Explosion + Quick Slice + Storm Rampage + Ambush (5 skills activos). 63 DP objetivo.'
  },
  {
    id: 'zikel',
    name: 'Zikel',
    unlockLvl: 20,
    color: '#f59e0b',
    totalDP: 134,
    focus: 'Damage Boost + Damage Tolerance',
    cornerStats: ['Damage Boost +1.5%', 'Damage Boost +1.5%', 'DT +1.5%', 'DT +1.5%'],
    fullBoard: 'DB +3%, DT +3%',
    cornerType: 'DB/DT',
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 8, type: 'stat', label: 'Attack +10', order: 1, cost: 1 },
      { x: 7, y: 9, type: 'epic', label: 'Insignia Explosion +1', order: 2, cost: 3, skill: 'insignia' },
      { x: 7, y: 10, type: 'stat', label: 'Crit Hit +5', order: 3, cost: 1 },
      { x: 7, y: 11, type: 'epic', label: 'Quick Slice +1', order: 4, cost: 3, skill: 'quick' },
      { x: 7, y: 12, type: 'stat', label: 'Attack +5', order: 5, cost: 1 },
      { x: 7, y: 13, type: 'rare', label: 'Defense Break +1', order: 6, cost: 2, skill: 'defbreak' },
      { x: 7, y: 14, type: 'stat', label: 'DB Path', order: 7, cost: 1 },
      { x: 6, y: 14, type: 'stat', label: 'Attack +5', order: 8, cost: 1 },
      { x: 5, y: 14, type: 'epic', label: 'Impact Hit +1', order: 9, cost: 3, skill: 'impact' },
      { x: 4, y: 14, type: 'stat', label: 'DB Path', order: 10, cost: 1 },
      { x: 3, y: 14, type: 'epic', label: 'Storm Rampage +1', order: 11, cost: 3, skill: 'storm' },
      { x: 2, y: 14, type: 'stat', label: 'DB Path', order: 12, cost: 1 },
      { x: 1, y: 14, type: 'stat', label: 'DB Path', order: 13, cost: 1 },
      { x: 0, y: 14, type: 'unique', label: '★ Damage Boost +1.5% #1', order: 14, cost: 4 },
      { x: 8, y: 14, type: 'stat', label: 'Attack +5', order: 15, cost: 1 },
      { x: 9, y: 14, type: 'epic', label: 'Ambush +1', order: 16, cost: 3, skill: 'ambush' },
      { x: 10, y: 14, type: 'stat', label: 'Crit Hit +5', order: 17, cost: 1 },
      { x: 11, y: 14, type: 'rare', label: 'Ambush Stance +1', order: 18, cost: 2, skill: 'ambushstance' },
      { x: 12, y: 14, type: 'stat', label: 'DB Path', order: 19, cost: 1 },
      { x: 13, y: 14, type: 'epic', label: 'Shadowstrike +1', order: 20, cost: 3, skill: 'shadow' },
      { x: 14, y: 14, type: 'unique', label: '★ Damage Boost +1.5% #2', order: 21, cost: 4 },
    ],
    tip: 'Camino PvE a AMBAS esquinas DB. Pasa por Defense Break, Impact Hit, Storm Rampage, Ambush, Shadowstrike. ~42 DP para 2 esquinas de 134 totales.'
  },
  {
    id: 'vaizel',
    name: 'Vaizel',
    unlockLvl: 30,
    color: '#ff4d6d',
    totalDP: 134,
    focus: '⭐ Critical Damage (BOARD #1 PvE MAX DPS)',
    cornerStats: ['Crit Dmg Boost +1.5%', 'Crit Dmg Boost +1.5%', 'CDT +1.5%', 'CDT +1.5%'],
    fullBoard: 'CDB +3%, CDT +3%, Crit Hit +55',
    cornerType: 'CDB/CDT',
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 8, type: 'stat', label: 'Crit Hit +5', order: 1, cost: 1 },
      { x: 7, y: 9, type: 'epic', label: 'Heart Gore +1', order: 2, cost: 3, skill: 'heart' },
      { x: 7, y: 10, type: 'stat', label: 'Attack +5', order: 3, cost: 1 },
      { x: 7, y: 11, type: 'epic', label: 'Quick Slice +1', order: 4, cost: 3, skill: 'quick' },
      { x: 7, y: 12, type: 'stat', label: 'Crit Hit +5', order: 5, cost: 1 },
      { x: 7, y: 13, type: 'epic', label: 'Insignia Explosion +1', order: 6, cost: 3, skill: 'insignia' },
      { x: 7, y: 14, type: 'stat', label: 'CDB Path', order: 7, cost: 1 },
      { x: 6, y: 14, type: 'stat', label: 'Attack +5', order: 8, cost: 1 },
      { x: 5, y: 14, type: 'epic', label: 'Shadowstrike +1', order: 9, cost: 3, skill: 'shadow' },
      { x: 4, y: 14, type: 'stat', label: 'Crit Hit +5', order: 10, cost: 1 },
      { x: 3, y: 14, type: 'epic', label: 'Flash Slice +1', order: 11, cost: 3, skill: 'flash' },
      { x: 2, y: 14, type: 'stat', label: 'CDB Path', order: 12, cost: 1 },
      { x: 1, y: 14, type: 'rare', label: 'Impact Hit +1', order: 13, cost: 2, skill: 'impact' },
      { x: 0, y: 14, type: 'unique', label: '★ Crit Damage Boost +1.5% #1', order: 14, cost: 4 },
      { x: 8, y: 14, type: 'stat', label: 'Attack +5', order: 15, cost: 1 },
      { x: 9, y: 14, type: 'rare', label: 'Defense Break +1', order: 16, cost: 2, skill: 'defbreak' },
      { x: 10, y: 14, type: 'stat', label: 'CDB Path', order: 17, cost: 1 },
      { x: 11, y: 14, type: 'epic', label: 'Rear Smite +1', order: 18, cost: 3, skill: 'rear' },
      { x: 12, y: 14, type: 'stat', label: 'CDB Path', order: 19, cost: 1 },
      { x: 13, y: 14, type: 'rare', label: 'Defiance +1', order: 20, cost: 2, skill: 'defiance' },
      { x: 14, y: 14, type: 'unique', label: '★ Crit Damage Boost +1.5% #2', order: 21, cost: 4 },
    ],
    tip: '⭐ EL BOARD #1 Asesino PvE. Prioriza AMBAS esquinas CDB inferiores. Camino pasa por Heart Gore, Quick Slice, Insignia Explosion (los 3 skills core ganan +1 nivel efectivo). ~42 DP.'
  },
  {
    id: 'triniel',
    name: 'Triniel',
    unlockLvl: 40,
    color: '#a855f7',
    totalDP: 168,
    focus: 'Multi-Hit Chance (couga54: 85 DP objetivo)',
    cornerStats: ['Multi-Hit +1.5%', 'Multi-Hit +1.5%', 'MH Resist +1.5%', 'MH Resist +1.5%'],
    fullBoard: 'MH +4.5%, HP +1500, Crit Hit +75',
    cornerType: 'MH/MR',
    // Path couga54: blue nodes Shadowstrike, Flash Slice, Defiance + los 3 core DPS repetidos
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 6, type: 'stat', label: 'Attack +10', order: 1, cost: 1 },
      { x: 7, y: 5, type: 'epic', label: 'Heart Gore +1 (blue)', order: 2, cost: 3, skill: 'heart' },
      { x: 7, y: 4, type: 'stat', label: 'Crit Hit +5', order: 3, cost: 1 },
      { x: 7, y: 3, type: 'epic', label: 'Insignia Explosion +1 (blue)', order: 4, cost: 3, skill: 'insignia' },
      { x: 7, y: 2, type: 'stat', label: 'MH Path', order: 5, cost: 1 },
      { x: 7, y: 1, type: 'rare', label: 'Assault Stance +1', order: 6, cost: 2, skill: 'assault' },
      { x: 7, y: 0, type: 'stat', label: 'MH Path', order: 7, cost: 1 },
      { x: 6, y: 0, type: 'epic', label: 'Shadowstrike +1 (blue)', order: 8, cost: 3, skill: 'shadow' },
      { x: 5, y: 0, type: 'stat', label: 'Attack +5', order: 9, cost: 1 },
      { x: 4, y: 0, type: 'epic', label: 'Flash Slice +1 (blue)', order: 10, cost: 3, skill: 'flash' },
      { x: 3, y: 0, type: 'stat', label: 'MH Path', order: 11, cost: 1 },
      { x: 2, y: 0, type: 'epic', label: 'Defiance +1 (blue)', order: 12, cost: 3, skill: 'defiance' },
      { x: 1, y: 0, type: 'stat', label: 'MH Path', order: 13, cost: 1 },
      { x: 0, y: 0, type: 'unique', label: '★ Multi-Hit +1.5% #1', order: 14, cost: 4 },
      { x: 8, y: 0, type: 'stat', label: 'Attack +5', order: 15, cost: 1 },
      { x: 9, y: 0, type: 'epic', label: 'Quick Slice +1 (blue)', order: 16, cost: 3, skill: 'quick' },
      { x: 10, y: 0, type: 'stat', label: 'MH Path', order: 17, cost: 1 },
      { x: 11, y: 0, type: 'rare', label: 'Rear Smite +1', order: 18, cost: 2, skill: 'rear' },
      { x: 12, y: 0, type: 'stat', label: 'MH Path', order: 19, cost: 1 },
      { x: 13, y: 0, type: 'rare', label: 'Exploit Weakness +1', order: 20, cost: 2, skill: 'exploit' },
      { x: 14, y: 0, type: 'unique', label: '★ Multi-Hit +1.5% #2', order: 21, cost: 4 },
    ],
    tip: 'couga54: blue nodes Shadowstrike + Flash Slice + Defiance (3 skills exclusivas de Triniel) + repetir Heart Gore/Insignia Explosion/Quick Slice. 85 DP objetivo.'
  },
  {
    id: 'azphel',
    name: 'Azphel',
    unlockLvl: 45,
    color: '#8f98a8',
    totalDP: 232,
    focus: 'PvP (SKIP para PvE puro)',
    cornerStats: ['PvP DB +1.5%', 'PvP DB +1.5%', 'PvP DT +1.5%', 'PvP DT +1.5%'],
    fullBoard: 'PvP DB +6%, PvP DT +6%, Status +8%, Resist +8%',
    cornerType: 'PvP',
    path: [
      { x: 7, y: 7, type: 'center', label: '⚠️ Centro. Board PvP, SIN skill nodes. En PvE puro: redirige recursos a completar Vaizel/Triniel. Azphel Points son currency SEPARADA (no DP), no roban recursos.', order: 0 },
      { x: 0, y: 0, type: 'unique', label: 'PvP DB +1.5% (solo PvP)', order: 1, cost: 4 },
      { x: 14, y: 0, type: 'unique', label: 'PvP DB +1.5% (solo PvP)', order: 2, cost: 4 },
      { x: 0, y: 14, type: 'unique', label: 'PvP DT +1.5% (solo PvP)', order: 3, cost: 4 },
      { x: 14, y: 14, type: 'unique', label: 'PvP DT +1.5% (solo PvP)', order: 4, cost: 4 },
    ],
    tip: 'Board PvP exclusivo. 100% stats, 0 skill nodes. SKIP si eres PvE puro. Si haces arenas/sieges prioriza las 4 esquinas PvP DB.'
  }
];

function nodeColor(type) {
  switch(type) {
    case 'center': return '#d4af37';
    case 'stat':
    case 'common': return '#5a6478';
    case 'rare':
    case 'passive': return '#4ea8de';
    case 'epic':
    case 'active': return '#a855f7';
    case 'unique': return '#ff4d6d';
    case 'bg': return '#2a3245';
    default: return '#8f98a8';
  }
}

function typeLabel(type) {
  if (type === 'center') return 'centro';
  if (type === 'stat' || type === 'common') return 'stat (1 DP)';
  if (type === 'rare' || type === 'passive') return 'pasiva +1 (2 DP)';
  if (type === 'epic' || type === 'active') return 'activa +1 (3 DP)';
  if (type === 'unique') return 'unique (4 DP)';
  if (type === 'bg') return 'stat secundario';
  return type;
}

function buildBoard(board) {
  const SIZE = BOARD_SIZE;
  const CELL = 42;
  const PAD = 24;
  const total = SIZE * CELL + PAD * 2;
  const ROUTE_STROKE = '#f4c430'; // amarillo cálido tipo couga54

  // Build map of path nodes by (x,y)
  const pathMap = {};
  board.path.forEach(n => { pathMap[`${n.x},${n.y}`] = n; });

  // Corner positions (siempre pintar las 4 esquinas como rombos dorados aunque no estén en path)
  const CORNERS = [[0,0],[14,0],[0,14],[14,14]];

  let svg = `<svg viewBox="0 0 ${total} ${total}" class="board-svg" preserveAspectRatio="xMidYMid meet">`;
  svg += `<defs>
    <radialGradient id="centerGlow-${board.id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="${board.color}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${board.color}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="goldGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#f4c430" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#f4c430" stop-opacity="0"/>
    </radialGradient>
  </defs>`;
  svg += `<rect x="0" y="0" width="${total}" height="${total}" fill="#0b0d12" rx="12"/>`;

  // Center glow halo (sin cuadrículas visibles, estilo couga54)
  const centerCx = PAD + 7 * CELL + CELL/2;
  const centerCy = PAD + 7 * CELL + CELL/2;
  svg += `<circle cx="${centerCx}" cy="${centerCy}" r="${CELL * 6}" fill="url(#centerGlow-${board.id})" opacity="0.4"/>`;

  // Route path (línea amarilla gruesa continua siguiendo el path)
  if (board.path.length > 1) {
    let d = '';
    board.path.forEach((n, i) => {
      const px = PAD + n.x * CELL + CELL/2;
      const py = PAD + n.y * CELL + CELL/2;
      if (i === 0) {
        d += `M ${px} ${py}`;
      } else {
        const prev = board.path[i-1];
        const dx = Math.abs(prev.x - n.x);
        const dy = Math.abs(prev.y - n.y);
        if (dx + dy <= 2) d += ` L ${px} ${py}`;
        else d += ` M ${px} ${py}`;
      }
    });
    svg += `<path d="${d}" stroke="${ROUTE_STROKE}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`;
  }

  // Background stat nodes (pequeños círculos grises) donde no haya path node ni esquina
  let bgCount = 0;
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const key = `${x},${y}`;
      if (pathMap[key]) continue;
      if (CORNERS.some(c => c[0] === x && c[1] === y)) continue;
      if (!hasBackgroundNode(x, y)) continue;
      bgCount++;
      const cx = PAD + x * CELL + CELL/2;
      const cy = PAD + y * CELL + CELL/2;
      svg += `<g class="node-group bg-node" data-board="${board.id}" data-order="bg_${x}_${y}" data-label="Stat secundario" data-type="bg" data-cost="1" style="cursor:pointer">`;
      svg += `<circle cx="${cx}" cy="${cy}" r="7" fill="#2a3245" stroke="#4b5569" stroke-width="1.5"/>`;
      svg += `</g>`;
    }
  }

  // 4 esquinas rombo doradas SIEMPRE visibles
  CORNERS.forEach(([x, y]) => {
    const key = `${x},${y}`;
    const pathNode = pathMap[key];
    const cx = PAD + x * CELL + CELL/2;
    const cy = PAD + y * CELL + CELL/2;
    const size = 22;
    const order = pathNode ? pathNode.order : '•';
    const label = pathNode ? pathNode.label : `Esquina unique (4 DP)`;
    const dataOrder = pathNode ? pathNode.order : `corner_${x}_${y}`;
    svg += `<g class="node-group corner-node" data-board="${board.id}" data-order="${dataOrder}" data-label="${label.replace(/"/g, '&quot;')}" data-type="unique" data-cost="4" style="cursor:pointer">`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${size + 6}" fill="url(#goldGlow)"/>`;
    // Rombo (rect rotado 45°)
    svg += `<rect x="${cx - size}" y="${cy - size}" width="${size * 2}" height="${size * 2}" fill="#f4c430" stroke="#fff8dc" stroke-width="2" transform="rotate(45 ${cx} ${cy})" rx="3"/>`;
    svg += `<text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="#2b1810" font-size="13" font-weight="900" style="pointer-events:none;user-select:none">${order}</text>`;
    svg += `</g>`;
  });

  // Nodo central dorado grande (gratis)
  svg += `<g class="node-group center-node" data-board="${board.id}" data-order="0" data-label="Centro (gratis)" data-type="center" data-cost="0" style="cursor:default">`;
  svg += `<circle cx="${centerCx}" cy="${centerCy}" r="22" fill="#f4c430" stroke="#fff8dc" stroke-width="2" opacity="0.95"/>`;
  svg += `<circle cx="${centerCx}" cy="${centerCy}" r="12" fill="#fff8dc"/>`;
  svg += `</g>`;

  // Path nodes (NO center, NO corners — ya pintados)
  board.path.forEach(node => {
    if (node.type === 'center') return;
    if (node.type === 'unique') return; // ya pintado como corner
    const cx = PAD + node.x * CELL + CELL/2;
    const cy = PAD + node.y * CELL + CELL/2;
    const isSkill = (node.type === 'epic' || node.type === 'active' || node.type === 'rare' || node.type === 'passive') && node.skill;
    const iconFile = isSkill ? SKILL_ICON_FILE[node.skill] : null;

    svg += `<g class="node-group path-node" data-board="${board.id}" data-order="${node.order}" data-label="${node.label.replace(/"/g, '&quot;')}" data-type="${node.type}" data-cost="${node.cost || 0}" style="cursor:pointer">`;

    if (iconFile) {
      // Nodo de skill: imagen + marco cuadrado
      const sz = 32;
      const frameColor = (node.type === 'epic' || node.type === 'active') ? '#a855f7' : '#4ea8de';
      svg += `<rect x="${cx - sz/2 - 3}" y="${cy - sz/2 - 3}" width="${sz + 6}" height="${sz + 6}" fill="#0b0d12" stroke="${frameColor}" stroke-width="2.5" rx="5"/>`;
      svg += `<image href="icons/${iconFile}" x="${cx - sz/2}" y="${cy - sz/2}" width="${sz}" height="${sz}" style="pointer-events:none"/>`;
    } else {
      // Nodo stat: círculo pequeño con número
      svg += `<circle cx="${cx}" cy="${cy}" r="10" fill="#f8fafc" stroke="#f4c430" stroke-width="2"/>`;
      svg += `<text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="#1a1f2e" font-size="10" font-weight="800" style="pointer-events:none;user-select:none">${node.order}</text>`;
    }
    svg += `</g>`;
  });

  // Counts
  const skillNodes = board.path.filter(n => n.type === 'epic' || n.type === 'rare').length;
  const totalRendered = board.path.length + bgCount + 4; // + 4 esquinas
  board._rendered = { bg: bgCount, skills: skillNodes, uniques: 4, total: totalRendered };

  svg += '</svg>';
  return svg;
}

function buildAllBoards() {
  const container = document.getElementById('boardsContainer');
  if (!container) return;
  container.innerHTML = '';

  // Tabs
  const tabs = document.createElement('div');
  tabs.className = 'board-tabs';
  BOARDS.forEach((b, i) => {
    const btn = document.createElement('button');
    btn.innerHTML = `<span style="color:${b.color}">●</span> ${b.name}<br><small>Lv ${b.unlockLvl} · ${b.totalDP} DP</small>`;
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

    const svgHtml = buildBoard(b);
    const rendered = b._rendered || {};

    const ownedPath = b.path.filter(n => localStorage.getItem(`aion2_node_${b.id}_${n.order}`) === 'true').length;

    panel.innerHTML = `
      <div class="board-header">
        <h3 style="color:${b.color}">${b.name} Board — Lv ${b.unlockLvl}</h3>
        <div class="board-meta">
          <span class="badge" style="color:${b.color};border-color:${b.color}">${b.totalDP} DP total disponibles</span>
          <span class="badge">${b.focus}</span>
          <span class="badge">${b.path.length - 1} nodos clave en el camino</span>
          <span class="badge">+ ${rendered.bg || 0} nodos stat secundarios</span>
          <span class="badge ok" id="count-${b.id}">${ownedPath} / ${b.path.length} desbloqueados</span>
        </div>
        <p class="board-full"><strong>Full board si completas todo:</strong> ${b.fullBoard}</p>
      </div>
      <div class="board-grid-wrap">${svgHtml}</div>
      <div class="board-legend">
        <span><span class="dot" style="background:#f4c430"></span>Centro / Esquina Unique (gratis / 4 DP)</span>
        <span><span class="dot" style="background:#f8fafc;border:1px solid #f4c430"></span>Stat principal (1 DP)</span>
        <span><span class="dot" style="background:#2a3245"></span>Stat secundario (fondo)</span>
        <span><span class="dot" style="background:#4ea8de"></span>Pasiva +1 (2 DP)</span>
        <span><span class="dot" style="background:#a855f7"></span>Skill +1 nivel (3 DP) — con icono</span>
        <span><span style="display:inline-block;width:20px;height:4px;background:#f4c430;vertical-align:middle"></span>Route (camino recomendado)</span>
      </div>
      <div class="callout info"><strong>Camino recomendado PvE:</strong> ${b.tip}</div>
      <div class="board-nodes-list" id="list-${b.id}">
        <h4>Orden de desbloqueo del camino recomendado (click para marcar):</h4>
        <ol>${b.path.filter(n => n.order > 0).map(n => `<li data-board="${b.id}" data-order="${n.order}"><strong>#${n.order}</strong> ${n.label} <span class="chip" style="background:${nodeColor(n.type)};color:#fff">${typeLabel(n.type)}</span> <em>${n.cost || 0} DP</em></li>`).join('')}</ol>
      </div>
    `;
    container.appendChild(panel);
  });

  // Tab switching
  tabs.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.board-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('board-' + btn.dataset.board).classList.add('active');
    });
  });

  // Toggle node
  function toggleNode(boardId, order) {
    const key = `aion2_node_${boardId}_${order}`;
    const current = localStorage.getItem(key) === 'true';
    const newState = !current;
    localStorage.setItem(key, newState);

    container.querySelectorAll(`.node-group[data-board="${boardId}"][data-order="${order}"]`).forEach(g => {
      const circles = g.querySelectorAll('circle');
      const main = circles[circles.length - 1];
      if (newState) {
        g.classList.add('unlocked');
        main.setAttribute('stroke', '#22c55e');
        main.setAttribute('stroke-width', '3');
      } else {
        g.classList.remove('unlocked');
        main.setAttribute('stroke', g.classList.contains('bg-node') ? '#3e4a60' : '#fff');
        main.setAttribute('stroke-width', g.classList.contains('bg-node') ? '1' : '2');
      }
    });
    container.querySelectorAll(`li[data-board="${boardId}"][data-order="${order}"]`).forEach(li => {
      li.classList.toggle('owned', newState);
    });
    // Update counter (path only)
    const board = BOARDS.find(b => b.id === boardId);
    const owned = board.path.filter(n => localStorage.getItem(`aion2_node_${board.id}_${n.order}`) === 'true').length;
    const counter = document.getElementById('count-' + boardId);
    if (counter) counter.textContent = `${owned} / ${board.path.length} desbloqueados`;
  }

  container.addEventListener('click', e => {
    const g = e.target.closest('.node-group');
    if (g) {
      toggleNode(g.dataset.board, g.dataset.order);
      return;
    }
    const li = e.target.closest('li[data-board]');
    if (li) toggleNode(li.dataset.board, li.dataset.order);
  });

  // Load saved states
  container.querySelectorAll('.node-group').forEach(g => {
    const key = `aion2_node_${g.dataset.board}_${g.dataset.order}`;
    if (localStorage.getItem(key) === 'true') {
      g.classList.add('unlocked');
      const circles = g.querySelectorAll('circle');
      const main = circles[circles.length - 1];
      main.setAttribute('stroke', '#22c55e');
      main.setAttribute('stroke-width', '3');
    }
  });
  container.querySelectorAll('li[data-board]').forEach(li => {
    const key = `aion2_node_${li.dataset.board}_${li.dataset.order}`;
    if (localStorage.getItem(key) === 'true') li.classList.add('owned');
  });

  // Tooltip
  let tooltip = document.getElementById('board-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'board-tooltip';
    tooltip.className = 'board-tooltip';
    document.body.appendChild(tooltip);
  }

  container.addEventListener('mousemove', e => {
    const g = e.target.closest('.node-group');
    if (g) {
      const order = g.dataset.order;
      const orderDisplay = String(order).startsWith('bg_') ? '•' : '#' + order;
      tooltip.innerHTML = `<strong>${orderDisplay}</strong> ${g.dataset.label}<br><em>${typeLabel(g.dataset.type)}</em><br><small>Click para marcar como desbloqueado</small>`;
      tooltip.style.display = 'block';
      tooltip.style.left = Math.min(e.clientX + 15, window.innerWidth - 300) + 'px';
      tooltip.style.top = (e.clientY + 15) + 'px';
    } else {
      tooltip.style.display = 'none';
    }
  });
  container.addEventListener('mouseleave', () => tooltip.style.display = 'none');
}

window.buildAllBoards = buildAllBoards;
document.addEventListener('DOMContentLoaded', buildAllBoards);
