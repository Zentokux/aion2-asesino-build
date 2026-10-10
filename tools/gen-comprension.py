# Genera la subsección "Comprensión de raza: solo atributos que sirven en todo" de cada clase y la
# coloca en la sección #pets de asesino.html, clerigo.html y espiritualista.html.
# Base: tabla de Lucia (couga54, guía del Clérigo; tools/fuentes-clerigo/couga-cleric-v2.txt)
# + lista completa de líneas por rueda, ranura y rareza de wikily (comprension/wikily-genus-properties.json,
#   api/wikis/aion-2/datasets/genus-properties) y probabilidades por nivel (datasets/genus-insight).
# Datos comprobados: en las ruedas Cogni/Fera/Natura/Varian solo cambian las ranuras 4 y 7; la Especial
# es distinta en las 9 y tiene líneas globales desde Común. Se ignoran líneas de raza, Frontal,
# por la Espalda, de Jefe y Fragmento de poder (petición del usuario, 10-oct-2026).
# Nombres en español: comprension/wikily-genus-properties-es.json (api ...&locale=es), textos del cliente.
# Uso: python tools/gen-comprension.py   (desde la carpeta del proyecto)
import re

INI = '<!-- comprension:inicio -->'
FIN = '<!-- comprension:fin -->'
LEG = '<span style="color:#3b82f6">Legendario</span>'
UNI = '<span style="color:#eab308">Único</span>'
EPI = '<span style="color:#f97316">Épico</span>'

COMUN = f'''
  <h3 id="comprension">Comprensión de raza: solo atributos que sirven en todo</h3>
  <p>Cada familia (Cogni, Fera, Natura, Varian y Especial) tiene su propia rueda, del Nv. 1 al 10, con 9 ranuras: la ranura N se abre al llegar al Nv. N. El plan usa <strong>solo líneas incondicionales</strong> (Ataque Adicional, Ataque Máximo, Penetración, Crítico, Precisión Adicional, Amplificación de Daño, Puntos de Vida…) y las líneas <em>JcE</em>, que valen contra cualquier monstruo.</p>
  <table>
    <thead><tr><th>Se ignora</th><th>Por qué</th></tr></thead>
    <tbody>
      <tr><td>Líneas de raza: <em>Ataque / Precisión / Crítico / Amplificación de Daño de Cognis, Fera, Natura, Varian</em></td><td>Solo funcionan contra monstruos de esa raza (metabot)</td></tr>
      <tr><td>Ataque, Crítico y Amplificación <em>Frontal</em> o <em>por la Espalda</em></td><td>Dependen del lado por el que golpees</td></tr>
      <tr><td>Ataque de Jefe, Defensa de Jefe</td><td>Solo contra jefes</td></tr>
      <tr><td>Daño Adicional de Fragmento de Poder</td><td>Depende de los Fragmentos de Poder, no de tu ataque en general</td></tr>
    </tbody>
  </table>

  <h4>Del Nv. 1 al 10</h4>
  <p>La rareza de cada línea se sortea con el nivel actual de la rueda, igual para todas sus ranuras: al subir de nivel, también las ranuras viejas pueden sacar rarezas mejores. En las ruedas Cogni, Fera, Natura y Varian, <strong>Común y Raro solo dan líneas de raza, Puntos de Vida o Puntos de Maná</strong>.</p>
  <table>
    <thead><tr><th>Nv.</th><th>Abre</th><th>Común / Raro / {LEG} / {UNI} / {EPI}</th><th>Qué hacer</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Ranura 1</td><td>90 / 10 / – / – / –</td><td rowspan="3">Analiza solo para subir la rueda: cada ranura analizada da 100 de experiencia y cada mascota nueva 500. En las ruedas normales no puede salir nada del plan.</td></tr>
      <tr><td>2</td><td>Ranura 2</td><td>70 / 30 / – / – / –</td></tr>
      <tr><td>3</td><td>Ranura 3</td><td>55 / 45 / – / – / –</td></tr>
      <tr><td>4</td><td>Ranura 4</td><td>50 / 45 / 5 / – / –</td><td rowspan="3">Primeros {LEG}: Ataque JcE, Precisión JcE, Defensa JcE. Aprovéchalos, pero no bloquees: cada bloqueo encarece todas las tiradas siguientes.</td></tr>
      <tr><td>5</td><td>Ranura 5</td><td>45 / 45 / 10 / – / –</td></tr>
      <tr><td>6</td><td>Ranura 6</td><td>40 / 40 / 20 / – / –</td></tr>
      <tr><td>7</td><td>Ranura 7</td><td>35 / 34 / 30 / 1 / –</td><td rowspan="2">Primeros {UNI}: Ataque Adicional, Ataque Máximo, Penetración, Crítico, Precisión Adicional y los % de Amplificación de Daño. Sigue sin bloquear salvo un valor casi máximo.</td></tr>
      <tr><td>8</td><td>Ranura 8</td><td>30 / 30 / 35 / 5 / –</td></tr>
      <tr><td>9</td><td>Ranura 9</td><td>25 / 25 / 39 / 10 / 1</td><td>Primeros {EPI}. Lucia: desde aquí ya puedes bloquear lo que esté cerca del máximo.</td></tr>
      <tr><td>10</td><td>—</td><td>20 / 30 / 30 / 15 / 5</td><td>Las mejores probabilidades (20 % de Único o Épico por línea): termina la rueda bloqueando en el orden de tu clase (abajo).</td></tr>
    </tbody>
  </table>
  <div class="callout warn">
    <strong>Regla:</strong> nunca bloquees una línea Común o Rara de las ruedas normales. En el Análisis automático marca solo las líneas de la tabla de tu clase y deja en <em>Sin seleccionar</em> las de raza, Frontal, por la Espalda y de Jefe. Lucia: bloquea solo cuando la línea esté cerca del máximo, y nunca antes de que la rueda llegue a nivel 9-10.
  </div>
'''

