# Genera daevanion-hechicero.js a partir de tools/fuentes-hechicero/tableros-hechicero.json
# (salida de extraer-tableros.ps1 -Ids 61,62,63,64,66). Uso: python -I gen-dae-hechicero.py <json> <js>
import sys, json
b = json.load(open(sys.argv[1], encoding='utf-8-sig'))
data = [{'id': bd['id'], 'nombre': bd['nombre'], 'nivel': bd['nivel'], 'w': bd['w'], 'h': bd['h'],
         'n': [n[:7] for n in bd['nodos']], 'l': bd['lineas']} for bd in b]
ids = sorted({n[6] for bd in b for n in bd['nodos'] if n[6] > 0})
icons = '\n'.join(f"    {i}: 'icons/hechicero/{i}.webp'," for i in ids)
js = f'''// Aion 2 Global S1 — Tableros Daevanion del Hechicero: datos de la clase para daevanion.js
// Tableros reales del juego y ruta JcE de couga54 (https://couga54.github.io/aion2-guides/en/sorcerer/#daevanion),
// con los textos del cliente en español de metabot.gg/es_ES. Los datos los genera tools/gen-dae-hechicero.py.
// nodos n: [fila, columna, tipo (S inicio, G atributo, P pasiva, A activa, N especial), coste, en ruta, texto, id de habilidad]
// líneas l: [x1, y1, x2, y2, en ruta]
window.DV_CLASS = {{
  data: {json.dumps(data, ensure_ascii=False, separators=(',', ':'))},
  // Iconos locales por id de habilidad (metabot.gg)
  icons: {{
{icons}
  }},
  notas: {{
    61: 'Las cuatro esquinas (Velocidad de Hechizo y Reducción de Tiempo de Enfriamiento) entran en la ruta: couga54 las pone primero. Toga terrestre sale aquí dos veces.',
    62: 'Las dos esquinas de Amplificación de Daño; las de Tolerancia a Daño no entran. Aquí está Merced de mejora.',
    63: 'Esquinas de Amplificación de Daño Crítico; las de Tolerancia no entran.',
    64: 'Sin nodos naranjas en la ruta: el Multigolpe no rinde en el Hechicero (couga54). Solo habilidades y Toga terrestre.',
    66: 'Tablero JcJ: solo da Amplificación y Tolerancia JcJ, sin habilidades. En JcE no gastes puntos aquí; termina antes los otros cuatro.',
  }},
  // Prioridad del orden de clics (couga54): primero los naranjas ofensivos (Velocidad de Hechizo y Enfriamiento,
  // Amplificación de Daño, Amplificación de Daño Crítico); después los azules de Llamas del infierno, Quebrantamiento
  // en llamas, Viento helado, Explosión de llama y Voto de concentración y la verde Toga terrestre; el resto al final.
  prio: function (board, n) {{
    const [, , t, , , label, sk] = n;
    if (t === 'N') return /Tolerancia|Resistencia|Multigolpe|JcJ/.test(label) ? 5 : 1;
    if ([15060000, 15040000, 15280000, 15050000, 15310000, 15720000].includes(sk)) return 2;
    if (t === 'A' || t === 'P') return 4;
    return 9;
  }},
}};
'''
open(sys.argv[2], 'w', encoding='utf-8', newline='\n').write(js)
print('iconos', len(ids), 'bytes', len(js))
