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

**Galería de mascotas (2026-10-08, `-x`):** `mascotas.js` (motor) + `mascotas-datos.js` (206 mascotas, generado por `tools/extraer-mascotas.py` desde la API de wikily `api/wikis/aion-2/datasets/pets/list?limit=120&offset=...`, guardada en tools/fuentes-mascotas/). Retratos 96 px WebP en icons/pets/<clave>.webp (1,7 MB). En `<div id="petGallery" data-familia data-destacar>`: pestañas por familia, buscador, monstruo de nivel más bajo que suelta las almas. Asesino destaca krall-warrior, manduri-fighter, klaw, dratona. La familia es "Varian" (no Varlan).
- Plan "Tus primeras 5 mascotas" por clase y facción (`<div id="petPlan">` + `window.PET_PLAN` inline): Asesino 3 Cogni + 1 Fera + 1 Natura (crítico por Estocada al corazón); Clérigo 2 Cogni + 2 Fera + 1 Natura (Ludra 1.000 Crítico / 1.000 Precisión). Las más fáciles de cada familia por nivel del monstruo (Verteron Elyos / Altgard Asmodiano). Elección propia basada en couga54 + showgamer (mascotas fáciles por familia); couga no nombra mascotas.

**Espiritualista (2026-10-08, commit 14d615e, cache-buster `-z` en espiritualista.html):** guía nueva con el mismo esqueleto que el Clérigo. Fuente couga54 /en/elementalist/ (Evripides, DankRNG, aLuckyRO, Grobs, MMO Codex) + metabot /es_ES/aion-2/classes/spiritmaster (nombres, IDs 160x0000, ranuras de estigma 22 Espíritu ancestral / 27 Favor de Espíritu / 32 Corrosión / 37 Bendición ardiente, atributos, Piedra sagrada) + páginas /es_ES/aion-2/skills/<slug> (especializaciones). Planificador: 7 activas a 10 (Fusión, Combustión, Fuego, Impacto helado, Agua, Maldición, Dominio), Ráfaga 8, pasivas 7-8, Descenso 4; 203 gastados. Tableros 51-54,56: 70/58/54/55/0 = 237 (= couga). Las páginas HTML de metabot (27 MB) solo están en local, no en el repo. Arcana: "Vitalidad primordial" (corregir "primigenia" en clerigo.html).

**Especializaciones de cada habilidad activa (2026-10-09, commit 6fa748f):** subsección "Especializaciones de cada habilidad" en #skills de las tres páginas (`<div id="specList">`). Motor `especializaciones.js`, datos `especializaciones-<clase>.js` (window.SPEC_DATA). `tools/extraer-especializaciones.py` cruza couga54 (modo PvE, "All specializations": class on = elige, next = tercera ranura a 20) con metabot /es_ES/aion-2/skills/<slug> por posición y nivel (36/36 sin avisos); `tools/gen-especializaciones.py` genera los JS y corrige "del 70, 70 %" → "del 0.7 %". Pendiente: tarjetas de habilidades del Asesino en inglés; "Vitalidad primigenia" → "primordial" en clerigo.html.

**Asesino en español y formato couga54 (2026-10-09):** Resumen, Parche, Habilidades (tarjetas + pasivas), Mascotas (familias + rueda de Lucia), Stats (líneas de equipo, Arcana de couga54) y Sistemas reescritos desde couga54 (tools/especializaciones/couga-assassin.html); quitadas la tabla BiS, la comida y los datos sin fuente. Mi progreso y créditos al día. Respaldo en respaldo/asesino-antes-espanol-2026-10-09.html. Clérigo: "Cantor" (no Chanter) y "Vitalidad primordial", confirmados en metabot. planner.js y planner-clerigo.js con ?v=2026-10-09-a.

