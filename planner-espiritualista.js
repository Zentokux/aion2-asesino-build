// Aion 2 Global S1 — Espiritualista PvE: datos de la clase para planner.js
// Prioridades de couga54 (Evripides / aion2sm.com, DankRNG, aLuckyRO, Grobs, MMO Codex): Impacto helado y Combustión
// primero; Espíritu de agua para subir; Maldición, Dominio espacial y Ráfaga continua del 9 al 18; Fusión elemental
// del 26 al 37; al tope, Fusión elemental y los espíritus a 10. Al 45: Fusión elemental, Combustión y Espíritu de fuego
// a 20; Impacto helado, Espíritu de agua, Maldición y Dominio espacial a 16 (10 con puntos + Daevanion y anillos).
// Nombres, IDs, niveles de aprendizaje y especializaciones: metabot.gg/es_ES (cliente global).

const PLANNER_KEY = 'aion2_planner_lvl_espiritualista';

// Iconos del Espiritualista (icons/espiritualista/<id>.webp, de metabot.gg)
Object.assign(ICON_FILES, {
  e_impacto: 'espiritualista/16010000.webp', e_combustion: 'espiritualista/16040000.webp', e_fuego: 'espiritualista/16100000.webp',
  e_agua: 'espiritualista/16110000.webp', e_maldicion: 'espiritualista/16140000.webp', e_rafaga: 'espiritualista/16340000.webp',
  e_tierra: 'espiritualista/16130000.webp', e_dominio: 'espiritualista/16330000.webp', e_viento: 'espiritualista/16120000.webp',
  e_grito_alma: 'espiritualista/16070000.webp', e_fusion: 'espiritualista/16300000.webp', e_eliminacion: 'espiritualista/16200000.webp',
  e_golpe_espiritu: 'espiritualista/16710000.webp', e_proteccion: 'espiritualista/16720000.webp', e_descenso: 'espiritualista/16730000.webp',
  e_erosion: 'espiritualista/16740000.webp', e_revitalizacion: 'espiritualista/16750000.webp', e_concentracion: 'espiritualista/16760000.webp',
  e_retroceso: 'espiritualista/16800000.webp', e_comunion: 'espiritualista/16770000.webp', e_pacto: 'espiritualista/16790000.webp',
  e_unificacion: 'espiritualista/16780000.webp',
  es_ancestral: 'espiritualista/16250000.webp', es_favor: 'espiritualista/16190000.webp', es_bendicion: 'espiritualista/16370000.webp',
  es_corrosion: 'espiritualista/16150000.webp', es_nube: 'espiritualista/16220000.webp', es_sustituto: 'espiritualista/16170000.webp',
  es_usurpacion: 'espiritualista/16230000.webp', es_grito_terror: 'espiritualista/16080000.webp', es_kaisinel: 'espiritualista/16360000.webp',
  es_drenaje: 'espiritualista/16060000.webp', es_bloqueo: 'espiritualista/16260000.webp', es_perdicion: 'espiritualista/16240000.webp',
  es_terror_agresion: 'espiritualista/16700000.webp',
});

