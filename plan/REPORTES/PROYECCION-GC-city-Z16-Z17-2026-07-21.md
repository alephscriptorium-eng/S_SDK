# PROYECCIÓN — acta Z16/Z17 · sprint-game-city · 2026-07-21

| dato | valor |
| ---- | ----- |
| estado | **apply OK** — auth `alephscriptorium-eng` · GO-2 post-GC4 |
| alcance | `todos` · S_SDK · crea **#16/#17** (Z16/Z17 ✅ closed) |
| mapa | `plan/SPRINTS/sprint-game-city/.sync-map.json` — script añadió `WP-Z16→16`, `WP-Z17→17` |
| invariantes | sin HOTFIX · sin reopen WPs · Z05 #5 sigue **open** · no force |

## Resultado apply (literal)

```
[proyectar] ceguera OK (17 WP validados contra el patrón del mundo).
[proyectar] export  · alcance=todos · 17 proyectado(s), 0 a cerrar · repo=alephscriptorium-eng/S_SDK
  ✓ actualizado WP-Z01…Z15 → #1…#15 (Z05 open; resto closed)
  ✓ creado WP-Z16 → #16 (closed)
  ✓ creado WP-Z17 → #17 (closed)
[proyectar] sync-map → plan/SPRINTS/sprint-game-city/.sync-map.json
[proyectar] OK.
```

## Issues nuevos

| WP | issue | URL | state |
| -- | ----- | --- | ----- |
| Z16 | #16 | https://github.com/alephscriptorium-eng/S_SDK/issues/16 | CLOSED |
| Z17 | #17 | https://github.com/alephscriptorium-eng/S_SDK/issues/17 | CLOSED |

## Snippet apply (reproducible)

```powershell
$env:CEGUERA_PATTERN='SCRIPT_SDK|HOLONES|holón|holarquía|juntura|aleph-scriptorium'
$env:PROYECCION_GITHUB='1'
node node_modules/@alephscript/skills-scriptorium/skills/swarm-orquestacion/scripts/proyectar-backlog.mjs `
  export --habilitar-github `
  --backlog plan/SPRINTS/sprint-game-city/BACKLOG.md `
  --map plan/SPRINTS/sprint-game-city/.sync-map.json `
  --alcance todos `
  --repo alephscriptorium-eng/S_SDK
```
