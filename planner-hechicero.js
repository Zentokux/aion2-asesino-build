// Aion 2 Global S1 — Hechicero PvE: datos de la clase para planner.js
// Prioridades de couga54 (EUTOPIA, aLuckyRO, Vortex Gaming, MMO Codex, Grobs): Flecha en llamas y Cadena gélida
// primero; Quebrantamiento en llamas y Explosión de llama del 6 al 10; Viento helado, Atadura invernal, Voto de
// concentración y Llamas del infierno. Al tope: Llamas del infierno (la n.º 1 de EUTOPIA), Quebrantamiento en llamas,
// Viento helado, Explosión de llama, Voto de concentración, Atadura invernal y Flecha en llamas a 10 con puntos
// (16 con Daevanion, anillos y Arcana). Pasivas: Toga de llama y Marca ígnea al máximo, luego Toga terrestre.
// Nombres, IDs, niveles de aprendizaje y especializaciones: metabot.gg/es_ES (cliente global).

const PLANNER_KEY = 'aion2_planner_lvl_hechicero';

// Iconos del Hechicero (icons/hechicero/<id>.webp, de metabot.gg)
Object.assign(ICON_FILES, {
  h_flecha: 'hechicero/15210000.webp', h_cadena: 'hechicero/15090000.webp', h_quebranto: 'hechicero/15040000.webp',
  h_viento: 'hechicero/15280000.webp', h_explosion: 'hechicero/15050000.webp', h_sinpunteria: 'hechicero/15010000.webp',
  h_congelacion: 'hechicero/15150000.webp', h_atadura: 'hechicero/15110000.webp', h_explo_cong: 'hechicero/15220000.webp',
  h_voto: 'hechicero/15310000.webp', h_infierno: 'hechicero/15060000.webp', h_eliminacion: 'hechicero/15240000.webp',
  h_marca: 'hechicero/15710000.webp', h_toga_tierra: 'hechicero/15720000.webp', h_inv_helada: 'hechicero/15730000.webp',
  h_toga_llama: 'hechicero/15740000.webp', h_absorcion: 'hechicero/15760000.webp', h_merced_res: 'hechicero/15770000.webp',
  h_toga_helada: 'hechicero/15750000.webp', h_merced_mejora: 'hechicero/15780000.webp', h_pacto: 'hechicero/15790000.webp',
  h_vaporizacion: 'hechicero/15800000.webp',
  hs_mejora: 'hechicero/15400000.webp', hs_retrasada: 'hechicero/15320000.webp', hs_barrera_fuego: 'hechicero/15390000.webp',
  hs_tormenta: 'hechicero/15200000.webp', hs_glaciar: 'hechicero/15120000.webp', hs_divinidad: 'hechicero/15360000.webp',
  hs_acero: 'hechicero/15160000.webp', hs_arbol: 'hechicero/15140000.webp', hs_blindaje: 'hechicero/15230000.webp',
  hs_estancado: 'hechicero/15130000.webp', hs_hibernacion: 'hechicero/15410000.webp', hs_lumiel: 'hechicero/15300000.webp',
  hs_bombardeo: 'hechicero/15700000.webp',
});

