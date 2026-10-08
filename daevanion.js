// Aion 2 Global S1 — Daevanion Boards expandidos
// Topología verificada por agente (metabot.gg + aion2guide.org + corpus.gg)
// Cada board 15x15 con nodos skill específicos del Asesino

const BOARD_SIZE = 15;

const BOARDS = [
  {
    id: 'nezekan',
    name: 'Nezekan',
    unlockLvl: 12,
    color: '#4ea8de',
    totalDP: 134,
    focus: 'Combat Speed + Cooldown Reduction',
    cornerStats: ['Combat Speed +1.5%', 'Combat Speed +1.5%', 'CDR +1.5%', 'CDR +1.5%'],
    fullBoard: 'Combat Speed +3%, CDR +3%',
    skillNodesCount: 17,
    // Path: center → epic skills → corner (ambas esquinas CDR/CS ofensivas para Asesino)
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 6, type: 'stat', label: 'Attack +5', order: 1, cost: 1 },
      { x: 7, y: 5, type: 'stat', label: 'Crit Hit +5', order: 2, cost: 1 },
      { x: 7, y: 4, type: 'epic', label: 'Heart Gore +1', order: 3, cost: 3 },
      { x: 7, y: 3, type: 'stat', label: 'Attack +5', order: 4, cost: 1 },
      { x: 7, y: 2, type: 'rare', label: 'Rear Smite +1', order: 5, cost: 2 },
      { x: 7, y: 1, type: 'stat', label: 'Combat Speed +0.5%', order: 6, cost: 1 },
      { x: 7, y: 0, type: 'stat', label: 'CS Path', order: 7, cost: 1 },
      { x: 6, y: 0, type: 'stat', label: 'Attack +5', order: 8, cost: 1 },
      { x: 5, y: 0, type: 'epic', label: 'Insignia Explosion +1', order: 9, cost: 3 },
      { x: 4, y: 0, type: 'stat', label: 'Crit Hit +5', order: 10, cost: 1 },
      { x: 3, y: 0, type: 'stat', label: 'CS Path', order: 11, cost: 1 },
      { x: 2, y: 0, type: 'rare', label: 'Assault Stance +1', order: 12, cost: 2 },
      { x: 1, y: 0, type: 'stat', label: 'Attack +5', order: 13, cost: 1 },
      { x: 0, y: 0, type: 'unique', label: '★ Combat Speed +1.5% (esquina)', order: 14, cost: 4 },
      // Second branch to CDR corner
      { x: 8, y: 6, type: 'stat', label: 'Attack +5', order: 15, cost: 1 },
      { x: 9, y: 6, type: 'epic', label: 'Quick Slice +1', order: 16, cost: 3 },
      { x: 10, y: 6, type: 'stat', label: 'Crit Hit +5', order: 17, cost: 1 },
      { x: 11, y: 6, type: 'stat', label: 'CDR Path', order: 18, cost: 1 },
      { x: 12, y: 6, type: 'epic', label: 'Shadowstrike +1', order: 19, cost: 3 },
      { x: 13, y: 6, type: 'stat', label: 'CDR Path', order: 20, cost: 1 },
      { x: 14, y: 6, type: 'stat', label: 'Attack +5', order: 21, cost: 1 },
      { x: 14, y: 5, type: 'stat', label: 'CDR Path', order: 22, cost: 1 },
      { x: 14, y: 4, type: 'rare', label: 'Exploit Weakness +1', order: 23, cost: 2 },
      { x: 14, y: 3, type: 'stat', label: 'CDR +0.5%', order: 24, cost: 1 },
      { x: 14, y: 2, type: 'stat', label: 'CDR +0.5%', order: 25, cost: 1 },
      { x: 14, y: 1, type: 'stat', label: 'CDR +0.5%', order: 26, cost: 1 },
      { x: 14, y: 0, type: 'unique', label: '★ CDR +1.5% (esquina)', order: 27, cost: 4 },
    ],
    tip: 'Camino PvE a AMBAS esquinas (Combat Speed izquierda + CDR derecha). CDR es core para Asesino porque permite más Heart Gore procs. ~42 DP para las 2 esquinas.'
  },
  {
    id: 'zikel',
    name: 'Zikel',
    unlockLvl: 20,
    color: '#f59e0b',
    totalDP: 134,
    focus: 'Damage Boost + Damage Tolerance',
    cornerStats: ['Damage Boost +1.5%', 'Damage Boost +1.5%', 'Damage Tolerance +1.5%', 'Damage Tolerance +1.5%'],
    fullBoard: 'DB +3%, DT +3%',
    skillNodesCount: 17,
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 8, type: 'stat', label: 'Attack +10', order: 1, cost: 1 },
      { x: 7, y: 9, type: 'epic', label: 'Insignia Explosion +1', order: 2, cost: 3 },
      { x: 7, y: 10, type: 'stat', label: 'Crit Hit +5', order: 3, cost: 1 },
      { x: 7, y: 11, type: 'epic', label: 'Quick Slice +1', order: 4, cost: 3 },
      { x: 7, y: 12, type: 'stat', label: 'Attack +5', order: 5, cost: 1 },
      { x: 7, y: 13, type: 'rare', label: 'Defense Break +1', order: 6, cost: 2 },
      { x: 7, y: 14, type: 'stat', label: 'DB Path', order: 7, cost: 1 },
      { x: 6, y: 14, type: 'stat', label: 'Attack +5', order: 8, cost: 1 },
      { x: 5, y: 14, type: 'epic', label: 'Impact Hit +1 (epic)', order: 9, cost: 3 },
      { x: 4, y: 14, type: 'stat', label: 'DB Path', order: 10, cost: 1 },
      { x: 3, y: 14, type: 'epic', label: 'Storm Rampage +1', order: 11, cost: 3 },
      { x: 2, y: 14, type: 'stat', label: 'DB Path', order: 12, cost: 1 },
      { x: 1, y: 14, type: 'stat', label: 'DB Path', order: 13, cost: 1 },
      { x: 0, y: 14, type: 'unique', label: '★ Damage Boost +1.5% #1 (esquina)', order: 14, cost: 4 },
      // Branch to right DB corner
      { x: 8, y: 14, type: 'stat', label: 'Attack +5', order: 15, cost: 1 },
      { x: 9, y: 14, type: 'epic', label: 'Ambush +1', order: 16, cost: 3 },
      { x: 10, y: 14, type: 'stat', label: 'Crit Hit +5', order: 17, cost: 1 },
      { x: 11, y: 14, type: 'rare', label: 'Ambush Stance +1', order: 18, cost: 2 },
      { x: 12, y: 14, type: 'stat', label: 'DB Path', order: 19, cost: 1 },
      { x: 13, y: 14, type: 'epic', label: 'Shadowstrike +1', order: 20, cost: 3 },
      { x: 14, y: 14, type: 'unique', label: '★ Damage Boost +1.5% #2 (esquina)', order: 21, cost: 4 },
    ],
    tip: 'Camino PvE a AMBAS esquinas de Damage Boost (inferiores). Pasa por Defense Break, Impact Hit, Storm Rampage, Ambush, Shadowstrike (todos nodos epic clave para Asesino). ~42 DP.'
  },
  {
    id: 'vaizel',
    name: 'Vaizel',
    unlockLvl: 30,
    color: '#ff4d6d',
    totalDP: 134,
    focus: '⭐ Critical Damage (BOARD CLAVE PvE MAX DPS)',
    cornerStats: ['Crit Dmg Boost +1.5%', 'Crit Dmg Boost +1.5%', 'Crit Dmg Tolerance +1.5%', 'Crit Dmg Tolerance +1.5%'],
    fullBoard: 'CDB +3%, CDT +3%, Crit Hit +55',
    skillNodesCount: 22,
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 8, type: 'stat', label: 'Crit Hit +5', order: 1, cost: 1 },
      { x: 7, y: 9, type: 'epic', label: 'Heart Gore +1', order: 2, cost: 3 },
      { x: 7, y: 10, type: 'stat', label: 'Attack +5', order: 3, cost: 1 },
      { x: 7, y: 11, type: 'epic', label: 'Quick Slice +1', order: 4, cost: 3 },
      { x: 7, y: 12, type: 'stat', label: 'Crit Hit +5', order: 5, cost: 1 },
      { x: 7, y: 13, type: 'epic', label: 'Insignia Explosion +1', order: 6, cost: 3 },
      { x: 7, y: 14, type: 'stat', label: 'CDB Path', order: 7, cost: 1 },
      { x: 6, y: 14, type: 'stat', label: 'Attack +5', order: 8, cost: 1 },
      { x: 5, y: 14, type: 'epic', label: 'Shadowstrike +1', order: 9, cost: 3 },
      { x: 4, y: 14, type: 'stat', label: 'Crit Hit +5', order: 10, cost: 1 },
      { x: 3, y: 14, type: 'epic', label: 'Flash Slice +1', order: 11, cost: 3 },
      { x: 2, y: 14, type: 'stat', label: 'CDB Path', order: 12, cost: 1 },
      { x: 1, y: 14, type: 'rare', label: 'Impact Hit +1', order: 13, cost: 2 },
      { x: 0, y: 14, type: 'unique', label: '★ Crit Damage Boost +1.5% #1', order: 14, cost: 4 },
      // Second branch to right CDB corner
      { x: 8, y: 14, type: 'stat', label: 'Attack +5', order: 15, cost: 1 },
      { x: 9, y: 14, type: 'rare', label: 'Defense Break +1', order: 16, cost: 2 },
      { x: 10, y: 14, type: 'stat', label: 'CDB Path', order: 17, cost: 1 },
      { x: 11, y: 14, type: 'epic', label: 'Rear Smite +1', order: 18, cost: 3 },
      { x: 12, y: 14, type: 'stat', label: 'CDB Path', order: 19, cost: 1 },
      { x: 13, y: 14, type: 'rare', label: 'Defiance +1', order: 20, cost: 2 },
      { x: 14, y: 14, type: 'unique', label: '★ Crit Damage Boost +1.5% #2', order: 21, cost: 4 },
    ],
    tip: '⭐ EL BOARD #1 para Asesino PvE Max DPS. Prioriza AMBAS esquinas CDB (inferiores). Camino pasa por Heart Gore, Quick Slice, Insignia Explosion todos ganando +1 nivel efectivo. ~42 DP para 2 esquinas CDB (ignora las de arriba Crit Dmg Tolerance que son defensivas).'
  },
  {
    id: 'triniel',
    name: 'Triniel',
    unlockLvl: 40,
    color: '#a855f7',
    totalDP: 168,
    focus: 'Multi-Hit Chance (sinergia Heart Gore reset)',
    cornerStats: ['Multi-Hit +1.5%', 'Multi-Hit +1.5%', 'MH Resist +1.5%', 'MH Resist +1.5%'],
    fullBoard: 'MH +4.5%, HP +1500, Crit Hit +75',
    skillNodesCount: 21,
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 6, type: 'stat', label: 'Attack +10', order: 1, cost: 1 },
      { x: 7, y: 5, type: 'epic', label: 'Heart Gore +1', order: 2, cost: 3 },
      { x: 7, y: 4, type: 'stat', label: 'Crit Hit +5', order: 3, cost: 1 },
      { x: 7, y: 3, type: 'rare', label: 'Apply Poison +1', order: 4, cost: 2 },
      { x: 7, y: 2, type: 'rare', label: 'Assault Stance +1', order: 5, cost: 2 },
      { x: 7, y: 1, type: 'epic', label: 'Insignia Explosion +1', order: 6, cost: 3 },
      { x: 7, y: 0, type: 'stat', label: 'MH Path', order: 7, cost: 1 },
      { x: 6, y: 0, type: 'rare', label: 'Impact Hit +1', order: 8, cost: 2 },
      { x: 5, y: 0, type: 'stat', label: 'Attack +5', order: 9, cost: 1 },
      { x: 4, y: 0, type: 'epic', label: 'Ambush +1', order: 10, cost: 3 },
      { x: 3, y: 0, type: 'stat', label: 'MH Path', order: 11, cost: 1 },
      { x: 2, y: 0, type: 'epic', label: 'Flash Slice +1', order: 12, cost: 3 },
      { x: 1, y: 0, type: 'stat', label: 'MH Path', order: 13, cost: 1 },
      { x: 0, y: 0, type: 'unique', label: '★ Multi-Hit +1.5% #1', order: 14, cost: 4 },
      // Branch to right MH corner
      { x: 8, y: 0, type: 'stat', label: 'Attack +5', order: 15, cost: 1 },
      { x: 9, y: 0, type: 'epic', label: 'Shadowstrike +1', order: 16, cost: 3 },
      { x: 10, y: 0, type: 'stat', label: 'MH Path', order: 17, cost: 1 },
      { x: 11, y: 0, type: 'rare', label: 'Rear Smite +1', order: 18, cost: 2 },
      { x: 12, y: 0, type: 'epic', label: 'Defense Break +1', order: 19, cost: 3 },
      { x: 13, y: 0, type: 'epic', label: 'Storm Rampage +1', order: 20, cost: 3 },
      { x: 14, y: 0, type: 'unique', label: '★ Multi-Hit +1.5% #2', order: 21, cost: 4 },
    ],
    tip: 'Multi-Hit Chance escala BRUTAL con el reset-on-crit de Heart Gore. Prioriza esquinas superiores MH Chance. ~55-60 DP para ambas esquinas. Full board = +4.5% MH + HP + Crit.'
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
    skillNodesCount: 0,
    path: [
      { x: 7, y: 7, type: 'center', label: '⚠️ Centro. Board PvP, SIN skill nodes. En PvE puro: redirige recursos a terminar Vaizel/Triniel. Azphel Points son currency SEPARADA (no DP) así que no compiten con los otros boards.', order: 0 },
    ],
    tip: 'Board PvP exclusivo (0 skill nodes, 100% stats). SKIP si eres PvE puro — no afecta tu DPS en PvE. Azphel usa currency separada, no roba recursos de los otros boards. Si haces arenas/sieges, prioriza las 4 esquinas PvP Damage Boost.'
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
    default: return '#8f98a8';
  }
}

