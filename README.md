# Aion 2 — Guías progresivas PvE (Asesino, Clérigo, Espiritualista y Hechicero)

Guías interactivas en español para **Aion 2 Global Season 1** (nivel máximo 45), de nivel 1 a endgame. Siguen la guía de [couga54](https://couga54.github.io/aion2-guides/en/) (Arthars, Lucia, Kaeria, Whelps, Evripides, DankRNG, EUTOPIA, aLuckyRO, Grobs) con los nombres del cliente en español (metabot.gg/es_ES).

- **Online:** https://zentokux.github.io/aion2-asesino-build/
- **Asesino:** `asesino.html` · **Clérigo:** `clerigo.html` · **Espiritualista:** `espiritualista.html` · **Hechicero:** `hechicero.html`

## Contenido de cada guía

- **Planificador nivel a nivel (1 → 45):** cuántos puntos de habilidad ganas y en qué activas y pasivas ponerlos, qué especialización elegir a rango 8, en qué estigma gastar las Esquirlas de Estigma y qué nodos Daevanion tomar cuando se abre cada tablero.
- **Habilidades** con sus especializaciones, **rotación** por tramos (subiendo, con estigmas, jefes al 45) y **estigmas**.
- **Tableros Daevanion** reales del juego con la ruta JcE numerada en orden de clic.
- **Macros en gráfico** como en couga54: barra de ejemplo con iconos (si couga54 la muestra), líneas apiladas, pasos de la macro del juego y lo que pulsas.
- **Mascotas:** las 5 primeras a subir según la clase y tu facción.
- **Comprensión de raza:** qué poner en cada ranura (1.ª opción y opcional) para las 5 ruedas, solo con atributos que sirven contra todo (sin líneas de raza, Frontal, por la Espalda ni de Jefe), con los nombres del cliente.
- **Farmeo de equipo:** la ruta de nivel de objeto después del 45 (Draupnir → Vakron → Trascendencia → Caverna del Cuerno Feroz) y la regla de las expediciones: mata a todos los jefes, el cubo final sale mejor.
- **Menú lateral «Dónde poner puntos»:** acceso rápido a puntos de habilidad, esquirlas de estigma, puntos Daevanion, Comprensión de raza, stats y rotaciones.
- Equipo, Arcana, sistemas de progresión y un **checklist de progreso** que se guarda en tu navegador.

## Archivos

| Archivo | Qué hace |
|---|---|
| `planner.js` + `planner-<clase>.js` | Planificador (motor común + datos de cada clase) |
| `daevanion.js` + `daevanion-<clase>.js` | Tableros Daevanion |
| `macros.js` + `macros-<clase>.js` | Barras y macros en gráfico |
| `mascotas.js` + `mascotas-datos.js` | Plan de las primeras 5 mascotas |
| `sidenav.js` | Menú lateral «Dónde poner puntos» |
| `icons/` | Iconos de habilidades (metabot.gg) y retratos de mascotas (wikily.gg) |
| `tools/` | Scripts que extraen los datos de las fuentes y prueban las páginas (`gen-comprension.py` genera la tabla de Comprensión de raza y `comprobar-comprension.py` la valida contra los datos del juego) |

## Patch actual

Refleja **Aion 2 Global Season 1** al **10-oct-2026**: nivel máximo 45, 4 ranuras de estigma (22/27/32/37), estigmas hasta rango 20, sin tablero Ariel. Lo que sea de KR/TW Capítulo 1 (nivel 50, 6 ranuras, rango 25) no aplica.

## Progreso local

El checklist, el nivel del planificador, los pasos de los tableros y tu facción se guardan en `localStorage` del navegador: tu avance se mantiene entre sesiones en el mismo dispositivo.

---
Guía no oficial. AION 2 y sus iconos son © NCSOFT.
