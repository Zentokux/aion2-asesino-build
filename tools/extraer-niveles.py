# Nivel de personaje que pide cada rango (1-10) de cada habilidad, sacado de metabot.gg/es_ES/aion-2/skills/<slug>
# (tabla "Nivel requerido"). No todas siguen "+1 rango cada 3 niveles": Determinación (Asesino) pide el 25 para todo.
# Uso: python -I tools/extraer-niveles.py   (desde la carpeta del proyecto; guarda las páginas en tools/niveles/<clase>/)
# Escribe niveles-<clase>.js con const SKILL_REQ = { clave: [nv rango 1, ..., nv rango 10] }.
import re, os, json, html, time, urllib.request

CLASES = {'asesino': 'assassin', 'clerigo': 'cleric', 'espiritualista': 'spiritmaster', 'hechicero': 'sorcerer'}
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def slugify(s):
    s = s.lower().replace("'", '').replace('’', '')
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


def pagina(clase, slug):
    d = os.path.join(BASE, 'tools', 'niveles', clase)
    os.makedirs(d, exist_ok=True)
    f = os.path.join(d, slug + '.html')
    if os.path.exists(f):
        return open(f, encoding='utf-8').read()
    req = urllib.request.Request('https://metabot.gg/es_ES/aion-2/skills/' + slug, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        t = urllib.request.urlopen(req, timeout=30).read().decode('utf-8')
    except Exception:
        return None
    time.sleep(0.4)
    if 'Nivel requerido' not in t:
        return None
    open(f, 'w', encoding='utf-8').write(t)
    return t


def niveles(t):
    # Tabla de la sección "levels": se busca la columna "Nivel requerido" por su cabecera (las activas traen más columnas).
    i = t.find('Nivel requerido', t.find('data-section="levels"'))
    tabla = t[t.rfind('<table', 0, i):t.find('</table>', i)]
    filas = [[html.unescape(re.sub(r'<[^>]+>', '', c)).strip() for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', f, re.S)]
             for f in re.findall(r'<tr[^>]*>(.*?)</tr>', tabla, re.S)]
    cab = next(f for f in filas if 'Nivel requerido' in f)
    col = cab.index('Nivel requerido')
    out = {}
    for f in filas:
        if len(f) > col and f[0].isdigit() and re.fullmatch(r'Nv\. \d+', f[col]):
            out.setdefault(int(f[0]), int(f[col][4:]))
    return [out.get(r) for r in range(1, 11)]


avisos = []
for clase, mb in CLASES.items():
    src = open(os.path.join(BASE, f'planner-{clase}.js'), encoding='utf-8').read()
    bloque = src[src.index('const SKILLS'):src.index('const STIGMAS')]
    datos = {}
    for key, name, en1, en2, unlock in re.findall(r"(\w+):\s*\{\s*name:\s*'([^']*)',\s*nameEn:\s*(?:'([^']*)'|\"([^\"]*)\").*?unlock:\s*(\d+)", bloque):
        en = en1 or en2
        base = slugify(en)
        t = pagina(clase, base) or pagina(clase, base + '-' + mb)
        if not t:
            avisos.append(f'{clase}/{key} ({en}): no está en metabot')
            continue
        req = niveles(t)
        if None in req:
            avisos.append(f'{clase}/{key}: tabla incompleta {req}')
            continue
        if req[0] != int(unlock):
            avisos.append(f'{clase}/{key} ({name}): se aprende en {req[0]} según metabot, la guía dice {unlock}')
        datos[key] = req
    js = ('// Generado por tools/extraer-niveles.py desde metabot.gg/es_ES (tabla "Nivel requerido").\n'
          '// Nivel de personaje que pide cada rango 1-10. planner.js lo usa como tope por nivel.\n'
          'const SKILL_REQ = {\n' + ''.join(f'  {k}: {json.dumps(v)},\n' for k, v in datos.items()) + '};\n')
    open(os.path.join(BASE, f'niveles-{clase}.js'), 'w', encoding='utf-8', newline='\n').write(js)
    raros = {k: v for k, v in datos.items() if v != [v[0]] + [v[0] + 3 * (r - 1) for r in range(1, 10)]}
    print(f'{clase}: {len(datos)} habilidades; no siguen +3 por rango: {json.dumps(raros)}')
print('\n'.join(avisos) or 'sin avisos')
