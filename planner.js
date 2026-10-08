// Aion 2 Global S1 — Asesino PvE Skill Points Planner
// Datos de metabot.gg + aion2guide.org (consenso comunitario oct-2026)

const SP_PER_LEVEL = {
  1:0, 2:0, 3:0, 4:1, 5:2, 6:2, 7:2, 8:3, 9:3, 10:3,
  11:4, 12:4, 13:4, 14:4, 15:4,
  16:5, 17:5, 18:5, 19:5, 20:5, 21:5, 22:5, 23:5, 24:5, 25:5,
  26:5, 27:5, 28:5, 29:5, 30:5,
  31:6, 32:6, 33:6, 34:6, 35:6, 36:6, 37:6, 38:6, 39:6, 40:6,
  41:6, 42:6, 43:6, 44:7, 45:7
};

// Costo para alcanzar cada rango de skill activa/pasiva (rank 11-20 NO con SP)
// index = rango objetivo, value = puntos que cuesta subir A ese rango
const SKILL_RANK_COST = [0, 0, 1, 1, 1, 2, 2, 2, 4, 4, 4]; // Rk 2=1, Rk 3=1, Rk 4=1, Rk 5=2, ..., Rk 10=4
// Acumulado a Rk 10 = 1+1+1+2+2+2+4+4+4 = 21

// Costo para rangos de stigma
const STIGMA_RANK_COST = [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8];
// Full 1→20 = 75

const CORE_SKILLS = [
  { id: 'heart', name: 'Heart Gore', unlock: 4, priority: 1, maxBySP: 10, note: 'Core DPS. Reset en crit real desde Rk 12 (vía Daevanion/Arcana).' },
  { id: 'quick', name: 'Quick Slice', unlock: 1, priority: 2, maxBySP: 10, note: 'LMB spam. Reduce CD de Insignia Explosion desde Rk 16.' },
  { id: 'insignia', name: 'Insignia Explosion', unlock: 14, priority: 1, maxBySP: 10, note: '~25% del daño total endgame.' },
  { id: 'savage', name: 'Savage Roar', unlock: 1, priority: 3, maxBySP: 10, note: 'Generador de Insignias.' },
  { id: 'ambush', name: 'Ambush', unlock: 3, priority: 2, maxBySP: 10, note: 'Core del combo trasero.' },
  { id: 'shadow', name: 'Shadowstrike', unlock: 1, priority: 3, maxBySP: 10, note: 'Opener + stun 3s.' },
  { id: 'rear', name: 'Rear Smite (passive)', unlock: 11, priority: 2, maxBySP: 10, note: '+3% daño trasero + PvE. Passive crucial.' },
  { id: 'exploit', name: 'Exploit Weakness (passive)', unlock: 6, priority: 3, maxBySP: 10, note: '+Crit Chance.' },
  { id: 'assault', name: 'Assault Stance (passive)', unlock: 13, priority: 3, maxBySP: 10, note: '+Crit Damage.' },
];

const STIGMAS = [
  { id: 's_clone', name: 'Illusive Clone', unlockLvl: 22, slot: 1, priority: 1, maxRank: 20, note: 'Burst principal. Heart Gore CD=0 durante 20s.' },
  { id: 's_swift', name: 'Swift Contract', unlockLvl: 27, slot: 2, priority: 2, maxRank: 20, note: 'Buff velocidad.' },
  { id: 's_triniel', name: "Triniel's Dagger", unlockLvl: 32, slot: 3, priority: 2, maxRank: 10, note: 'Reduce 10% CDs activos.' },
  { id: 's_fang', name: 'Savage Fang', unlockLvl: 37, slot: 4, priority: 2, maxRank: 15, note: 'Carga 5 Insignias instantáneas.' },
];

