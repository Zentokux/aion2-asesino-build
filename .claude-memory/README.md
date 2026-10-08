# Memorias de Claude Code para este proyecto

Estas memorias son el conocimiento consolidado que necesita Claude Code (o cualquier agente de IA) para trabajar en este proyecto sin repetir errores pasados.

## Instalación en un equipo nuevo

### macOS / Linux

```bash
# Clona el repo
git clone https://github.com/Zentokux/aion2-asesino-build.git
cd aion2-asesino-build

# Copia las memorias al directorio de Claude Code
# Reemplaza <tu-usuario-local> por tu nombre de usuario (lo ves con `whoami`)
mkdir -p ~/.claude/projects/-Users-<tu-usuario-local>/memory
cp .claude-memory/*.md ~/.claude/projects/-Users-<tu-usuario-local>/memory/

# Añade los enlaces al index MEMORY.md (si ya existe, agrega las líneas; si no, créalo)
cat >> ~/.claude/projects/-Users-<tu-usuario-local>/memory/MEMORY.md << 'EOF'
- [YOLO mode on Aion 2 Asesino build project](feedback_aion2_project_yolo.md) — Autoaceptar y avanzar; solo preguntar si implica dinero real.
- [Aion 2 Global S1 patch facts](project_aion2_global_patch_oct2026.md) — Cap 45, stigma Lv20 + 4 slots, pet Lv3, sin Heroic.
- [Aion 2 sources quality](project_aion2_sources_quality.md) — Confiables: couga54, corpus.gg, metabot, fextralife. DESCARTAR game8.
- [Aion 2 project reference](reference_aion2_project.md) — Ubicación, repo, URL live, arquitectura, flujo deploy.
- [Aion 2 Asesino build facts](project_aion2_build_facts.md) — Plan SP, 25 skills, stigmas, opener, Daevanion verificados.
- [Aion 2 project workflow lessons](feedback_aion2_project_workflow.md) — 12 reglas aprendidas de errores pasados.
EOF
```

### Windows (PowerShell)

```powershell
git clone https://github.com/Zentokux/aion2-asesino-build.git
cd aion2-asesino-build

# El directorio de Claude Code en Windows suele estar en %USERPROFILE%\.claude\
New-Item -ItemType Directory -Force -Path "$HOME\.claude\projects\-Users-$env:USERNAME\memory"
Copy-Item .claude-memory\*.md "$HOME\.claude\projects\-Users-$env:USERNAME\memory\"
```

## Contenido

| Archivo | Qué contiene |
|---------|-------------|
| `feedback_aion2_project_yolo.md` | Autoaceptar end-to-end, solo preguntar si implica dinero real |
| `feedback_aion2_project_workflow.md` | 12 reglas de desarrollo aprendidas de errores (incremental, validar sintaxis, no game8, cache-buster, etc.) |
| `project_aion2_global_patch_oct2026.md` | Hechos del parche Global Season 1 (cap 45, stigma Lv20, pet Lv3) |
| `project_aion2_sources_quality.md` | Fuentes aceptadas vs descartadas (game8 fuera) |
| `project_aion2_build_facts.md` | Build Asesino PvE verificado: plan SP, 25 skills, stigmas, opener endgame, Daevanion, pet |
| `reference_aion2_project.md` | Arquitectura de archivos, URLs, flujo deploy, cache-buster convention |

## Actualización

Si en una nueva sesión Claude Code aprende algo nuevo del proyecto, puede guardar la memoria en `~/.claude/projects/.../memory/` localmente. Para compartirla con otros equipos, cópiala también a `.claude-memory/` del repo y haz commit.
