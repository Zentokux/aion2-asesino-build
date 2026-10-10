# Comprueba que cada atributo recomendado en el bloque de Comprensión de raza existe, con su nombre
# del cliente en español, en esa ranura de cada rueda (Legendario o mejor; datos de wikily locale=es),
# y que no es una línea de raza, Frontal, por la Espalda ni de Jefe.
import json, re, html, sys
ES = [r['data'] for r in json.load(open('tools/comprension/wikily-genus-properties-es.json', encoding='utf8'))]
NOMBRES = sorted({r['name'] for r in ES}, key=len, reverse=True)
BUENAS = {'Legendario', 'Único', 'Épico'}
RUEDA = {'Cognis': 'cogni', 'Feras': 'fera', 'Naturas': 'natura', 'Varians': 'varian'}
PROHIBIDO = re.compile(r'de (Cognis|Feras|Naturas|Varians)$|Frontal|frontal|por la Espalda|de Jefe')
def pool(genus, slot):
    return {r['name'] for r in ES if r['genus'] == genus and r['slotNum'] == slot and r['grade'] in BUENAS}
def nombres(txt):
    out = []
    for n in NOMBRES:
        if re.search(r'(?<![\wáéíóúñ])' + re.escape(n) + r'(?![\wáéíóúñ])', txt):
            out.append(n); txt = re.sub(re.escape(n), ' ', txt)
    return out
def filas(t):
    return [[html.unescape(re.sub('<[^>]+>', '', c)).strip() for c in re.findall(r'<td[^>]*>(.*?)</td>', tr, re.S)]
            for tr in re.findall(r'<tr>(.*?)</tr>', t, re.S) if '<td' in tr]
mal = 0
def falla(*a):
    global mal; mal += 1; print(*a)
for f in ['asesino', 'clerigo', 'espiritualista']:
    s = open(f + '.html', encoding='utf8').read()
    b = s[s.index('comprension:inicio'):s.index('comprension:fin')]
    normal, especial = re.findall(r'<table>(.*?)</table>', b, re.S)
    n = 0
    for tabla, ruedas in ((normal, list(RUEDA.values())), (especial, ['special'])):
        for fila in filas(tabla):
            slot = int(fila[0])
            for celda in fila[1:]:
                partes = re.findall(r'(Cognis|Feras|Naturas|Varians): ([^·]+)', celda)
                grupos = [([RUEDA[r]], t) for r, t in partes] if partes else [(ruedas, celda)]
                for rs, txt in grupos:
                    ns = nombres(txt)
                    if not ns: falla(f, 'ranura', slot, 'sin atributo reconocido:', txt)
                    for nom in ns:
                        if PROHIBIDO.search(nom): falla(f, 'ranura', slot, 'atributo condicional:', nom)
                        for g in rs:
                            n += 1
                            if nom not in pool(g, slot): falla(f, g, 'ranura', slot, 'NO EXISTE:', nom)
    print(f, n, 'comprobaciones')
print('TODO OK' if mal == 0 else f'{mal} problemas'); sys.exit(1 if mal else 0)