// Plan recomendado nivel por nivel: dónde invertir CADA punto ganado
// Formato: nivel: array de instrucciones de inversión [{skill, rankFrom, rankTo, cost}]
// Esta tabla sigue el flowchart del agente: todo a Heart Gore y Quick Slice primero, hasta Rk 10, luego Insignia Explosion, etc.
const PLAN = {
  4: [{ skillId: 'heart', from: 1, to: 2, cost: 1 }],
  5: [{ skillId: 'heart', from: 2, to: 3, cost: 1 }, { skillId: 'quick', from: 1, to: 2, cost: 1 }],
  6: [{ skillId: 'quick', from: 2, to: 3, cost: 1 }, { skillId: 'heart', from: 3, to: 4, cost: 1 }],
  7: [{ skillId: 'heart', from: 4, to: 5, cost: 2 }],
  8: [{ skillId: 'quick', from: 3, to: 4, cost: 1 }, { skillId: 'heart', from: 5, to: 6, cost: 2 }],
  9: [{ skillId: 'quick', from: 4, to: 5, cost: 2 }, { skillId: 'heart', from: 6, to: 7, cost: 2 }, { note: 'Guarda 2 puntos: no todos los puntos del Lv 9 se gastan hoy' }],
  10: [{ skillId: 'heart', from: 7, to: 8, cost: 4, special: 'HEART GORE Rk 8: desbloquea Specialty 1 (Absorb HP)' }],
  11: [{ skillId: 'quick', from: 5, to: 6, cost: 2 }, { skillId: 'quick', from: 6, to: 7, cost: 2 }, { note: 'Guarda nada, usa todo' }],
  12: [{ skillId: 'ambush', from: 1, to: 2, cost: 1 }, { skillId: 'ambush', from: 2, to: 3, cost: 1 }, { skillId: 'rear', from: 1, to: 2, cost: 1 }, { note: 'Guarda 1 pt sobrante' }],
  13: [{ skillId: 'quick', from: 7, to: 8, cost: 4, special: 'QUICK SLICE Rk 8: Specialty 1' }],
  14: [{ skillId: 'insignia', from: 1, to: 2, cost: 1 }, { skillId: 'insignia', from: 2, to: 3, cost: 1 }, { skillId: 'insignia', from: 3, to: 4, cost: 1 }, { note: 'Nuevo skill! Insignia Explosion desbloqueado' }],
  15: [{ skillId: 'insignia', from: 4, to: 5, cost: 2 }, { skillId: 'insignia', from: 5, to: 6, cost: 2 }],
  16: [{ skillId: 'heart', from: 8, to: 9, cost: 4 }, { skillId: 'exploit', from: 1, to: 2, cost: 1 }],
  17: [{ skillId: 'heart', from: 9, to: 10, cost: 4, special: 'HEART GORE Rk 10 MAX por SP' }, { skillId: 'exploit', from: 2, to: 3, cost: 1 }],
  18: [{ skillId: 'insignia', from: 6, to: 7, cost: 2 }, { skillId: 'quick', from: 8, to: 9, cost: 4, note: 'Rk 9 cuesta 4' }, { note: 'Lv 18 Guarda 1 pt' }],
  19: [{ skillId: 'quick', from: 9, to: 10, cost: 4, special: 'QUICK SLICE Rk 10' }, { skillId: 'rear', from: 2, to: 3, cost: 1 }],
  20: [{ skillId: 'insignia', from: 7, to: 8, cost: 4 }, { skillId: 'savage', from: 1, to: 2, cost: 1 }],
  21: [{ skillId: 'savage', from: 2, to: 3, cost: 1 }, { skillId: 'savage', from: 3, to: 4, cost: 1 }, { skillId: 'ambush', from: 3, to: 4, cost: 1 }, { skillId: 'exploit', from: 3, to: 4, cost: 1 }, { note: '1 pt sobrante' }],
  22: [{ skillId: 's_clone', from: 1, to: 5, cost: 5, note: 'ASCENSIÓN! Stigma Illusive Clone a Rk 5 (1pt×5)', special: 'Ascensión completada, Illusive Clone equipado' }],
  23: [{ skillId: 's_clone', from: 5, to: 7, cost: 4 }, { note: '1 pt extra: Rear Smite' }],
  24: [{ skillId: 's_clone', from: 7, to: 9, cost: 4 }, { skillId: 'rear', from: 3, to: 4, cost: 1 }],
  25: [{ skillId: 's_clone', from: 9, to: 10, cost: 2 }, { skillId: 'insignia', from: 8, to: 9, cost: 4, note: 'queda 1 pt libre' }],
  26: [{ skillId: 'insignia', from: 9, to: 10, cost: 4, special: 'INSIGNIA EXPLOSION Rk 10 MAX por SP' }, { skillId: 'savage', from: 4, to: 5, cost: 2, note: '1 sobrante' }],
  27: [{ skillId: 's_swift', from: 1, to: 5, cost: 5, note: 'Slot 2 abierto! Swift Contract equipado y a Rk 5' }],
  28: [{ skillId: 's_clone', from: 10, to: 12, cost: 8, note: 'subir Illusive Clone a Rk 12 (specialty)' }, { note: 'Guarda 2 pts sobrantes' }],
  29: [{ skillId: 's_clone', from: 12, to: 13, cost: 4 }, { skillId: 'rear', from: 4, to: 5, cost: 2, note: '-1 pt deuda, siguiente lv' }],
  30: [{ skillId: 's_swift', from: 5, to: 7, cost: 4 }, { skillId: 'ambush', from: 4, to: 5, cost: 1 }, { note: '-1 deuda saldada, +0 sobrante', special: 'VAIZEL BOARD DESBLOQUEADO (Lv 30) — prioriza esquinas Crit Damage Boost' }],
  31: [{ skillId: 's_clone', from: 13, to: 14, cost: 4 }, { skillId: 'savage', from: 5, to: 6, cost: 2 }],
  32: [{ skillId: 's_triniel', from: 1, to: 5, cost: 5, note: 'Slot 3 abierto!' }, { skillId: 'exploit', from: 4, to: 5, cost: 2, note: 'Rk 5 cost 2' }, { note: '-1 pt deuda' }],
  33: [{ skillId: 's_triniel', from: 5, to: 7, cost: 4 }, { skillId: 'ambush', from: 5, to: 6, cost: 2 }, { note: '-1 pt deuda saldada, +1 sobrante' }],
  34: [{ skillId: 's_triniel', from: 7, to: 9, cost: 4 }, { skillId: 'assault', from: 1, to: 2, cost: 1 }, { skillId: 'assault', from: 2, to: 3, cost: 1 }],
  35: [{ skillId: 's_triniel', from: 9, to: 10, cost: 2 }, { skillId: 'shadow', from: 1, to: 3, cost: 2 }, { skillId: 'ambush', from: 6, to: 7, cost: 2 }],
  36: [{ skillId: 's_clone', from: 14, to: 15, cost: 4 }, { skillId: 'ambush', from: 7, to: 8, cost: 4, note: '-2 pt deuda' }],
  37: [{ skillId: 's_fang', from: 1, to: 5, cost: 5, note: 'Slot 4 abierto!' }, { skillId: 'rear', from: 5, to: 6, cost: 2, note: '-1 pt deuda saldada' }],
  38: [{ skillId: 's_fang', from: 5, to: 7, cost: 4 }, { skillId: 'exploit', from: 5, to: 6, cost: 2 }],
  39: [{ skillId: 's_fang', from: 7, to: 9, cost: 4 }, { skillId: 'assault', from: 3, to: 4, cost: 1 }, { skillId: 'rear', from: 6, to: 7, cost: 2, note: '-1 pt deuda' }],
  40: [{ skillId: 's_fang', from: 9, to: 10, cost: 2 }, { skillId: 's_swift', from: 7, to: 10, cost: 6, note: '-2 deuda saldada', special: 'TRINIEL BOARD DESBLOQUEADO (Lv 40) — camino Multi-Hit Chance' }],
  41: [{ skillId: 's_swift', from: 10, to: 12, cost: 8, note: '-2 deuda' }],
  42: [{ skillId: 's_clone', from: 15, to: 16, cost: 8, note: '-2 deuda saldada' }],
  43: [{ skillId: 's_clone', from: 16, to: 17, cost: 8, note: '-2 deuda' }],
  44: [{ skillId: 's_clone', from: 17, to: 18, cost: 8, note: '-1 deuda saldada' }],
  45: [{ skillId: 's_clone', from: 18, to: 19, cost: 8, note: 'CAP alcanzado. Falta 1 pt. Lv 46-50 futuro.', special: 'LV 45 CAP. AZPHEL BOARD disponible (skip para PvE puro)' }]
};

