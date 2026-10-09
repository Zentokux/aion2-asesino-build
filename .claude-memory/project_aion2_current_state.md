---
name: Aion 2 proyecto — estado actual 8-oct-2026
description: Resumen del estado del proyecto Aion 2 al cerrar sesión 8-oct-2026, incluyendo multi-clase, Clérigo, Daevanion en limbo
type: project
originSessionId: f5d03218-43b7-4743-b870-a2c8b3b096f1
---
**Estado al cerrar sesión 2026-10-08:**

**Arquitectura multi-clase ACTIVA:**
- `index.html` — landing con selector de 2 clases (tarjetas Asesino + Clérigo)
- `asesino.html` — guía completa Asesino PvE (basada en couga54)
- `clerigo.html` — guía completa Clérigo PvE (basada en couga54 + metabot + aion2.run)
- `planner.js` — planner interactivo de SP solo del Asesino (24 skills)
- `daevanion.js` — Daevanion del Asesino (v7, usuario insatisfecho — ver feedback_aion2_daevanion_visual.md)
- `icons.js` — 25 iconos oficiales de metabot.gg descargados a `/icons/`
- `icons/*.webp` — iconos oficiales (incluye determination.webp y throw_shadowblade.webp)

**Guía Clérigo completa:**
- Sin planner interactivo (solo texto)
- Sin Daevanion visual (solo mención)
- Secciones: overview, skills (12 activas), passives (10 con Priority), rotación raid+solo, stigmas (4 slots con swap chanter), Daevanion por board, stats+gear (Mace+Chain+Shield, Ludra's Fatal Mace BiS), macros Prayer/Divine/Elite, pet (Cogni genérico), credits

**Backups en GitHub (restaurables):**
- Branch `backup/asesino-v1-2026-10-08` — estado antes de multi-clase
- Tag `v1.0-asesino` — mismo snapshot
- `backup/asesino-v2-2026-10-08` — pendiente si quiere crear otro antes de futuros cambios

**Datos verificados couga54 estricto:**
- Pasivas Priority on Gear: Rear Smite 1 · Exploit Weakness 2 · Assault Stance 2 · Determination 3 · Impact Hit 4 PvP
- SKIP: Apply Poison, Defense Break, Heal Block (clérigo)
- Points only: Ambush Stance + Heightened Sixth Sense
- Opener Asesino endgame: Illusive Clone + Swift Contract + Savage Fang → Triniel's Dagger straight away → Shadowstrike → IE → HG spam
- Macro priority: IE > HG > Ambush > Savage Roar + LMB Quick Slice manual
- Daevanion DP targets couga54: Nez 63 · Zik 65 · Vai 69 · Tri 91 · Azp 0 = **288 pts total**
- Vaizel = Board #1 PvE (Crit Damage Boost corners)

**Cache-buster vigente:** `?v=2026-10-08-m` (bump al tocar JS)

**Actualización 2026-10-08 (sesión en PC Windows, cache-buster `-o`):**
- Daevanion v8: tablero real de couga54 con orden de clics numerado (ver feedback_aion2_daevanion_visual.md).
- planner.js v2: el plan ya no está escrito a mano, se CALCULA respetando 3 reglas: presupuesto (203 SP, nunca negativo), tope de rango por nivel (rango 2 al aprender, +1 cada 3 niveles), y estigmas con Esquirlas de Estigma (NO con SP). Antes gastaba 260 SP con 203 y tenía bajadas de rango. Resultado: 5 activas clave + 3 pasivas a 10, Rugido bestial 8→9, Determinación 8 (tope al 45).
- Nombres del planner y del Daevanion en español del cliente (metabot.gg/es_ES). El resto de la página aún mezcla nombres en inglés.
- Corregido icono: determination.webp era el de Pacto de resurrección (13790000); ahora es 13800000 y revitalization_contract.webp existe.
- Niveles de aprendizaje corregidos: Acierto de impacto 15, Pacto de resurrección 23.

**Pendientes / problemas abiertos:**
- Clérigo: no tiene planner interactivo todavía (solo guía textual)
- El resumen dice "Tier A": el usuario pidió ignorarlo (08-oct-2026). No volver a proponerlo.

**Estigmas y macros según couga54 (2026-10-08, cache-buster `-p`):** subida 22 Tiro de daga sombría (a 10) → 27 Colmillo salvaje → 32 Clon ilusorio → 37 Pacto de celeridad; al 45, Tiro cambia por Puñal de Triniel (jefes: Clon 20, Pacto 15→20, Colmillo 15, Puñal 10). Clon a 20 primero. Postura de evasión como cambio seguro al aprender peleas. Macros: líneas de barra (la casilla de abajo = mayor prioridad), estigmas a mano y nunca en la macro, macro del juego = línea de daño + Corte rápido a 10 ms en el clic derecho. Se quitaron las macros inventadas con "/queue". Icono throw_shadowblade.webp corregido: era Corte en espiral (13280000), ahora 13020000. Añadido evasion_stance.webp.

**URLs:**
- Live: https://zentokux.github.io/aion2-asesino-build/
- Asesino: /asesino.html
- Clérigo: /clerigo.html
- Repo: https://github.com/Zentokux/aion2-asesino-build

**Why:** usuario cerró sesión para seguir en otro equipo. Esta memoria permite retomar sin preguntar "qué pasó".

**How to apply:**
- Leer esta memoria + reference_aion2_project.md al abrir el proyecto
- Si usuario pide seguir Clérigo, hacer planner interactivo similar al Asesino
- Si usuario pide retomar Daevanion visual, OFRECER wireframes antes de implementar (ver lecciones)
- No crear más branches de backup sin pedirlo

**Clérigo v2 (2026-10-08, sesión Windows, cache-buster `-r`):** guía reescrita con el mismo esqueleto que el Asesino.
- Motores comunes `planner.js` y `daevanion.js`; datos por clase en `planner-<clase>.js` y `daevanion-<clase>.js`. `planner.js` acepta `PLANNER_JUMPS` opcional (hitos de la barra); el Asesino usa los de siempre.
- Clérigo: 203 SP, 1 sin gastar al 45, Retribución terrestre 10 al nv 25, Rayo 26, Condena 32; tableros couga54 63/62/44/60/0 = 229 pts (38/37/27/39 pasos). Iconos en `icons/clerigo/<id>.webp`. Progreso con clave `aion2_cleric_`.
- Contenido desde `tools/fuentes-clerigo/couga-cleric.txt` (Lucia, Kaeria, Whelps, aLuckyRO, Grobs). Estigmas: 22 Castigo terrestre, 27 Luz de protección, 32 Aura noble, 37 Oración de amplificación; con Chanter, Luz de protección → Absolución.
- Prueba: `tools/probar.ps1 -Page clerigo.html -Section progression` (ahora guarda en %TEMP%ion2-pruebas).
- Versión anterior en `respaldo/clerigo-antes-v2.html`.

**Macros y rotaciones al estilo couga54 (2026-10-08, cache-buster `-u`):**
- Motor común `macros.js` (barra de ejemplo con iconos, líneas apiladas, pasos de macro, "lo que pulsas"); datos en `macros-<clase>.js` (window.MACRO_SETS) y se pinta en `<div class="mset" data-set="...">`. Texto con `[[clave]]` = icono + nombre.
- Barras y líneas copiadas exactas de couga54 con `tools/extraer-macros.py` (JSON en tools/fuentes-*/macros-*.json; HTML original guardado).
- Asesino: rotación en 3 pestañas (1-21, 22-44, 45) según couga54; macro Arthars (E línea de daño, 7 mejoras, macro 2 pasos) + subida (botón central). Se borró la sección oculta antigua (decía reinicio de Estocada a 12; es a 16).
- Planificador del Asesino: prioridad de subida de couga54 = Corte rápido y Rugido bestial (a 8) primero; mismos rangos finales (203, 0 sobran).
- Planificador: `spec8` por habilidad muestra la especialización al llegar a rango 8.
- Clérigo: prioridad couga54 = Retribución, Rayo, Gracia terrestre, Condena, Centella, Luz de curación, Aura, Gracia empírea, Mejora, Resplandor, Enlace, Relámpagos (203, sobra 1). Macros Lucia / Whelps / subida (Grobs). Hitos de ruta por nivel (escondites 15/20/25, amuleto 17, Shugo al 45).

**Planificador v3 (2026-10-08, cache-buster `-w`):** en cada nivel también muestra
- 🔷 Esquirlas de Estigma: metabot (cliente global 2.0.3.0) = 1 con la 3.ª Ascensión (nv 22), 1/nivel 23-39, 2/nivel 40-45 (30 al 45); coste 1/2/4/8. Orden por clase en `STIGMA_ORDER`. Al 45: Asesino Tiro 10, Clon 8; Clérigo Castigo 11, Aura noble 5, Oración 5, Protección 1.
- 🌌 Daevanion: al abrir cada tablero, sus nodos de habilidad/naranjas en orden de clic (dvOrder) y botón para ir al tablero; "+N Daevanion" en las tarjetas. No hay cifra de puntos Daevanion por nivel (salen de misiones secundarias, Mazmorras selladas, escondites, Festival Shugo).
