# PROYECCIÓN — acta A01–A03 · sprint-game-city · 2026-07-21

> **Verificación gobierno 2026-07-21:** ya aplicado — `#18/#19/#20` CLOSED ·
> sync-map `WP-A01→18` / `WP-A02→19` / `WP-A03→20` · tip `1e1297d` · **no re-crear**.

| dato | valor |
| ---- | ----- |
| estado | **apply OK** — auth `alephscriptorium-eng` · GO custodio A01–A03 |
| alcance | `todos` · S_SDK · crea **#18/#19/#20** (A01/A02/A03 ✅ closed) |
| mapa | `plan/SPRINTS/sprint-game-city/.sync-map.json` — script añadió `WP-A01→18`, `WP-A02→19`, `WP-A03→20` |
| invariantes | sin HOTFIX · sin reopen WPs · Z05 #5 sigue **open** · no §A4–A6 · no Z_SDK panorámica · no force |

## Resultado apply (literal)

```
[proyectar] ceguera OK (20 WP validados contra el patrón del mundo).
[proyectar] export  · alcance=todos · 20 proyectado(s), 0 a cerrar · repo=alephscriptorium-eng/S_SDK
  ✓ actualizado WP-Z01…Z17 → #1…#17 (Z05 open; resto closed)
  ✓ creado WP-A01 → #18 (closed)
  ✓ creado WP-A02 → #19 (closed)
  ✓ creado WP-A03 → #20 (closed)
[proyectar] sync-map → plan/SPRINTS/sprint-game-city/.sync-map.json
[proyectar] OK.
```

## Issues nuevos

| WP | issue | URL | state |
| -- | ----- | --- | ----- |
| A01 | #18 | https://github.com/alephscriptorium-eng/S_SDK/issues/18 | CLOSED |
| A02 | #19 | https://github.com/alephscriptorium-eng/S_SDK/issues/19 | CLOSED |
| A03 | #20 | https://github.com/alephscriptorium-eng/S_SDK/issues/20 | CLOSED |

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