const SKILLS = {
  // Activas clave (a rango 10 con puntos)
  h_infierno:  { name: 'Llamas del infierno',       nameEn: 'Hellfire',            color: '#ff4d6d', unlock: 14, cap: 10, type: 'Activa clave', note: 'Tu golpe más fuerte y el centro de la build (la n.º 1 de EUTOPIA). Cárgala entera (3 fases) y lánzala a mano.', spec8: 'Aumento de la Velocidad de habilidad en un 30 % (a 16: reducción de 15 s de Tiempo de Enfriamiento)' },
  h_quebranto: { name: 'Quebrantamiento en llamas', nameEn: 'Firestorm',           color: '#ff4d6d', unlock: 1,  cap: 10, type: 'Activa clave', note: 'Enfriamiento de 5 s y gasta mucho maná. A 12, cada quebrantamiento quita 2 s a Llamas del infierno: van en pareja.', spec8: 'Reducción del 50 % de Consumo de Puntos de Maná' },
  h_viento:    { name: 'Viento helado',             nameEn: 'Bittercold Wind',     color: '#ff4d6d', unlock: 3,  cap: 10, type: 'Activa clave', note: 'Campo que inmoviliza al grupo. A 12, golpe Crítico garantizado que ignora Bloqueo y Evasión (EUTOPIA).', spec8: 'El tiempo de invocación de «Viento helado» aumenta 1 s' },
  h_explosion: { name: 'Explosión de llama',        nameEn: 'Blaze',               color: '#ff4d6d', unlock: 4,  cap: 10, type: 'Activa clave', note: 'Tu daño principal sobre un objetivo con Marca ígnea; recupera PM.', spec8: 'Daño diferido tras 3s en grupo (en solitario, contra un jefe difícil: Absorción de PV del 3 %, aLuckyRO)' },
  h_voto:      { name: 'Voto de concentración',     nameEn: 'Wish of Concentration', color: '#ff4d6d', unlock: 12, cap: 10, type: 'Activa clave', note: 'Tu segunda mejora: más Ataque y, a 12, más Velocidad de Hechizo.', spec8: 'Aumento adicional del 10 % de Ataque (a 12: aumento del 10 % de Velocidad de Hechizo)' },
  h_atadura:   { name: 'Atadura invernal',          nameEn: "Winter's Shackles",   color: '#ff4d6d', unlock: 8,  cap: 10, type: 'Activa clave', note: 'La razón para subirla: +20 % de Amplificación de Daño de JcE durante 5 s al acertar.', spec8: 'Al acertar «Atadura invernal», aumento del 20 % de Amplificación de Daño de JcE durante 5s' },
  h_flecha:    { name: 'Flecha en llamas',          nameEn: 'Flame Arrow',         color: '#ff4d6d', unlock: 1,  cap: 10, type: 'Activa clave', note: 'Ataque básico y tu motor de maná: recupera PM en cada lanzamiento.', spec8: 'Aumento del 20 % de Recuperación de Puntos de Maná los primeros días; cuando el maná aguante, aumento del 50 % de Multigolpe' },
  // Activas de apoyo
  h_cadena:    { name: 'Cadena gélida',             nameEn: 'Ice Chain',           color: '#a855f7', unlock: 1,  cap: 10, type: 'Activa (subida)', note: 'Para grupos mientras subes y para ralentizar. EUTOPIA la saca de la barra al 45; aLuckyRO la deja a 12 (cada golpe quita 1 s a Atadura invernal).', spec8: 'Aumento del 20 % de velocidad de habilidad (o −20 % de consumo de PM si te falta maná)' },
  h_sinpunteria: { name: 'Llamas sin puntería',     nameEn: 'Flame Scattershot',   color: '#a855f7', unlock: 5,  cap: 10, type: 'Activa (tambaleo)', note: 'Solo con el objetivo en Tambaleo: puede ir en la macro. Habilidad en movimiento, y Multigolpe a 12.' },
  h_congelacion: { name: 'Congelación',             nameEn: 'Frost',               color: '#64748b', unlock: 7,  cap: 10, type: 'Activa (subida)', note: 'Recupera 200 PM (especialización a 8): útil subiendo sin maná. Sale de la barra al 45 en la configuración global.' },
  h_explo_cong:  { name: 'Explosión de Congelación', nameEn: 'Frost Burst',        color: '#64748b', unlock: 10, cap: 10, type: 'Activa (no)', note: 'Solo contra objetivos congelados. No entra en la configuración global de JcE.' },
  h_eliminacion: { name: 'Eliminación de impacto',  nameEn: 'Defiance',            color: '#64748b', unlock: 16, cap: 10, type: 'Activa (rango 1)', note: 'Rompe el control; a 8, recupera el 20 % de PV.' },
  // Pasivas clave
  h_toga_llama:   { name: 'Toga de llama',     nameEn: 'Robe of Flame',        color: '#d4af37', unlock: 11, cap: 10, type: 'Pasiva clave', note: 'Precisión, Amplificación de Daño de JcE y Golpe: la primera pasiva al máximo (couga54).' },
  h_marca:        { name: 'Marca ígnea',       nameEn: 'Fire Mark',            color: '#d4af37', unlock: 1,  cap: 10, type: 'Pasiva clave', note: 'Pone la Marca ígnea que necesita Explosión de llama y quema al objetivo. Al máximo.' },
  h_toga_tierra:  { name: 'Toga terrestre',    nameEn: 'Robe of Earth',        color: '#d4af37', unlock: 6,  cap: 10, type: 'Pasiva clave', note: 'PM máximos y Crítico con el 50 % de PM o más. Al máximo con el equipo.' },
  h_merced_mejora:{ name: 'Merced de mejora',  nameEn: 'Grace of Enhancement', color: '#d4af37', unlock: 21, cap: 10, type: 'Pasiva clave', note: '+20 % de Amplificación de Daño de JcE con el 25 % de PM o más, y golpes extra.' },
  // El resto
  h_vaporizacion: { name: 'Vaporización de viveza', nameEn: 'Vitality Evaporation', color: '#a3a3a3', unlock: 25, cap: 10, type: 'Pasiva (extra)', note: 'Daño extra mientras el objetivo tiene más del 70 % de PV: fuerte al principio, con peleas cortas.' },
  h_inv_helada:   { name: 'Invocación helada',  nameEn: 'Cold Snap',           color: '#a3a3a3', unlock: 9,  cap: 10, type: 'Pasiva (extra)', note: 'Daño extra contra objetivos ralentizados: Cadena gélida los mantiene así.' },
  h_toga_helada:  { name: 'Toga de helada',     nameEn: 'Robe of Cold',        color: '#a3a3a3', unlock: 17, cap: 10, type: 'Pasiva (extra)', note: 'Defensa y ralentiza a quien te ataca: para incursiones.' },
  h_absorcion:    { name: 'Absorción de esencia', nameEn: 'Absorb Essence',    color: '#64748b', unlock: 13, cap: 10, type: 'Pasiva (no)', note: 'couga54 no la usa en JcE.' },
  h_merced_res:   { name: 'Merced de resistencia', nameEn: 'Grace of Resistance', color: '#64748b', unlock: 15, cap: 10, type: 'Pasiva (no)', note: 'couga54 no la usa en JcE.' },
  h_pacto:        { name: 'Pacto de resurrección', nameEn: 'Revitalization Contract', color: '#64748b', unlock: 23, cap: 10, type: 'Pasiva (JcJ)', note: 'Para JcJ.' },
};