const SKILLS = {
  // Activas clave (a rango 10 con puntos)
  e_fusion:     { name: 'Fusión elemental',              nameEn: 'Elemental Fusion',    color: '#ff4d6d', unlock: 14, cap: 10, type: 'Activa clave', note: 'Tu golpe más fuerte, sin enfriamiento: sale cada vez que tienes cuatro elementos. Cada habilidad de un espíritu te da uno.', spec8: 'Al acertar, daño adicional después de 3 s (aLuckyRO, los primeros días: a 12, cambio a habilidad de carga, hasta +200 %). Mientras subes: cambio a habilidad de área para grupos' },
  e_combustion: { name: 'Combustión',                    nameEn: 'Combustion',          color: '#ff4d6d', unlock: 1,  cap: 10, type: 'Activa clave', note: 'Daño entre habilidades. A 12, +20 % de velocidad de habilidad; a 16, la cadena «Llamado de ceniza».', spec8: 'Cuantos menos objetivos se acierten, aumento máx. del 12 % de daño (los primeros días: −20 % de consumo de PM hasta que el maná aguante)' },
  e_fuego:      { name: 'Invocación: Espíritu de fuego', nameEn: 'Summon: Fire Spirit', color: '#ff4d6d', unlock: 1,  cap: 10, type: 'Activa clave', note: 'El espíritu base más fuerte y el que más tiempo está fuera: invócalo el último. Mientras subes se queda en 1.', spec8: '+20 % de daño Crítico de Espíritu de fuego (segunda ranura: +10 % de prob. de activación de habilidad)' },
  e_impacto:    { name: 'Impacto helado',                nameEn: 'Cold Shock',          color: '#ff4d6d', unlock: 1,  cap: 10, type: 'Activa clave', note: 'Ataque básico: recupera PM y, a 12, +2 % de Ataque por golpe (hasta 5). Cada espíritu copia ese Ataque al invocarlo.', spec8: '+20 % de Recuperación de PM mientras subes; al 45, +50 % de Multigolpe (a 12: +2 % de Ataque, 5 acumulaciones)' },
  e_agua:       { name: 'Invocación: Espíritu de agua',  nameEn: 'Summon: Water Spirit', color: '#ff4d6d', unlock: 3, cap: 10, type: 'Activa clave', note: 'Tu espíritu para subir: el mejor daño a un objetivo y te da maná. Con Corrosión, el golpe más fuerte de los espíritus base.', spec8: '+10 % de Ataque de Espíritu de agua' },
  e_maldicion:  { name: 'Golpe conjunto: Maldición',     nameEn: 'Jointstrike: Curse',  color: '#ff4d6d', unlock: 4,  cap: 10, type: 'Activa clave', note: 'Daño en el tiempo hasta a 4 enemigos; tus espíritus, también el ancestral, golpean contigo.', spec8: '+2 s de duración de Maldición y cambio a habilidad disponible en movimiento' },
  e_dominio:    { name: 'Dominio espacial',              nameEn: 'Dimensional Control', color: '#ff4d6d', unlock: 8,  cap: 10, type: 'Activa clave', note: 'Se activa sola cada vez que un espíritu usa su habilidad. Evita la atracción y la ralentización.', spec8: 'Daño adicional después de 3 s y +50 % de prob. de Multigolpe' },
  // Activas de apoyo
  e_rafaga:     { name: 'Ráfaga continua',               nameEn: 'Rapid Scattershot',   color: '#a855f7', unlock: 5,  cap: 10, type: 'Activa (tambaleo)', note: 'Solo con el objetivo en Tambaleo. A 16, cada golpe baja 1 s todos tus enfriamientos.', spec8: 'Cambio a habilidad disponible en movimiento (a 12: Multigolpe garantizado)' },
  e_tierra:     { name: 'Invocación: Espíritu de tierra', nameEn: 'Summon: Earth Spirit', color: '#64748b', unlock: 7, cap: 10, type: 'Activa (rango 1)', note: 'Provoca al enemigo: el jefe pega al espíritu y no a ti. Útil en solitario.' },
  e_viento:     { name: 'Invocación: Espíritu de viento', nameEn: 'Summon: Wind Spirit', color: '#64748b', unlock: 10, cap: 10, type: 'Activa (no)', note: 'El daño más bajo e invocarlo quita tiempo a los demás. aLuckyRO lo usa la primera semana para llegar antes a cuatro elementos.' },
  e_grito_alma: { name: 'Grito de alma',                 nameEn: "Soul's Cry",          color: '#64748b', unlock: 12, cap: 10, type: 'Activa (JcJ)', note: 'Terror: es para JcJ. No le pongas puntos.' },
  e_eliminacion:{ name: 'Eliminación de impacto',        nameEn: 'Defiance',            color: '#64748b', unlock: 16, cap: 10, type: 'Activa (rango 1)', note: 'Rompe el control; a 8, recupera el 20 % de PV.' },
  // Pasivas clave
  e_golpe_espiritu: { name: 'Golpe de Espíritu',     nameEn: 'Spirit Strike',        color: '#d4af37', unlock: 1,  cap: 10, type: 'Pasiva clave', note: 'Amplificación de Daño JcE y Golpe perfecto para ti y tu espíritu. La primera de aLuckyRO para los primeros días.' },
  e_concentracion:  { name: 'Concentración mental',  nameEn: 'Mental Focus',         color: '#d4af37', unlock: 15, cap: 10, type: 'Pasiva clave', note: 'Doble golpe: la n.º 1 de couga54 (al tope, unos 32 en la temporada 1 con el equipo).' },
  e_unificacion:    { name: 'Unificación elemental', nameEn: 'Element Unification',  color: '#d4af37', unlock: 25, cap: 10, type: 'Pasiva clave', note: 'Amplificación de Daño Crítico que se acumula con cada habilidad de espíritu. Rinde cuando el equipo te da Crítico.' },
  e_revitalizacion: { name: 'Revitalización de Espíritu', nameEn: 'Spirit Revitalization', color: '#d4af37', unlock: 13, cap: 10, type: 'Pasiva clave', note: 'Acorta los enfriamientos de los espíritus: más Fusión elemental.' },
  // Pasivas de los primeros días (aLuckyRO) y el resto
  e_descenso:   { name: 'Descenso de Espíritu',    nameEn: "Spirit's Descent",          color: '#a3a3a3', unlock: 9,  cap: 10, type: 'Pasiva (extra)', note: 'Daño adicional tras invocar. aLuckyRO la sube los primeros días, después de Golpe de Espíritu.' },
  e_retroceso:  { name: 'Retroceso continuo',      nameEn: 'Consecutive Countercurrent', color: '#a3a3a3', unlock: 17, cap: 10, type: 'Pasiva (extra)', note: 'Daño adicional contra objetivos con daño en el tiempo (Maldición, Corrosión). La tercera de aLuckyRO.' },
  e_erosion:    { name: 'Erosión',                 nameEn: 'Corrode',                   color: '#a3a3a3', unlock: 11, cap: 10, type: 'Pasiva (extra)', note: 'Crítico y daño al hacer crítico: solo rinde cuando el equipo te da Crítico (aLuckyRO).' },
  e_comunion:   { name: 'Comunión de Espíritu',    nameEn: 'Spirit Communion',          color: '#64748b', unlock: 21, cap: 10, type: 'Pasiva (no)', note: 'Precisión y curación al golpear. Sale de paso en los tableros Daevanion.' },
  e_proteccion: { name: 'Protección de Espíritu',  nameEn: 'Spirit Protection',         color: '#64748b', unlock: 6,  cap: 10, type: 'Pasiva (JcJ)', note: 'Defensa contra ráfagas: la n.º 1 de couga54 en JcJ.' },
  e_pacto:      { name: 'Pacto de resurrección',   nameEn: 'Revitalization Contract',   color: '#64748b', unlock: 23, cap: 10, type: 'Pasiva (JcJ)', note: 'Resistencia a efectos de estado: para JcJ.' },
};

