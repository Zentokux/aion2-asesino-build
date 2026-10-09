// Aion 2 Global S1 — Clérigo PvE: datos de la clase para planner.js
// Prioridades de couga54 (Lucia, Kaeria, Whelps, aLuckyRO): primero los dos ataques sin enfriamiento
// (Retribución terrestre y Rayo del juicio), luego Condena y el resto del daño, y las curaciones después.
// "Un Clérigo centrado en curar sube lento": casi todo va a daño. Gracia terrestre, al tope en cuanto se aprende.
// Nombres, IDs y niveles de aprendizaje: metabot.gg/es_ES (cliente global).

const PLANNER_KEY = 'aion2_planner_lvl_clerigo';

// Iconos del Clérigo (icons/clerigo/<id>.webp, de metabot.gg)
Object.assign(ICON_FILES, {
  c_retribucion: 'clerigo/17010000.webp', c_rayo: 'clerigo/17040000.webp', c_estigma: 'clerigo/17080000.webp',
  c_aura: 'clerigo/17150000.webp', c_enlace: 'clerigo/17070000.webp', c_relampagos: 'clerigo/17370000.webp',
  c_regeneracion: 'clerigo/17090000.webp', c_condena: 'clerigo/17350000.webp', c_curacion: 'clerigo/17100000.webp',
  c_resplandor: 'clerigo/17120000.webp', c_centella: 'clerigo/17060000.webp', c_eliminacion: 'clerigo/17240000.webp',
  c_favor_calido: 'clerigo/17710000.webp', c_favor_empireo: 'clerigo/17720000.webp', c_gracia_empirea: 'clerigo/17730000.webp',
  c_mejora: 'clerigo/17740000.webp', c_velo: 'clerigo/17750000.webp', c_bloqueo: 'clerigo/17760000.webp',
  c_oracion_conc: 'clerigo/17770000.webp', c_gracia_terrestre: 'clerigo/17780000.webp', c_voluntad: 'clerigo/17790000.webp',
  c_favor_radiante: 'clerigo/17800000.webp',
  cs_castigo: 'clerigo/17400000.webp', cs_proteccion: 'clerigo/17410000.webp', cs_aura_noble: 'clerigo/17440000.webp',
  cs_oracion: 'clerigo/17430000.webp', cs_absolucion: 'clerigo/17290000.webp', cs_poder_vida: 'clerigo/17160000.webp',
  cs_yustiel: 'clerigo/17420000.webp', cs_resurreccion: 'clerigo/17390000.webp', cs_voz: 'clerigo/17300000.webp',
  cs_salvacion: 'clerigo/17270000.webp', cs_explosion: 'clerigo/17280000.webp', cs_atadura: 'clerigo/17190000.webp',
  cs_agresion: 'clerigo/17700000.webp',
});

