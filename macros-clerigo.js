// Aion 2 Global S1 — Clérigo: barra, líneas y macros para macros.js.
// Copiado de couga54 (https://couga54.github.io/aion2-guides/en/cleric/#macro): la configuración global de Lucia
// (barra leída de su vídeo, fotograma 13:10), la de Whelps (vídeo del 5-oct, 3:35 y 4:28) y la de subida de Grobs.
// Datos extraídos con tools/extraer-macros.py → tools/fuentes-clerigo/macros-cleric.json.

window.MACRO_SETS = {
  // ---- Nivel 45: Lucia ----
  pve: {
    intro: 'Configuración global de Lucia (Rango 1 mundial): solo la macro del juego, dos pasos, y dos líneas de la barra.',
    hotbar: {
      title: 'Barra de ejemplo (Lucia, nivel 45)',
      gaps: [4, 8],
      cols: [
        { key: '1', slots: [null, null, 'c_estigma', 'c_relampagos'] },
        { key: '2', slots: [null, null, null, null] },
        { key: '3', slots: [null, null, null, 'c_resplandor'] },
        { key: '4', slots: [null, null, null, 'c_centella'] },
        { key: '5', slots: [null, null, null, 'cs_proteccion'] },
        { key: '6', slots: [null, null, null, null] },
        { key: '7', slots: [null, null, null, null] },
        { key: '8', slots: [null, null, null, 'cs_aura_noble'] },
        { key: 'Q', macro: true, slots: ['c_condena', 'c_enlace', 'cs_castigo', 'cs_oracion'] },
        { key: 'E', slots: [null, null, 'c_curacion', 'c_regeneracion'] },
        { key: 'Clic izq.', slots: [null, null, null, 'c_retribucion'] },
        { key: 'T', macro: true, slots: [null, null, 'c_rayo', 'c_aura'] },
      ],
    },
    lines: [
      { key: 'Q', name: 'Línea de Oración', skills: ['c_condena', 'c_enlace', 'cs_castigo', 'cs_oracion'],
        note: '[[cs_oracion]] en cuanto esté lista, luego [[cs_castigo]] y [[c_enlace]], para que cada Condena sea crítica y se restablezca. Deja Luz de protección fuera de la línea: es un interruptor y cada segunda pulsación la apagaría.' },
      { key: 'T', name: 'Línea de Aura divina', skills: ['c_rayo', 'c_aura'],
        note: '[[c_aura]] cuando esté lista y [[c_rayo]] entre medias: tras cada Rayo del juicio, Condena puede volver a hacer crítico y restablecerse.' },
      { key: '1', name: 'Línea de debilitación (a mano)', skills: ['c_estigma', 'c_relampagos'],
        note: '[[c_relampagos]] sobre un jefe en Tambaleo; si no, [[c_estigma]]. Púlsala cada vez que esté lista.' },
      { key: 'E', name: 'Línea de curación (a mano)', skills: ['c_curacion', 'c_regeneracion'],
        note: '[[c_regeneracion]] cada vez que esté lista, y [[c_curacion]] (tres cargas) para el resto.' },
    ],
    macro: {
      intro: 'En el <strong>clic derecho</strong>, cada paso con 10 ms:',
      steps: [{ icon: 'cs_oracion', label: 'Línea de Oración', key: 'Q' }, { icon: 'c_aura', label: 'Línea de Aura divina', key: 'T' }],
      note: 'Lucia comenta que una macro externa hace más, pero ella se queda con la del juego.',
    },
    macroTitle: '2. Macro del juego',
    press: [
      ['Mantén', 'La macro en el clic derecho a la vez que [[c_retribucion]] en el clic izquierdo: el ataque básico, Rayo del juicio y Condena se intercalan hasta que la secuencia vuelve a empezar.'],
      ['A mano', 'La línea de debilitación en enfriamiento; la de curación y [[c_resplandor]] cuando alguien acaba de recibir un golpe; [[c_centella]] cargada del todo; [[cs_aura_noble]] en enfriamiento.'],
      ['Teclas propias', 'Clic izquierdo [[c_retribucion]] · 3 [[c_resplandor]] · 4 [[c_centella]] · 5 [[cs_proteccion]] (interruptor: actívala una vez) · 8 [[cs_aura_noble]].'],
    ],
    pressTitle: '3. Teclas',
  },

  // ---- Nivel 45: Whelps ----
  whelps: {
    intro: 'Configuración global de Whelps: cuando Condena llega a 12 y se restablece con crítico, la macro pulsa la línea de Castigo terrestre <strong>tres veces</strong> por cada vez que pulsa la de debilitación.',
    hotbar: {
      title: 'Barra de ejemplo (Whelps)',
      gaps: [4, 8],
      cols: [
        { key: '1', slots: [null, null, null, null] },
        { key: '2', slots: [null, null, null, 'c_curacion'] },
        { key: '3', slots: [null, null, null, 'c_resplandor'] },
        { key: '4', slots: [null, null, null, 'c_centella'] },
        { key: 'Z', slots: [null, null, null, null] },
        { key: 'X', slots: [null, null, null, null] },
        { key: 'C', slots: [null, null, null, 'cs_aura_noble'] },
        { key: 'V', slots: [null, null, null, 'cs_proteccion'] },
        { key: 'Q', macro: true, slots: ['c_rayo', 'c_regeneracion', 'c_aura', 'c_estigma'] },
        { key: 'E', slots: [null, null, null, 'c_relampagos'] },
        { key: 'Clic izq.', slots: [null, null, null, 'c_retribucion'] },
        { key: '—', macro: true, slots: ['c_enlace', 'c_condena', 'cs_oracion', 'cs_castigo'] },
      ],
    },
    lines: [
      { key: '—', name: 'Línea de Castigo terrestre', skills: ['c_enlace', 'c_condena', 'cs_oracion', 'cs_castigo'],
        note: '[[cs_castigo]] y [[cs_oracion]] en cuanto estén, para que Condena siempre sea crítica y se restablezca; [[c_enlace]] mantiene la marca. La línea no tiene tecla: solo la pulsa la macro.' },
      { key: 'Q', name: 'Línea de debilitación', skills: ['c_rayo', 'c_regeneracion', 'c_aura', 'c_estigma'],
        note: 'La debilitación, el aura y la curación en el tiempo en enfriamiento; [[c_rayo]] rellena el resto.' },
    ],
    linesTitle: 'Líneas de la barra',
    macro: {
      intro: 'Macro del juego en el clic derecho:',
      steps: [
        { icon: 'cs_castigo', label: 'Línea de Castigo terrestre' },
        { icon: 'cs_castigo', label: 'Línea de Castigo terrestre' },
        { icon: 'cs_castigo', label: 'Línea de Castigo terrestre' },
        { icon: 'c_estigma', label: 'Línea de debilitación', key: 'Q' },
      ],
    },
    macroTitle: 'Macro del juego',
    press: [
      ['Mantén', 'La macro en el clic derecho y [[c_retribucion]] en el izquierdo; [[c_centella]] cargada del todo cada vez que esté lista.'],
      ['A mano', '[[c_curacion]] para golpes pequeños, [[c_resplandor]] para los grandes.'],
      ['Comprueba', 'En el Análisis de combate, Condena debe golpear tantas veces como Rayo del juicio o más. Si golpea menos, añade otro paso de la línea de Castigo terrestre: en el equipo de Whelps son 26k de DPS en vez de 22k.'],
    ],
    pressTitle: 'Lo que pulsas',
  },

  // ---- Mientras subes de nivel: Grobs ----
  leveling: {
    intro: 'Configuración de Grobs para el principio: una línea de la barra y una macro del juego de un solo paso.',
    hotbar: {
      title: 'Barra mientras subes de nivel',
      gaps: [2],
      cols: [
        { key: 'Clic izq.', slots: [null, null, null, 'c_retribucion'] },
        { key: 'A mano', slots: [null, null, 'c_curacion', 'c_centella'] },
        { key: 'Clic der.', macro: true, slots: ['c_rayo', 'c_condena', 'c_estigma', 'c_enlace'] },
      ],
      note: 'La línea dorada es la que pulsa la macro. Centella se carga: déjala fuera de la macro, igual que las curaciones y los estigmas.',
    },
    lines: [
      { key: 'Clic der.', name: 'Línea de Enlace', skills: ['c_rayo', 'c_condena', 'c_estigma', 'c_enlace'],
        note: '[[c_enlace]] va primero para que Condena pueda golpear; [[c_rayo]] no tiene enfriamiento y rellena los huecos.' },
    ],
    linesTitle: 'Línea de la barra',
    macro: {
      intro: 'Macro del juego (ventana de habilidades → Macro), con 10 ms:',
      steps: [{ icon: 'c_enlace', label: 'Línea de Enlace' }],
    },
    macroTitle: 'Macro del juego',
    press: [
      ['Mantén', '[[c_retribucion]] en el clic izquierdo y la tecla de la macro a la vez.'],
      ['A mano', '[[c_centella]] (habilidad cargada: fuera de la macro), curaciones y estigmas.'],
      ['Desde el 4', 'Whelps empieza con dos líneas en la macro del clic derecho: una con Condena abajo y otra con Estigma debilitante. Cuando Condena llegue a 12 y se restablezca con crítico, pasa a la macro de nivel 45.'],
    ],
    pressTitle: 'Teclas',
  },
};

