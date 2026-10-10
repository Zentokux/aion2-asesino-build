# Genera especializaciones-<clase>.js a partir de tools/especializaciones/esp-<couga>.json (extraer-especializaciones.py).
# Uso: python -I gen-especializaciones.py   (genera las tres clases)
import json, re, os
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(BASE, 'tools', 'especializaciones')

# slug de couga54 → clave de icono de la guía (icons.js / planner-<clase>.js)
CLASES = {
    'asesino': ('assassin', {
        'heart-gore': 'heart', 'insignia-explosion': 'insignia', 'quick-slice': 'quick', 'ambush': 'ambush',
        'storm-rampage': 'storm', 'defiance': 'defiance', 'savage-roar': 'savage', 'shadowstrike': 'shadow',
        'flash-slice': 'flash', 'infiltrate': 'infiltrate', 'whirlwind-slice': 'whirl', 'shadow-fall': 'shadowfall'}),
    'clerigo': ('cleric', {
        'condemnation': 'c_condena', 'divine-aura': 'c_aura', 'bolt': 'c_centella', 'judgment-thunder': 'c_rayo',
        'lightning-strike-scattershot': 'c_relampagos', 'healing-light': 'c_curacion', 'radiant-recovery': 'c_resplandor',
        'earths-retribution': 'c_retribucion', 'debilitating-mark': 'c_estigma', 'chain-of-torment': 'c_enlace',
        'light-of-regeneration': 'c_regeneracion', 'defiance': 'c_eliminacion'}),
    'espiritualista': ('elementalist', {
        'elemental-fusion': 'e_fusion', 'combustion': 'e_combustion', 'summon-fire-spirit': 'e_fuego', 'cold-shock': 'e_impacto',
        'summon-water-spirit': 'e_agua', 'jointstrike-curse': 'e_maldicion', 'dimensional-control': 'e_dominio',
        'summon-earth-spirit': 'e_tierra', 'rapid-scattershot': 'e_rafaga', 'defiance': 'e_eliminacion',
        'summon-wind-spirit': 'e_viento', 'souls-cry': 'e_grito_alma'}),
    'hechicero': ('sorcerer', {
        'hellfire': 'h_infierno', 'firestorm': 'h_quebranto', 'bittercold-wind': 'h_viento', 'blaze': 'h_explosion',
        'wish-of-concentration': 'h_voto', 'winters-shackles': 'h_atadura', 'flame-arrow': 'h_flecha', 'ice-chain': 'h_cadena',
        'flame-scattershot': 'h_sinpunteria', 'frost': 'h_congelacion', 'defiance': 'h_eliminacion', 'frost-burst': 'h_explo_cong'}),
}
# couga54 a veces pone una palabra en vez del rango objetivo
RANGO_ES = {'leveling': 'solo subiendo', 'skip': 'no', 'alt.': 'alternativa'}

def limpiar(t):
    # metabot escribe "del 70, 70 %" donde el juego dice "del 0.7 %"
    def pct(m):
        v = int(m.group(1)) / 100
        return 'del ' + (f'{v:g}') + ' %'
    t = re.sub(r'del (\d+), \1 %', pct, t)
    return t

for clase, (couga, iconos) in CLASES.items():
    data = json.load(open(os.path.join(SRC, f'esp-{couga}.json'), encoding='utf-8'))
    out = []
    for h in data:
        out.append({'k': iconos[h['slug']], 'n': h['nombre'], 'r': RANGO_ES.get(h['rango'], ' → '.join(h['rango'].split())),
                    'o': [[o['nv'], limpiar(o['es']), 1 if o['elige'] else 2 if o['a20'] else 0] for o in h['opciones']]})
    js = ('// Aion 2 Global S1 — Especializaciones de las habilidades activas: datos para especializaciones.js.\n'
          f'// Elección de couga54 (https://couga54.github.io/aion2-guides/en/{couga}/#skills, modo PvE) y textos del cliente\n'
          '// en español de metabot.gg/es_ES. Generado por tools/gen-especializaciones.py.\n'
          '// k: icono · n: nombre · r: rango objetivo · o: [nivel requerido, texto, 1 = elegir / 2 = tercera ranura a 20 / 0 = no]\n'
          'window.SPEC_DATA = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
    open(os.path.join(BASE, f'especializaciones-{clase}.js'), 'w', encoding='utf-8', newline='\n').write(js)
    print(clase, len(out), 'habilidades')