const SKILLS = {
  // Activas de daño (a rango 10 con puntos)
  c_retribucion: { name: 'Retribución terrestre',  nameEn: "Earth's Retribution",  color: '#f59e0b', unlock: 1,  cap: 10, type: 'Activa clave',  note: 'Ataque básico sin enfriamiento: recupera PM y corta animaciones. Siempre en el clic izquierdo.', spec8: '+20 % de probabilidad de Descarga (luego, a 12: −7 s a Centella al acertar Descarga)' },
  c_rayo:        { name: 'Rayo del juicio',        nameEn: 'Judgment Thunder',     color: '#f59e0b', unlock: 1,  cap: 10, type: 'Activa clave',  note: 'Daño constante sin enfriamiento entre habilidades.', spec8: 'Hasta +12 % de daño con menos objetivos (a 16: Castigo divino 1 vez más)' },
  c_condena:     { name: 'Condena',                nameEn: 'Condemnation',         color: '#ff4d6d', unlock: 8,  cap: 10, type: 'Activa clave',  note: 'La más importante: solo golpea a un objetivo con Enlace de dolor y, con crítico, se restablece.', spec8: 'Hasta +12 % de daño con menos objetivos (a 12: se restablece al hacer crítico)' },
  c_centella:    { name: 'Centella',               nameEn: 'Bolt',                 color: '#ff4d6d', unlock: 14, cap: 10, type: 'Activa clave',  note: 'Tu golpe más fuerte: cárgala del todo.', spec8: '+30 % de velocidad de habilidad (segunda ranura: +300 de Precisión de habilidad)' },
  c_aura:        { name: 'Aura divina',            nameEn: 'Divine Aura',          color: '#ff4d6d', unlock: 3,  cap: 10, type: 'Activa clave',  note: 'Hace daño en paralelo contigo: cuanto más tiempo esté puesta, mejor.', spec8: 'Mientras subes: cambia a habilidad de área (hasta 4 monstruos). Para jefes al 45: +50 % de velocidad de ataque del aura' },
  c_enlace:      { name: 'Enlace de dolor',        nameEn: 'Chain of Torment',     color: '#a855f7', unlock: 4,  cap: 10, type: 'Activa (apoyo)', note: 'Marca al objetivo para que Condena pueda golpearlo. Va abajo en la misma línea que Condena.', spec8: '+3 s de daño periódico (Lucia, en Trascendencia: 20 % de Derribo)' },
  c_relampagos:  { name: 'Relámpagos sin puntería', nameEn: 'Lightning Strike Scattershot', color: '#a855f7', unlock: 5, cap: 10, type: 'Activa (tambaleo)', note: 'Solo con el jefe en Tambaleo, pero cada golpe baja 1 s todos tus enfriamientos.' },
  c_estigma:     { name: 'Estigma debilitante',    nameEn: 'Debilitating Mark',    color: '#64748b', unlock: 1,  cap: 10, type: 'Activa (rango 1)', note: '−15 % de Defensa del jefe mientras dura el daño periódico. Úsala cada vez que esté lista.' },
  // Curaciones
  c_curacion:    { name: 'Luz de curación',        nameEn: 'Healing Light',        color: '#22c55e', unlock: 10, cap: 10, type: 'Curación',       note: 'Curación rápida casi sin enfriamiento. Antes de mazmorras en grupo, llévala a 16 (Daevanion, anillos, Arcana).', spec8: '+2 usos seguidos' },
  c_resplandor:  { name: 'Resplandor de recobro',  nameEn: 'Radiant Recovery',     color: '#22c55e', unlock: 12, cap: 10, type: 'Curación',       note: 'Tu curación más fuerte fuera de los estigmas; quita un efecto negativo.', spec8: '−3 s de enfriamiento' },
  c_regeneracion:{ name: 'Luz de regeneración',    nameEn: 'Light of Regeneration', color: '#64748b', unlock: 7, cap: 10, type: 'Curación (rango 1)', note: 'Curación en el tiempo: úsala cada vez que esté lista.' },
  c_eliminacion: { name: 'Eliminación de impacto', nameEn: 'Defiance',             color: '#64748b', unlock: 16, cap: 10, type: 'Activa (rango 1)', note: 'Rompe el control y cura un 10 %.' },
  // Pasivas clave
  c_gracia_empirea:  { name: 'Gracia empírea',     nameEn: "Empyrean Lord's Grace", color: '#d4af37', unlock: 9,  cap: 10, type: 'Pasiva clave', note: 'La más importante: Daño Crítico, Doble golpe y daño extra en cada golpe.' },
  c_gracia_terrestre:{ name: 'Gracia terrestre',   nameEn: "Earth's Grace",        color: '#d4af37', unlock: 21, cap: 10, type: 'Pasiva clave', note: 'Amplificación de Daño Crítico y Precisión. Súbela al tope en cuanto la aprendas.' },
  c_mejora:          { name: 'Mejora curativa',    nameEn: 'Healing Enhancement',  color: '#d4af37', unlock: 11, cap: 10, type: 'Pasiva clave', note: 'Tus curaciones escalan con tu Ataque: por eso el Clérigo sube Ataque, no Defensa.' },
  // Pasivas con puntos extra
  c_favor_radiante:  { name: 'Favor radiante',     nameEn: 'Radiant Benediction',  color: '#a3a3a3', unlock: 25, cap: 10, type: 'Pasiva (extra)', note: 'Cura al grupo al golpear. Tómala si vas a todo daño.' },
  c_favor_calido:    { name: 'Favor cálido',       nameEn: 'Warm Benediction',     color: '#a3a3a3', unlock: 1,  cap: 10, type: 'Pasiva (extra)', note: 'PV y PM máximos. Está bien tenerla.' },
  c_velo:            { name: 'Velo inmortal',      nameEn: 'Immortal Veil',        color: '#a3a3a3', unlock: 13, cap: 10, type: 'Pasiva (extra)', note: 'Ayuda al principio; pierde valor cuando mejora tu armadura.' },
  c_oracion_conc:    { name: 'Oración de concentración', nameEn: 'Prayer of Concentration', color: '#64748b', unlock: 17, cap: 10, type: 'Pasiva (no)', note: 'No está entre las recomendadas.' },
  c_favor_empireo:   { name: 'Favor empíreo',      nameEn: "Empyrean Lords' Benediction", color: '#64748b', unlock: 6, cap: 10, type: 'Pasiva (JcJ)', note: 'Para JcJ.' },
  c_bloqueo:         { name: 'Bloqueo de recuperación', nameEn: 'Heal Block',      color: '#64748b', unlock: 15, cap: 10, type: 'Pasiva (JcJ)', note: 'Para JcJ.' },
  c_voluntad:        { name: 'Voluntad de supervivencia', nameEn: 'Survival Willpower', color: '#64748b', unlock: 23, cap: 10, type: 'Pasiva (JcJ)', note: 'Para JcJ.' },
};

