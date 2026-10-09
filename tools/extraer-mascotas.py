# Genera la galería de mascotas: lee la lista de wikily.gg (tools/fuentes-mascotas/pets-*.json, de
# https://wikily.gg/api/wikis/aion-2/datasets/pets/list), descarga cada retrato del juego (ut_vehicle_portrait_*),
# lo reduce a 96 px en WebP (icons/pets/<clave>.webp) y escribe mascotas-datos.js.
# Uso (desde la carpeta del proyecto): python -I tools/extraer-mascotas.py
import json, os, re, io, urllib.request
from concurrent.futures import ThreadPoolExecutor
from PIL import Image

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FUENTES = os.path.join(RAIZ, 'tools', 'fuentes-mascotas')
DESTINO = os.path.join(RAIZ, 'icons', 'pets')
os.makedirs(DESTINO, exist_ok=True)

filas = []
for f in sorted(os.listdir(FUENTES)):
    if f.endswith('.json'):
        filas += json.load(open(os.path.join(FUENTES, f), encoding='utf-8'))['rows']

def almas(d):
    """Monstruo de nivel más bajo que suelta almas: (nombre, nivel, zona)."""
    out = []
    for k in ('sources', 'srcPart1', 'srcPart2', 'srcPart3', 'srcPart4', 'srcPart5', 'srcPart6'):
        for x in d.get(k) or []:
            if isinstance(x, dict) and x.get('copy') == 'Soul':
                m = re.search(r'level (\d+)(?:, [^,]*% per kill)?(?:, (.+))?$', x.get('subtitle', ''))
                if m:
                    out.append((x['title'], int(m.group(1)), m.group(2) or ''))
    out = sorted(set(out), key=lambda t: (t[1], t[0]))
    return out

def fuente_especial(d):
    for k in ('sources', 'srcPart1'):
        for x in d.get(k) or []:
            if isinstance(x, dict) and x.get('title'):
                return (x['title'] + (' — ' + x['subtitle'] if x.get('subtitle') else ''))
    return d.get('sourceTypes', '')

def bajar(d):
    ruta = os.path.join(DESTINO, d['slug'] + '.webp')
    if os.path.exists(ruta):
        return
    req = urllib.request.Request(d['icon'], headers={'User-Agent': 'Mozilla/5.0'})
    img = Image.open(io.BytesIO(urllib.request.urlopen(req, timeout=60).read())).convert('RGBA')
    img.resize((96, 96), Image.LANCZOS).save(ruta, 'WEBP', quality=82)

datos = [r['data'] for r in filas]
with ThreadPoolExecutor(8) as ex:
    list(ex.map(bajar, datos))

pets = []
for d in datos:
    a = almas(d)
    p = {'k': d['slug'], 'n': d['name'], 'g': d['type']}
    if a:
        p['lv'] = a[0][1]
        p['m'] = a[0][0]
        p['z'] = a[0][2]
        p['mas'] = len(a) - 1
    else:
        p['f'] = fuente_especial(d)
    pets.append(p)
orden = {'Cogni': 0, 'Natura': 1, 'Fera': 2, 'Varian': 3, 'Special': 4}
pets.sort(key=lambda p: (orden.get(p['g'], 9), p.get('lv', 999), p['n']))

with open(os.path.join(RAIZ, 'mascotas-datos.js'), 'w', encoding='utf-8') as f:
    f.write('// Aion 2 Global S1 — las ' + str(len(pets)) + ' mascotas: retrato (icons/pets/<k>.webp), familia y monstruo de nivel más bajo\n')
    f.write('// que suelta sus almas. Generado por tools/extraer-mascotas.py con datos de wikily.gg. No editar a mano.\n')
    f.write('window.PETS = ' + json.dumps(pets, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(len(pets), 'mascotas;', len(os.listdir(DESTINO)), 'archivos en icons/pets')
