---
name: Aion 2 project workflow — lecciones de errores anteriores
description: Reglas de desarrollo del proyecto Aion 2 para evitar errores que pasaron en sesiones anteriores
type: feedback
originSessionId: f5d03218-43b7-4743-b870-a2c8b3b096f1
---
Reglas de trabajo específicas del proyecto `~/Documents/project/aion2-asesino-build/`. Aprendidas por errores de sesiones anteriores (2026-10-08):

**1. SIEMPRE investigar con WebFetch/WebSearch ANTES de inventar datos.**
- Why: inventé URLs de iconos sin verificar al principio y resultaron 404
- How: lanza agente con WebFetch si no tienes dato verificado. Si no puedes verificar, di "no confirmado"

**2. NUNCA usar game8.co como fuente para Aion 2 Asesino.**
- Why: pone al Asesino en tier A pero realmente es tier S. Tier list y pick rates incorrectos
- How: si game8 es la única fuente de un dato, descártalo. Fuentes aceptadas: couga54, corpus.gg, metabot.gg, fextralife, aion2.run, aion2-meta, 2upskill

**3. Ir INCREMENTAL — un cambio concreto por commit.**
- Why: hice cambios grandes a la vez y rompí sintaxis / introduje bugs lógicos (downgrade de rangos imposibles)
- How: edit → `node -c archivo.js` validar sintaxis → commit → push → verificar deploy antes de siguiente cambio

**4. SIEMPRE validar PLAN de SP contra el budget nivel-por-nivel.**
- Why: tuve niveles con gasto > SP disponibles y "downgrades" imposibles (ej. savage Rk 8 → Rk 6)
- How: antes de agregar un action al PLAN, calcula `cost total vs SP del nivel + banco`. Nunca `to:` menor al rango actual

**5. Las skills del Asesino son 25 (12 activas + 8 pasivas + 5 stigmas).**
- Why: me saltaba pasivas (Apply Poison, Ambush Stance, Defense Break, Sixth Sense) y Throw Shadowblade
- How: lista completa está en `planner.js` SKILLS object y en memoria `project_aion2_build_facts.md`

**6. Daevanion Boards tienen 85-100 nodos cada uno, NO 20.**
- Why: representé solo el "camino recomendado" (20 nodos) olvidando ~65 stat nodes de fondo
- How: `daevanion.js` genera nodos de fondo con `hasBackgroundNode()` + path destacado numerado encima

**7. Formato PROGRESIVO = navegador por niveles con flechas (estilo metabot.gg), NO scroll largo.**
- Why: el usuario expresó frustración con el scroll infinito, no entendía qué invertir en cada nivel
- How: panel que muestra UN nivel a la vez con flechas ← →, slider, saltos rápidos, teclado, state grid completo

**8. Idioma: labels en español oficial, inglés como secundario.**
- Why: tenía mezcla EN/ES que confundía
- How: cada SKILL tiene `name` (ES oficial) y `nameEn` (EN). Mostrar ES primario, EN pequeño abajo

**9. Cache-buster en scripts: `?v=YYYY-MM-DD-letra`.**
- Why: cambios en JS no se reflejaban en el navegador del usuario (cache agresivo)
- How: bump la letra final (`-a` → `-b` → `-c`) en el HTML cuando modifiques planner.js/icons.js/daevanion.js

**10. Iconos oficiales de metabot.gg con pattern `13XX0000.webp`.**
- Why: inicialmente usé URLs especulativas que fallaron
- How: activas 13010000-13360000, pasivas 13710000-13790000, stigmas 13270000-13390000. Descargar a `icons/` localmente para evitar CORS. Si no sabes el ID, prueba con curl y `file` para ver si es WebP válido o XML error

**11. Si usuario pide "ir de a poco", NO hacer cambios paralelos.**
- Why: usuario pidió "ve de apoco para optimizar y que no allan fallos a futuro"
- How: UN cambio por commit, validar visualmente antes del siguiente

**12. Confirmar al terminar TODO el proyecto, no entre fases.**
- Why: regla general YOLO del proyecto (ver `feedback_aion2_project_yolo.md`)
- How: solo preguntar si hay gastos reales de dinero. Lo demás, ejecutar end-to-end
