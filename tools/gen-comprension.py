# Genera la subsección "Comprensión de raza: solo atributos globales" de cada clase y la
# coloca en la sección #pets de asesino.html, clerigo.html y espiritualista.html.
# Base: tabla de Lucia (couga54, guía del Clérigo; tools/fuentes-clerigo/couga-cleric-v2.txt)
# + lista completa de líneas por ranura y rareza de wikily (comprension/wikily-genus-properties.json,
#   api/wikis/aion-2/datasets/genus-properties). Nombres: cliente en español (metabot es_ES y capturas).
# Uso: python tools/gen-comprension.py   (desde la carpeta del proyecto)
import re, os

INI = '<!-- comprension:inicio -->'
FIN = '<!-- comprension:fin -->'

COMUN = '''
  <h3 id="comprension">Comprensión de raza: solo atributos globales</h3>
  <p>Cada familia tiene su rueda de 9 ranuras (una por nivel de Comprensión, del 1 al 9). Las líneas que llevan el nombre de la raza (<em>Ataque de Cognis</em>, <em>Precisión de Fera</em>…) <strong>solo funcionan contra monstruos de esa raza</strong> (metabot). Las demás valen contra todo: <em>Ataque JcE</em> contra cualquier monstruo, <em>Ataque de Jefe</em> contra cualquier jefe, y Ataque adicional, Crítico o Precisión siempre.</p>
  <table>
    <thead><tr><th>Rareza de la línea</th><th>Qué puede salir</th><th>Aparece desde</th></tr></thead>
    <tbody>
      <tr><td>Común · <span style="color:#22c55e">Raro</span></td><td>Solo líneas de raza, PV o PM</td><td>Nv. 1</td></tr>
      <tr><td><span style="color:#3b82f6">Legendario</span></td><td>Globales: Ataque JcE, de Jefe, Frontal, por la Espalda; Precisión JcE; Defensa JcE</td><td>Nv. 4 (5 %)</td></tr>
      <tr><td><span style="color:#eab308">Único</span> · <span style="color:#f97316">Épico</span></td><td>Globales fuertes: Ataque adicional, Ataque máximo, Penetración, Crítico, Aumento de Precisión y los % de Amplificación de Daño</td><td>Nv. 7 (1 %) · Nv. 9 (1 %)</td></tr>
    </tbody>
  </table>
  <div class="callout warn">
    <strong>Regla:</strong> nunca bloquees una línea Común o Rara: siempre es de raza (o PV/PM). Hasta el Nv. 6 analiza solo para subir la rueda (cada ranura analizada da 100 de experiencia; cada mascota nueva, 500) y <strong>bloquea únicamente líneas globales</strong>. En el Análisis automático deja todas las líneas "de Cognis/Fera/Natura/Varian" en <em>Sin seleccionar</em>. Lucia: bloquea solo cuando la línea esté cerca del máximo, y nunca antes de que la rueda llegue a nivel 9-10.
  </div>
'''

RUEDA4 = '''
  <h4>Ranura 4 según la rueda ({clase})</h4>
  <p>La ranura 4 es la única que cambia de familia a familia. Las cuatro ruedas tienen <strong>Amplificación de Daño JcE</strong> (Único 1,5-3 %, Épico 2-4 %), que vale contra cualquier monstruo y es la cifra más alta para JcE; la <em>Amplificación de Daño de Cognis/Fera…</em> (hasta 4,8 %) solo vale contra una raza: no la bloquees.</p>
  <table>
    <thead><tr><th>Rueda</th><th>Toma (JcE)</th><th>Línea propia de la rueda (Lucia, también vale en JcJ)</th></tr></thead>
    <tbody>
{filas}
      <tr><td><strong>Especial</strong></td><td colspan="2">{especial}</td></tr>
    </tbody>
  </table>
  <p><small>La rueda Especial no tiene líneas de raza: todas sus líneas son globales en cualquier rareza (pero con valores bajos en Común y Raro), y no tiene Amplificación de Daño JcE.</small></p>
'''

PIE = '''
  <p><small>Líneas por ranura y rareza: <a href="https://wikily.gg/aion-2/genus-insight/cogni/slot-properties" target="_blank" rel="noopener">wikily.gg</a> (393 por rueda). Qué hace cada línea: <a href="https://metabot.gg/es_ES/aion-2/stats" target="_blank" rel="noopener">metabot</a>. Tabla base: Lucia en la guía del Clérigo de couga54; la adaptación a cada clase y a líneas solo globales es nuestra. Nombres del cliente en español según metabot y capturas del juego; alguno puede variar ligeramente.</small></p>
'''

