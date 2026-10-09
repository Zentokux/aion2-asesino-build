# Genera daevanion-espiritualista.js a partir de tools/fuentes-espiritualista/tableros-espiritualista.json
# (salida de extraer-tableros.ps1 -Ids 51,52,53,54,56). Uso: python -I gen-dae-espiritualista.py <json> <js>
import sys, json
b = json.load(open(sys.argv[1], encoding='utf-8-sig'))
data = [{'id': bd['id'], 'nombre': bd['nombre'], 'nivel': bd['nivel'], 'w': bd['w'], 'h': bd['h'],
         'n': [n[:7] for n in bd['nodos']], 'l': bd['lineas']} for bd in b]
ids = sorted({n[6] for bd in b for n in bd['nodos'] if n[6] > 0})
icons = '\n'.join(f"    {i}: 'icons/espiritualista/{i}.webp'," for i in ids)
js = f'''// Aion 2 Global S1 — Tableros Daevanion del Espiritualista: datos de la clase para daevanion.js
// Tableros reales del juego y ruta JcE de couga54 (https://couga54.github.io/aion2-guides/en/elementalist/#daevanion),
// con los textos del cliente en español de metabot.gg/es_ES. Los datos los genera tools/gen-dae-espiritualista.py.
// nodos n: [fila, columna, tipo (S inicio, G atributo, P pasiva, A activa, N especial), coste, en ruta, texto, id de habilidad]
// líneas l: [x1, y1, x2, y2, en ruta]
window.DV_CLASS = {{
  data: {json.dumps(data, ensure_ascii=False, separators=(',', ':'))},
  // Iconos locales por id de habilidad (metabot.gg)
  icons: {{
{icons}
  }},
  notas: {{
    51: 'Las cuatro esquinas (Velocidad de Hechizo y Reducción de Enfriamiento) entran en la ruta. Golpe de Espíritu sale aquí dos veces: metabot aconseja empezar por ese par.',
    52: 'Esquinas de Amplificación de Daño; la de Tolerancia a Daño no entra. Toma Concentración mental (Doble golpe) dos veces.',
    53: 'Esquinas de Amplificación de Daño Crítico. Aquí está el único nodo de Espíritu de viento: es de paso, no lo busques.',
    54: 'Sin nodos naranjas en la ruta: solo las habilidades y las pasivas, entre ellas el único nodo de Golpe conjunto: Maldición.',
    56: 'Tablero JcJ: solo da Amplificación y Tolerancia JcJ, sin habilidades. En JcE no gastes puntos aquí; termina antes los otros cuatro.',
  }},
  // Prioridad del orden de clics (couga54): nodos azules de Fusión elemental, Combustión, Espíritu de fuego,
  // Impacto helado y Espíritu de agua; luego las pasivas verdes Concentración mental y Golpe de Espíritu;
  // luego los nodos naranjas ofensivos; el resto de la ruta al final.
  prio: function (board, n) {{
    const [, , t, , , label, sk] = n;
    if ([16300000, 16040000, 16100000, 16010000, 16110000].includes(sk)) return 1;
    if ([16760000, 16710000].includes(sk)) return 2;
    if (t === 'N') return /Tolerancia|Resistencia/.test(label) ? 5 : 3;
    if (t === 'A' || t === 'P') return 4;
    return 9;
  }},
}};
'''
open(sys.argv[2], 'w', encoding='utf-8', newline='\n').write(js)
print('iconos', len(ids), 'bytes', len(js))
