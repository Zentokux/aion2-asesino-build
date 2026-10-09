// Aion 2 Global S1 — Asesino: barra, líneas y macros para macros.js.
// Copiado de couga54 (https://couga54.github.io/aion2-guides/en/assassin/#macro), que lee la barra del vídeo de
// Arthars Gaming (30-sep, cliente de Taiwán). Datos extraídos con tools/extraer-macros.py → tools/fuentes-asesino/macros-assassin.json.
// Las teclas son las del autor (botones laterales del ratón y teclado numérico): cópialas donde te resulte cómodo.

window.MACRO_SETS = {
  // ---- Nivel 45: jefes ----
  pve: {
    hotbar: {
      title: 'Barra de ejemplo (Arthars, nivel 45)',
      gaps: [4, 8],
      cols: [
        { key: 'Num 2', slots: [null, null, null, 'shadow'] },
        { key: 'Lateral', slots: [null, null, null, null] },
        { key: '3', slots: [null, null, null, 'flash'] },
        { key: '4', slots: [null, null, null, null] },
        { key: '5', slots: [null, null, null, null] },
        { key: 'Num 4', slots: [null, null, null, null] },
        { key: '6', slots: [null, null, null, null] },
        { key: '7', slots: ['s_triniel', 's_fang', 's_swift', 's_clone'] },
        { key: 'Num 1', slots: [null, 'shadowfall', 'infiltrate', 'whirl'] },
        { key: 'Num 5', slots: [null, null, null, 'storm'] },
        { key: '1', macro: true, slots: [null, null, null, 'quick'] },
        { key: 'E', macro: true, slots: ['savage', 'ambush', 'heart', 'insignia'] },
      ],
      note: 'Como en el juego: una línea apilada lanza primero la habilidad de abajo; las líneas doradas son las que pulsa la macro. Pasa el ratón por un icono para ver la habilidad. Las teclas son las del autor (botones laterales y teclado numérico): copia las líneas y ponlas donde quieras.',
    },
    lines: [
      { key: 'E', name: 'Línea de daño', skills: ['savage', 'ambush', 'heart', 'insignia'],
        note: '[[insignia]] sale cada vez que está lista y [[heart]] en cada crítico. Cuando ninguna está disponible, la línea pasa a las de relleno: primero Emboscada y al final Rugido bestial.' },
      { key: '7', name: 'Línea de mejoras', skills: ['s_triniel', 's_fang', 's_swift', 's_clone'],
        note: 'Arthars tiene los cuatro estigmas en un solo botón y lo pulsa él mismo: <strong>nunca desde la macro</strong>, o las mejoras se desincronizan.' },
    ],
    macro: {
      intro: 'Dos pasos de 10 ms cada uno, en una tecla que puedas mantener todo el rato (el clic derecho):',
      steps: [{ icon: 'insignia', label: 'Línea de daño', key: 'E' }, { icon: 'quick', label: 'Corte rápido', key: '1' }],
      note: 'El vídeo muestra la barra pero no la ventana de la macro: esta macro sigue la configuración de la guía del Chanter de Arthars (la línea principal y después el ataque básico).',
    },
    press: [
      ['Mantén', 'La tecla de la macro, y pulsa [[quick]] tú mismo sin parar: cada golpe acorta el enfriamiento de Explosión de insignia.'],
      ['Ráfaga', '[[s_clone]] + [[s_swift]] + [[s_fang]] a la vez, y justo después [[s_triniel]] para recortar sus enfriamientos. Durante los 20 s siguientes, Estocada al corazón tras Estocada al corazón.'],
      ['Entre ráfagas', 'Pacto de celeridad y Colmillo salvaje vuelven antes que el Clon (1 min contra 1 min 30 s). Guárdalos para el siguiente Clon (más ráfaga) o úsalos en cuanto estén (daño más estable): no hay una respuesta acordada; en peleas cortas, guárdalos.'],
      ['Tambaleo', '[[storm]] sobre el jefe tambaleado, con Corte rápido entre golpes: baja todos los enfriamientos varios segundos.'],
      ['Posición', '[[shadow]], [[flash]] e [[infiltrate]] te ponen detrás. Úsalos para quedarte ahí, no como botones de daño.'],
    ],
    outro: '<strong>De dónde sale el daño</strong> (prueba de Arthars en un muñeco): Estocada al corazón ~30 %, Explosión de insignia ~25 %, todo lo demás 6 % o menos cada una.',
    outroClass: 'crit',
  },

  // ---- Mientras subes de nivel ----
  leveling: {
    intro: 'Antes de que Estocada al corazón llegue a rango 16 basta con algo más simple, desde el nivel 1: la línea de insignias en la macro del juego con el <strong>botón central del ratón</strong>, Corte rápido en el clic izquierdo y Estocada al corazón en la Q. Para farmear, Tiro de daga sombría en el 2 y el clic derecho.',
    hotbar: {
      title: 'Barra mientras subes de nivel',
      gaps: [2],
      cols: [
        { key: 'Clic izq.', slots: [null, null, null, 'quick'] },
        { key: 'Q', slots: [null, null, null, 'heart'] },
        { key: '2', slots: [null, null, null, 's_shadowblade'] },
        { key: 'Botón central', macro: true, slots: ['savage', 'ambush', 'whirl', 'insignia'] },
      ],
    },
    lines: [
      { key: 'Botón central', name: 'Línea de insignias', skills: ['savage', 'ambush', 'whirl', 'insignia'],
        note: 'Va en la macro del juego, con un solo paso de 10 ms. [[s_shadowblade]] llega en el 22 (ranura de estigma 1).' },
    ],
    linesTitle: 'Línea de la macro',
    macro: null,
    press: [
      ['Grupos', '[[s_fang]] (desde el 27: 5 insignias de golpe) → [[insignia]] → [[whirl]]. [[s_shadowblade]] se restablece al matar: lánzalo al siguiente grupo.'],
      ['Élites', 'Ponte detrás → [[ambush]] → [[savage]] para acumular insignias → [[insignia]] → [[heart]] en cada crítico.'],
      ['Maná', '[[quick]] recupera PM: tenlo en el clic izquierdo.'],
      ['Poca vida', '[[shadowfall]] absorbe PV; [[defiance]] te cura cuando estás atrapado.'],
    ],
    pressTitle: 'Cómo pelear mientras subes',
  },
};

// Pestaña "Nv. 45 · jefes" de la rotación: lo mismo que pulsas con la macro de nivel 45.
window.MACRO_SETS.boss = { press: window.MACRO_SETS.pve.press, pressTitle: 'Lo que pulsas', outro: window.MACRO_SETS.pve.outro, outroClass: 'crit' };
