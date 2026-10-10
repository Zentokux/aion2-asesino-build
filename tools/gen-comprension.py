# Genera la subsección "Comprensión de raza" (versión simple: por ranura, 1.ª opción y opcional) de cada
# clase y la coloca en la sección #pets de asesino.html, clerigo.html y espiritualista.html.
# Base: tabla de Lucia (couga54, guía del Clérigo; tools/fuentes-clerigo/couga-cleric-v2.txt)
# + líneas por rueda, ranura y rareza de wikily con los nombres del cliente en español
#   (comprension/wikily-genus-properties-es.json; api/wikis/aion-2/datasets/genus-properties/list?locale=es).
# Solo atributos que sirven en todo (sin raza, Frontal, por la Espalda ni Jefe), petición del usuario 10-oct-2026.
# En Cognis/Feras/Naturas/Varians solo cambian las ranuras 4 y 7; la Especial es distinta.
# Validar después: python tools/comprobar-comprension.py
# Uso: python tools/gen-comprension.py   (desde la carpeta del proyecto)
import re

INI = '<!-- comprension:inicio -->'
FIN = '<!-- comprension:fin -->'

def r4(cognis, feras, naturas, varians):
    return f'Cognis: {cognis} · Feras: {feras} · Naturas: {naturas} · Varians: {varians}'

# (ranura, 1.ª opción, opcional)
CLASES = {
  'asesino': {
    'clase': 'Asesino', 'por': 'el Crítico primero: Estocada al corazón solo se reinicia con un crítico (couga54)',
    'normal': [
      (1, 'Ataque Adicional', 'Ataque JcE'),
      (2, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (3, 'Crítico', 'Precisión Adicional'),
      (4, 'Amplificación de Daño de JcE', r4('Amplificación de Daño Crítico', 'Amplificación de Daño de Arma', 'Perforación', 'Crítico')),
      (5, 'Ataque Adicional', 'Ataque Máximo'),
      (6, 'Crítico', 'Precisión Adicional'),
      (7, 'Crítico', 'Precisión Adicional'),
      (8, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (9, 'Crítico', 'Precisión Adicional'),
    ],
    'especial': [
      (1, 'Ataque Adicional', 'Ataque JcE'),
      (2, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (3, 'Crítico', 'Precisión Adicional'),
      (4, 'Amplificación de Daño Crítico', 'Golpe'),
      (5, 'Ataque Adicional', 'Ataque Máximo'),
      (6, 'Crítico', 'Precisión Adicional'),
      (7, 'Crítico', 'Precisión Adicional'),
      (8, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (9, 'Crítico', 'Precisión Adicional'),
    ],
  },
  'clerigo': {
    'clase': 'Clérigo', 'por': 'Precisión y Crítico hasta 1.000 cada uno para Ludra (couga54), y aguantar',
    'normal': [
      (1, 'Ataque Adicional', 'Ataque JcE'),
      (2, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (3, 'Precisión Adicional', 'Crítico'),
      (4, 'Amplificación de Daño de JcE', r4('Amplificación de Daño', 'Amplificación de Daño', 'Perforación', 'Precisión Adicional')),
      (5, 'Ataque Adicional', 'Ataque Máximo'),
      (6, 'Precisión Adicional', 'Crítico'),
      (7, 'Recuperación', 'Tenacidad'),
      (8, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (9, 'Precisión Adicional', 'Crítico'),
    ],
    'especial': [
      (1, 'Ataque Adicional', 'Ataque JcE'),
      (2, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (3, 'Precisión Adicional', 'Crítico'),
      (4, 'Golpe', 'Amplificación de Daño'),
      (5, 'Ataque Adicional', 'Ataque Máximo'),
      (6, 'Precisión Adicional', 'Crítico'),
      (7, 'Tenacidad', 'Crítico'),
      (8, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (9, 'Precisión Adicional', 'Crítico'),
    ],
  },
  'espiritualista': {
    'clase': 'Espiritualista', 'por': 'Precisión hasta 1.500 (couga54) y después Crítico',
    'normal': [
      (1, 'Ataque Adicional', 'Ataque JcE'),
      (2, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (3, 'Precisión Adicional', 'Crítico'),
      (4, 'Amplificación de Daño de JcE', r4('Amplificación de Daño', 'Amplificación de Daño', 'Perforación', 'Precisión Adicional')),
      (5, 'Ataque Adicional', 'Ataque Máximo'),
      (6, 'Precisión Adicional', 'Crítico'),
      (7, 'Precisión Adicional', 'Crítico'),
      (8, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (9, 'Precisión Adicional', 'Crítico'),
    ],
    'especial': [
      (1, 'Ataque Adicional', 'Ataque JcE'),
      (2, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (3, 'Precisión Adicional', 'Crítico'),
      (4, 'Golpe', 'Amplificación de Daño'),
      (5, 'Ataque Adicional', 'Ataque Máximo'),
      (6, 'Precisión Adicional', 'Crítico'),
      (7, 'Precisión Adicional', 'Crítico'),
      (8, 'Aumento de Puntos de Vida', 'Puntos de Vida'),
      (9, 'Precisión Adicional', 'Crítico'),
    ],
  },
}

def tabla(titulo, filas):
    tr = '\n'.join(f'      <tr><td>{n}</td><td><strong>{a}</strong></td><td>{b}</td></tr>' for n, a, b in filas)
    return f'''  <table>
    <thead><tr><th>{titulo}</th><th>1.ª opción</th><th>Opcional</th></tr></thead>
    <tbody>
{tr}
    </tbody>
  </table>
'''

def bloque(c):
    return (INI + f'''
  <h3 id="comprension">Comprensión de raza: qué poner en cada ranura ({c['clase']})</h3>
  <p>Cada rueda tiene 9 ranuras; la ranura N se abre con la comprensión Nv. N. Solo atributos que sirven en todo; para el {c['clase']}, {c['por']}.</p>
  <h4>Cognis, Feras, Naturas y Varians</h4>
''' + tabla('Ranura', c['normal']) + '''  <h4>Especial</h4>
''' + tabla('Ranura', c['especial']) + '''  <div class="callout warn">
    <strong>Ignora</strong> todo lo que diga <em>de Cognis / de Feras / de Naturas / de Varians</em>, <em>Frontal</em>, <em>por la Espalda</em> o <em>de Jefe</em>. Analiza para subir la rueda y <strong>bloquea solo con la rueda en Nv. 9-10 y la línea cerca del máximo</strong> (Lucia).
  </div>
  <p><small>Líneas por ranura y nombres del cliente en español: <a href="https://wikily.gg/es/aion-2/genus-insight/cogni/slot-properties" target="_blank" rel="noopener">wikily.gg</a>. Base: Lucia en la guía del Clérigo de couga54; la adaptación a cada clase es nuestra.</small></p>
  ''' + FIN)

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