R47 = '''
  <h4>Ranuras 4 y 7 según la rueda ({clase})</h4>
  <p>Son las dos únicas ranuras que cambian de familia a familia. En la 4, las cuatro ruedas tienen <strong>Amplificación de Daño de JcE</strong> ({uni} 1,5-3 %, {epi} 2-4 %), la cifra más alta para JcE. En la 7 solo cambian líneas de defensa: lo del plan sale en las cuatro.</p>
  <table>
    <thead><tr><th>Rueda</th><th>Ranura 4: toma</th><th>Ranura 4: alternativa</th><th>Ranura 7</th></tr></thead>
    <tbody>
{filas}
    </tbody>
  </table>
'''

ESP = '''
  <h4>Rueda Especial ({clase})</h4>
  <p>Es distinta en sus 9 ranuras, no tiene líneas de raza ni Amplificación de Daño de JcE, y <strong>las líneas útiles salen desde Común</strong> (con valores bajos: Ataque Adicional 2-4 en Común, 8-16 en Épico). Mismas reglas: analiza para subir y bloquea cerca del máximo al Nv. 9-10.</p>
  <table>
    <thead><tr><th>Ranura (abre en Nv.)</th><th>Toma</th></tr></thead>
    <tbody>
{filas}
    </tbody>
  </table>
'''

PIE = '''
  <p><small>Líneas por rueda, ranura y rareza: <a href="https://wikily.gg/aion-2/genus-insight/cogni/slot-properties" target="_blank" rel="noopener">wikily.gg</a> (393 por rueda; Especial 490). Probabilidades por nivel: <a href="https://wikily.gg/aion-2/genus-insight" target="_blank" rel="noopener">wikily.gg</a>. Qué hace cada línea: <a href="https://metabot.gg/es_ES/aion-2/stats" target="_blank" rel="noopener">metabot</a>. Tabla base: Lucia en la guía del Clérigo de couga54; la adaptación a cada clase, a cada nivel y a líneas que sirven en todo es nuestra. Nombres del cliente en español tal como los da wikily en su versión es (los mismos textos del juego).</small></p>
'''

def r47(cogni4='', r7='Crítico o Precisión Adicional'):
    return [
      ('Cogni', 'Amplificación de Daño de JcE', 'Amplificación de Daño' + cogni4, r7),
      ('Fera', 'Amplificación de Daño de JcE', 'Amplificación de Daño o Amplificación de Daño de Arma', r7),
      ('Natura', 'Amplificación de Daño de JcE', 'Perforación (Lucia) o Acierto de Multigolpe', r7),
      ('Varian', 'Amplificación de Daño de JcE', 'Ataque Adicional, Crítico o Precisión Adicional (sus otros % son Frontal y por la Espalda)', r7),
    ]

