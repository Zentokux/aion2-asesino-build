// Aion 2 Global S1 — Daevanion Boards gráficos interactivos
// Modelo basado en consenso comunitario oct-2026 (metabot.gg + aion2guide.org)
// Topología exacta no publicada oficialmente — representación aproximada

const BOARDS = [
  {
    id: 'nezekan',
    name: 'Nezekan',
    unlockLvl: 12,
    color: '#4ea8de',
    totalDP: 134,
    focus: 'Combat Speed + Cooldown Reduction',
    corners: ['Combat Speed +1.5%', 'Combat Speed +1.5%', 'CDR +1.5%', 'CDR +1.5%'],
    fullBoard: 'Combat Speed +3%, CDR +3%',
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 6, type: 'stat', label: 'Attack +5', order: 1, cost: 1 },
      { x: 7, y: 5, type: 'passive', label: 'Rear Smite +1', order: 2, cost: 2 },
      { x: 8, y: 5, type: 'stat', label: 'Crit Hit +10', order: 3, cost: 1 },
      { x: 9, y: 5, type: 'active', label: 'Ambush +1', order: 4, cost: 3 },
      { x: 10, y: 5, type: 'stat', label: 'Attack +5', order: 5, cost: 1 },
      { x: 11, y: 5, type: 'passive', label: 'Assault Stance +1', order: 6, cost: 2 },
      { x: 12, y: 5, type: 'stat', label: 'Crit Hit +10', order: 7, cost: 1 },
      { x: 13, y: 5, type: 'stat', label: 'Attack +5', order: 8, cost: 1 },
      { x: 14, y: 5, type: 'stat', label: 'Attack +10', order: 9, cost: 1 },
      { x: 14, y: 4, type: 'stat', label: 'Crit Hit +15', order: 10, cost: 1 },
      { x: 14, y: 3, type: 'stat', label: 'CDR Path', order: 11, cost: 1 },
      { x: 14, y: 2, type: 'stat', label: 'CDR Path', order: 12, cost: 1 },
      { x: 14, y: 1, type: 'stat', label: 'CDR Path', order: 13, cost: 1 },
      { x: 14, y: 0, type: 'unique', label: 'CDR +1.5% (esquina)', order: 14, cost: 4 },
    ],
    tip: 'Prioriza llegar a la esquina CDR superior derecha. Pasa por nodos de Rear Smite y Ambush en el camino. Full board = Combat Speed +3%, CDR +3%.'
  },
  {
    id: 'zikel',
    name: 'Zikel',
    unlockLvl: 20,
    color: '#f59e0b',
    totalDP: 134,
    focus: 'Damage Boost + Damage Tolerance',
    corners: ['Dmg Boost +1.5%', 'Dmg Boost +1.5%', 'Dmg Tolerance +1.5%', 'Dmg Tolerance +1.5%'],
    fullBoard: 'DB +3%, DT +3%',
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 6, type: 'stat', label: 'Attack +10', order: 1, cost: 1 },
      { x: 7, y: 5, type: 'passive', label: 'Ambush Stance +1', order: 2, cost: 2 },
      { x: 7, y: 4, type: 'stat', label: 'Crit Hit +15', order: 3, cost: 1 },
      { x: 7, y: 3, type: 'active', label: 'Shadowstrike +1', order: 4, cost: 3 },
      { x: 7, y: 2, type: 'stat', label: 'Attack +10', order: 5, cost: 1 },
      { x: 7, y: 1, type: 'stat', label: 'DB Path', order: 6, cost: 1 },
      { x: 7, y: 0, type: 'stat', label: 'DB Path', order: 7, cost: 1 },
      { x: 6, y: 0, type: 'stat', label: 'DB Path', order: 8, cost: 1 },
      { x: 5, y: 0, type: 'stat', label: 'DB Path', order: 9, cost: 1 },
      { x: 4, y: 0, type: 'stat', label: 'DB Path', order: 10, cost: 1 },
      { x: 3, y: 0, type: 'passive', label: 'Defense Break +1', order: 11, cost: 2 },
      { x: 2, y: 0, type: 'stat', label: 'DB Path', order: 12, cost: 1 },
      { x: 1, y: 0, type: 'stat', label: 'DB Path', order: 13, cost: 1 },
      { x: 0, y: 0, type: 'unique', label: 'Dmg Boost +1.5% (esquina)', order: 14, cost: 4 },
    ],
    tip: 'Camino hacia esquina Damage Boost superior izquierda. Pasa por Defense Break pasivo. Full board = DB +3%, DT +3%.'
  },
  {
    id: 'vaizel',
    name: 'Vaizel',
    unlockLvl: 30,
    color: '#ff4d6d',
    totalDP: 134,
    focus: '⭐ Critical Damage (BOARD CLAVE PvE)',
    corners: ['Crit Dmg Boost +1.5%', 'Crit Dmg Boost +1.5%', 'Crit Dmg Tolerance +1.5%', 'Crit Dmg Tolerance +1.5%'],
    fullBoard: 'CDB +3%, CDT +3%, Crit Hit +55',
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 8, type: 'stat', label: 'Crit Hit +15', order: 1, cost: 1 },
      { x: 7, y: 9, type: 'passive', label: 'Exploit Weakness +1', order: 2, cost: 2 },
      { x: 7, y: 10, type: 'stat', label: 'Attack +10', order: 3, cost: 1 },
      { x: 7, y: 11, type: 'active', label: 'Heart Gore +1', order: 4, cost: 3 },
      { x: 7, y: 12, type: 'stat', label: 'Crit Hit +15', order: 5, cost: 1 },
      { x: 7, y: 13, type: 'stat', label: 'CDB Path', order: 6, cost: 1 },
      { x: 7, y: 14, type: 'stat', label: 'CDB Path', order: 7, cost: 1 },
      { x: 6, y: 14, type: 'stat', label: 'CDB Path', order: 8, cost: 1 },
      { x: 5, y: 14, type: 'stat', label: 'CDB Path', order: 9, cost: 1 },
      { x: 4, y: 14, type: 'stat', label: 'CDB Path', order: 10, cost: 1 },
      { x: 3, y: 14, type: 'active', label: 'Quick Slice +1', order: 11, cost: 3 },
      { x: 2, y: 14, type: 'stat', label: 'CDB Path', order: 12, cost: 1 },
      { x: 1, y: 14, type: 'stat', label: 'CDB Path', order: 13, cost: 1 },
      { x: 0, y: 14, type: 'unique', label: 'Crit Dmg Boost +1.5% (esquina 1)', order: 14, cost: 4 },
      { x: 8, y: 14, type: 'stat', label: 'CDB Path 2', order: 15, cost: 1 },
      { x: 9, y: 14, type: 'stat', label: 'CDB Path 2', order: 16, cost: 1 },
      { x: 10, y: 14, type: 'stat', label: 'CDB Path 2', order: 17, cost: 1 },
      { x: 11, y: 14, type: 'stat', label: 'CDB Path 2', order: 18, cost: 1 },
      { x: 12, y: 14, type: 'stat', label: 'CDB Path 2', order: 19, cost: 1 },
      { x: 13, y: 14, type: 'stat', label: 'CDB Path 2', order: 20, cost: 1 },
      { x: 14, y: 14, type: 'unique', label: 'Crit Dmg Boost +1.5% (esquina 2)', order: 21, cost: 4 },
    ],
    tip: '⭐ El board más valioso para Asesino PvE. Prioriza AMBAS esquinas inferiores Crit Damage Boost. Pasa por Heart Gore y Quick Slice +1 cada uno.'
  },
  {
    id: 'triniel',
    name: 'Triniel',
    unlockLvl: 40,
    color: '#a855f7',
    totalDP: 168,
    focus: 'Multi-Hit Chance (sinergia con Heart Gore)',
    corners: ['Multi-Hit +1.5%', 'Multi-Hit +1.5%', 'Multi-Hit Resist +1.5%', 'Multi-Hit Resist +1.5%'],
    fullBoard: 'MH +4.5%, MR +4.5%, HP +1500, Crit Hit +75',
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro (gratis)', order: 0 },
      { x: 7, y: 6, type: 'stat', label: 'Attack +10', order: 1, cost: 1 },
      { x: 7, y: 5, type: 'active', label: 'Insignia Explosion +1', order: 2, cost: 3 },
      { x: 7, y: 4, type: 'stat', label: 'Crit Hit +15', order: 3, cost: 1 },
      { x: 7, y: 3, type: 'passive', label: 'Impact Hit +1', order: 4, cost: 2 },
      { x: 7, y: 2, type: 'stat', label: 'MH Path', order: 5, cost: 1 },
      { x: 7, y: 1, type: 'stat', label: 'MH Path', order: 6, cost: 1 },
      { x: 7, y: 0, type: 'stat', label: 'MH Path', order: 7, cost: 1 },
      { x: 6, y: 0, type: 'stat', label: 'MH Path', order: 8, cost: 1 },
      { x: 5, y: 0, type: 'stat', label: 'MH Path', order: 9, cost: 1 },
      { x: 4, y: 0, type: 'stat', label: 'MH Path', order: 10, cost: 1 },
      { x: 3, y: 0, type: 'stat', label: 'MH Path', order: 11, cost: 1 },
      { x: 2, y: 0, type: 'stat', label: 'MH Path', order: 12, cost: 1 },
      { x: 1, y: 0, type: 'stat', label: 'MH Path', order: 13, cost: 1 },
      { x: 0, y: 0, type: 'unique', label: 'Multi-Hit +1.5%', order: 14, cost: 4 },
      { x: 8, y: 0, type: 'stat', label: 'MH 2', order: 15, cost: 1 },
      { x: 9, y: 0, type: 'stat', label: 'MH 2', order: 16, cost: 1 },
      { x: 10, y: 0, type: 'stat', label: 'MH 2', order: 17, cost: 1 },
      { x: 11, y: 0, type: 'stat', label: 'MH 2', order: 18, cost: 1 },
      { x: 12, y: 0, type: 'stat', label: 'MH 2', order: 19, cost: 1 },
      { x: 13, y: 0, type: 'stat', label: 'MH 2', order: 20, cost: 1 },
      { x: 14, y: 0, type: 'unique', label: 'Multi-Hit +1.5% (esquina 2)', order: 21, cost: 4 },
    ],
    tip: 'Multi-Hit escala brutal con el reset-on-crit de Heart Gore. Prioriza ambas esquinas superiores. Full board = MH +4.5%, HP +1500, Crit Hit +75.'
  },
  {
    id: 'azphel',
    name: 'Azphel',
    unlockLvl: 45,
    color: '#8f98a8',
    totalDP: 232,
    focus: 'PvP (SKIP para PvE puro)',
    corners: ['PvP DB +1.5%', 'PvP DB +1.5%', 'PvP DT +1.5%', 'PvP DT +1.5%'],
    fullBoard: 'PvP DB +6%, PvP DT +6%, Status Chance +8%, Resist +8%',
    path: [
      { x: 7, y: 7, type: 'center', label: 'Centro — Azphel es PvP, redirige recursos a terminar Vaizel/Triniel si eres PvE puro', order: 0 },
    ],
    tip: 'Board PvP. En PvE puro, salta este board. Usa Azphel Points (no Daevanion Points), así que no compite con los otros 4.'
  }
];

