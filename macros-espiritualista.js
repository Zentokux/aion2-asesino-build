// Aion 2 Global S1 — Espiritualista: líneas de la barra y macros para macros.js.
// Copiado de couga54 (https://couga54.github.io/aion2-guides/en/elementalist/#macro): la configuración de Evripides
// (guía escrita, edición global, aion2sm.com) para el 45 y la de subida de Grobs. couga54 no muestra una barra de
// ejemplo para esta clase, solo las líneas. Datos extraídos con tools/extraer-macros.py → tools/fuentes-espiritualista/macros-elementalist.json.

window.MACRO_SETS = {
  // ---- Nivel 45: Evripides ----
  pve: {
    intro: 'Juego con dos botones mantenidos: <strong>Impacto helado en el clic izquierdo</strong> y <strong>la macro en el clic derecho</strong>; te mueves y pulsas el resto a mano. La línea que antes iba en el clic derecho pasa a la <strong>T</strong>.',
    lines: [
      { key: '1', name: 'Línea de espíritus', skills: ['e_fuego', 'e_tierra', 'e_agua', 'e_fusion'],
        note: 'Púlsala sin parar: [[e_fusion]] sale en cuanto está lista, luego los espíritus; [[e_fuego]] va el último para que sea el que más tiempo está fuera.' },
      { key: '7', name: 'Mejoras + Espíritu ancestral', skills: ['es_ancestral', 'es_bendicion', 'es_favor'],
        note: 'Las mejoras van antes que [[es_ancestral]], así el espíritu las copia al aparecer.' },
      { key: 'T', name: 'Línea de daño', skills: ['e_combustion', 'e_dominio', 'e_maldicion', 'es_corrosion'],
        note: 'Ordenada por daño; [[es_corrosion]] entra en cuanto está lista.' },
    ],
    macro: {
      intro: 'En el <strong>clic derecho</strong>, cada paso con 10 ms:',
      steps: [{ icon: 'es_favor', label: 'Mejora: Favor de Espíritu', key: 'Clic der.' }, { icon: 'e_fusion', label: 'Fusión elemental' }, { icon: 'es_corrosion', label: 'Golpe conjunto: Corrosión' }],
    },
    press: [
      ['Apertura', '[[es_bendicion]] → [[es_favor]] → [[es_ancestral]]: las mejoras llegan antes que la invocación.'],
      ['Después', 'La línea de espíritus y [[es_corrosion]]; luego empieza la macro y quédate con los dos botones mantenidos.'],
      ['Sigue', 'Ve rotando tus espíritus y vuelve a lanzar las mejoras en cuanto estén listas, sin guardarlas para el Espíritu ancestral.'],
      ['Acumulaciones', 'Si las cinco acumulaciones de [[e_impacto]] están a punto de caer, un ataque básico más vale más que la siguiente invocación.'],
      ['Ping', 'El autor quiere 65 % de Velocidad de combate o más y menos de ~60 ms de ping. aLuckyRO, la primera semana: juega sin la macro hasta que conozcas la clase. Pon «retirar todos los espíritus» en una tecla a mano.'],
    ],
    pressTitle: '3. El combate',
  },

  // ---- Mientras subes de nivel: Grobs ----
  leveling: {
    intro: 'Configuración de Grobs para el principio: dos líneas de la barra y una macro del juego de dos pasos.',
    lines: [
      { key: '1', name: 'Línea de espíritus', skills: ['e_fuego', 'e_tierra', 'es_corrosion', 'e_agua'],
        note: '[[e_agua]] primero; [[es_corrosion]] (un estigma, desde el 22) hace que el objetivo reciba más daño de tu espíritu.' },
      { key: '2', name: 'Línea de Fusión', skills: ['e_combustion', 'e_maldicion', 'e_dominio', 'e_fusion'],
        note: '[[e_fusion]] y [[e_dominio]] salen en cuanto los espíritus las activan; [[e_combustion]] rellena los huecos.' },
    ],
    macro: {
      intro: 'Macro del juego (ventana de habilidades → Macro), con 10 ms en cada paso:',
      steps: [{ icon: 'e_agua', label: 'Línea de espíritus', key: '1' }, { icon: 'e_fusion', label: 'Línea de Fusión', key: '2' }],
    },
    press: [
      ['Mantén', '[[e_impacto]] en el clic izquierdo y la tecla de la macro a la vez.'],
      ['A mano', '[[es_favor]] y después [[es_ancestral]]: primero la mejora, el Espíritu ancestral dura 30 s.'],
    ],
    pressTitle: 'Teclas',
  },
};

// Pestañas de la rotación
window.MACRO_SETS.fightLeveling = {
  press: [
    ['Espíritu', '[[e_agua]] hasta el tope: el mejor daño a un objetivo y te da maná. Los demás se quedan en 1 mientras subes.'],
    ['Grupos', '[[e_maldicion]] (golpea hasta a 4) → [[e_combustion]] → [[e_fusion]] con la especialización de área cuando esté lista.'],
    ['Maná', 'El gran problema al principio: modo objetivo, [[e_impacto]] entre habilidades, y termina la rotación de espíritus con el de agua.'],
    ['Tambaleo', '[[e_rafaga]] solo funciona con el objetivo en Tambaleo.'],
    ['No', '[[e_grito_alma]]: es para JcJ.'],
  ],
  pressTitle: 'Cómo pelear mientras subes',
};
window.MACRO_SETS.fightBoss = {
  press: [
    ['Regla', 'Primero las mejoras, después invocas: un espíritu copia tus estadísticas y mejoras en el momento en que aparece. Una mejora lanzada después no le hace nada; nunca llames al [[es_ancestral]] sin tus mejoras.'],
    ['Mantén', '[[e_impacto]] (clic izquierdo): +2 % de Ataque por golpe, hasta cinco. Perderlas cuesta un 10 % de Ataque a ti y a cada espíritu que invoques.'],
    ['Abre', '[[es_bendicion]] → [[es_favor]] → [[es_ancestral]], la línea de espíritus y [[es_corrosion]], y luego la macro.'],
    ['Combates largos', 'La clase vive de mejoras y daño en el tiempo: cuanto más dura el combate, más fuerte. Y pierde más que nadie si muere con todo en enfriamiento.'],
  ],
  pressTitle: 'Lo que pulsas',
};