**Comprensión de raza solo globales (2026-10-10, commit d77488b):** en #pets de las tres páginas, bloque `<!-- comprension:inicio/fin -->` (h3 id="comprension") generado por `tools/gen-comprension.py` (editar ahí y regenerar). Datos: wikily dataset `genus-properties` (api/wikis/aion-2/datasets/genus-properties/list, 2.062 líneas) guardado en tools/comprension/. Hecho clave: Común/Raro solo dan líneas de raza (o PV/PM); Legendario (Nv. 4+) da JcE/Jefe/Frontal/Espalda; Único (Nv. 7+)/Épico (Nv. 9+) dan Ataque adicional, Ataque máximo, Penetración, Crítico, Aumento de Precisión y % de Amplificación. Las líneas "de Cognis/Fera…" solo valen contra esa raza (metabot). Ranura 4 cambia por rueda (Cogni Ampl. crítico, Fera Ampl. de arma, Natura Golpe perfecto/Multigolpe, Varian Ampl. Frontal/Espalda); todas tienen Ampl. de Daño JcE. Sustituye la tabla de Lucia (se conserva como base, marcada "(Lucia)"). Grados del cliente: Común, Raro, Legendario(=Epic wikily), Único(=Unique), Épico(=Heroic). "Ataque adicional" = Attack Bonus. probar.ps1 acepta `-Query '&at=<id>'` (pero Edge headless no se desplaza: usa -Size alto y recorta).
**Comprensión v2 (2026-10-10, commit dc2c5e4):** el usuario pidió SOLO atributos que sirvan en todo. Se ignoran: líneas de raza, Frontal/por la Espalda (Ataque, Crítico, Amplificación), Ataque/Defensa de Jefe y Daño de Fragmento de poder. Se permiten incondicionales (Ataque adicional, Ataque máximo, Penetración, Crítico, Aumento de Precisión, Amplificación de Daño/Crítico/de Arma, Golpe perfecto, Multigolpe, Doble golpe, PV) + líneas JcE (valen contra todo monstruo). No volver a proponer Espalda para el Asesino en la Comprensión.
**Comprensión v3 (2026-10-10, commit 7efdf72):** plan Nv. 1-10 (probabilidades por nivel), tabla ranura por ranura 1-9 con "Se abre Nv. N", ranuras 4 y 7 por rueda (únicas que cambian entre Cogni/Fera/Natura/Varian), rueda Especial ranura por ranura (líneas globales desde Común) y orden de bloqueo por clase. NOMBRES: usar los del cliente según wikily locale=es (tools/comprension/wikily-genus-properties-es.json; api ...genus-properties/list?locale=es): Ataque Adicional, Precisión Adicional, Perforación (Perfect), Golpe (Double), Tenacidad (Endurance), Recuperación (Regeneration), Acierto de Multigolpe, Aumento de Puntos de Vida, Amplificación de Daño de JcE; grados Común/Raro/Legendario/Único/Épico. Validar siempre con `python tools/comprobar-comprension.py` (comprueba que cada atributo existe en esa ranura/rareza/rueda y que no quedan nombres que no son del juego).
**Comprensión v4 SIMPLE (2026-10-10):** el usuario dijo "complicaste demasiado": ahora solo dos tablas por clase (Cognis/Feras/Naturas/Varians y Especial) con Ranura | 1.ª opción | Opcional, más un aviso (ignora raza/Frontal/Espalda/Jefe; bloquea en Nv. 9-10 cerca del máximo). Ruedas con su nombre del cliente: Cognis, Feras, Naturas, Varians, Especial. No volver a añadir tablas por nivel ni explicaciones largas. Validador adaptado (90 comprobaciones por clase).
**Comprensión v5 (2026-10-10):** UNA tabla por clase para las 5 ruedas (Ranura | 1.ª opción | Opcional), ranuras iguales agrupadas ("2, 8", "3, 6, 7, 9"); solo donde una rueda cambia se nombra (ranura 4 siempre; 7 en Clérigo). El usuario no quiere "Normal/Especial" separadas ni filas repetidas. CLASES en gen-comprension.py (celda str o dict por rueda, '*' = resto); comprobar-comprension.py valida desde esos datos. "Las familias" (Asesino) pasó a "Efecto de colección (automático)" con nombres del cliente (Cognis/Feras/Naturas/Varians, Vigor, Precisión Adicional) y badges en <span> (antes la clase tier en el <td> los descolocaba).
**Menú lateral (2026-10-10):** `sidenav.js?v=2026-10-10-a` (común, incluido al final de las tres páginas) crea un <aside class="sidenav"> fijo a la izquierda con Progresión (#progression), Comprensión de raza (#comprension), Daevanion, Rotaciones, Stats y equipo; marca la sección visible; en ≤900 px pasa a barra inferior desplazable. body padding-left 200px en escritorio. Probado con Edge: cada enlace marca su sección en las 3 clases (en pruebas usar scrollTo behavior "instant": la página tiene scroll-behavior smooth). Pendiente conocido: en móvil la página ya tenía desplazamiento horizontal (no lo causa el menú).
