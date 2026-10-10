# Genera la subsección "Comprensión de raza" (una tabla por clase: ranura, 1.ª opción, opcional) y la
# coloca en la sección #pets de asesino.html, clerigo.html y espiritualista.html.
# Base: tabla de Lucia (couga54, guía del Clérigo; tools/fuentes-clerigo/couga-cleric-v2.txt)
# + líneas por rueda, ranura y rareza de wikily con los nombres del cliente en español
#   (comprension/wikily-genus-properties-es.json; api/wikis/aion-2/datasets/genus-properties/list?locale=es).
# Solo atributos que sirven en todo (sin raza, Frontal, por la Espalda ni Jefe), petición del usuario 10-oct-2026.
# Una celda es un texto (igual en las 5 ruedas) o un dict por rueda; '*' = el resto de ruedas.
# Validar después: python tools/comprobar-comprension.py (lee CLASES de aquí)
# Uso: python tools/gen-comprension.py   (desde la carpeta del proyecto)
import re

INI = '<!-- comprension:inicio -->'
FIN = '<!-- comprension:fin -->'
RUEDAS = ['Cognis', 'Feras', 'Naturas', 'Varians', 'Especial']

PV = ('2, 8', 'Aumento de Puntos de Vida', 'Puntos de Vida')
CLASES = {
  'asesino': {
    'clase': 'Asesino', 'por': 'Crítico primero: Estocada al corazón solo se reinicia con un crítico (couga54).',
    'filas': [
      ('1', 'Ataque Adicional', 'Ataque JcE'),
      PV,
      ('3, 6, 7, 9', 'Crítico', 'Precisión Adicional'),
      ('4', {'*': 'Amplificación de Daño de JcE', 'Especial': 'Amplificación de Daño Crítico'},
            {'Cognis': 'Amplificación de Daño Crítico', 'Feras': 'Amplificación de Daño de Arma',
             'Naturas': 'Perforación', 'Varians': 'Crítico', 'Especial': 'Golpe'}),
      ('5', 'Ataque Adicional', 'Ataque Máximo'),
    ],
  },
  'clerigo': {
    'clase': 'Clérigo', 'por': 'Precisión y Crítico hasta 1.000 cada uno para Ludra (couga54).',
    'filas': [
      ('1', 'Ataque Adicional', 'Ataque JcE'),
      PV,
      ('3, 6, 9', 'Precisión Adicional', 'Crítico'),
      ('4', {'*': 'Amplificación de Daño de JcE', 'Especial': 'Golpe'},
            {'Cognis': 'Amplificación de Daño', 'Feras': 'Amplificación de Daño',
             'Naturas': 'Perforación', 'Varians': 'Precisión Adicional', 'Especial': 'Amplificación de Daño'}),
      ('5', 'Ataque Adicional', 'Ataque Máximo'),
      ('7', {'*': 'Recuperación', 'Especial': 'Tenacidad'}, {'*': 'Tenacidad', 'Especial': 'Crítico'}),
    ],
  },
  'hechicero': {
    'clase': 'Hechicero', 'por': 'Ataque y Crítico; Puntos de Maná para no bajar del 50 % de PM (metabot).',
    'filas': [
      ('1', 'Ataque Adicional', 'Ataque JcE'),
      ('2, 8', 'Aumento de Puntos de Vida', 'Puntos de Maná'),
      ('3, 6, 7, 9', 'Crítico', 'Precisión Adicional'),
      ('4', {'*': 'Amplificación de Daño de JcE', 'Especial': 'Amplificación de Daño Crítico'},
            {'Cognis': 'Amplificación de Daño Crítico', 'Feras': 'Amplificación de Daño de Arma',
             'Naturas': 'Perforación', 'Varians': 'Crítico', 'Especial': 'Golpe'}),
      ('5', 'Ataque Adicional', 'Ataque Máximo'),
    ],
  },
  'espiritualista': {
    'clase': 'Espiritualista', 'por': 'Precisión hasta 1.500 (couga54) y después Crítico.',
    'filas': [
      ('1', 'Ataque Adicional', 'Ataque JcE'),
      PV,
      ('3, 6, 7, 9', 'Precisión Adicional', 'Crítico'),
      ('4', {'*': 'Amplificación de Daño de JcE', 'Especial': 'Golpe'},
            {'Cognis': 'Amplificación de Daño', 'Feras': 'Amplificación de Daño',
             'Naturas': 'Perforación', 'Varians': 'Precisión Adicional', 'Especial': 'Amplificación de Daño'}),
      ('5', 'Ataque Adicional', 'Ataque Máximo'),
    ],
  },
}

def por_rueda(celda):
    """{rueda: atributo} para las 5 ruedas."""
    if isinstance(celda, str):
        return {r: celda for r in RUEDAS}
    return {r: celda.get(r, celda.get('*')) for r in RUEDAS}

def texto(celda, negrita=False):
    b = (lambda t: f'<strong>{t}</strong>') if negrita else (lambda t: t)
    if isinstance(celda, str):
        return b(celda)
    if '*' in celda:
        resto = ' · '.join(f'{r}: {v}' for r, v in celda.items() if r != '*')
        return f'{b(celda["*"])} <small>({resto})</small>'
    return ' · '.join(f'{r}: {b(v)}' for r, v in celda.items())

def bloque(c):
    tr = '\n'.join(f'      <tr><td>{n}</td><td>{texto(a, True)}</td><td>{texto(o)}</td></tr>' for n, a, o in c['filas'])
    return (INI + f'''
  <h3 id="comprension">Comprensión de raza: qué poner en cada ranura</h3>
  <p>Vale para las 5 ruedas (Cognis, Feras, Naturas, Varians y Especial); donde una rueda cambia, va su nombre. {c['clase']}: {c['por']}</p>
  <table>
    <thead><tr><th>Ranura</th><th>1.ª opción</th><th>Opcional</th></tr></thead>
    <tbody>
{tr}
    </tbody>
  </table>
  <div class="callout warn">
    <strong>Ignora</strong> lo que diga <em>de Cognis / de Feras / de Naturas / de Varians</em>, <em>Frontal</em>, <em>por la Espalda</em> o <em>de Jefe</em>. Bloquea solo con la rueda en Nv. 9-10 y la línea cerca del máximo (Lucia).
  </div>
  <p><small>Atributos y nombres del cliente: <a href="https://wikily.gg/es/aion-2/genus-insight/cogni/slot-properties" target="_blank" rel="noopener">wikily.gg</a>. Base: Lucia (couga54); la adaptación a cada clase es nuestra.</small></p>
  ''' + FIN)

# Sección antigua de Lucia (Asesino y Clérigo), sustituida por el bloque nuevo
VIEJO = re.compile(r'\n  <h3>Qué tomar en cada rueda de Comprensión de raza \(Lucia\)</h3>.*?</div>\n(?=</section>)', re.S)

if __name__ == '__main__':
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
