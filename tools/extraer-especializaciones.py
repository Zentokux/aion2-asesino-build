# Especializaciones de las habilidades activas: elección de couga54 + textos del cliente en español (metabot.gg/es_ES).
# couga54 (sección Skills del modo PvE): "All specializations" lista todas las opciones; class="on" = las que toma,
# class="next" = la del tercer hueco cuando la habilidad llega a 20. metabot (/es_ES/aion-2/skills/<slug>) da las mismas
# opciones, en el mismo orden, con el texto del juego. Se cruzan por posición y se comprueba que coincida el nivel.
# Uso: python -I extraer-especializaciones.py <couga.html> <carpeta metabot> <salida.json>
import sys, re, html, json, os, glob

def txt(x):
    return html.unescape(re.sub(r'<[^>]+>', '', x)).strip()

couga = open(sys.argv[1], encoding='utf-8').read()
sec = re.search(r'<section id="skills"[^>]*data-only="pve".*?</section>', couga, re.S).group(0)

# metabot: título → slug y lista de especializaciones [(nivel, texto)]
mb = {}
for f in glob.glob(os.path.join(sys.argv[2], '*.html')):
    s = open(f, encoding='utf-8').read()
    s2 = re.sub(r'<(script|style|svg)[^>]*>.*?</\1>', '', s, flags=re.S)
    s2 = re.sub(r'<br\s*/?>|</(p|li|h\d|div|tr|td|th)>', '\n', s2)
    t = [' '.join(l.split()) for l in html.unescape(re.sub(r'<[^>]+>', ' ', s2)).splitlines()]
    t = [l for l in t if l]
    name = next((l[len('Especializaciones de '):] for l in t if l.startswith('Especializaciones de ')), None)
    if not name:
        continue
    specs = []
    for i, l in enumerate(t):
        m = re.match(r'Especialización \d+ · requiere nivel de habilidad (\d+)', l)
        if m:
            specs.append([int(m.group(1)), t[i + 1]])
    mb[os.path.basename(f)[:-5]] = {'name': name, 'specs': specs}

out, avisos = [], []
for parte in sec.split('<li class="skill" data-sk-card="')[1:]:
    slug, body = parte.split('"', 1)
    nombre_en = txt(re.search(r'<div class="skill-name">(.*?)<span', body, re.S).group(1))
    badge = re.search(r'<span class="badge[^"]*">(.*?)</span>', body, re.S)
    opts = re.findall(r'<li class="([a-z]*)"><span class="spec-lv">(\d+)</span>(.*?)</li>', body, re.S)
    # metabot: mismo slug, o con sufijo de clase (defiance-assassin…)
    key = slug if slug in mb else next((k for k in mb if k.startswith(slug + '-')), None)
    if not key:
        avisos.append(f'{slug}: no está en metabot'); continue
    es = mb[key]['specs']
    if len(es) != len(opts) or any(int(o[1]) != e[0] for o, e in zip(opts, es)):
        avisos.append(f'{slug}: niveles distintos couga {[o[1] for o in opts]} / metabot {[e[0] for e in es]}')
    out.append({
        'slug': slug, 'mb': key, 'nombre': mb[key]['name'], 'nombreEn': nombre_en,
        'rango': txt(badge.group(1)) if badge else '',
        'opciones': [{'nv': int(o[1]), 'es': e[1], 'en': txt(o[2]), 'elige': o[0] == 'on', 'a20': o[0] == 'next'}
                     for o, e in zip(opts, es)],
    })

json.dump(out, open(sys.argv[3], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
sys.stdout.reconfigure(encoding='utf-8')
print(len(out), 'habilidades;', 'avisos:', avisos or 'ninguno')
for h in out:
    print(f"  {h['nombre']} [{h['rango']}]: " + ' | '.join(f"{o['nv']}{'*' if o['elige'] else '+' if o['a20'] else ''}" for o in h['opciones']))
