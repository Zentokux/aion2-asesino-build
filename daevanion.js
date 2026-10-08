// Aion 2 Global S1 — Daevanion Boards para Asesino PvE
// Topología MAPEADA visualmente de las capturas del planner oficial couga54
// https://couga54.github.io/aion2-guides/en/assassin/#daevanion
// Grilla 13×13, 4 esquinas rombo special, centro dorado gratis.
// Totales couga54 (route): Nezekan 63 · Zikel 65 · Vaizel 69 · Triniel 91 · Azphel 0 = 288 pts

const GRID = 13;
const CELL = 46;
const PAD = 28;

const SKILL_ICON = {
  heart: 'heart_gore.webp', quick: 'quick_slice.webp', insignia: 'insignia_explosion.webp',
  savage: 'savage_roar.webp', shadow: 'shadowstrike.webp', ambush: 'ambush.webp',
  flash: 'flash_slice.webp', storm: 'storm_rampage.webp', whirl: 'whirlwind_slice.webp',
  infiltrate: 'infiltrate.webp', shadowfall: 'shadow_fall.webp', defiance: 'defiance.webp',
  rear: 'rear_smite.webp', exploit: 'exploit_weakness.webp', assault: 'assault_stance.webp',
  impact: 'impact_hit.webp', poison: 'apply_poison.webp', sixthsense: 'sixth_sense.webp',
  ambushstance: 'ambush_stance.webp', defbreak: 'defense_break.webp', determination: 'determination.webp',
};

// === Nodos por board ===
// type: 'stat1' | 'stat23' | 'passive' | 'skill' | 'special' | 'center'
// onRoute: true si está marcado por la ruta amarilla de couga54
// order: posición en el camino progresivo (solo nodos onRoute)
// skill: key del icono (solo si type==='skill' o 'passive')