function nodeColor(type) {
  switch(type) {
    case 'center': return '#d4af37';
    case 'stat': return '#5a6478';
    case 'passive': return '#4ea8de';
    case 'active': return '#a855f7';
    case 'unique': return '#ff4d6d';
    default: return '#8f98a8';
  }
}

function buildBoard(board) {
  const SIZE = 15;
  const CELL = 32;
  const PAD = 20;
  const total = SIZE * CELL + PAD * 2;

  let svg = `<svg viewBox="0 0 ${total} ${total}" class="board-svg" preserveAspectRatio="xMidYMid meet">`;
  svg += `<rect x="0" y="0" width="${total}" height="${total}" fill="#0b0d12" rx="12"/>`;

  // Grid background cells
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const cx = PAD + x * CELL + CELL/2;
      const cy = PAD + y * CELL + CELL/2;
      // Corner cells highlighted
      const isCorner = (x === 0 || x === 14) && (y === 0 || y === 14);
      svg += `<rect x="${cx - CELL/2 + 2}" y="${cy - CELL/2 + 2}" width="${CELL - 4}" height="${CELL - 4}" fill="#141822" stroke="${isCorner ? '#ff4d6d' : '#1b2130'}" stroke-width="${isCorner ? 2 : 1}" rx="4"/>`;
    }
  }

  // Draw connections between path nodes (lines)
  for (let i = 1; i < board.path.length; i++) {
    const prev = board.path[i-1];
    const curr = board.path[i];
    // Only draw connection if contiguous (orthogonally adjacent)
    const dx = Math.abs(prev.x - curr.x);
    const dy = Math.abs(prev.y - curr.y);
    if (dx + dy <= 2) {
      const x1 = PAD + prev.x * CELL + CELL/2;
      const y1 = PAD + prev.y * CELL + CELL/2;
      const x2 = PAD + curr.x * CELL + CELL/2;
      const y2 = PAD + curr.y * CELL + CELL/2;
      svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${board.color}" stroke-width="3" stroke-opacity="0.5"/>`;
    }
  }

  // Draw path nodes
  board.path.forEach(node => {
    const cx = PAD + node.x * CELL + CELL/2;
    const cy = PAD + node.y * CELL + CELL/2;
    const color = nodeColor(node.type);
    const r = node.type === 'unique' ? 12 : node.type === 'center' ? 11 : node.type === 'active' ? 10 : 9;

    svg += `<g class="node-group" data-board="${board.id}" data-order="${node.order}" data-label="${node.label}" data-type="${node.type}" data-cost="${node.cost || 0}" style="cursor:pointer">`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r + 2}" fill="${color}" opacity="0.3"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" stroke="#fff" stroke-width="1.5"/>`;
    svg += `<text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">${node.order}</text>`;
    svg += `</g>`;
  });

  svg += '</svg>';
  return svg;
}

