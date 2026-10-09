// Aion 2 Global S1 — Asesino PvE: datos de la clase para planner.js
// Prioridades de couga54: las 5 habilidades clave a 10 (Estocada al corazón, Explosión de insignia, Corte rápido,
// Emboscada, Desenfreno de tormenta), Rugido bestial a 8 (especialización de +20 % de velocidad), y las 4 pasivas clave.
// Nombres: cliente en español (metabot.gg/es_ES). Niveles de aprendizaje: metabot.

const PLANNER_KEY = 'aion2_planner_lvl';

const SKILLS = {
  // Activas clave (a rango 10 con puntos)
  heart:        { name: 'Estocada al corazón',     nameEn: 'Heart Gore',          color: '#ff4d6d', unlock: 4,  cap: 10, type: 'Activa clave',  note: 'Tu golpe principal (~30 % del daño). Con crítico se restablece.' },
  insignia:     { name: 'Explosión de insignia',   nameEn: 'Insignia Explosion',  color: '#ff4d6d', unlock: 14, cap: 10, type: 'Activa clave',  note: 'Detona las insignias (~25 % del daño). Úsala cada vez que esté lista.' },
  quick:        { name: 'Corte rápido',            nameEn: 'Quick Slice',         color: '#ff4d6d', unlock: 1,  cap: 10, type: 'Activa clave',  note: 'Ataque básico: recupera PM y entra entre cada habilidad.' },
  ambush:       { name: 'Emboscada',               nameEn: 'Ambush',              color: '#ff4d6d', unlock: 3,  cap: 10, type: 'Activa clave',  note: 'Golpe por la espalda. Una de las 5 clave de couga54.' },
  storm:        { name: 'Desenfreno de tormenta',  nameEn: 'Storm Rampage',       color: '#ff4d6d', unlock: 5,  cap: 10, type: 'Activa clave',  note: 'Ráfaga de golpes. Una de las 5 clave de couga54.' },
  savage:       { name: 'Rugido bestial',          nameEn: 'Savage Roar',         color: '#f59e0b', unlock: 1,  cap: 10, type: 'Activa (a 8)',  note: 'Graba insignias. A rango 8 abre +20 % de velocidad de habilidad; el 9-10 solo con puntos extra.' },
  // Activas que se quedan en rango 1
  shadow:       { name: 'Ataque sigiloso',         nameEn: 'Shadowstrike',        color: '#64748b', unlock: 1,  cap: 10, type: 'Activa (rango 1)', note: 'Apertura. Sube con Daevanion, no con puntos.' },
  whirl:        { name: 'Corte torbellino',        nameEn: 'Whirlwind Slice',     color: '#64748b', unlock: 7,  cap: 10, type: 'Activa (rango 1)', note: 'Área. No vale puntos en JcE.' },
  flash:        { name: 'Corte de destello',       nameEn: 'Flash Slice',         color: '#64748b', unlock: 8,  cap: 10, type: 'Activa (rango 1)', note: 'Desplazamiento. Sube con Daevanion.' },
  infiltrate:   { name: 'Infiltración',            nameEn: 'Infiltrate',          color: '#64748b', unlock: 10, cap: 10, type: 'Activa (rango 1)', note: 'Te acerca al objetivo.' },
  shadowfall:   { name: 'Caída sombría',           nameEn: 'Shadow Fall',         color: '#64748b', unlock: 12, cap: 10, type: 'Activa (rango 1)', note: 'Derribo.' },
  defiance:     { name: 'Eliminación de impacto',  nameEn: 'Defiance',            color: '#64748b', unlock: 16, cap: 10, type: 'Activa (rango 1)', note: 'Libera de control. En JcE solo de emergencia.' },
  // Pasivas clave (prioridad de couga54 para el equipo: 1 Impacto trasero, 2 Explotar / Postura de agresión, 3 Determinación)
  rear:         { name: 'Impacto trasero',         nameEn: 'Rear Smite',          color: '#d4af37', unlock: 11, cap: 10, type: 'Pasiva clave',  note: 'La pasiva más fuerte: daño por la espalda y JcE.' },
  exploit:      { name: 'Explotar debilidades',    nameEn: 'Exploit Weakness',    color: '#d4af37', unlock: 6,  cap: 10, type: 'Pasiva clave',  note: 'Más daño contra objetivos debilitados.' },
  assault:      { name: 'Postura de agresión',     nameEn: 'Assault Stance',      color: '#d4af37', unlock: 13, cap: 10, type: 'Pasiva clave',  note: 'Aumenta tu daño.' },
  determination:{ name: 'Determinación',           nameEn: 'Determination',       color: '#d4af37', unlock: 25, cap: 10, type: 'Pasiva clave',  note: 'Daño contra objetivos con poca vida. Se aprende en el 25: a nivel 45 su tope es 8.' },
  // Pasivas solo con puntos sobrantes o que no se suben
  sixthsense:   { name: 'Maximización de sexto sentido', nameEn: 'Heightened Sixth Sense', color: '#a3a3a3', unlock: 1, cap: 10, type: 'Pasiva (sobrantes)', note: 'Solo con puntos extra: no vale una línea de equipo.' },
  ambushstance: { name: 'Postura de emboscada',    nameEn: 'Ambush Stance',       color: '#a3a3a3', unlock: 17, cap: 10, type: 'Pasiva (sobrantes)', note: 'Solo con puntos extra.' },
  impact:       { name: 'Acierto de impacto',      nameEn: 'Impact Hit',          color: '#64748b', unlock: 15, cap: 10, type: 'Pasiva (JcJ)',  note: 'Solo 3,3 % a rango 10: guárdala para JcJ.' },
  poison:       { name: 'Aplicación de veneno',    nameEn: 'Apply Poison',        color: '#64748b', unlock: 9,  cap: 10, type: 'Pasiva (no)',   note: 'Menos del 1 % de tu daño.' },
  defbreak:     { name: 'Grieta defensiva',        nameEn: 'Defense Break',       color: '#64748b', unlock: 21, cap: 10, type: 'Pasiva (JcJ)',  note: 'Pasiva de JcJ.' },
  revitalization:{ name: 'Pacto de resurrección',  nameEn: 'Revitalization Contract', color: '#64748b', unlock: 23, cap: 10, type: 'Pasiva (sobrantes)', note: 'Solo si te sobran puntos.' },
};