const BOARDS = [
  {
    id: 'nezekan',
    name: 'Nezekan',
    unlockLvl: 12,
    color: '#4ea8de',
    totalDP: 63,
    focus: 'Combat Speed + Cooldown Reduction',
    fullBoard: 'Combat Speed +3%, CDR +3%',
    center: [6, 6],
    corners: [[0, 0], [12, 0], [0, 12], [12, 12]],
    cornersOnRoute: [[0, 0], [0, 12], [12, 12]],
    nodes: [
      // Route (orden numerado según captura couga54)
      { x: 1, y: 0, type: 'stat1', onRoute: true, order: 1 },
      { x: 2, y: 0, type: 'stat1', onRoute: true, order: 2 },
      { x: 2, y: 1, type: 'skill', skill: 'heart', onRoute: true, order: 3 },
      { x: 3, y: 1, type: 'stat1', onRoute: true, order: 4 },
      { x: 4, y: 1, type: 'stat1', onRoute: true, order: 5 },
      { x: 4, y: 2, type: 'stat1', onRoute: true, order: 6 },
      { x: 4, y: 3, type: 'stat1', onRoute: true, order: 7 },
      { x: 4, y: 4, type: 'stat1', onRoute: true, order: 8 },
      { x: 5, y: 1, type: 'skill', skill: 'ambush', onRoute: false },
      { x: 6, y: 1, type: 'skill', skill: 'insignia', onRoute: false },
      { x: 8, y: 1, type: 'passive', skill: 'exploit', onRoute: false },
      { x: 2, y: 3, type: 'passive', skill: 'sixthsense', onRoute: false },
      { x: 2, y: 5, type: 'skill', skill: 'whirl', onRoute: false },
      { x: 1, y: 6, type: 'passive', skill: 'poison', onRoute: false },
      { x: 5, y: 6, type: 'skill', skill: 'storm', onRoute: false },
      { x: 6, y: 5, type: 'stat23', onRoute: true, order: 9 },
      { x: 6, y: 6, type: 'center', onRoute: true, order: 0 },
      { x: 7, y: 6, type: 'stat1', onRoute: true, order: 10 },
      { x: 8, y: 6, type: 'stat1', onRoute: true, order: 11 },
      { x: 9, y: 6, type: 'stat1', onRoute: true, order: 12 },
      { x: 10, y: 6, type: 'skill', skill: 'quick', onRoute: true, order: 13 },
      { x: 11, y: 6, type: 'stat1', onRoute: true, order: 14 },
      { x: 12, y: 6, type: 'skill', skill: 'insignia', onRoute: true, order: 15 },
      { x: 10, y: 5, type: 'skill', skill: 'shadow', onRoute: true, order: 16 },
      { x: 10, y: 4, type: 'stat1', onRoute: true, order: 17 },
      { x: 10, y: 3, type: 'passive', skill: 'rear', onRoute: true, order: 18 },
      { x: 10, y: 2, type: 'passive', skill: 'assault', onRoute: false },
      { x: 7, y: 2, type: 'skill', skill: 'flash', onRoute: false },
      { x: 7, y: 5, type: 'skill', skill: 'defiance', onRoute: false },
      { x: 2, y: 10, type: 'skill', skill: 'infiltrate', onRoute: false },
      { x: 3, y: 10, type: 'passive', skill: 'ambushstance', onRoute: false },
      { x: 5, y: 9, type: 'stat23', onRoute: true, order: 19 },
      { x: 5, y: 10, type: 'skill', skill: 'shadowfall', onRoute: true, order: 20 },
      { x: 5, y: 11, type: 'stat1', onRoute: true, order: 21 },
      { x: 4, y: 11, type: 'stat1', onRoute: true, order: 22 },
      { x: 3, y: 12, type: 'skill', skill: 'savage', onRoute: true, order: 23 },
      { x: 2, y: 12, type: 'stat1', onRoute: true, order: 24 },
      { x: 1, y: 12, type: 'stat1', onRoute: true, order: 25 },
      { x: 10, y: 12, type: 'passive', skill: 'determination', onRoute: false },
      { x: 11, y: 12, type: 'stat1', onRoute: true, order: 26 },
      { x: 7, y: 11, type: 'passive', skill: 'defbreak', onRoute: false },
      // Stats scattered
      { x: 0, y: 3, type: 'stat1', onRoute: false },
      { x: 0, y: 6, type: 'stat1', onRoute: false },
      { x: 0, y: 9, type: 'stat1', onRoute: false },
      { x: 12, y: 3, type: 'stat1', onRoute: false },
      { x: 12, y: 9, type: 'stat1', onRoute: false },
    ],
    tip: 'Route couga54: desde esquina CS (0,0) baja por eje izquierdo cruzando Heart Gore blue → cruza al centro dorado → sale a la derecha pasando por Quick Slice + Insignia Explosion + Shadowstrike + Rear Smite → baja por Shadow Fall + Savage Roar hacia esquina CDR (12,12). 63 DP total.'
  },

  {
    id: 'zikel',
    name: 'Zikel',
    unlockLvl: 20,
    color: '#f59e0b',
    totalDP: 65,
    focus: 'Damage Boost + Damage Tolerance',
    fullBoard: 'DB +3%, DT +3%',
    center: [6, 6],
    corners: [[0, 0], [12, 0], [0, 12], [12, 12]],
    cornersOnRoute: [[0, 0], [12, 0], [0, 12], [12, 12]],
    nodes: [
      { x: 1, y: 0, type: 'stat1', onRoute: true, order: 1 },
      { x: 2, y: 0, type: 'stat1', onRoute: true, order: 2 },
      { x: 3, y: 0, type: 'stat1', onRoute: true, order: 3 },
      { x: 4, y: 0, type: 'stat1', onRoute: true, order: 4 },
      { x: 5, y: 0, type: 'skill', skill: 'insignia', onRoute: true, order: 5 },
      { x: 6, y: 0, type: 'passive', skill: 'assault', onRoute: true, order: 6 },
      { x: 7, y: 0, type: 'skill', skill: 'savage', onRoute: true, order: 7 },
      { x: 8, y: 0, type: 'stat1', onRoute: true, order: 8 },
      { x: 9, y: 0, type: 'stat1', onRoute: true, order: 9 },
      { x: 10, y: 0, type: 'stat1', onRoute: true, order: 10 },
      { x: 11, y: 0, type: 'stat1', onRoute: true, order: 11 },
      { x: 1, y: 3, type: 'skill', skill: 'quick', onRoute: true, order: 12 },
      { x: 2, y: 3, type: 'stat1', onRoute: true, order: 13 },
      { x: 3, y: 3, type: 'stat1', onRoute: true, order: 14 },
      { x: 4, y: 3, type: 'passive', skill: 'ambushstance', onRoute: true, order: 15 },
      { x: 4, y: 2, type: 'stat1', onRoute: true, order: 16 },
      { x: 2, y: 2, type: 'skill', skill: 'storm', onRoute: false },
      { x: 3, y: 4, type: 'skill', skill: 'shadow', onRoute: false },
      { x: 5, y: 1, type: 'stat1', onRoute: true, order: 17 },
      { x: 5, y: 2, type: 'stat1', onRoute: true, order: 18 },
      { x: 5, y: 3, type: 'stat23', onRoute: true, order: 19 },
      { x: 5, y: 4, type: 'stat1', onRoute: true, order: 20 },
      { x: 5, y: 5, type: 'stat1', onRoute: true, order: 21 },
      { x: 5, y: 6, type: 'stat1', onRoute: true, order: 22 },
      { x: 6, y: 6, type: 'center', onRoute: true, order: 0 },
      { x: 5, y: 7, type: 'stat1', onRoute: true, order: 23 },
      { x: 5, y: 8, type: 'stat1', onRoute: true, order: 24 },
      { x: 5, y: 9, type: 'stat1', onRoute: true, order: 25 },
      { x: 5, y: 10, type: 'skill', skill: 'infiltrate', onRoute: true, order: 26 },
      { x: 4, y: 10, type: 'stat1', onRoute: true, order: 27 },
      { x: 6, y: 10, type: 'stat1', onRoute: true, order: 28 },
      { x: 7, y: 10, type: 'stat1', onRoute: true, order: 29 },
      { x: 7, y: 11, type: 'stat1', onRoute: true, order: 30 },
      { x: 5, y: 12, type: 'passive', skill: 'poison', onRoute: true, order: 31 },
      { x: 7, y: 12, type: 'skill', skill: 'heart', onRoute: true, order: 32 },
      { x: 1, y: 12, type: 'skill', skill: 'insignia', onRoute: true, order: 33 },
      { x: 2, y: 12, type: 'stat1', onRoute: true, order: 34 },
      { x: 3, y: 12, type: 'stat1', onRoute: true, order: 35 },
      { x: 8, y: 12, type: 'stat1', onRoute: true, order: 36 },
      { x: 9, y: 12, type: 'stat1', onRoute: true, order: 37 },
      { x: 10, y: 12, type: 'stat1', onRoute: true, order: 38 },
      { x: 11, y: 12, type: 'stat1', onRoute: true, order: 39 },
      // Scattered
      { x: 7, y: 4, type: 'passive', skill: 'exploit', onRoute: false },
      { x: 11, y: 5, type: 'passive', skill: 'sixthsense', onRoute: false },
      { x: 1, y: 7, type: 'skill', skill: 'whirl', onRoute: false },
      { x: 3, y: 7, type: 'passive', skill: 'ambushstance', onRoute: false },
      { x: 9, y: 7, type: 'skill', skill: 'shadowfall', onRoute: false },
      { x: 7, y: 8, type: 'skill', skill: 'ambush', onRoute: false },
      { x: 11, y: 9, type: 'skill', skill: 'flash', onRoute: false },
      { x: 2, y: 9, type: 'skill', skill: 'defiance', onRoute: false },
      { x: 10, y: 10, type: 'skill', skill: 'defbreak', onRoute: false },
    ],
    tip: 'Route couga54: borde superior completo (incluye Insignia Explosion + Assault Stance + Savage Roar) → ambas esquinas DB → eje vertical central hasta esquina inferior izquierda (incluye Infiltrate + Insignia Explosion) → borde inferior hasta esquina inferior derecha. 65 DP total.'
  },

  {
    id: 'vaizel',
    name: 'Vaizel',
    unlockLvl: 30,
    color: '#ff4d6d',
    totalDP: 69,
    focus: '⭐ Critical Damage (BOARD #1 PvE MAX DPS)',
    fullBoard: 'CDB +3%, CDT +3%, Crit Hit +55',
    center: [6, 6],
    corners: [[0, 0], [12, 0], [0, 12], [12, 12]],
    cornersOnRoute: [[0, 0], [12, 0], [0, 12], [12, 12]],
    nodes: [
      { x: 1, y: 0, type: 'stat1', onRoute: true, order: 1 },
      { x: 2, y: 0, type: 'passive', skill: 'sixthsense', onRoute: true, order: 2 },
      { x: 3, y: 1, type: 'stat1', onRoute: true, order: 3 },
      { x: 4, y: 1, type: 'stat1', onRoute: true, order: 4 },
      { x: 5, y: 0, type: 'stat1', onRoute: true, order: 5 },
      { x: 6, y: 0, type: 'skill', skill: 'insignia', onRoute: true, order: 6 },
      { x: 7, y: 0, type: 'stat1', onRoute: true, order: 7 },
      { x: 8, y: 0, type: 'passive', skill: 'poison', onRoute: true, order: 8 },
      { x: 9, y: 0, type: 'stat1', onRoute: true, order: 9 },
      { x: 10, y: 0, type: 'stat1', onRoute: true, order: 10 },
      { x: 11, y: 0, type: 'stat1', onRoute: true, order: 11 },
      { x: 6, y: 1, type: 'stat1', onRoute: true, order: 12 },
      { x: 6, y: 2, type: 'stat1', onRoute: true, order: 13 },
      { x: 6, y: 3, type: 'passive', skill: 'determination', onRoute: true, order: 14 },
      { x: 6, y: 4, type: 'stat1', onRoute: true, order: 15 },
      { x: 6, y: 5, type: 'stat1', onRoute: true, order: 16 },
      { x: 6, y: 6, type: 'center', onRoute: true, order: 0 },
      { x: 7, y: 6, type: 'stat1', onRoute: true, order: 17 },
      { x: 8, y: 6, type: 'stat1', onRoute: true, order: 18 },
      { x: 9, y: 5, type: 'skill', skill: 'heart', onRoute: true, order: 19 },
      { x: 10, y: 5, type: 'stat1', onRoute: true, order: 20 },
      { x: 11, y: 5, type: 'stat1', onRoute: true, order: 21 },
      { x: 12, y: 6, type: 'skill', skill: 'quick', onRoute: true, order: 22 },
      { x: 0, y: 6, type: 'stat1', onRoute: true, order: 23 },
      { x: 1, y: 6, type: 'stat1', onRoute: true, order: 24 },
      { x: 2, y: 6, type: 'skill', skill: 'insignia', onRoute: true, order: 25 },
      { x: 3, y: 6, type: 'stat1', onRoute: true, order: 26 },
      { x: 4, y: 6, type: 'stat1', onRoute: true, order: 27 },
      { x: 2, y: 7, type: 'stat23', onRoute: true, order: 28 },
      { x: 2, y: 8, type: 'stat1', onRoute: true, order: 29 },
      { x: 2, y: 9, type: 'skill', skill: 'storm', onRoute: true, order: 30 },
      { x: 2, y: 10, type: 'stat1', onRoute: true, order: 31 },
      { x: 2, y: 11, type: 'stat1', onRoute: true, order: 32 },
      { x: 1, y: 12, type: 'stat1', onRoute: true, order: 33 },
      { x: 11, y: 10, type: 'skill', skill: 'defiance', onRoute: true, order: 34 },
      { x: 11, y: 11, type: 'stat1', onRoute: true, order: 35 },
      { x: 11, y: 12, type: 'stat1', onRoute: true, order: 36 },
      { x: 10, y: 9, type: 'stat1', onRoute: true, order: 37 },
      { x: 6, y: 7, type: 'skill', skill: 'shadow', onRoute: false },
      { x: 6, y: 8, type: 'skill', skill: 'flash', onRoute: false },
      { x: 5, y: 9, type: 'passive', skill: 'ambushstance', onRoute: false },
      { x: 7, y: 9, type: 'skill', skill: 'ambush', onRoute: false },
      { x: 10, y: 7, type: 'passive', skill: 'defbreak', onRoute: false },
      { x: 10, y: 11, type: 'skill', skill: 'whirl', onRoute: false },
      { x: 4, y: 11, type: 'passive', skill: 'rear', onRoute: false },
      { x: 6, y: 11, type: 'passive', skill: 'exploit', onRoute: false },
      { x: 9, y: 11, type: 'skill', skill: 'savage', onRoute: false },
      { x: 2, y: 3, type: 'skill', skill: 'shadow', onRoute: false },
      { x: 4, y: 3, type: 'skill', skill: 'infiltrate', onRoute: false },
      { x: 8, y: 3, type: 'skill', skill: 'flash', onRoute: false },
      { x: 10, y: 3, type: 'passive', skill: 'sixthsense', onRoute: false },
      { x: 3, y: 5, type: 'passive', skill: 'assault', onRoute: false },
      { x: 0, y: 9, type: 'skill', skill: 'shadowfall', onRoute: false },
    ],
    tip: '⭐ BOARD #1 PvE. Route couga54 pasa por las 4 esquinas CDB + nodos clave Heart Gore + Quick Slice + Insignia Explosion (×2) + Storm Rampage + Determination + Defiance. 69 DP total.'
  },

  {
    id: 'triniel',
    name: 'Triniel',
    unlockLvl: 40,
    color: '#a855f7',
    totalDP: 91,
    focus: 'Multi-Hit Chance (sinergia reset-on-crit)',
    fullBoard: 'MH +4.5%, HP +1500, Crit Hit +75',
    center: [6, 6],
    corners: [[0, 0], [6, 0], [12, 0], [0, 12], [6, 12], [12, 12]], // Triniel tiene 6 corners (según captura)
    cornersOnRoute: [[0, 0], [12, 0], [0, 12], [12, 12], [6, 12]],
    nodes: [
      { x: 1, y: 0, type: 'stat1', onRoute: true, order: 1 },
      { x: 2, y: 0, type: 'stat1', onRoute: true, order: 2 },
      { x: 2, y: 1, type: 'skill', skill: 'shadow', onRoute: true, order: 3 },
      { x: 3, y: 1, type: 'stat1', onRoute: true, order: 4 },
      { x: 4, y: 1, type: 'stat1', onRoute: true, order: 5 },
      { x: 5, y: 1, type: 'skill', skill: 'ambush', onRoute: true, order: 6 },
      { x: 6, y: 1, type: 'stat1', onRoute: true, order: 7 },
      { x: 6, y: 2, type: 'stat1', onRoute: true, order: 8 },
      { x: 7, y: 1, type: 'skill', skill: 'flash', onRoute: false },
      { x: 8, y: 1, type: 'passive', skill: 'sixthsense', onRoute: false },
      { x: 1, y: 3, type: 'skill', skill: 'insignia', onRoute: true, order: 9 },
      { x: 2, y: 3, type: 'stat1', onRoute: true, order: 10 },
      { x: 3, y: 3, type: 'passive', skill: 'exploit', onRoute: true, order: 11 },
      { x: 3, y: 4, type: 'stat1', onRoute: true, order: 12 },
      { x: 3, y: 5, type: 'passive', skill: 'defbreak', onRoute: false },
      { x: 3, y: 6, type: 'skill', skill: 'rear', onRoute: true, order: 13 },
      { x: 7, y: 3, type: 'passive', skill: 'ambushstance', onRoute: false },
      { x: 10, y: 3, type: 'skill', skill: 'poison', onRoute: false },
      { x: 11, y: 3, type: 'passive', skill: 'determination', onRoute: true, order: 14 },
      { x: 4, y: 5, type: 'skill', skill: 'quick', onRoute: true, order: 15 },
      { x: 5, y: 5, type: 'stat1', onRoute: true, order: 16 },
      { x: 6, y: 5, type: 'stat1', onRoute: true, order: 17 },
      { x: 6, y: 6, type: 'center', onRoute: true, order: 0 },
      { x: 6, y: 7, type: 'stat1', onRoute: true, order: 18 },
      { x: 7, y: 6, type: 'stat1', onRoute: true, order: 19 },
      { x: 8, y: 6, type: 'skill', skill: 'heart', onRoute: true, order: 20 },
      { x: 9, y: 6, type: 'stat1', onRoute: true, order: 21 },
      { x: 10, y: 6, type: 'stat1', onRoute: true, order: 22 },
      { x: 11, y: 5, type: 'skill', skill: 'insignia', onRoute: true, order: 23 },
      { x: 9, y: 5, type: 'passive', skill: 'assault', onRoute: false },
      { x: 8, y: 7, type: 'passive', skill: 'rear', onRoute: false },
      { x: 1, y: 8, type: 'skill', skill: 'savage', onRoute: true, order: 24 },
      { x: 2, y: 8, type: 'stat1', onRoute: true, order: 25 },
      { x: 3, y: 8, type: 'stat1', onRoute: true, order: 26 },
      { x: 4, y: 8, type: 'skill', skill: 'storm', onRoute: false },
      { x: 7, y: 8, type: 'passive', skill: 'determination', onRoute: false },
      { x: 11, y: 8, type: 'passive', skill: 'determination', onRoute: true, order: 27 },
      { x: 1, y: 9, type: 'stat1', onRoute: true, order: 28 },
      { x: 1, y: 10, type: 'stat1', onRoute: true, order: 29 },
      { x: 1, y: 11, type: 'stat1', onRoute: true, order: 30 },
      { x: 2, y: 11, type: 'stat1', onRoute: true, order: 31 },
      { x: 3, y: 11, type: 'skill', skill: 'shadowfall', onRoute: true, order: 32 },
      { x: 4, y: 11, type: 'stat1', onRoute: true, order: 33 },
      { x: 5, y: 11, type: 'skill', skill: 'storm', onRoute: true, order: 34 },
      { x: 6, y: 11, type: 'stat1', onRoute: true, order: 35 },
      { x: 7, y: 11, type: 'passive', skill: 'ambushstance', onRoute: true, order: 36 },
      { x: 8, y: 11, type: 'stat1', onRoute: true, order: 37 },
      { x: 9, y: 11, type: 'skill', skill: 'quick', onRoute: true, order: 38 },
      { x: 10, y: 11, type: 'stat1', onRoute: true, order: 39 },
      { x: 11, y: 11, type: 'stat1', onRoute: true, order: 40 },
      { x: 11, y: 12, type: 'stat1', onRoute: true, order: 41 },
    ],
    tip: 'Route couga54: Triniel es el board más grande (91 DP). Múltiples caminos a esquinas MH Chance. Blues clave: Shadowstrike, Ambush, Flash Slice, Insignia Explosion, Quick Slice, Heart Gore, Savage Roar, Shadow Fall, Storm Rampage. 91 DP total.'
  },

  {
    id: 'azphel',
    name: 'Azphel',
    unlockLvl: 45,
    color: '#8f98a8',
    totalDP: 0,
    focus: '⚠️ PvP — SKIP para PvE puro',
    fullBoard: 'Solo stats PvP (DB/DT/Status Chance/Resist)',
    center: [6, 6],
    corners: [[0, 0], [12, 0], [0, 6], [12, 6], [0, 12], [12, 12]], // Azphel: 6 corners según captura
    cornersOnRoute: [],
    nodes: [
      // Azphel es grilla densa con 100% stats + muchos skill blues/passives, pero route = 0 pts PvE puro
      // Represento la grilla general con stat/passive/skill distribuidos
      // No marco order porque route=0 (skip PvE)
      { x: 2, y: 0, type: 'skill', skill: 'shadow', onRoute: false },
      { x: 4, y: 0, type: 'passive', skill: 'exploit', onRoute: false },
      { x: 7, y: 0, type: 'passive', skill: 'rear', onRoute: false },
      { x: 9, y: 0, type: 'skill', skill: 'quick', onRoute: false },
      { x: 1, y: 2, type: 'passive', skill: 'determination', onRoute: false },
      { x: 3, y: 2, type: 'passive', skill: 'ambushstance', onRoute: false },
      { x: 5, y: 2, type: 'passive', skill: 'sixthsense', onRoute: false },
      { x: 7, y: 2, type: 'skill', skill: 'insignia', onRoute: false },
      { x: 10, y: 2, type: 'passive', skill: 'assault', onRoute: false },
      { x: 12, y: 2, type: 'passive', skill: 'defbreak', onRoute: false },
      { x: 1, y: 4, type: 'skill', skill: 'ambush', onRoute: false },
      { x: 4, y: 4, type: 'skill', skill: 'flash', onRoute: false },
      { x: 6, y: 4, type: 'skill', skill: 'heart', onRoute: false },
      { x: 8, y: 4, type: 'passive', skill: 'poison', onRoute: false },
      { x: 10, y: 4, type: 'skill', skill: 'storm', onRoute: false },
      { x: 2, y: 5, type: 'passive', skill: 'exploit', onRoute: false },
      { x: 5, y: 5, type: 'passive', skill: 'determination', onRoute: false },
      { x: 10, y: 5, type: 'passive', skill: 'rear', onRoute: false },
      { x: 4, y: 7, type: 'skill', skill: 'shadowfall', onRoute: false },
      { x: 7, y: 7, type: 'passive', skill: 'assault', onRoute: false },
      { x: 1, y: 8, type: 'skill', skill: 'defiance', onRoute: false },
      { x: 3, y: 8, type: 'skill', skill: 'whirl', onRoute: false },
      { x: 5, y: 8, type: 'skill', skill: 'insignia', onRoute: false },
      { x: 7, y: 8, type: 'skill', skill: 'ambush', onRoute: false },
      { x: 9, y: 8, type: 'skill', skill: 'heart', onRoute: false },
      { x: 12, y: 8, type: 'skill', skill: 'shadow', onRoute: false },
      { x: 2, y: 10, type: 'passive', skill: 'sixthsense', onRoute: false },
      { x: 4, y: 10, type: 'passive', skill: 'determination', onRoute: false },
      { x: 7, y: 10, type: 'passive', skill: 'exploit', onRoute: false },
      { x: 10, y: 10, type: 'passive', skill: 'rear', onRoute: false },
      { x: 12, y: 10, type: 'passive', skill: 'assault', onRoute: false },
      { x: 3, y: 12, type: 'skill', skill: 'quick', onRoute: false },
      { x: 7, y: 12, type: 'passive', skill: 'exploit', onRoute: false },
      { x: 9, y: 12, type: 'skill', skill: 'insignia', onRoute: false },
    ],
    tip: '⚠️ Azphel es 100% PvP. 0 DP en route PvE. Solo entra si harás arenas/sieges. No roba recursos de otros boards (currency separada: Azphel Points).'
  }
];

