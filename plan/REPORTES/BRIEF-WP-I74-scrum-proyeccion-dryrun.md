# BRIEF · WP-I74 · Scrum: proyección BACKLOG→issues (preparar · dry-run)

| dato | valor |
| ---- | ----- |
| ola | I7 · dep I70 ✅ (`main` @ `2f25e51`) |
| repos | **SCRIPT_SDK (raíz) únicamente** |
| rama | `wp/i74-scrum-proyeccion-dryrun` (desde `main`) |
| base decisión | DE-I17 · nuevo tooling 0.3.2/0.3.3 |
| push | **NO** (canal custodio media) |
| agente | fresco (regla 13) |

## Objetivo

Dejar **lista pero NO activada** la proyección del BACKLOG a issues. Solo
`export --dry-run` (preview, sin API). La proyección real a GitHub queda
**LOCAL-ONLY (DC-15)** — rehúsa sin GO explícito del usuario.

## Fuente y contrato (léelo, no lo inventes)

- Herramienta: `node_modules/@alephscript/skills-scriptorium/skills/swarm-orquestacion/scripts/proyectar-backlog.mjs` (tras `npm install`). Lee su cabecera.
- Doctrina: `…/reference/proyeccion-issues.md`. Puntos clave: markdown = fuente de verdad única (regla 15); issues = proyección desechable; `plan/.sync-map.json` (`WP-XX→nº issue`) git-tracked; `import` va a `plan/INBOX-GH.md` (el orquestador reconcilia a mano); **GATE DE CEGUERA (DC-12)**: export a tracker público valida contra `CEGUERA_PATTERN` (regex del mundo, **vía env, NUNCA commiteado**); sin patrón → rehúsa; **DC-15** el export real exige `--habilitar-github`/`PROYECCION_GITHUB=1`.

## Trabajo

1. `git checkout -b wp/i74-scrum-proyeccion-dryrun`; `npm install`.
2. Crear `plan/.sync-map.json` inicial vacío (`{}`), git-tracked.
3. Correr **solo dry-run** (sin API, sin opt-in), pasando un `CEGUERA_PATTERN` **provisional** de holón 07 por env (NO lo commitees):
   `CEGUERA_PATTERN='<patrón provisional>' node …/proyectar-backlog.mjs export --dry-run --backlog plan/BACKLOG.md --map plan/.sync-map.json`.
   Documenta en el reporte qué patrón usaste y que es **provisional** (el definitivo requiere GO del custodio antes de cualquier proyección real).
4. Verificar el **fail-safe**: intentar `export` **sin** `--dry-run` y sin `PROYECCION_GITHUB=1` → debe **rehusar** (no llama API).
5. Añadir npm script `"scrum:preview"` que envuelva el dry-run (documenta que `CEGUERA_PATTERN` se pasa por env en runtime). Commit obra + reporte `plan/REPORTES/WP-I74-scrum-proyeccion-dryrun.md`.

## CA (evidencia literal)

- **CA1** `scrum:preview` (dry-run) produce preview coherente con el BACKLOG: WP-id-keyed; mapeo `✅`→closed, `⬜`/`🔶`→open (pega un extracto).
- **CA2** Fail-safe: export real sin opt-in → **rehúsa** (EXIT≠0, sin tocar API). Pega la salida.
- **CA3** Ceguera: sin `CEGUERA_PATTERN` → rehúsa (fail-safe del gate).
- **CA4** `plan/.sync-map.json` existe, git-tracked, `{}` inicial. `CEGUERA_PATTERN` **no** aparece en ningún fichero committeado.
- **CA5** `git diff --stat` = solo `plan/.sync-map.json`, `package.json`, y el reporte.

## Restricciones

- **Sin push. Sin proyección real a GitHub** (LOCAL-ONLY DC-15; requiere GO del usuario). No toques `.claude/`.
- Auto-revisión PRACTICAS §4 al pie.