// Estigmas: ranuras según los mejores jugadores de metabot (22 Mejora elemental, 27 Explosión retrasada,
// 32 Barrera de fuego, 37 Tormenta helada), el mismo conjunto de couga54. Se suben con Esquirlas de Estigma.
const STIGMAS = {
  hs_mejora:        { name: 'Mejora elemental',   nameEn: 'Element Enhancement', unlock: 22, slot: 1, target: 20, note: '+20 % de Ataque de Fuego y de Agua: tu mejora principal, lánzala cada vez que esté lista. Al máximo primero.' },
  hs_retrasada:     { name: 'Explosión retrasada', nameEn: 'Delayed Explosion',  unlock: 27, slot: 2, target: 10, note: 'El objetivo recibe un 15 % más de daño tuyo durante 4 s; a 10 baja su enfriamiento. Al principio basta con 1 punto (couga54).' },
  hs_barrera_fuego: { name: 'Barrera de fuego',   nameEn: 'Fire Wall',           unlock: 32, slot: 3, target: 10, note: 'Campo de daño de Fuego; Brasas añade daño extra en cada golpe. Mejor con el jefe quieto o el grupo cruzándolo.' },
  hs_tormenta:      { name: 'Tormenta helada',    nameEn: 'Cold Storm',          unlock: 37, slot: 4, target: 10, note: 'Campo de daño de Agua; Congelamiento añade daño extra en cada golpe que aciertas dentro.' },
};

// Orden de compra: cada nivel se gasta todo lo posible, de arriba abajo, sin pasar el tope ni el objetivo.
// couga54 (subida): Flecha en llamas y Cadena gélida primero; Quebrantamiento en llamas y Explosión de llama;
// Viento helado, Atadura invernal, Voto de concentración y Llamas del infierno. Hasta rango 8 (primeras
// especializaciones), después todo a 10 empezando por Llamas del infierno; luego Toga de llama, Marca ígnea y Toga terrestre.
const PRIORITY = [
  ['h_flecha', 8], ['h_cadena', 4], ['h_quebranto', 8], ['h_explosion', 8], ['h_viento', 8], ['h_atadura', 8], ['h_voto', 8], ['h_infierno', 8],
  ['h_infierno', 10], ['h_quebranto', 10], ['h_viento', 10], ['h_explosion', 10], ['h_voto', 10], ['h_atadura', 10], ['h_flecha', 10],
  ['h_toga_llama', 10], ['h_marca', 10], ['h_toga_tierra', 7],
];
// Solo cuando lo de arriba ya está completo (o con piedras de sabiduría).
const EXTRA = [['h_merced_mejora', 10], ['h_toga_tierra', 10]];

