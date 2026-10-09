# Extrae de las páginas de couga54 las barras de ejemplo (figure.hbar), las líneas (div.hotline)
# y los pasos de la macro, en el orden en que aparecen. Uso: python -I extraer-macros.py <html> <json>
import sys, re, json, html
s = open(sys.argv[1], encoding='utf-8').read()
s = re.sub(r'<svg.*?</svg>', '', s, flags=re.S)
txt = lambda x: html.unescape(re.sub(r'<[^>]+>', '', x)).strip()
out = []
pat = re.compile(r'<figure class="hbar">(.*?)</figure>|<div class="hotline">(.*?)<p class="hotline-order">.*?(?:<p class="hotline-note">(.*?)</p>)?</div>|<h[23][^>]*>(.*?)</h[23]>|<ol class="macro[^"]*"[^>]*>(.*?)</ol>', re.S)
for m in pat.finditer(s):
    hb, hl, note, h, mac = m.groups()
    if hb:
        cols = []
        for c in re.finditer(r'<div class="hbar-col( is-macro)?">(.*?)<span class="hbar-key"[^>]*>(.*?)</span>', hb, re.S):
            slots = [(re.search(r'data-sk="([^"]*)"', a) or [None, None])[1] for a in re.findall(r'<span class="hbar-slot[^"]*"([^>]*)>', c.group(2))]
            cols.append({'key': txt(c.group(3)), 'macro': bool(c.group(1)), 'slots': slots})
        gaps = [i for i, _ in enumerate(re.findall(r'(<div class="hbar-col|<span class="hbar-gap)', hb))]
        seq = re.findall(r'(<div class="hbar-col|<span class="hbar-gap)', hb)
        gapIdx = []; n = 0
        for x in seq:
            if 'gap' in x: gapIdx.append(n)
            else: n += 1
        out.append({'type': 'hotbar', 'cols': cols, 'gapsBefore': gapIdx})
    elif hl:
        head = re.search(r'<span class="key">(.*?)</span><span class="hotline-name">(.*?)</span>', hl, re.S)
        sk = re.findall(r'data-sk="([^"]*)"', hl)
        out.append({'type': 'line', 'key': txt(head.group(1)) if head else '', 'name': txt(head.group(2)) if head else '', 'skills_top_to_bottom': sk, 'note': txt(note or '')})
    elif h:
        out.append({'type': 'heading', 'text': txt(h)})
    elif mac:
        out.append({'type': 'macro', 'steps': [txt(li) for li in re.findall(r'<li[^>]*>(.*?)</li>', mac, re.S)]})
json.dump(out, open(sys.argv[2], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
