---
name: Aion 2 Asesino build project — ubicación y arquitectura
description: URLs, repo, carpeta local y arquitectura de archivos del proyecto de guía Asesino PvE
type: reference
originSessionId: f5d03218-43b7-4743-b870-a2c8b3b096f1
---
**Proyecto:** guía interactiva de Asesino PvE max DPS para Aion 2 Global Season 1.

**Ubicaciones:**
- Carpeta local: `~/Documents/project/aion2-asesino-build/`
- Repo GitHub (público): https://github.com/Zentokux/aion2-asesino-build
- Sitio live (sin login desde cualquier dispositivo): https://zentokux.github.io/aion2-asesino-build/
- Cuenta GitHub autenticada: `Zentokux` (via `gh auth status`, token con scope repo)

**Arquitectura de archivos:**
- `index.html` — estructura principal, nav, todas las secciones (overview, skills, planner, rotations, stigmas, daevanion, pets, stats+BiS, systems, macros, progress, credits)
- `planner.js` — SKILLS object (24+ skills), SP_PER_LEVEL (0 en lv 1-3, +1 en lv 4, etc), SKILL_RANK_COST, STIGMA_RANK_COST, PLAN{} nivel-por-nivel, state computer, navegador por niveles con flechas ← →
- `daevanion.js` — 5 Daevanion Boards SVG (Nezekan, Zikel, Vaizel, Triniel, Azphel) con grilla 15×15 + camino numerado + nodos de fondo
- `icons.js` — ICON_FILES mapping (key → `icons/*.webp`), FALLBACK_GLYPHS, renderIcon()
- `icons/` — 25 iconos oficiales descargados de metabot.gg (ID pattern: activas 13010000-13360000, pasivas 13710000-13790000, stigmas 13270000-13390000). Todos 256×256 WebP
- `README.md`

**Scripts tienen cache-buster `?v=YYYY-MM-DD-X`.** Bump la letra final cada vez que modifiques JS para forzar reload del navegador.

**Flujo de deploy:**
1. Editar archivo local
2. `node -c planner.js && node -c icons.js && node -c daevanion.js` (validar sintaxis siempre)
3. `git add -A && git commit -m "..." && git push origin main`
4. GitHub Pages hace build automático (~1-2 min)
5. Verificar con: `gh api /repos/Zentokux/aion2-asesino-build/pages/builds/latest`
