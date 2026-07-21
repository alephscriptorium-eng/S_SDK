# PROYECCIÓN — acta post-apply · sprint-game-city · 2026-07-21

| dato | valor |
| ---- | ----- |
| estado | **pendiente auth write** — esqueleto LOCAL-ONLY; no ejecutar |
| pre | [PROYECCION-GC-city-2026-07-21-post-GC4.md](PROYECCION-GC-city-2026-07-21-post-GC4.md) (dry-run OK) |
| body panorámica | [PANORAMICA-Z_SDK-2-post-GC4.md](PANORAMICA-Z_SDK-2-post-GC4.md) |
| cierre evidencia | [CIERRE-sprint-game-city-2026-07-21.md](CIERRE-sprint-game-city-2026-07-21.md) |
| mapa | `plan/SPRINTS/sprint-game-city/.sync-map.json` — **no editar a mano**; apply/script es la fuente |

## Placeholders (rellenar tras apply)

| ítem | placeholder | valor real post-apply |
| ---- | ----------- | --------------------- |
| issue WP-Z15 | `#15` | URL: `https://github.com/alephscriptorium-eng/S_SDK/issues/15` → _TBD_ |
| sync Z15→#15 | verdad remota | _TBD tras crear/verificar #15_ |
| apply log S_SDK | stdout `proyectar-backlog.mjs export` | _pegar literal_ |
| bodies editados | #1–#15 | _contar OK / fallos_ |
| panorámica Z_SDK #2 | body-file aplicado | URL issue: `https://github.com/alephscriptorium-eng/Z_SDK/issues/2` → _TBD_ |
| push gobierno | `git push origin HEAD` | rango SHA: `_TBD_.._TBD_` |

## Invariantes (re-chequear post-apply)

- [ ] Z05-f1 **no** reabierto
- [ ] GC-5 **no** abierto
- [ ] Z05 issue #5 permanece **open** (parked 3–6)
- [ ] `.sync-map.json` solo cambia vía herramienta de proyección (si aplica)

## Cola D — orden custodio (NO disparar sin GO auth write)

1. Auth: `gh auth login` o `GH_TOKEN` con scope repo.
2. Verificar número **15** = WP-Z15 (crear si falta; no asumir).
3. Push gobierno acumulado: `git push origin HEAD` (SCRIPT_SDK).
4. Apply proyección S_SDK (mismos flags que post-GC4):

```powershell
$env:CEGUERA_PATTERN = '<patrón método del mundo>'   # no committear
$env:PROYECCION_GITHUB = '1'
node node_modules/@alephscript/skills-scriptorium/skills/swarm-orquestacion/scripts/proyectar-backlog.mjs `
  export --habilitar-github `
  --backlog plan/SPRINTS/sprint-game-city/BACKLOG.md `
  --map plan/SPRINTS/sprint-game-city/.sync-map.json `
  --alcance todos `
  --repo alephscriptorium-eng/S_SDK
```

5. Panorámica Z_SDK #2:

```powershell
gh issue edit 2 --repo alephscriptorium-eng/Z_SDK --body-file plan/REPORTES/PANORAMICA-Z_SDK-2-post-GC4.md
```

6. Completar esta acta (URLs, stdout, SHAs) + commit gobierno de cierre remoto si hace falta.

**Hasta aviso:** cero `gh` write, cero push.