CLASES = {
  'asesino': {
    'clase': 'Asesino',
    'intro': 'Para el Asesino: <strong>Crítico</strong> (Estocada al corazón solo se reinicia con un crítico) y <strong>golpes por la espalda</strong> (Emboscada, Impacto trasero).',
    'filas': [
      ('1, 5', 'Ataque por la Espalda (6-12); si no, Ataque JcE', 'Ataque adicional (Lucia); en la 5 también Ataque máximo'),
      ('2, 8', 'Defensa JcE: no gastes cristales', 'Puntos de Vida o Aumento de PV (Lucia)'),
      ('3, 6, 9', 'Ataque Crítico por la Espalda (10-20); si no, Precisión JcE', 'Crítico o Aumento de Precisión (Lucia: Precisión, o Bloqueo si ya vas sobrado)'),
      ('4', 'Ataque JcE', 'Ver tabla de la ranura 4'),
      ('7', 'Ataque JcE', 'Crítico o Aumento de Precisión (daño); Regeneración o Aguante si te cuesta sobrevivir (Lucia)'),
    ],
    'r4': [
      ('Varian', 'Amplificación de Daño por la Espalda (la mejor del Asesino) o Amplificación de Daño JcE', 'Amplificación de Daño por la Espalda'),
      ('Cogni', 'Amplificación de Daño JcE; Amplificación de Daño Crítico también encaja con el Asesino', 'Amplificación de Daño'),
      ('Fera', 'Amplificación de Daño JcE', 'Amplificación de Daño'),
      ('Natura', 'Amplificación de Daño JcE', 'Golpe perfecto'),
    ],
    'especial': 'Ranura 4: Doble golpe (Lucia) o Amplificación de Daño por la Espalda; ranura 7: Crítico o Aumento de Precisión.',
  },
  'clerigo': {
    'clase': 'Clérigo',
    'intro': 'Para el Clérigo: llegar a <strong>1.000 de Precisión y 1.000 de Crítico</strong> para Ludra (couga54) y aguantar. Atacas a distancia, así que las líneas Frontal y por la Espalda no son fiables.',
    'filas': [
      ('1, 5', 'Ataque JcE (vale contra todo monstruo); Ataque de Jefe si ya solo haces incursiones', 'Ataque adicional (Lucia); en la 5 también Ataque máximo'),
      ('2, 8', 'Defensa JcE', 'Puntos de Vida o Aumento de PV (Lucia)'),
      ('3, 6, 9', 'Precisión JcE (15-30)', 'Aumento de Precisión hasta 1.000; después Crítico (Kaeria: al Clérigo siempre le falta) o Bloqueo (Lucia)'),
      ('4', 'Ataque JcE', 'Ver tabla de la ranura 4'),
      ('7', 'Ataque JcE', 'Regeneración o Aguante (Lucia)'),
    ],
    'r4': [
      ('Cogni', 'Amplificación de Daño JcE', 'Amplificación de Daño'),
      ('Fera', 'Amplificación de Daño JcE', 'Amplificación de Daño'),
      ('Natura', 'Amplificación de Daño JcE o Golpe perfecto', 'Golpe perfecto'),
      ('Varian', 'Amplificación de Daño JcE (a distancia no garantizas la espalda)', 'Amplificación de Daño por la Espalda'),
    ],
    'especial': 'Ranura 4: Doble golpe (Lucia); ranura 7: Regeneración o Aguante.',
  },
  'espiritualista': {
    'clase': 'Espiritualista',
    'intro': 'Para el Espiritualista: <strong>1.500 de Precisión</strong> (couga54: tu daño en el tiempo tiene que acertar) y después <strong>Ataque y Crítico</strong>, sus dos atributos de daño (metabot). Atacas a distancia, así que las líneas Frontal y por la Espalda no son fiables.',
    'filas': [
      ('1, 5', 'Ataque JcE (vale contra todo monstruo); Ataque de Jefe si ya solo haces incursiones', 'Ataque adicional (Lucia); en la 5 también Ataque máximo'),
      ('2, 8', 'Defensa JcE: no gastes cristales', 'Puntos de Vida o Aumento de PV (Lucia)'),
      ('3, 6, 9', 'Precisión JcE (15-30)', 'Aumento de Precisión hasta 1.500; después Crítico'),
      ('4', 'Ataque JcE', 'Ver tabla de la ranura 4'),
      ('7', 'Ataque JcE', 'Aumento de Precisión o Crítico (daño); Regeneración o Aguante si te cuesta sobrevivir (Lucia)'),
    ],
    'r4': [
      ('Cogni', 'Amplificación de Daño JcE', 'Amplificación de Daño'),
      ('Fera', 'Amplificación de Daño JcE', 'Amplificación de Daño'),
      ('Natura', 'Amplificación de Daño JcE o Golpe perfecto', 'Golpe perfecto'),
      ('Varian', 'Amplificación de Daño JcE (a distancia no garantizas la espalda)', 'Amplificación de Daño por la Espalda'),
    ],
    'especial': 'Ranura 4: Doble golpe (Lucia); ranura 7: Aumento de Precisión o Crítico.',
  },
}

def bloque(c):
    filas = '\n'.join(
        f'      <tr><td>{r}</td><td>{leg}</td><td>{uni}</td></tr>' for r, leg, uni in c['filas'])
    r4 = '\n'.join(f'      <tr><td><strong>{n}</strong></td><td>{t}</td><td>{p}</td></tr>' for n, t, p in c['r4'])
    return (INI + COMUN + f'''
  <h4>Qué buscar en cada ranura ({c['clase']}, JcE)</h4>
  <p>{c['intro']}</p>
  <table>
    <thead><tr><th>Ranura</th><th><span style="color:#3b82f6">Legendario</span> (Nv. 4+)</th><th><span style="color:#eab308">Único</span> / <span style="color:#f97316">Épico</span> (Nv. 7+)</th></tr></thead>
    <tbody>
{filas}
    </tbody>
  </table>
  <div class="callout info">
    <strong>Análisis automático:</strong> marca solo las líneas de la tabla. Valor mínimo: en Legendario 10 de 12 (Ataque) o 25 de 30 (Precisión JcE); en Único/Épico, cerca del máximo que muestra el juego.
  </div>
''' + RUEDA4.format(clase=c['clase'], filas=r4, especial=c['especial']) + PIE + '  ' + FIN)

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
