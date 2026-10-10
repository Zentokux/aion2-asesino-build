// Aion 2 Global S1 — Hechicero: líneas de la barra y macros para macros.js.
// Copiado de couga54 (https://couga54.github.io/aion2-guides/en/sorcerer/#macro): la ventana de macro de aLuckyRO
// (15-sep, cliente de Taiwán) sin Congelación ni Explosión de Congelación, que EUTOPIA saca en global, y la configuración
// de subida. couga54 no muestra una barra de ejemplo para esta clase, solo las líneas. Datos extraídos con
// tools/extraer-macros.py → tools/fuentes-hechicero/macros-sorcerer.json.

window.MACRO_SETS = {
  // ---- Nivel 45: aLuckyRO + EUTOPIA ----
  pve: {
    intro: 'Juego con dos botones mantenidos: <strong>Flecha en llamas en el clic izquierdo</strong> y <strong>la macro en el clic derecho</strong>. [[h_flecha]] va sola en la <strong>R</strong>, [[h_infierno]] en el <strong>2</strong> y [[h_sinpunteria]] en el <strong>3</strong>.',
    lines: [
      { key: '4', name: 'Línea de mejoras', skills: ['hs_retrasada', 'h_viento', 'hs_mejora'],
        note: '[[hs_mejora]] sale cada vez que está lista; después el campo que inmoviliza y el +15 % de daño de [[hs_retrasada]].' },
      { key: '5', name: 'Línea de concentración', skills: ['hs_barrera_fuego', 'hs_tormenta', 'h_voto'],
        note: 'La segunda mejora primero y luego los dos campos bajo el objetivo.' },
      { key: '1', name: 'Línea de fuego', skills: ['h_quebranto', 'h_explosion'],
        note: '[[h_explosion]] cada vez que el objetivo lleva Marca ígnea; [[h_quebranto]] en su enfriamiento de 5 s.' },
      { key: 'T', name: 'Línea de hielo', skills: ['h_cadena', 'h_atadura'],
        note: '[[h_atadura]] por la mejora de daño; [[h_cadena]] rellena si la mantuviste. Sin ella, la línea es solo [[h_atadura]].' },
    ],
    macro: {
      intro: 'En el <strong>clic derecho</strong>, todos los pasos con el mismo retardo: 10 ms con ping por debajo de 50; 40-50 ms con ping de 80-100 o más.',
      steps: [
        { icon: 'hs_mejora', label: 'Línea de mejoras', key: '4' }, { icon: 'h_voto', label: 'Línea de concentración', key: '5' },
        { icon: 'h_flecha', label: 'Flecha en llamas', key: 'R' }, { icon: 'h_explosion', label: 'Línea de fuego', key: '1' },
        { icon: 'h_flecha', label: 'Flecha en llamas', key: 'R' }, { icon: 'h_atadura', label: 'Línea de hielo', key: 'T' },
        { icon: 'h_sinpunteria', label: 'Llamas sin puntería', key: '3' },
      ],
    },
    press: [
      ['Mantén', 'La tecla de la macro, nada más.'],
      ['A mano', '[[h_infierno]]: para, cárgala entera y vuelve a la macro.'],
      ['Poco maná', 'Si el PM sigue bajando, suelta la macro, lanza unas cuantas [[h_flecha]] y sigue.'],
      ['Por qué dos Flechas', 'Rellenan maná entre las habilidades caras, así el PM se queda por encima del 50 % y las dos pasivas de maná siguen activas.'],
      ['Comprueba', 'Mira a tu personaje mientras corre la macro: si ves estelas («sombras») detrás, las animaciones se están cancelando y el retardo está bien.'],
    ],
    pressTitle: '3. Lo que pulsas',
  },

  // ---- Mientras subes de nivel ----
  leveling: {
    intro: 'Al principio bastan dos líneas: la de fuego en el botón lateral del ratón (MB5) y la de hielo en el clic derecho. Añade la macro del juego cuando tengas Viento helado y los estigmas.',
    lines: [
      { key: 'MB5', name: 'Línea de fuego', skills: ['h_flecha', 'h_quebranto', 'h_explosion'],
        note: '[[h_explosion]] sobre la Marca ígnea, [[h_quebranto]] en su enfriamiento y [[h_flecha]] para el maná.' },
      { key: 'Clic der.', name: 'Línea de hielo', skills: ['h_cadena', 'h_congelacion'],
        note: '[[h_congelacion]] recupera 200 PM con su especialización; [[h_cadena]] ralentiza.' },
    ],
    press: [
      ['Grupos', '[[h_viento]] (inmoviliza y atrae) → [[h_infierno]] → [[h_cadena]] hasta que caigan.'],
      ['Élites', 'Marca ígnea → [[h_explosion]] → [[h_quebranto]], alejándote con las ralentizaciones de [[h_cadena]].'],
    ],
    pressTitle: 'Teclas',
  },
};

// Pestañas de la rotación
window.MACRO_SETS.fightLeveling = {
  press: [
    ['Grupos', '[[h_viento]] (inmoviliza y atrae) → [[h_infierno]] → [[h_cadena]] hasta que caigan.'],
    ['Élites', 'Marca ígnea → [[h_explosion]] → [[h_quebranto]], alejándote con las ralentizaciones de [[h_cadena]].'],
    ['Maná', 'Modo objetivo para que el ataque básico siga solo, e intercala [[h_flecha]].'],
    ['Poca vida', '[[hs_acero]] y distancia: el Hechicero no tiene curación.'],
  ],
  pressTitle: 'Cómo pelear mientras subes',
};
window.MACRO_SETS.fightBoss = {
  press: [
    ['Mantén', 'La macro: mantiene [[hs_mejora]] y [[h_voto]] activas y alterna [[h_flecha]] con tus líneas de fuego y hielo para que el PM no baje de la mitad.'],
    ['A mano', '[[h_infierno]] cargada entera.'],
    ['Maná', 'Por encima del 50 % es daño, no comodidad: Toga terrestre y Merced de mejora se apagan con poco maná. Nunca juegues al 10-20 % de PM.'],
    ['Más tarde', 'Con reducción de enfriamiento en el equipo, abre a mano: [[hs_retrasada]] justo antes de que el tanque atraiga → [[hs_mejora]] y [[h_voto]] → [[hs_barrera_fuego]] + [[hs_tormenta]] bajo el jefe → [[h_viento]] y [[h_atadura]] (+20 % de daño) → [[h_infierno]] cargada a 3, y la macro.'],
  ],
  pressTitle: 'Lo que pulsas',
};