// Pestañas de la rotación
window.MACRO_SETS.fightLeveling = {
  press: [
    ['Grupos', '[[c_enlace]] (golpea hasta a 4) → [[c_condena]] → [[c_aura]] con la especialización de área → [[c_rayo]].'],
    ['Élites', '[[c_estigma]] (baja la Defensa) → [[c_enlace]] → [[c_centella]] cargada → [[c_condena]].'],
    ['Maná', 'Modo objetivo, e intercala [[c_retribucion]]: recupera PM en cada uso.'],
    ['Poca vida', '[[c_curacion]], y [[c_favor_radiante]] (desde el 25) sigue curando mientras pegues.'],
    ['Tambaleo', '[[c_relampagos]] solo funciona con el objetivo en Tambaleo.'],
    ['Puntos', 'Primero las habilidades de ataque, las curaciones después; los puntos sobrantes a Gracia empírea y Gracia terrestre (Whelps).'],
  ],
  pressTitle: 'Cómo pelear mientras subes',
};
window.MACRO_SETS.fightBoss = {
  press: [
    ['Mantén', 'La macro de Lucia (clic derecho) y [[c_retribucion]] (clic izquierdo): Oración, Castigo terrestre, Enlace y Condena sin parar; Aura divina y Rayo del juicio entre medias.'],
    ['A mano', '[[c_centella]] cargada del todo en cuanto vuelva; [[cs_aura_noble]] y la línea de debilitación en enfriamiento.'],
    ['Curar', 'Solo a quien acaba de recibir un golpe: [[c_regeneracion]] cuando esté lista, [[c_curacion]] para golpes pequeños, [[c_resplandor]] para los grandes. El resto del tiempo, daño: la recompensa depende de tu contribución.'],
  ],
  pressTitle: 'Lo que pulsas',
};