# ranuras: (ranura, Legendario, Único/Épico); orden: prioridad de bloqueo al Nv. 9-10
CLASES = {
  'asesino': {
    'clase': 'Asesino',
    'intro': 'Para el Asesino lo primero es el <strong>Crítico</strong>: Estocada al corazón solo se reinicia con un crítico (couga54). Después Ataque y Precisión.',
    'ranuras': [
      (1, 'Ataque JcE (6-12)', 'Ataque Adicional (Lucia)'),
      (2, 'Puntos de Vida o Defensa JcE: no gastes cristales', 'Aumento de Puntos de Vida o Puntos de Vida (Lucia)'),
      (3, 'Precisión JcE (15-30)', 'Crítico; Precisión Adicional si fallas golpes (Lucia)'),
      (4, 'Ataque JcE (6-12)', 'Amplificación de Daño de JcE (ver ranura 4 por rueda)'),
      (5, 'Ataque JcE (6-12)', 'Ataque Adicional, Ataque Máximo o Ataque Crítico (Lucia: Ataque Adicional o máximo)'),
      (6, 'Precisión JcE (15-30)', 'Crítico; Precisión Adicional si fallas golpes'),
      (7, 'Ataque JcE (6-12)', 'Crítico o Precisión Adicional; Recuperación o Tenacidad si te cuesta sobrevivir (Lucia)'),
      (8, 'Puntos de Vida o Defensa JcE: no gastes cristales', 'Aumento de Puntos de Vida o Puntos de Vida (Lucia)'),
      (9, 'Precisión JcE (15-30)', 'Crítico; Precisión Adicional si fallas golpes'),
    ],
    'orden': '4 → 3, 6, 9 (Crítico) → 1, 5 → 7 → 2, 8',
    'r47': r47(' o Amplificación de Daño Crítico (encaja con el Asesino)'),
    'especial': [
      (1, 'Ataque Adicional o Ataque JcE'),
      (2, 'Aumento de Puntos de Vida o Puntos de Vida'),
      (3, 'Crítico; Precisión Adicional o Precisión JcE si fallas golpes'),
      (4, 'Amplificación de Daño Crítico o Amplificación de Daño; Golpe (Lucia)'),
      (5, 'Ataque Adicional, Ataque Máximo o Ataque Crítico'),
      (6, 'Crítico; Precisión Adicional o Precisión JcE'),
      (7, 'Crítico o Precisión Adicional'),
      (8, 'Aumento de Puntos de Vida o Puntos de Vida'),
      (9, 'Crítico; Precisión Adicional o Precisión JcE'),
    ],
  },
  'clerigo': {
    'clase': 'Clérigo',
    'intro': 'Para el Clérigo: llegar a <strong>1.000 de Precisión y 1.000 de Crítico</strong> para Ludra (couga54) y aguantar.',
    'ranuras': [
      (1, 'Ataque JcE (6-12)', 'Ataque Adicional (Lucia)'),
      (2, 'Puntos de Vida o Defensa JcE', 'Aumento de Puntos de Vida o Puntos de Vida (Lucia)'),
      (3, 'Precisión JcE (15-30)', 'Precisión Adicional hasta 1.000; después Crítico (Kaeria: al Clérigo siempre le falta) o Bloqueo (Lucia)'),
      (4, 'Ataque JcE (6-12)', 'Amplificación de Daño de JcE (ver ranura 4 por rueda)'),
      (5, 'Ataque JcE (6-12)', 'Ataque Adicional o Ataque Máximo (Lucia)'),
      (6, 'Precisión JcE (15-30)', 'Precisión Adicional hasta 1.000; después Crítico'),
      (7, 'Ataque JcE (6-12)', 'Recuperación o Tenacidad (Lucia)'),
      (8, 'Puntos de Vida o Defensa JcE', 'Aumento de Puntos de Vida o Puntos de Vida (Lucia)'),
      (9, 'Precisión JcE (15-30)', 'Precisión Adicional hasta 1.000; después Crítico'),
    ],
    'orden': '3, 6, 9 (Precisión y Crítico para Ludra) → 4 → 1, 5 → 7 → 2, 8',
    'r47': r47(r7='Recuperación o Tenacidad (Lucia)'),
    'especial': [
      (1, 'Ataque Adicional o Ataque JcE'),
      (2, 'Aumento de Puntos de Vida o Puntos de Vida'),
      (3, 'Precisión Adicional o Precisión JcE hasta 1.000; después Crítico'),
      (4, 'Golpe (Lucia) o Amplificación de Daño'),
      (5, 'Ataque Adicional o Ataque Máximo'),
      (6, 'Precisión Adicional o Precisión JcE; después Crítico'),
      (7, 'Tenacidad o Crítico'),
      (8, 'Aumento de Puntos de Vida o Puntos de Vida'),
      (9, 'Precisión Adicional o Precisión JcE; después Crítico'),
    ],
  },
  'espiritualista': {
    'clase': 'Espiritualista',
    'intro': 'Para el Espiritualista: <strong>1.500 de Precisión</strong> (couga54: tu daño en el tiempo tiene que acertar) y después <strong>Ataque y Crítico</strong>, sus dos atributos de daño (metabot).',
    'ranuras': [
      (1, 'Ataque JcE (6-12)', 'Ataque Adicional (Lucia)'),
      (2, 'Puntos de Vida o Defensa JcE: no gastes cristales', 'Aumento de Puntos de Vida o Puntos de Vida (Lucia)'),
      (3, 'Precisión JcE (15-30)', 'Precisión Adicional hasta 1.500; después Crítico'),
      (4, 'Ataque JcE (6-12)', 'Amplificación de Daño de JcE (ver ranura 4 por rueda)'),
      (5, 'Ataque JcE (6-12)', 'Ataque Adicional o Ataque Máximo (Lucia)'),
      (6, 'Precisión JcE (15-30)', 'Precisión Adicional hasta 1.500; después Crítico'),
      (7, 'Ataque JcE (6-12)', 'Precisión Adicional o Crítico; Recuperación o Tenacidad si te cuesta sobrevivir (Lucia)'),
      (8, 'Puntos de Vida o Defensa JcE: no gastes cristales', 'Aumento de Puntos de Vida o Puntos de Vida (Lucia)'),
      (9, 'Precisión JcE (15-30)', 'Precisión Adicional hasta 1.500; después Crítico'),
    ],
    'orden': '3, 6, 9 (Precisión hasta 1.500) → 4 → 1, 5 → 7 → 2, 8',
    'r47': r47(r7='Precisión Adicional o Crítico'),
    'especial': [
      (1, 'Ataque Adicional o Ataque JcE'),
      (2, 'Aumento de Puntos de Vida o Puntos de Vida'),
      (3, 'Precisión Adicional o Precisión JcE hasta 1.500; después Crítico'),
      (4, 'Golpe (Lucia) o Amplificación de Daño'),
      (5, 'Ataque Adicional o Ataque Máximo'),
      (6, 'Precisión Adicional o Precisión JcE; después Crítico'),
      (7, 'Precisión Adicional o Crítico'),
      (8, 'Aumento de Puntos de Vida o Puntos de Vida'),
      (9, 'Precisión Adicional o Precisión JcE; después Crítico'),
    ],
  },
}

