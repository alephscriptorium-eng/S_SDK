# PROYECCIÓN GitHub — sprint-game-city · post-GC-4 + HOTFIX-GATES-2 · 2026-07-21

| dato | valor |
| ---- | ----- |
| modo | **completa** en S_SDK (`--alcance todos`); **trazo gordo** en Z_SDK (#2 panorámico) |
| dry-run | **OK** (15 WP parseados; ceguera OK; 0 a cerrar) |
| apply | ⏳ **bloqueado** — `gh` not logged in · `GH_TOKEN` unset |
| opt-in | DC-15 (`PROYECCION_GITHUB=1` + `--habilitar-github`) — GO custodio |
| mapa | `plan/SPRINTS/sprint-game-city/.sync-map.json` (tip local; sin cambio en apply) |
| push git gobierno | ⏳ **bloqueado** — HTTPS sin credencial interactiva |

## Por qué este modo

Mismo protocolo que [PROYECCION-GC-city-2026-07-21](PROYECCION-GC-city-2026-07-21.md):
completa en S_SDK + trazo gordo Z_SDK. Re-export idempotente post-GC-4 /
HOTFIX-GATES-2 / Z15.

## Drift corregido (gobierno)

`WP-Z12-f1` / `WP-Z12-f2` no matchean el parser (`WP-[A-Za-z0-9]+` + `·`).
Sin bullet canónico, dry-run marcaba `#12` como **cerrar-sobrante**.
Se añadió bullet paraguas `- ✅ **WP-Z12 · … completo vía f1+f2**` (solo
gobierno/proyección; f1/f2 quedan como detalle). **Z05-f1 no se reabre**;
**GC-5 no se abre**. Z05 paraguas sigue ⬜ (items 3–6 parked) → issue #5 open.

## Dry-run (literal)

```
[proyectar] ceguera OK (15 WP validados contra el patrón del mundo).
[proyectar] export (DRY-RUN) · alcance=todos · 15 proyectado(s), 0 a cerrar · repo=alephscriptorium-eng/S_SDK
  · actualizar WP-Z01 → closed (#1)
  · actualizar WP-Z02 → closed (#2)
  · actualizar WP-Z03 → closed (#3)
  · actualizar WP-Z04 → closed (#4)
  · actualizar WP-Z05 → open (#5)
  · actualizar WP-Z06 → closed (#6)
  · actualizar WP-Z07 → closed (#7)
  · actualizar WP-Z08 → closed (#8)
  · actualizar WP-Z09 → closed (#9)
  · actualizar WP-Z10 → closed (#10)
  · actualizar WP-Z11 → closed (#11)
  · actualizar WP-Z12 → closed (#12)
  · actualizar WP-Z13 → closed (#13)
  · actualizar WP-Z14 → closed (#14)
  · actualizar WP-Z15 → closed (#15)
[proyectar] OK.
```

Patrón de ceguera: solo env (no committeado) — tokens de método/marco.
Marca `aleph` / `scriptorium` admisible (DC-GC-ceguera-marca).

## Plan de apply (pendiente auth)

### S_SDK — actualizar #1–#15

| WP | estado plan | issue | acción |
| -- | ----------- | ----- | ------ |
| Z01–Z04, Z06–Z15 | ✅ | #1–#4, #6–#15 | edit body + closed |
| Z05 | ⬜ (parked 3–6) | #5 | edit body + **open** |
| Z12 | ✅ (paraguas f1+f2) | #12 | edit → closed (ya no sobrante) |
| Z15 | ✅ | #15 | edit → closed (post-GC-3) |

URLs base: https://github.com/alephscriptorium-eng/S_SDK/issues/{n}

### Z_SDK — panorámica #2 (trazo gordo)

https://github.com/alephscriptorium-eng/Z_SDK/issues/2 — actualizar cuerpo con
estado post-GC-4 + HOTFIX-GATES-2 (`0b566e6`, Actions **29839611853** success)
+ enlace S_SDK #1–#15. Sin issues finos de prosa de plan.

## Comandos exactos (custodio — auth)

```powershell
# 1) Auth
gh auth login
# o: $env:GH_TOKEN = '<token con repo>'

# 2) Push gobierno (2 commits ahead: e4e66d2 + b5c5832 [+ commit acta si aplica])
cd C:\Users\aleph\SCRIPT_SDK
git push origin HEAD

# 3) Proyección S_SDK (mismo cableado que scrum:preview:city + opt-in)
$env:CEGUERA_PATTERN = '<patrón método del mundo>'   # no committear
$env:PROYECCION_GITHUB = '1'
node node_modules/@alephscript/skills-scriptorium/skills/swarm-orquestacion/scripts/proyectar-backlog.mjs `
  export --habilitar-github `
  --backlog plan/SPRINTS/sprint-game-city/BACKLOG.md `
  --map plan/SPRINTS/sprint-game-city/.sync-map.json `
  --alcance todos `
  --repo alephscriptorium-eng/S_SDK

# 4) Z_SDK panorámica (manual / trazo gordo — sin backlog espejo)
gh issue edit 2 --repo alephscriptorium-eng/Z_SDK --body-file <panorama.md>
```

## Gobierno local tip (pre-push)

| SHA | mensaje |
| --- | ------- |
| `e4e66d2` | ACTA HOTFIX-GATES-2 + checklist + sync-map Z15 |
| `b5c5832` | CA1 HOTFIX-GATES-2 cerrado — Actions run-id + bump zeus `0b566e6` |

`origin/main` aún en `ad190db` hasta push.

## Remotes

- SCRIPT_SDK → `https://github.com/alephscriptorium-eng/S_SDK.git`
- zeus-sdk → `https://github.com/alephscriptorium-eng/Z_SDK.git`
