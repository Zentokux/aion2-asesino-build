# Comprueba que cada atributo recomendado en el bloque de Comprensión de raza existe, con su nombre
# del cliente en español, en esa ranura, rareza y rueda (datos de wikily locale=es).
import json, re, html, sys
ES = [r['data'] for r in json.load(open('tools/comprension/wikily-genus-properties-es.json', encoding='utf8'))]
NOMBRES = sorted({r['name'] for r in ES}, key=len, reverse=True)
def pool(genus, slot, grados):
    return {r['name'] for r in ES if r['genus'] == genus and r['slotNum'] == slot and r['grade'] in grados}
def nombres(txt):
    txt = re.sub(r'\([^)]*\)', ' ', txt)  # quita notas entre paréntesis (Lucia), (6-12)...
    out = []
    for n in NOMBRES:
        if re.search(r'(?<![\wáéíóúñ])' + re.escape(n) + r'(?![\wáéíóúñ])', txt):
            out.append(n); txt = re.sub(re.escape(n), ' ', txt)
    return out
NORM = ['cogni', 'fera', 'natura', 'varian']
LEG, UE = {'Legendario'}, {'Único', 'Épico'}
TODO = {'Común', 'Raro', 'Legendario', 'Único', 'Épico'}
mal = 0
for f in ['asesino', 'clerigo', 'espiritualista']:
    s = open(f + '.html', encoding='utf8').read()
    b = s[s.index('comprension:inicio'):s.index('comprension:fin')]
    tablas = re.findall(r'<table>(.*?)</table>', b, re.S)
    def filas(t): return [[html.unescape(re.sub('<[^>]+>', '', c)).strip() for c in re.findall(r'<td[^>]*>(.*?)</td>', tr, re.S)] for tr in re.findall(r'<tr>(.*?)</tr>', t, re.S) if '<td' in tr]
    n = 0
    for fila in filas(tablas[2]):             # ranura por ranura (ruedas normales)
        slot = int(fila[0])
        for col, grados in ((2, LEG), (3, UE)):
            for nom in nombres(fila[col]):
                for g in NORM:
                    if slot in (4, 7) and col == 3: continue  # ver tabla 4/7
                    n += 1
                    if nom not in pool(g, slot, grados): mal += 1; print(f, 'ranura', slot, g, sorted(grados), 'NO EXISTE:', nom)
    for fila in filas(tablas[3]):             # ranuras 4 y 7 por rueda
        g = {'Cogni': 'cogni', 'Fera': 'fera', 'Natura': 'natura', 'Varian': 'varian'}[fila[0]]
        for col, slot in ((1, 4), (2, 4), (3, 7)):
            for nom in nombres(fila[col]):
                n += 1
                if nom not in pool(g, slot, UE): mal += 1; print(f, g, 'ranura', slot, 'NO EXISTE:', nom)
    for fila in filas(tablas[4]):             # rueda Especial
        slot = int(fila[0].split()[0])
        for nom in nombres(fila[1]):
            n += 1
            if nom not in pool('special', slot, TODO): mal += 1; print(f, 'Especial ranura', slot, 'NO EXISTE:', nom)
    # nombres sueltos que no son del juego
    t = html.unescape(re.sub('<[^>]+>', ' ', b))
    for viejo in ['Aumento de Precisión', 'Golpe perfecto', 'Doble golpe', 'Aguante', 'Regeneración', 'Aumento de PV', 'Ataque adicional', 'Ataque máximo']:
        if viejo in t: mal += 1; print(f, 'nombre que no es del juego:', viejo)
    print(f, n, 'comprobaciones')
print('TODO OK' if mal == 0 else f'{mal} problemas'); sys.exit(1 if mal else 0)