def bloque(c):
    filas = '\n'.join(
        f'      <tr><td>{n}</td><td>Nv. {n}</td><td>{leg}</td><td>{uni}</td></tr>' for n, leg, uni in c['ranuras'])
    r47f = '\n'.join(f'      <tr><td><strong>{n}</strong></td><td>{t}</td><td>{a}</td><td>{s7}</td></tr>' for n, t, a, s7 in c['r47'])
    espf = '\n'.join(f'      <tr><td>{n} (Nv. {n})</td><td>{t}</td></tr>' for n, t in c['especial'])
    return (INI + COMUN + f'''
  <h4>Ranura por ranura en Cogni, Fera, Natura y Varian ({c['clase']})</h4>
  <p>{c['intro']} Las ranuras 1, 2, 3, 5, 6, 8 y 9 son iguales en las cuatro ruedas; la 4 y la 7 tienen tabla propia más abajo.</p>
  <table>
    <thead><tr><th>Ranura</th><th>Se abre</th><th>{LEG} (rueda Nv. 4+)</th><th>{UNI} (Nv. 7+) / {EPI} (Nv. 9+)</th></tr></thead>
    <tbody>
{filas}
    </tbody>
  </table>
  <div class="callout info">
    <strong>Orden para bloquear al Nv. 9-10:</strong> {c['orden']}. <strong>Análisis automático:</strong> valor mínimo en {LEG} 10 de 12 (Ataque JcE) o 25 de 30 (Precisión JcE); en {UNI}/{EPI}, cerca del máximo que muestra el juego.
  </div>
''' + R47.format(clase=c['clase'], filas=r47f, uni=UNI, epi=EPI)
        + ESP.format(clase=c['clase'], filas=espf) + PIE + '  ' + FIN)

# Sección antigua de Lucia (Asesino y Clérigo), sustituida por el bloque nuevo
VIEJO = re.compile(r'\n  <h3>Qué tomar en cada rueda de Comprensión de raza \(Lucia\)</h3>.*?</div>\n(?=</section>)', re.S)

for f, c in CLASES.items():
    p = f + '.html'
    s = open(p, encoding='utf-8').read()
    nuevo = bloque(c)
    if INI in s:
        s = re.sub(re.escape(INI) + '.*?' + re.escape(FIN), lambda m: nuevo, s, flags=re.S)
    else:
        s, n = VIEJO.subn('\n' + nuevo + '\n', s)
        if n == 0:  # Espiritualista: no tenía tabla; va al final de #pets
            i = s.index('<section id="pets">')
            j = s.index('</section>', i)
            s = s[:j] + nuevo + '\n' + s[j:]
    open(p, 'w', encoding='utf-8', newline='').write(s)
    print(p, 'ok')
