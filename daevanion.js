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

// === v7: Gráfico simple estilo v1 (círculos coloreados numerados) ===
// Snake pattern para posicionar los pasos del route sin huecos.
// Mismos colores de v1: center=dorado, stat=gris, passive=azul, skill=morado, special=rojo

function colorByType(type) {
  switch(type) {
    case 'center': return '#d4af37';
    case 'special': return '#ff4d6d';
    case 'skill': return '#a855f7';
    case 'passive': return '#22c55e';
    case 'stat23': return '#4ea8de';
    default: return '#5a6478'; // stat1
  }
}

function buildSnakeSVG(board) {
  const COLS = 8;
  const CELL = 44;
  const PAD = 16;
  const route = board.route;
  const rows = Math.ceil(route.length / COLS);
  const totalW = COLS * CELL + PAD * 2;
  const totalH = rows * CELL + PAD * 2;

  function pos(idx) {
    const r = Math.floor(idx / COLS);
    const col = idx % COLS;
    const x = r % 2 === 0 ? col : (COLS - 1 - col);
    return [x, r];
  }

  let svg = `<svg viewBox="0 0 ${totalW} ${totalH}" class="snake-svg" preserveAspectRatio="xMidYMin meet">`;
  svg += `<rect x="0" y="0" width="${totalW}" height="${totalH}" fill="#0b0d12" rx="12"/>`;

  // Line segments conectando cada paso con el siguiente (siguen snake sin huecos)
  for (let i = 0; i < route.length - 1; i++) {
    const [x1, y1] = pos(i);
    const [x2, y2] = pos(i + 1);
    const cx1 = PAD + x1 * CELL + CELL/2;
    const cy1 = PAD + y1 * CELL + CELL/2;
    const cx2 = PAD + x2 * CELL + CELL/2;
    const cy2 = PAD + y2 * CELL + CELL/2;
    if (y1 === y2) {
      svg += `<line x1="${cx1}" y1="${cy1}" x2="${cx2}" y2="${cy2}" stroke="${board.color}" stroke-width="3" stroke-opacity="0.5"/>`;
    } else {
      // Cambio de fila (snake): línea vertical en el borde
      const midY = (cy1 + cy2) / 2;
      svg += `<line x1="${cx1}" y1="${cy1}" x2="${cx1}" y2="${midY}" stroke="${board.color}" stroke-width="3" stroke-opacity="0.5"/>`;
      svg += `<line x1="${cx1}" y1="${midY}" x2="${cx2}" y2="${midY}" stroke="${board.color}" stroke-width="3" stroke-opacity="0.5"/>`;
      svg += `<line x1="${cx2}" y1="${midY}" x2="${cx2}" y2="${cy2}" stroke="${board.color}" stroke-width="3" stroke-opacity="0.5"/>`;
    }
  }

  // Nodos = círculos coloreados con número (estilo v1 simple)
  route.forEach((step, idx) => {
    const [x, y] = pos(idx);
    const cx = PAD + x * CELL + CELL/2;
    const cy = PAD + y * CELL + CELL/2;
    const color = colorByType(step.type);
    const r = step.type === 'special' ? 15 : step.type === 'center' ? 14 : step.type === 'skill' ? 13 : 11;

    svg += `<g class="snake-node ${step.type === 'center' ? 'is-center' : ''}" data-board="${board.id}" data-order="${idx}" style="cursor:${step.type === 'center' ? 'default' : 'pointer'}">`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r + 2}" fill="${color}" opacity="0.25"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" stroke="#fff" stroke-width="1.5"/>`;
    svg += `<text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="700" style="pointer-events:none">${idx}</text>`;
    svg += `</g>`;
  });

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