// Estigmas: ranuras según los mejores jugadores de metabot (22 Espíritu ancestral, 27 Favor de Espíritu,
// 32 Corrosión, 37 Bendición ardiente), el mismo conjunto de couga54. Se suben con Esquirlas de Estigma.
const STIGMAS = {
  es_ancestral: { name: 'Invocación: Espíritu ancestral', nameEn: 'Summon: Ancient Spirit', unlock: 22, slot: 1, target: 20, note: 'Tu estigma de más daño: un espíritu extra 30 s que te da Fusión elemental cada vez que usa su habilidad. Invócalo siempre con tus mejoras puestas.' },
  es_favor:     { name: 'Mejora: Favor de Espíritu', nameEn: "Enhance: Spirit's Benediction", unlock: 27, slot: 2, target: 20, note: 'Amplificación y Tolerancia de Daño para ti y tus espíritus: lánzala antes de invocar.' },
  es_corrosion: { name: 'Golpe conjunto: Corrosión', nameEn: 'Jointstrike: Corrode', unlock: 32, slot: 3, target: 20, note: 'Daño en el tiempo; el objetivo recibe más daño de tus espíritus. A 20 dura 20 s.' },
  es_bendicion: { name: 'Bendición ardiente', nameEn: 'Flame Blessing', unlock: 37, slot: 4, target: 20, note: 'Precisión y daño adicional al golpear: una de tus mejores mejoras, y escala mucho a 20.' },
};

// Orden de compra: cada nivel se gasta todo lo posible, de arriba abajo, sin pasar el tope ni el objetivo.
// couga54 (subida): Impacto helado y Combustión primero; Espíritu de agua; Maldición, Dominio espacial y Ráfaga
// continua; Fusión elemental. Hasta rango 8 (primeras especializaciones), después todo a 10.
const PRIORITY = [
  ['e_impacto', 8], ['e_combustion', 8], ['e_agua', 8], ['e_maldicion', 8], ['e_rafaga', 8], ['e_dominio', 8], ['e_fusion', 8],
  ['e_fusion', 10], ['e_combustion', 10], ['e_fuego', 10], ['e_impacto', 10], ['e_agua', 10], ['e_maldicion', 10], ['e_dominio', 10],
  ['e_golpe_espiritu', 10], ['e_concentracion', 10], ['e_unificacion', 10], ['e_revitalizacion', 10],
  ['e_descenso', 4],
];
// Solo cuando lo de arriba ya está completo (o con piedras de sabiduría).
const EXTRA = [['e_descenso', 10], ['e_retroceso', 10]];