function buildPlanner() {
  const container = document.getElementById('plannerBody');
  if (!container) return;

  // Track skill ranks progressively
  const ranks = {};
  CORE_SKILLS.forEach(s => ranks[s.id] = s.unlock <= 1 ? 1 : 0);
  STIGMAS.forEach(s => ranks[s.id] = 0);

  let cumulativeSP = 0;
  let bankedSP = 0;

  for (let lvl = 1; lvl <= 45; lvl++) {
    const spGained = SP_PER_LEVEL[lvl];
    cumulativeSP += spGained;

    // Unlocks at this level
    const unlocks = [];
    CORE_SKILLS.forEach(s => {
      if (s.unlock === lvl) {
        unlocks.push(s.name);
        ranks[s.id] = 1;
      }
    });
    STIGMAS.forEach(s => {
      if (s.unlockLvl === lvl) {
        unlocks.push('🔓 ' + s.name + ' (stigma slot ' + s.slot + ')');
        ranks[s.id] = 1;
      }
    });

    // Apply plan
    const actions = PLAN[lvl] || [];
    let totalSpent = 0;
    const actionDescs = [];
    actions.forEach(act => {
      if (act.skillId) {
        const skill = CORE_SKILLS.find(s => s.id === act.skillId) || STIGMAS.find(s => s.id === act.skillId);
        if (skill) {
          ranks[act.skillId] = act.to;
          const name = skill.name;
          actionDescs.push(`<span class="plan-action"><strong>${name}</strong> Rk ${act.from}→${act.to} <em>(-${act.cost} SP)</em>${act.note ? '<br><small>' + act.note + '</small>' : ''}</span>`);
          totalSpent += act.cost;
        }
      } else if (act.note) {
        actionDescs.push(`<span class="plan-note">${act.note}</span>`);
      }
      if (act.special) {
        actionDescs.push(`<span class="plan-special">⭐ ${act.special}</span>`);
      }
    });

    bankedSP += spGained - totalSpent;

    // Row
    const row = document.createElement('div');
    row.className = 'planner-row';
    if (spGained === 0 && actions.length === 0) row.classList.add('empty');
    if (actions.some(a => a.special)) row.classList.add('milestone');

    row.innerHTML = `
      <div class="planner-level">Lv ${lvl}</div>
      <div class="planner-points">
        <span class="pts-gained">+${spGained}</span>
        <span class="pts-cum">acum ${cumulativeSP}</span>
        <span class="pts-bank">banco ${bankedSP >= 0 ? bankedSP : '<span style="color:var(--crit)">' + bankedSP + '</span>'}</span>
      </div>
      <div class="planner-unlocks">${unlocks.length ? unlocks.map(u => '<span class="unlock-chip">' + u + '</span>').join('') : '<span class="no-unlock">—</span>'}</div>
      <div class="planner-actions">${actionDescs.join('') || '<span class="no-action">Guarda los puntos para el próximo nivel.</span>'}</div>
    `;
    container.appendChild(row);
  }

  // Summary totals
  const summary = document.getElementById('plannerSummary');
  if (summary) {
    summary.innerHTML = `
      <div class="stat"><div class="label">Total SP a Lv 45</div><div class="value">203</div></div>
      <div class="stat"><div class="label">Skills a Rk 10</div><div class="value">3</div></div>
      <div class="stat"><div class="label">Stigmas a Rk 15+</div><div class="value">1-2</div></div>
      <div class="stat"><div class="label">Deuda final</div><div class="value" style="color:var(--crit)">${bankedSP >= 0 ? '0' : Math.abs(bankedSP)} SP</div></div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', buildPlanner);