// Estigmas (orden de subida de couga54): ranura que abre cada nivel y rango objetivo.
// Se suben con Esquirlas de Estigma (1-5: 1, 6-10: 2, 11-15: 4, 16-20: 8). Al 45, Tiro de daga sombría deja su ranura a Puñal de Triniel.
const STIGMAS = {
  s_shadowblade: { name: 'Tiro de daga sombría', nameEn: 'Throw Shadowblade', unlock: 22, slot: 1, target: 10, until: 44, note: 'Primero, a rango 10: se restablece al matar, ideal para ir de grupo en grupo. Solo para farmear, no para jefes.' },
  s_fang:    { name: 'Colmillo salvaje',    nameEn: 'Savage Fang',      unlock: 27, slot: 2, target: 15, note: 'Para grupos: 5 insignias de golpe. A 15 da +10 % de daño JcE durante 10 s.' },
  s_clone:   { name: 'Clon ilusorio',       nameEn: 'Illusive Clone',   unlock: 32, slot: 3, target: 20, note: 'Tu ráfaga: 20 s sin enfriamiento de Estocada al corazón. Desde que lo tengas, gasta en él las esquirlas hasta 20.' },
  s_swift:   { name: 'Pacto de celeridad',  nameEn: 'Swift Contract',   unlock: 37, slot: 4, target: 15, note: '+20 % de velocidad de combate. 15 basta para empezar; 20 da +10 % más.' },
  s_triniel: { name: 'Puñal de Triniel',    nameEn: "Triniel's Dagger", unlock: 45, slot: 1, target: 10, note: 'Entra en la ranura de Tiro de daga sombría para jefes. A 10, cada golpe recorta un 10 % los enfriamientos que quedan.' },
};

// Orden de compra: cada nivel se gasta todo lo posible, de arriba abajo, sin pasar el tope ni el objetivo.
const PRIORITY = [
  ['heart', 10], ['insignia', 10], ['quick', 10], ['savage', 8], ['ambush', 10], ['storm', 10],
  ['rear', 10], ['exploit', 10], ['assault', 10], ['determination', 10],
];
// Solo cuando lo de arriba ya está completo (o con piedras de sabiduría).
const EXTRA = [['savage', 10], ['sixthsense', 10], ['ambushstance', 10]];

const MILESTONES = {
  1:  { special: '🎯 Empiezas sin puntos hasta el nivel 4. Practica: Ataque sigiloso → Emboscada → Rugido bestial → Corte rápido entre cada golpe, siempre por la espalda.' },
  4:  { special: '🎯 Primer punto de habilidad. Estocada al corazón: ponla en la Q y úsala sin parar.' },
  12: { special: '⭐ Se abre el tablero Daevanion Nezekan (ver sección Daevanion).' },
  14: { special: '🔓 Explosión de insignia: ponla en tu barra principal y súbela cada vez que puedas.' },
  20: { special: '⭐ Se abre el tablero Zikel.' },
  22: { special: '⭐ Ascensión: ranura de estigma 1 → Tiro de daga sombría, súbelo a 10 (se restablece al matar). Los estigmas se suben con Esquirlas de Estigma, no con estos puntos.' },
  27: { special: '⭐ Ranura de estigma 2 → Colmillo salvaje, para los grupos de monstruos.' },
  30: { special: '⭐ Se abre Vaizel, el tablero n.º 1 del Asesino en JcE (Daño Crítico).' },
  32: { special: '⭐ Ranura de estigma 3 → Clon ilusorio. Desde ahora las esquirlas van a él hasta rango 20.' },
  37: { special: '⭐ Ranura de estigma 4 → Pacto de celeridad. Úsalo junto con Clon ilusorio y Colmillo salvaje.' },
  40: { special: '⭐ Se abre Triniel (Multigolpe; sobre todo JcJ, puede esperar).' },
  45: { special: '🏆 Nivel 45: para jefes, cambia Tiro de daga sombría por Puñal de Triniel (rango 10). Azphel es JcJ: no le pongas puntos en JcE.' },
};

// Resumen de arriba y lista "cuándo llega cada habilidad a su rango final"
const PLANNER_SUMMARY = {
  actives: ['heart', 'insignia', 'quick', 'ambush', 'storm'], activesLabel: 'Activas clave a 10',
  passives: ['rear', 'exploit', 'assault'], passivesLabel: 'Pasivas clave a 10', passivesNote: 'determination',
  when: [['heart', 10], ['insignia', 10], ['quick', 10], ['ambush', 10], ['storm', 10], ['rear', 10], ['exploit', 10], ['assault', 10], ['savage', 8], ['determination', 10]],
};
