# Comprueba que cada atributo recomendado en gen-comprension.py existe, con su nombre del cliente en
# español, en esa ranura de esa rueda (Legendario o mejor; datos de wikily locale=es), que no es una
# línea de raza, Frontal, por la Espalda ni de Jefe, y que las páginas tienen el bloque generado al día.
import json, re, sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__))))
import importlib.util
spec = importlib.util.spec_from_file_location('gen', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'gen-comprension.py'))
gen = importlib.util.module_from_spec(spec); spec.loader.exec_module(gen)

ES = [r['data'] for r in json.load(open('tools/comprension/wikily-genus-properties-es.json', encoding='utf8'))]
CLAVE = {'Cognis': 'cogni', 'Feras': 'fera', 'Naturas': 'natura', 'Varians': 'varian', 'Especial': 'special'}
BUENAS = {'Legendario', 'Único', 'Épico'}
PROHIBIDO = re.compile(r'de (Cognis|Feras|Naturas|Varians)$|Frontal|frontal|por la Espalda|de Jefe')
def pool(rueda, slot):
    return {r['name'] for r in ES if r['genus'] == CLAVE[rueda] and r['slotNum'] == slot and r['grade'] in BUENAS}

mal = 0
for f, c in gen.CLASES.items():
    n = 0; vistos = set()
    for ranuras, primera, opcional in c['filas']:
        slots = [int(x) for x in ranuras.split(',')]
        for s in slots:
            if s in vistos: mal += 1; print(f, 'ranura repetida', s)
            vistos.add(s)
        for celda in (primera, opcional):
            for rueda, nom in gen.por_rueda(celda).items():
                if PROHIBIDO.search(nom): mal += 1; print(f, rueda, 'atributo condicional:', nom)
                for s in slots:
                    n += 1
                    if nom not in pool(rueda, s): mal += 1; print(f, rueda, 'ranura', s, 'NO EXISTE:', nom)
    if vistos != set(range(1, 10)): mal += 1; print(f, 'faltan ranuras', sorted(set(range(1, 10)) - vistos))
    html = open(f + '.html', encoding='utf8').read()
    if gen.bloque(c) not in html: mal += 1; print(f, 'la página no tiene el bloque al día: ejecuta gen-comprension.py')
    print(f, n, 'comprobaciones')
print('TODO OK' if mal == 0 else f'{mal} problemas'); sys.exit(1 if mal else 0)