// Estigmas (orden de Whelps en couga54) y rango objetivo. Se suben con Esquirlas de Estigma.
const STIGMAS = {
  cs_castigo:    { name: 'Castigo terrestre',      nameEn: 'Earth Punishment',      unlock: 22, slot: 1, target: 20, note: 'Hace que Condena sea siempre crítica (y se restablezca). Súbelo a 20 el primero.' },
  cs_proteccion: { name: 'Luz de protección',      nameEn: 'Light of Protection',   unlock: 27, slot: 2, target: 20, note: 'Tu mantra: es un interruptor, actívalo una vez. Con un Cantor en el grupo, cámbialo por Absolución.' },
  cs_aura_noble: { name: 'Aura noble',             nameEn: 'Noble Aura',            unlock: 32, slot: 3, target: 10, note: 'Un orbe que ataca contigo durante 5 min: casi dobla tu daño. Cuanto más alto, mejor.' },
  cs_oracion:    { name: 'Oración de amplificación', nameEn: 'Prayer of Amplification', unlock: 37, slot: 4, target: 20, note: '+20 % de Ataque y potencia tus dos Gracias. Sin ella el Clérigo no tiene daño.' },
};

// Orden de compra: cada nivel se gasta todo lo posible, de arriba abajo, sin pasar el tope ni el objetivo.
// couga54 (subida): los dos ataques sin enfriamiento primero; Gracia terrestre al tope en cuanto se aprende (21);
// luego Condena, Centella y Luz de curación; después el resto del daño, las pasivas clave y las demás curaciones.
const PRIORITY = [
  ['c_retribucion', 10], ['c_rayo', 10], ['c_gracia_terrestre', 10], ['c_condena', 10], ['c_centella', 10], ['c_curacion', 10],
  ['c_aura', 10], ['c_gracia_empirea', 10], ['c_mejora', 10], ['c_resplandor', 10], ['c_enlace', 10], ['c_relampagos', 10],
];
// Solo cuando lo de arriba ya está completo (o con piedras de sabiduría).
const EXTRA = [['c_favor_radiante', 10], ['c_favor_calido', 10], ['c_velo', 10]];