const MILESTONES = {
  1:  { special: '🎯 Sigue solo las misiones amarillas (historia). Sube primero Impacto helado (recupera PM) y Combustión. Juega en modo objetivo para que el ataque básico no pare: el maná es el problema del Espiritualista al principio. Tras el prólogo, junta 40 plumas (120 esquirlas) para mejorar el amuleto.' },
  3:  { special: '🔓 Invocación: Espíritu de agua: tu espíritu para subir de nivel (mejor daño a un objetivo y te da maná). Los otros espíritus se quedan en 1 por ahora.' },
  4:  { special: '🔓 Golpe conjunto: Maldición: daño en el tiempo hasta a 4 enemigos. Del 9 al 18 se suman Dominio espacial (se activa cada vez que un espíritu usa su habilidad) y Ráfaga continua (solo con objetivos en Tambaleo).' },
  12: { special: '⭐ Se abre el tablero Daevanion Nezekan: los nodos azules dan +1 a su habilidad (orden de clics en la sección Daevanion). Grito de alma es JcJ: sáltatelo.' },
  14: { special: '🔓 Fusión elemental: cada habilidad de un espíritu te da un elemento; con cuatro puedes lanzarla.' },
  15: { special: '🏠 Limpia los escondites que te pillen de camino: la primera vez dan Piedras de mejora y Cristales Daevanion (también en el 20 y el 25).' },
  17: { special: '📿 Amuleto a +10 y transfórmalo en la versión azul. Arma a ~+10 cuando puedas: es el mayor salto de daño mientras subes (no la subas más antes del tope).' },
  19: { special: '🎯 Primeras especializaciones (couga54): Impacto helado +20 % de Recuperación de PM y Combustión «cuantos menos objetivos, hasta +12 % de daño». Espíritu de agua, Maldición y Ráfaga continua, a 8 en cuanto el tope de rango lo permita.' },
  20: { special: '⭐ Se abre el tablero Zikel: misma prioridad de nodos.' },
  22: { special: '⭐ Ascensión: ranura de estigma 1 → Invocación: Espíritu ancestral (a 5). La 3.ª Ascensión te da 1 esquirla: justo para aprenderlo. Los estigmas se suben con Esquirlas, no con estos puntos (bloque 🔷).' },
  26: { special: '🎯 Del 26 al 37: Fusión elemental y Dominio espacial a 8 (couga54).' },
  27: { special: '⭐ Ranura de estigma 2 → Mejora: Favor de Espíritu (a 5). Regla de oro: primero la mejora, después invocas el Espíritu ancestral; el espíritu copia tus estadísticas al aparecer.' },
  30: { special: '⭐ Se abre Vaizel (Daño Crítico). Acto 4: las misiones secundarias y las mazmorras en solitario vuelven a valer la pena.' },
  32: { special: '⭐ Ranura de estigma 3 → Golpe conjunto: Corrosión: el objetivo recibe más daño de tu espíritu (está en la línea de espíritus de Grobs).' },
  37: { special: '⭐ Ranura de estigma 4 → Bendición ardiente, si tu Precisión aguanta. Estigmas completos.' },
  40: { special: '⭐ Se abre Triniel (Multigolpe; sobre todo JcJ, puede esperar). La Cueva de Krao pide unos 1.000 de puntuación de equipo.' },
  45: { special: '🏆 Nivel 45: Fusión elemental y los espíritus a 10; Grito de alma no (JcJ). Azphel es JcJ: no le pongas puntos en JcE. Haz las actividades Shugo (set del tope) y barre el mapa (interrogaciones, hogueras, misiones verdes, cubos ocultos, plumas).' },
};

// Resumen de arriba y lista "cuándo llega cada habilidad a su rango final"
const PLANNER_SUMMARY = {
  actives: ['e_fusion', 'e_combustion', 'e_fuego', 'e_impacto', 'e_agua', 'e_maldicion', 'e_dominio'], activesLabel: 'Activas clave a 10',
  passives: ['e_golpe_espiritu', 'e_concentracion', 'e_unificacion', 'e_revitalizacion'], passivesLabel: 'Pasivas clave a 7+ (el resto, con equipo)', passivesTarget: 7,
  when: [['e_impacto', 10], ['e_combustion', 10], ['e_agua', 10], ['e_maldicion', 10], ['e_fusion', 10], ['e_fuego', 10], ['e_dominio', 10],
         ['e_rafaga', 8], ['e_golpe_espiritu', 10], ['e_concentracion', 10]],
};

// Hitos de la barra y botones de salto del planificador
const PLANNER_JUMPS = [1, 3, 14, 19, 22, 26, 30, 37, 45];

// Orden de gasto de las Esquirlas de Estigma (couga54): cada estigma a 5 cuando se abre su ranura
// (Espíritu ancestral, Favor de Espíritu, Corrosión, Bendición ardiente); después todos a 10 en el orden
// Espíritu ancestral → Favor de Espíritu → Bendición ardiente → Corrosión, y luego a 20 en el mismo orden.
const STIGMA_ORDER = [
  ['es_ancestral', 5], ['es_favor', 5], ['es_corrosion', 5], ['es_bendicion', 5],
  ['es_ancestral', 10], ['es_favor', 10], ['es_bendicion', 10], ['es_corrosion', 10],
  ['es_ancestral', 20], ['es_favor', 20], ['es_bendicion', 20], ['es_corrosion', 20],
];