const TOTAL_PTS = BOARDS.reduce((s, b) => s + b.totalDP, 0);

function buildBoardSVG(board) {
  const total = GRID * CELL + PAD * 2;
  const centerX = PAD + board.center[0] * CELL + CELL/2;
  const centerY = PAD + board.center[1] * CELL + CELL/2;

  let svg = `<svg viewBox="0 0 ${total} ${total}" class="board-svg" preserveAspectRatio="xMidYMid meet">`;

  // Defs
  svg += `<defs>
    <radialGradient id="centerGlow-${board.id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#f4c430" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#f4c430" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bgGlow-${board.id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="${board.color}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${board.color}" stop-opacity="0"/>
    </radialGradient>
  </defs>`;

  // Fondo oscuro
  svg += `<rect x="0" y="0" width="${total}" height="${total}" fill="#0b0d12" rx="12"/>`;
  svg += `<circle cx="${centerX}" cy="${centerY}" r="${CELL * 4.5}" fill="url(#bgGlow-${board.id})"/>`;
  svg += `<circle cx="${centerX}" cy="${centerY}" r="${CELL * 3}" fill="url(#centerGlow-${board.id})"/>`;

  // Grid connections (líneas grises finas entre nodos ortogonalmente adyacentes)
  const nodeMap = {};
  board.nodes.forEach(n => { nodeMap[`${n.x},${n.y}`] = n; });
  board.corners.forEach(([cx, cy]) => { nodeMap[`${cx},${cy}`] = { x: cx, y: cy, type: 'special' }; });
  nodeMap[`${board.center[0]},${board.center[1]}`] = { x: board.center[0], y: board.center[1], type: 'center' };

  // Dibujar lineas grises de conexión ortogonal entre nodos
  const allNodeKeys = Object.keys(nodeMap);
  allNodeKeys.forEach(key => {
    const [x, y] = key.split(',').map(Number);
    const node = nodeMap[key];
    // Buscar nodo a la derecha (hasta 3 celdas)
    for (let d = 1; d <= 3; d++) {
      const rightKey = `${x+d},${y}`;
      if (nodeMap[rightKey]) {
        const nx1 = PAD + x * CELL + CELL/2;
        const ny1 = PAD + y * CELL + CELL/2;
        const nx2 = PAD + (x+d) * CELL + CELL/2;
        const ny2 = PAD + y * CELL + CELL/2;
        svg += `<line x1="${nx1}" y1="${ny1}" x2="${nx2}" y2="${ny2}" stroke="#2a3245" stroke-width="2"/>`;
        break;
      }
    }
    // Buscar nodo abajo
    for (let d = 1; d <= 3; d++) {
      const downKey = `${x},${y+d}`;
      if (nodeMap[downKey]) {
        const nx1 = PAD + x * CELL + CELL/2;
        const ny1 = PAD + y * CELL + CELL/2;
        const nx2 = PAD + x * CELL + CELL/2;
        const ny2 = PAD + (y+d) * CELL + CELL/2;
        svg += `<line x1="${nx1}" y1="${ny1}" x2="${nx2}" y2="${ny2}" stroke="#2a3245" stroke-width="2"/>`;
        break;
      }
    }
  });

  // Route path (línea amarilla gruesa siguiendo nodos onRoute en orden)
  const routeNodes = board.nodes.filter(n => n.onRoute).sort((a, b) => a.order - b.order);
  // Añadir corners onRoute
  const cornerRouteNodes = (board.cornersOnRoute || []).map(([cx, cy]) => ({ x: cx, y: cy, order: -1 }));
  const allRoute = [...cornerRouteNodes, ...routeNodes];

  // Dibujar route como múltiples segmentos entre pares consecutivos del route (si están alineados ortogonal)
  const routeByOrder = routeNodes;
  for (let i = 0; i < routeByOrder.length - 1; i++) {
    const a = routeByOrder[i], b = routeByOrder[i+1];
    const dx = Math.abs(a.x - b.x), dy = Math.abs(a.y - b.y);
    if (dx + dy <= 3 && (dx === 0 || dy === 0)) {
      const x1 = PAD + a.x * CELL + CELL/2;
      const y1 = PAD + a.y * CELL + CELL/2;
      const x2 = PAD + b.x * CELL + CELL/2;
      const y2 = PAD + b.y * CELL + CELL/2;
      svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#f4c430" stroke-width="7" stroke-linecap="round" opacity="0.9"/>`;
    }
  }
  // Conectar centro a corners del route con línea amarilla también
  (board.cornersOnRoute || []).forEach(([cx, cy]) => {
    // Buscar el nodo del route más cercano al corner
    let nearest = null, minDist = Infinity;
    routeByOrder.forEach(n => {
      const dist = Math.abs(n.x - cx) + Math.abs(n.y - cy);
      if (dist < minDist) { minDist = dist; nearest = n; }
    });
    if (nearest && minDist <= 4) {
      const x1 = PAD + cx * CELL + CELL/2;
      const y1 = PAD + cy * CELL + CELL/2;
      const x2 = PAD + nearest.x * CELL + CELL/2;
      const y2 = PAD + nearest.y * CELL + CELL/2;
      // Línea en L: vertical primero, luego horizontal
      svg += `<line x1="${x1}" y1="${y1}" x2="${x1}" y2="${y2}" stroke="#f4c430" stroke-width="7" stroke-linecap="round" opacity="0.9"/>`;
      svg += `<line x1="${x1}" y1="${y2}" x2="${x2}" y2="${y2}" stroke="#f4c430" stroke-width="7" stroke-linecap="round" opacity="0.9"/>`;
    }
  });

  // Dibujar nodos
  board.nodes.forEach(node => {
    const cx = PAD + node.x * CELL + CELL/2;
    const cy = PAD + node.y * CELL + CELL/2;
    const dataAttr = `data-board="${board.id}" data-order="${node.order ?? ''}" data-skill="${node.skill || ''}" data-type="${node.type}"`;

    svg += `<g class="daev-node ${node.onRoute ? 'on-route' : ''}" ${dataAttr}>`;

    if (node.type === 'stat1') {
      svg += `<circle cx="${cx}" cy="${cy}" r="8" fill="#1b2130" stroke="#5a6478" stroke-width="2"/>`;
    } else if (node.type === 'stat23') {
      svg += `<circle cx="${cx}" cy="${cy}" r="10" fill="#1b2130" stroke="#4ea8de" stroke-width="2"/>`;
      svg += `<circle cx="${cx}" cy="${cy}" r="4" fill="#4ea8de"/>`;
    } else if (node.type === 'passive') {
      const sz = 30;
      svg += `<rect x="${cx-sz/2-2}" y="${cy-sz/2-2}" width="${sz+4}" height="${sz+4}" fill="#0b0d12" stroke="#22c55e" stroke-width="2.5" rx="4"/>`;
      if (node.skill && SKILL_ICON[node.skill]) {
        svg += `<image href="icons/${SKILL_ICON[node.skill]}" x="${cx-sz/2}" y="${cy-sz/2}" width="${sz}" height="${sz}" style="pointer-events:none"/>`;
      }
    } else if (node.type === 'skill') {
      const sz = 36;
      svg += `<rect x="${cx-sz/2-3}" y="${cy-sz/2-3}" width="${sz+6}" height="${sz+6}" fill="#0b0d12" stroke="#4ea8de" stroke-width="3" rx="5"/>`;
      if (node.skill && SKILL_ICON[node.skill]) {
        svg += `<image href="icons/${SKILL_ICON[node.skill]}" x="${cx-sz/2}" y="${cy-sz/2}" width="${sz}" height="${sz}" style="pointer-events:none"/>`;
      }
    }

    svg += `</g>`;
  });

  // 4 esquinas rombo doradas (siempre, sobre el route)
  board.corners.forEach(([x, y]) => {
    const cx = PAD + x * CELL + CELL/2;
    const cy = PAD + y * CELL + CELL/2;
    const sz = 20;
    const isRoute = (board.cornersOnRoute || []).some(c => c[0] === x && c[1] === y);
    svg += `<g class="daev-node corner" data-board="${board.id}" data-type="special" data-order="corner_${x}_${y}">`;
    svg += `<rect x="${cx-sz}" y="${cy-sz}" width="${sz*2}" height="${sz*2}" fill="${isRoute ? '#f4c430' : '#5a4818'}" stroke="${isRoute ? '#fff8dc' : '#8a7030'}" stroke-width="2.5" transform="rotate(45 ${cx} ${cy})" rx="3"/>`;
    svg += `</g>`;
  });

  // Centro dorado grande
  svg += `<g class="daev-node center">`;
  svg += `<circle cx="${centerX}" cy="${centerY}" r="20" fill="#f4c430" stroke="#fff8dc" stroke-width="3"/>`;
  svg += `</g>`;

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

    const routeNodes = b.nodes.filter(n => n.onRoute).sort((a, b) => a.order - b.order);
    const totalRouteCount = routeNodes.length;

    const progressList = routeNodes.filter(n => n.order > 0).map(n => {
      const icon = n.skill ? `<img src="icons/${SKILL_ICON[n.skill]}" class="step-icon" alt="${n.skill}" onerror="this.style.display='none'">` : '<span class="step-dot"></span>';
      const label = n.skill ? n.skill.charAt(0).toUpperCase() + n.skill.slice(1) + ' +1' : (n.type === 'stat23' ? 'Stat 2-3' : 'Stat 1');
      return `<li class="route-step" data-board="${b.id}" data-order="${n.order}">
        <span class="step-num">${n.order}</span>
        ${icon}
        <span class="step-label">${label}</span>
      </li>`;
    }).join('');

    panel.innerHTML = `
      <div class="board-header">
        <h3 style="color:${b.color}">${b.name} <span class="muted">— Lv ${b.unlockLvl}</span></h3>
        <div class="board-meta">
          <span class="badge" style="color:${b.color};border-color:${b.color}">${b.totalDP} pts route</span>
          <span class="badge">${b.focus}</span>
        </div>
        <p class="board-full"><strong>Full board:</strong> ${b.fullBoard}</p>
      </div>
      <div class="board-grid-wrap">${buildBoardSVG(b)}</div>
      <div class="board-legend">
        <span><span class="dot stat1-dot"></span>stat · 1</span>
        <span><span class="dot passive-dot"></span>passive · 2</span>
        <span><span class="dot skill-dot"></span>skill · 3</span>
        <span><span class="dot special-dot"></span>special · 4</span>
        <span><span class="dot stat23-dot"></span>stat · 2-3</span>
        <span><span class="dot route-dot"></span>route</span>
      </div>
      <div class="callout info"><strong>Guía couga54:</strong> ${b.tip}</div>
      ${b.totalDP > 0 ? `
      <h4>Orden progresivo (click para marcar)</h4>
      <ol class="route-steps-list" data-board="${b.id}">
        ${progressList}
      </ol>` : '<p class="muted">Azphel es PvP puro. Skip en PvE.</p>'}
    `;
    container.appendChild(panel);
  });

  // Totales
  const totals = document.createElement('div');
  totals.className = 'daev-totals';
  totals.innerHTML = `<strong>${TOTAL_PTS}</strong> points in total <small>(Nez ${BOARDS[0].totalDP} + Zik ${BOARDS[1].totalDP} + Vai ${BOARDS[2].totalDP} + Tri ${BOARDS[3].totalDP} + Azp 0 = ${TOTAL_PTS}, matches couga54)</small>`;
  container.appendChild(totals);

  // Tab switch
  tabs.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.board-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('board-' + btn.dataset.board).classList.add('active');
    });
  });

  // Click en route step → marcar como desbloqueado
  container.addEventListener('click', e => {
    const step = e.target.closest('.route-step');
    if (!step) return;
    const key = `aion2_route_${step.dataset.board}_${step.dataset.order}`;
    const current = localStorage.getItem(key) === 'true';
    const newState = !current;
    localStorage.setItem(key, newState);
    step.classList.toggle('owned', newState);
    // Marcar visualmente en el SVG también
    const svgNode = container.querySelector(`.daev-node[data-board="${step.dataset.board}"][data-order="${step.dataset.order}"]`);
    if (svgNode) svgNode.classList.toggle('unlocked', newState);
  });

  // Cargar estados
  container.querySelectorAll('.route-step').forEach(step => {
    const key = `aion2_route_${step.dataset.board}_${step.dataset.order}`;
    if (localStorage.getItem(key) === 'true') {
      step.classList.add('owned');
      const svgNode = container.querySelector(`.daev-node[data-board="${step.dataset.board}"][data-order="${step.dataset.order}"]`);
      if (svgNode) svgNode.classList.add('unlocked');
    }
  });
}

window.buildAllBoards = buildAllBoards;
document.addEventListener('DOMContentLoaded', buildAllBoards);