function typeLabel(type) {
  if (type === 'center') return 'centro';
  if (type === 'stat' || type === 'common') return 'stat';
  if (type === 'rare' || type === 'passive') return 'pasiva +1';
  if (type === 'epic' || type === 'active') return 'activa +1';
  if (type === 'unique') return 'esquina';
  return type;
}

function buildBoard(board) {
  const SIZE = BOARD_SIZE;
  const CELL = 36;
  const PAD = 22;
  const total = SIZE * CELL + PAD * 2;

  let svg = `<svg viewBox="0 0 ${total} ${total}" class="board-svg" preserveAspectRatio="xMidYMid meet">`;
  svg += `<defs>
    <radialGradient id="glow-${board.id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="${board.color}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${board.color}" stop-opacity="0"/>
    </radialGradient>
  </defs>`;
  svg += `<rect x="0" y="0" width="${total}" height="${total}" fill="#0b0d12" rx="12"/>`;

  // Background cells grid
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const cx = PAD + x * CELL + CELL/2;
      const cy = PAD + y * CELL + CELL/2;
      const isCorner = (x === 0 || x === 14) && (y === 0 || y === 14);
      const isCenter = (x === 7 && y === 7);
      svg += `<rect x="${cx - CELL/2 + 2}" y="${cy - CELL/2 + 2}" width="${CELL - 4}" height="${CELL - 4}" fill="${isCenter ? '#1a1f2e' : '#141822'}" stroke="${isCorner ? '#ff4d6d' : '#1b2130'}" stroke-width="${isCorner ? 2 : 1}" rx="4"/>`;
    }
  }

  // Draw connections between path nodes
  for (let i = 1; i < board.path.length; i++) {
    const prev = board.path[i-1];
    const curr = board.path[i];
    const dx = Math.abs(prev.x - curr.x);
    const dy = Math.abs(prev.y - curr.y);
    if (dx + dy <= 2) {
      const x1 = PAD + prev.x * CELL + CELL/2;
      const y1 = PAD + prev.y * CELL + CELL/2;
      const x2 = PAD + curr.x * CELL + CELL/2;
      const y2 = PAD + curr.y * CELL + CELL/2;
      svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${board.color}" stroke-width="3" stroke-opacity="0.5" stroke-linecap="round"/>`;
    }
  }

  // Draw path nodes
  board.path.forEach(node => {
    const cx = PAD + node.x * CELL + CELL/2;
    const cy = PAD + node.y * CELL + CELL/2;
    const color = nodeColor(node.type);
    const r = node.type === 'unique' ? 14 : node.type === 'center' ? 13 : node.type === 'epic' || node.type === 'active' ? 12 : node.type === 'rare' || node.type === 'passive' ? 11 : 9;

    svg += `<g class="node-group" data-board="${board.id}" data-order="${node.order}" data-label="${node.label}" data-type="${node.type}" data-cost="${node.cost || 0}" style="cursor:pointer">`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r + 4}" fill="url(#glow-${board.id})"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" stroke="#fff" stroke-width="1.5"/>`;
    svg += `<text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="700" style="pointer-events:none;user-select:none">${node.order}</text>`;
    svg += `</g>`;
  });

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

  // Board panels
  BOARDS.forEach((b, i) => {
    const panel = document.createElement('div');
    panel.className = 'board-panel' + (i === 0 ? ' active' : '');
    panel.id = 'board-' + b.id;

    const ownedCount = b.path.filter(n => {
      const key = `aion2_node_${b.id}_${n.order}`;
      return localStorage.getItem(key) === 'true';
    }).length;

    panel.innerHTML = `
      <div class="board-header">
        <h3 style="color:${b.color}">${b.name} Board — Lv ${b.unlockLvl}</h3>
        <div class="board-meta">
          <span class="badge" style="color:${b.color};border-color:${b.color}">${b.totalDP} DP total</span>
          <span class="badge">${b.focus}</span>
          <span class="badge">${b.path.length - 1} nodos en el camino</span>
          <span class="badge ok" id="count-${b.id}">${ownedCount} / ${b.path.length} desbloqueados</span>
        </div>
        <p class="board-full"><strong>Full board (si lo completas):</strong> ${b.fullBoard}</p>
      </div>
      <div class="board-grid-wrap">${buildBoard(b)}</div>
      <div class="board-legend">
        <span><span class="dot" style="background:#d4af37"></span>Centro (gratis)</span>
        <span><span class="dot" style="background:#5a6478"></span>Stat 1 DP</span>
        <span><span class="dot" style="background:#4ea8de"></span>Pasiva +1 (2 DP)</span>
        <span><span class="dot" style="background:#a855f7"></span>Activa +1 (3 DP)</span>
        <span><span class="dot" style="background:#ff4d6d"></span>Esquina +1.5% (4 DP)</span>
      </div>
      <div class="callout info"><strong>Camino recomendado PvE:</strong> ${b.tip}</div>
      <div class="board-nodes-list" id="list-${b.id}">
        <h4>Orden de desbloqueo (click en cada nodo del gráfico o aquí para marcarlo):</h4>
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

  // Toggle node from SVG click
  function toggleNode(boardId, order) {
    const key = `aion2_node_${boardId}_${order}`;
    const current = localStorage.getItem(key) === 'true';
    const newState = !current;
    localStorage.setItem(key, newState);
    // Update SVG
    container.querySelectorAll(`.node-group[data-board="${boardId}"][data-order="${order}"]`).forEach(g => {
      const circles = g.querySelectorAll('circle');
      const main = circles[circles.length - 1];
      if (newState) {
        g.classList.add('unlocked');
        main.setAttribute('stroke', '#22c55e');
        main.setAttribute('stroke-width', '3');
      } else {
        g.classList.remove('unlocked');
        main.setAttribute('stroke', '#fff');
        main.setAttribute('stroke-width', '1.5');
      }
    });
    // Update list item
    container.querySelectorAll(`li[data-board="${boardId}"][data-order="${order}"]`).forEach(li => {
      li.classList.toggle('owned', newState);
    });
    // Update count
    const board = BOARDS.find(b => b.id === boardId);
    const owned = board.path.filter(n => localStorage.getItem(`aion2_node_${board.id}_${n.order}`) === 'true').length;
    const counter = document.getElementById('count-' + boardId);
    if (counter) counter.textContent = `${owned} / ${board.path.length} desbloqueados`;
  }

  // Click handlers for SVG nodes
  container.addEventListener('click', e => {
    const g = e.target.closest('.node-group');
    if (g) {
      toggleNode(g.dataset.board, parseInt(g.dataset.order, 10));
      return;
    }
    const li = e.target.closest('li[data-board]');
    if (li) {
      toggleNode(li.dataset.board, parseInt(li.dataset.order, 10));
    }
  });

  // Load saved states on build
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
      tooltip.innerHTML = `<strong>#${g.dataset.order}</strong> ${g.dataset.label}<br><em>${typeLabel(g.dataset.type)} · ${g.dataset.cost} DP</em><br><small>Click para marcar como desbloqueado</small>`;
      tooltip.style.display = 'block';
      tooltip.style.left = Math.min(e.clientX + 15, window.innerWidth - 280) + 'px';
      tooltip.style.top = (e.clientY + 15) + 'px';
    } else {
      tooltip.style.display = 'none';
    }
  });
  container.addEventListener('mouseleave', () => tooltip.style.display = 'none');
}

window.buildAllBoards = buildAllBoards;
document.addEventListener('DOMContentLoaded', buildAllBoards);