const MILESTONES = {
  1:  { special: '🎯 Sigue solo las misiones amarillas (historia). Primeros puntos en Flecha en llamas (recupera PM en cada lanzamiento) y Cadena gélida para grupos. Juega en modo objetivo, no en combate de acción: en modo acción el ataque básico se para cada vez que lanzas, y el ataque básico es lo que mantiene tu maná. Tras el prólogo, junta 40 plumas (120 esquirlas) para mejorar el amuleto.' },
  3:  { special: '🔓 Viento helado: campo que inmoviliza al grupo; con la especialización de atracción los junta.' },
  4:  { special: '🔓 Explosión de llama: necesita la Marca ígnea en el objetivo, y cualquier golpe de Fuego la pone. Del 6 al 10, Quebrantamiento en llamas y Explosión de llama son tu daño a un objetivo.' },
  8:  { special: '🔓 Atadura invernal: +20 % de Amplificación de Daño de JcE al acertar (cuando llegue a rango 8).' },
  12: { special: '⭐ Se abre el tablero Daevanion Nezekan: los nodos azules dan +1 a su habilidad (orden de clics en la sección Daevanion). 🔓 Voto de concentración, tu segunda mejora.' },
  14: { special: '🔓 Llamas del infierno: cárgala hasta 3 para los grupos grandes, con Viento helado para retenerlos.' },
  15: { special: '🏠 Limpia los escondites que te pillen de camino: la primera vez dan Piedras de mejora y Cristales Daevanion (también en el 20 y el 25).' },
  17: { special: '📿 Amuleto a +10 y transfórmalo en la versión azul. Arma a ~+10 cuando puedas: es el mayor salto de daño mientras subes (no la subas más antes del tope).' },
  19: { special: '🎯 Flecha en llamas llega a rango 8: toma +20 % de Recuperación de PM. El maná es tu límite mientras subes (couga54).' },
  20: { special: '⭐ Se abre el tablero Zikel: misma prioridad de nodos.' },
  22: { special: '⭐ Ascensión: ranura de estigma 1 → Mejora elemental. La 3.ª Ascensión te da 1 esquirla: justo para aprenderla. Los estigmas se suben con Esquirlas, no con estos puntos (bloque 🔷).' },
  27: { special: '⭐ Ranura de estigma 2 → Explosión retrasada (metabot: la segunda de los mejores jugadores; al principio basta con 1 punto). Si subes en solitario, couga54 pone aquí Barrera de acero: el Hechicero es frágil.' },
  30: { special: '⭐ Se abre Vaizel (Daño Crítico). Más adelante, en el Acto 4, las misiones secundarias y las mazmorras en solitario vuelven a valer la pena.' },
  32: { special: '⭐ Ranura de estigma 3 → Barrera de fuego.' },
  37: { special: '⭐ Ranura de estigma 4 → Tormenta helada. Estigmas completos.' },
  40: { special: '⭐ Se abre Triniel (Multigolpe; sobre todo JcJ, puede esperar). La Cueva de Krao pide unos 1.000 de puntuación de equipo.' },
  45: { special: '🏆 Nivel 45: si llevabas Barrera de acero, en grupo vuelve a poner Explosión retrasada, y lleva Explosión de llama, Quebrantamiento en llamas y Llamas del infierno hacia 16+ (couga54). Azphel es JcJ: no le pongas puntos en JcE. Haz las actividades Shugo (set del tope) y barre el mapa (interrogaciones, hogueras, misiones verdes, cubos ocultos, plumas).' },
};

// Resumen de arriba y lista "cuándo llega cada habilidad a su rango final"
const PLANNER_SUMMARY = {
  actives: ['h_infierno', 'h_quebranto', 'h_viento', 'h_explosion', 'h_voto', 'h_atadura', 'h_flecha'], activesLabel: 'Activas clave a 10',
  passives: ['h_toga_llama', 'h_marca', 'h_toga_tierra'], passivesLabel: 'Pasivas clave a 7+ (el resto, con equipo)', passivesTarget: 7,
  when: [['h_flecha', 10], ['h_quebranto', 10], ['h_explosion', 10], ['h_viento', 10], ['h_atadura', 10], ['h_voto', 10], ['h_infierno', 10],
         ['h_toga_llama', 10], ['h_marca', 10], ['h_toga_tierra', 7]],
};

// Hitos de la barra y botones de salto del planificador
const PLANNER_JUMPS = [1, 4, 12, 14, 22, 27, 30, 37, 45];

// Orden de gasto de las Esquirlas de Estigma (couga54): Mejora elemental primero y al máximo; al principio
// Explosión retrasada con 1 punto, Barrera de fuego y Tormenta helada a 5; después Mejora elemental a 20 («Max it
// first») y luego Tormenta helada → Barrera de fuego → Explosión retrasada a 10 (orden de subida de couga54).
const STIGMA_ORDER = [
  ['hs_mejora', 5], ['hs_retrasada', 1], ['hs_barrera_fuego', 5], ['hs_tormenta', 5],
  ['hs_mejora', 10], ['hs_mejora', 20], ['hs_tormenta', 10], ['hs_barrera_fuego', 10], ['hs_retrasada', 10],
];