function buildAllBoards() {
  const container = document.getElementById('boardsContainer');
  if (!container) return;

  // Tabs
  const tabs = document.createElement('div');
  tabs.className = 'board-tabs';
  BOARDS.forEach((b, i) => {
    const btn = document.createElement('button');
    btn.textContent = `${b.name} (Lv ${b.unlockLvl})`;
    btn.dataset.board = b.id;
    if (i === 0) btn.classList.add('active');
    btn.style.borderColor = b.color;
    tabs.appendChild(btn);
  });
  container.appendChild(tabs);

  // Board panels
  BOARDS.forEach((b, i) => {
    const panel = document.createElement('div');
    panel.className = 'board-panel' + (i === 0 ? ' active' : '');
    panel.id = 'board-' + b.id;

    panel.innerHTML = `
      <div class="board-header">
        <h3 style="color:${b.color}">${b.name} Board — Lv ${b.unlockLvl}</h3>
        <div class="board-meta">
          <span class="badge">${b.totalDP} DP total</span>
          <span class="badge">${b.focus}</span>
        </div>
        <p class="board-full"><strong>Full board:</strong> ${b.fullBoard}</p>
      </div>
      <div class="board-grid-wrap">${buildBoard(b)}</div>
      <div class="board-legend">
        <span><span class="dot" style="background:#d4af37"></span>Centro (gratis)</span>
        <span><span class="dot" style="background:#5a6478"></span>Stat (1 DP)</span>
        <span><span class="dot" style="background:#4ea8de"></span>Passive +1 (2 DP)</span>
        <span><span class="dot" style="background:#a855f7"></span>Active +1 (3 DP)</span>
        <span><span class="dot" style="background:#ff4d6d"></span>Unique esquina (4 DP)</span>
      </div>
      <div class="callout info"><strong>Camino recomendado:</strong> ${b.tip}</div>
      <div class="board-nodes-list" id="list-${b.id}">
        <h4>Orden de desbloqueo:</h4>
        <ol>${b.path.filter(n => n.order > 0).map(n => `<li><strong>#${n.order}</strong> ${n.label} <span class="chip" style="background:${nodeColor(n.type)};color:#fff">${n.type}</span> <em>${n.cost || 0} DP</em></li>`).join('')}</ol>
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

  // Node tooltip + click to toggle unlocked
  container.addEventListener('click', e => {
    const g = e.target.closest('.node-group');
    if (!g) return;
    g.classList.toggle('unlocked');
    const circle = g.querySelector('circle:last-of-type');
    const unlocked = g.classList.contains('unlocked');
    circle.setAttribute('stroke', unlocked ? '#22c55e' : '#fff');
    circle.setAttribute('stroke-width', unlocked ? '3' : '1.5');
    // save state
    const key = `aion2_node_${g.dataset.board}_${g.dataset.order}`;
    localStorage.setItem(key, unlocked);
  });

  // Load saved states
  container.querySelectorAll('.node-group').forEach(g => {
    const key = `aion2_node_${g.dataset.board}_${g.dataset.order}`;
    if (localStorage.getItem(key) === 'true') {
      g.classList.add('unlocked');
      const circle = g.querySelector('circle:last-of-type');
      circle.setAttribute('stroke', '#22c55e');
      circle.setAttribute('stroke-width', '3');
    }
  });

  // Hover tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'board-tooltip';
  tooltip.style.cssText = 'position:fixed;background:#000;color:#fff;padding:0.5rem 0.75rem;border:1px solid var(--accent);border-radius:6px;font-size:0.85rem;pointer-events:none;z-index:1000;display:none;max-width:250px';
  document.body.appendChild(tooltip);

  container.addEventListener('mousemove', e => {
    const g = e.target.closest('.node-group');
    if (g) {
      tooltip.innerHTML = `<strong>#${g.dataset.order}</strong> ${g.dataset.label}<br><em>${g.dataset.type} · ${g.dataset.cost} DP</em>`;
      tooltip.style.display = 'block';
      tooltip.style.left = (e.clientX + 15) + 'px';
      tooltip.style.top = (e.clientY + 15) + 'px';
    } else {
      tooltip.style.display = 'none';
    }
  });
  container.addEventListener('mouseleave', () => tooltip.style.display = 'none');
}

document.addEventListener('DOMContentLoaded', buildAllBoards);
