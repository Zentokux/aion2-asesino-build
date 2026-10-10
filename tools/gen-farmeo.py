# Genera la sección "Farmeo de equipo" (igual para todas las clases) y la coloca después de #stats en cada página.
# Fuentes: couga54 «After 45» (https://couga54.github.io/aion2-guides/en/progression/, datamine global de Sanya Jacuzzi,
# SywoGG y TitanTheF), «Week 1» y «Dungeons»; gamesfuze (Cueva de Krao, 2-oct-2026: los jefes intermedios mejoran el
# cubo final). Nombres de mazmorras del cliente en español: metabot.gg/es_ES/aion-2/dungeons.
# Uso: python tools/gen-farmeo.py   (desde la carpeta del proyecto)
import re

INI = '<!-- farmeo:inicio -->'
FIN = '<!-- farmeo:fin -->'
PAGINAS = ['asesino', 'clerigo', 'espiritualista', 'hechicero']

BLOQUE = INI + '''
<section id="farmeo">
  <h2>Farmeo de equipo (después del 45)</h2>
  <p>El orden para equiparte desde el nivel 45 hasta la incursión de 10 jugadores. Los números son <strong>nivel de objeto</strong>.</p>

  <div class="callout crit">
    <strong>En las expediciones, mata a todos los jefes.</strong> El botín no cae de cada jefe: al final aparece un <strong>cubo de recompensa</strong> y abrirlo cuesta Energía de Odyle. Los jefes intermedios mejoran ese cubo y no gastan energía extra, porque la energía solo se gasta al abrirlo. Tu límite es la energía, no el tiempo: haz que cada cubo valga lo máximo.
  </div>

  <table>
    <thead><tr><th>Objetivo</th><th>Dónde</th><th>Qué sacas</th><th>Garantía</th></tr></thead>
    <tbody>
      <tr><td><strong>~1.000</strong></td><td>Historia principal, misiones regionales y los <strong>?</strong> de tu mapa</td><td>Arma dorada de tu clase, brazalete y alas de la historia; anillos, pendientes y collar azules; cada mazmorra sellada da 2 Cristales Daevanion y 2 puntos de habilidad</td><td>—</td></tr>
      <tr><td><strong>1.400</strong></td><td><strong>Draupnir</strong> (Conquista) + Festival Shugo + Pesadilla</td><td>Piezas doradas de Bakarma</td><td><strong>14 cubos</strong> (7 con premium) = una pieza dorada a elegir. 3 partidas de Exploración dan otra.</td></tr>
      <tr><td><strong>1.900</strong></td><td><strong>Isla Aérea de Vakron</strong> (2-5 jugadores)</td><td>Casi todo el set de armadura; llévalo a +10</td><td>Cada <strong>21 cubos</strong>, un vale de cambio de equipo; dos vales + 1.500.000 kinas = la guarda de Vakron</td></tr>
      <tr><td><strong>2.100</strong></td><td><strong>Trascendencia ★2</strong> (se abre en 1.600)</td><td>Arcana verde de campana y espejo; el resto con arcana gris (solo cuenta el nivel de objeto)</td><td>—</td></tr>
      <tr><td><strong>2.500</strong></td><td><strong>Caverna del Cuerno Feroz</strong></td><td>La mayor parte de su set de armadura; pasa la mejora de Vakron con Transferencia de equipo</td><td>—</td></tr>
      <tr><td><strong>2.800</strong></td><td><strong>Trascendencia ★4</strong></td><td>Arcana dorada; abre la incursión de 10 jugadores</td><td>—</td></tr>
    </tbody>
  </table>

  <h3>Reglas</h3>
  <ul>
    <li><strong>Mientras subes, no abras cubos:</strong> termina las partidas, pero guarda la energía para Vakron. La historia ya te da el arma.</li>
    <li><strong>Después de cada pieza nueva:</strong> mejórala, ponle piedras de maná y mira tu nivel de objeto; solo entonces decide si repites la mazmorra o vas a la siguiente.</li>
    <li><strong>Arma y accesorios, mejor crafteados:</strong> el Cañón de Urugugu (arma y accesorios de 1.400) y el Templo de Fuego (los de 2.500) pueden esperar. El equipo crafteado tiene más nivel de objeto que el de las mazmorras y es el que vale la pena subir a +20.</li>
    <li><strong>Mejora:</strong> hasta 1.900 basta con +10. Desde 2.800 el equipo pasa de +15 hacia +20.</li>
    <li><strong>Energía:</strong> haz las 7 Energías de Odyle semanales en Transformación de sustancia (si no, se pierden) y no te quedes nunca en el tope.</li>
    <li><strong>Excepción:</strong> en algunas mazmorras los puntos por monstruos y jefes abren el camino al jefe final: limpia los monstruos del inicio y los del primer teletransportador.</li>
  </ul>
  <p><small>Fuente: couga54, «After 45», «Week 1» y «Dungeons» (datamine global de Sanya Jacuzzi, SywoGG y TitanTheF; contrástalo con el juego). Que los jefes intermedios mejoran el cubo: guía de la Cueva de Krao de gamesfuze; ninguna fuente da cifras por jefe. Coste del cubo: 40 de energía en Draupnir y Vakron (couga54); gamesfuze da 20 para la Cueva de Krao en Exploración. Nombres de mazmorras: metabot.gg/es_ES.</small></p>
</section>
''' + FIN

for f in PAGINAS:
    p = f + '.html'
    s = open(p, encoding='utf-8').read()
    if INI in s:
        s = re.sub(re.escape(INI) + '.*?' + re.escape(FIN), lambda m: BLOQUE, s, flags=re.S)
    else:
        i = s.index('<section id="stats">')
        j = s.index('</section>', i) + len('</section>')
        s = s[:j] + '\n\n' + BLOQUE + s[j:]
    # enlace en la barra de arriba, justo después de "Stats y equipo"
    if 'href="#farmeo"' not in s:
        s = s.replace('<li><a href="#stats">Stats y equipo</a></li>', '<li><a href="#stats">Stats y equipo</a></li>\n    <li><a href="#farmeo">Farmeo de equipo</a></li>', 1)
    open(p, 'w', encoding='utf-8', newline='').write(s)
    print(p, 'ok')