const MILESTONES = {
  1:  { special: '🎯 Sigue solo las misiones amarillas (historia). Sube primero tus dos ataques sin enfriamiento: Retribución terrestre (recupera PM) y Rayo del juicio. Juega en modo objetivo: mantiene el ataque básico entre habilidades, y ese es tu maná. Tras el prólogo, junta 40 plumas (120 esquirlas) para mejorar el amuleto.' },
  4:  { special: '🔓 Enlace de dolor: marca al objetivo. Desde el 8, Condena solo golpea a objetivos con Enlace: ponlos en la misma línea de la barra, con Enlace abajo (macro de subida en la sección Macros).' },
  8:  { special: '🔓 Condena, tu habilidad más importante. Las especializaciones se abren cuando cada habilidad llega a rango 8: el plan te dice cuál elegir.' },
  10: { special: '💚 Luz de curación, para ti. Sube habilidades de ataque, no de curación: un Clérigo que solo cura sube lento.' },
  12: { special: '⭐ Se abre el tablero Daevanion Nezekan: los nodos azules dan +1 a su habilidad (orden de clics en la sección Daevanion).' },
  14: { special: '🔓 Centella: tu golpe más fuerte, para élites y Tambaleo. Cárgala del todo.' },
  15: { special: '🏠 Limpia los escondites que te pillen de camino: la primera vez dan Piedras de mejora y Cristales Daevanion (también en el 20 y el 25).' },
  17: { special: '📿 Amuleto a +10 y transfórmalo en la versión azul. Arma a ~+10 cuando puedas: es el mayor salto de daño mientras subes (no la subas más antes del tope).' },
  20: { special: '⭐ Se abre el tablero Zikel: misma prioridad de nodos.' },
  21: { special: '🔓 Gracia terrestre (Daño Crítico y Precisión): súbela al tope en cuanto la aprendas.' },
  22: { special: '⭐ Ascensión: ranura de estigma 1 → Castigo terrestre, abajo en la línea de Condena para que siempre sea crítica (a rango 5). La 3.ª Ascensión te da 1 esquirla: justo para aprenderlo. Los estigmas se suben con Esquirlas, no con estos puntos (bloque 🔷). Si consigues esquirlas extra, Resurrección de invocación a 1 por si el grupo cae.' },
  25: { special: '🎯 Hacia aquí Retribución terrestre y Rayo del juicio llegan a 10 (couga54). Desde ahora, Condena, Centella y Luz de curación.' },
  27: { special: '⭐ Ranura de estigma 2 → Luz de protección. Es un interruptor: actívala una vez y déjala fuera de las líneas y de la macro.' },
  30: { special: '⭐ Se abre Vaizel (Daño Crítico). Acto 4: las misiones secundarias y las mazmorras en solitario vuelven a valer la pena.' },
  32: { special: '⭐ Ranura de estigma 3 → Aura noble: ataca contigo 5 minutos, daño gratis.' },
  37: { special: '⭐ Ranura de estigma 4 → Oración de amplificación. Estigmas completos: ya puedes usar la macro de nivel 45.' },
  40: { special: '⭐ Se abre Triniel (Multigolpe; sobre todo JcJ, puede esperar). La Cueva de Krao pide unos 1.000 de puntuación de equipo.' },
  45: { special: '🏆 Nivel 45: antes de mazmorras en grupo lleva Luz de curación a 16 con Daevanion, anillos y Arcana. Azphel es JcJ: no le pongas puntos en JcE. Haz las actividades Shugo (set del tope) y barre el mapa (interrogaciones, hogueras, misiones verdes, cubos ocultos, plumas).' },
};

// Resumen de arriba y lista "cuándo llega cada habilidad a su rango final"
const PLANNER_SUMMARY = {
  actives: ['c_retribucion', 'c_rayo', 'c_condena', 'c_centella', 'c_aura'], activesLabel: 'Activas de daño a 10',
  passives: ['c_gracia_empirea', 'c_gracia_terrestre', 'c_mejora'], passivesLabel: 'Pasivas clave a 10',
  when: [['c_retribucion', 10], ['c_rayo', 10], ['c_condena', 10], ['c_centella', 10], ['c_aura', 10], ['c_gracia_terrestre', 10],
         ['c_gracia_empirea', 10], ['c_mejora', 10], ['c_curacion', 10], ['c_resplandor', 10], ['c_enlace', 10], ['c_relampagos', 10]],
};

// Hitos de la barra y botones de salto del planificador
const PLANNER_JUMPS = [1, 8, 14, 21, 22, 25, 30, 37, 45];

// Orden de gasto de las Esquirlas de Estigma (couga54): Castigo terrestre a 5 primero (Condena siempre crítica);
// aprender cada estigma cuando se abre su ranura; Aura noble y Oración a 5 (subida); después Whelps:
// Castigo terrestre a 20, el resto parejo y Luz de protección al final.
const STIGMA_ORDER = [
  ['cs_castigo', 5], ['cs_proteccion', 1], ['cs_aura_noble', 1], ['cs_oracion', 1],
  ['cs_aura_noble', 5], ['cs_oracion', 5], ['cs_castigo', 20], ['cs_oracion', 10], ['cs_aura_noble', 10],
  ['cs_oracion', 20], ['cs_proteccion', 20],
];
