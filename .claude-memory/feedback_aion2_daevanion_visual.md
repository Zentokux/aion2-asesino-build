---
name: Aion 2 Daevanion visual — lecciones de 7 iteraciones fallidas
description: Qué se intentó para el gráfico Daevanion del Asesino, qué NO funciona según el usuario, y qué sí mantener
type: feedback
originSessionId: f5d03218-43b7-4743-b870-a2c8b3b096f1
---
**Problema persistente:** el usuario rechazó 7 iteraciones del gráfico Daevanion. No describe exactamente lo que quiere.

**Lo que SÍ le gustó:**
- Vista textual progresiva (lista vertical con pasos 1→2→3) — mantener siempre
- Secuencia conectada sin huecos — snake pattern funciona para esto
- Numeración clara del orden a echar puntos

**Lo que NO funcionó (iteraciones rechazadas):**
1. **v1 Grilla 15×15 con círculos coloreados numerados** — primera versión, el usuario después pidió restaurarla pero cuando se la mostré v7 también dijo "quedó mal". Ambigüedad.
2. **v2 Grilla con background nodes** — "muchos huecos que no conectan"
3. **v3 Iconos reales + 4 rombos dorados + route gruesa** — intento de imitar couga54, usuario pidió comparar con couga54 real y notó diferencias
4. **v4 Lista vertical sola** — "ocupo que sea gráfico simple"
5. **v5 Snake chart con iconos + badges** — "no es acorde al juego"
6. **v6 Tiles tipo juego con glifos rúnicos** — "quedó mal no me gustó hahaha"
7. **v7 Restaurar v1 estilo simple** — también rechazada

**Why:** El usuario describe el visual que quiere con palabras pero visualmente nada le queda. Posible gap entre su expectativa mental y lo que se puede lograr sin la topología exacta de couga54 (que no se publica textualmente).

**How to apply en próxima sesión:**
- NO intentar más visuals grandes sin acuerdo visual previo con el usuario
- Preguntar si quiere: (a) solo lista textual, (b) link al planner oficial couga54, (c) screenshot embebido del juego
- Si pide gráfico de nuevo, ofrecer 2-3 wireframes rápidos ANTES de implementar
- Mantener la lista textual progresiva — es la única parte que no fue rechazada
- Backup disponible: `backup/asesino-v1-2026-10-08` (pre-multiclase) y tag `v1.0-asesino`
- Todos los commits de daevanion.js están en git log si hay que volver a una versión
