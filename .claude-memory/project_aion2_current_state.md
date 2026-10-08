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

**Pendientes / problemas abiertos:**
- Daevanion visual: 7 iteraciones rechazadas (ver feedback_aion2_daevanion_visual.md)
- Clérigo: no tiene planner interactivo todavía (solo guía textual)
- No se añadió icono de Revitalization Contract (sin ID metabot encontrado)
- Posible fix pendiente: planner.js tenía bugs lógicos en PLAN SP (downgrades Lv 41-45) — última revisión aplicó fixes pero no se re-auditó

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
