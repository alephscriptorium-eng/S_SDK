# WP-Z09 · miniclon-vps-rooms — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · chat Z09 |
| fecha | 2026-07-20 |
| rama | `wp/gc-z09-miniclon-vps-rooms` |
| worktree | `.claude/worktrees/gc-z09-miniclon-vps-rooms` |
| commits | _(ver SHA al pie / `git log -1`)_ |
| eje(s) CA | I (nodos 0.3.x desde registry como consumidor; dashboard rooms) |
| estado propuesto | listo para revisión (parcial: Docker + smoke vivo deferred; publish 0.3.x auth local pendiente) |

## Qué se hizo

**Desviaciones (antes que nada):**

1. **Aterrizaje:** `zeus-sdk/.git` ausente (A1) → clon bajo
   `plan/SPRINTS/sprint-game-city/miniclon/` (no se reparó el submódulo).
2. **Docker deferred — recursos:** addenda orquestador; no se arrancó
   compose/build/up. Plantilla `docker-compose.yml` + `Dockerfile` queda
   lista; CA de contenedor vivo = `<pendiente> / deferred` (recursos
   custodio, **no** fallo de diseño).
3. **Publish 0.3.x:** registry sigue en 0.2.0; auth local interactiva
   ausente. **No bloqueante:** secrets GitHub `NPM_USERNAME` /
   `NPM_PASSWORD` OK en zeus-sdk/SCRIPT_SDK (DE-I12). Script
   `scripts/publish-nodes-0.3.sh` listo para CI/ops.

Implementado offline: staging paquetes **0.3.0** + dep SDK **^1.5.0**;
manifiesto registry; flows server + cliente local/VPS; settings;
README con switch; PROVENANCE; puntero en RECURSOS-LIBS §3.

## Docker deferred — recursos

Decisión del orquestador (addenda inmediata): abortar Docker por
problemas de recursos del custodio.

| ítem CA ficha | estado |
|---|---|
| `docker compose up` → `/dashboard/rooms` vivo | `<pendiente> / deferred` (recursos) |
| Cliente federado aparece en dashboard | `<pendiente> / deferred` (depende del punto anterior) |
| Switch flow → VPS `wss://rooms.scriptorium.escrivivir.co` | documentado (flows `.local` / `.vps`); smoke vivo deferred |
| Imagen rebuild con contribs horneados | Dockerfile plantilla; build deferred |
| Nodos 0.3.x en Verdaccio instalables en el clon | pin + scripts listos; **publish** = auth local `<pendiente>` (secrets GH OK); registry aún 0.2.0 |

## Archivos tocados

- `plan/SPRINTS/sprint-game-city/miniclon/**` — creado (clon offline + plantilla Docker)
- `plan/SPRINTS/sprint-game-city/RECURSOS-LIBS.md` — puntero §3 al README del switch
- `plan/REPORTES/WP-Z09-miniclon-vps-rooms.md` — este reporte

## Evidencia

```
# zeus-sdk desmaterializado (no reparado)
test -d HOLONES/01-mythos/zeus-sdk/.git → MISSING → aterrizaje miniclon/

# pins locales 0.3.0 / ^1.5.0
node-red-contrib-alephscript-core 0.3.0 ^1.5.0
node-red-dashboard-2-alephscript-rooms 0.3.0 ^1.5.0

# registry (lectura, sin auth)
curl …/node-red-contrib-alephscript-core → versions: 0.2.0
curl …/@alephscript/mcp-core-sdk/1.5.0 → HTTP 200

# auth local
npm whoami --registry https://npm.scriptorium.escrivivir.co → ENEEDAUTH
# secrets GitHub NPM_USERNAME/NPM_PASSWORD: documentados OK (custodio / DE-I12)
# VERDACCIO_NPM_TOKEN: no usar (anti-patrón DE-I12)

# Docker
addenda orquestador → no compose/build/up; sin contenedores miniclon levantados
```

Eje I (parcial):

- Consumidor real **preparado** (manifiesto + Dockerfile + install-contribs
  apuntan a `…@0.3.0` en Verdaccio; SDK 1.5.0 ya en registry).
- Instalación/dashboard vivo **no verificados** (Docker deferred).
- Publish 0.3.x **pendiente** de estación/CI con `NPM_USERNAME`/`NPM_PASSWORD`.

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: miniclon + reporte + RECURSOS-LIBS switch; sin BACKLOG, sin cantera/startpack, sin i70–i74, sin reparar zeus-sdk
- [x] Cero árboles ajenos sin procedencia: PROVENANCE.md + copias citadas
- [x] Sellos con fuente; rutas citadas existentes: sí (deferred marcado)
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: Docker/publish/smoke explícitos
- [~] Eje I evidenciado: parcial (pins + scripts + registry SDK 1.5.0; sin clon vivo ni 0.3.x publicado aún)
- [x] Gates: no Docker; lectura registry sí
- [x] Commits convencionales: sí (al cierre)
- [x] Diff solo del alcance del WP: sí

## Hallazgos fuera de alcance

- Puerto host `:1880` ya escuchaba proceso `node` ajeno — relevante al retomar smoke.
- `zeus-sdk` checkout sin `.git` bloquea brazo zeus `:3017` del switch (A1).

## Dudas / bloqueos

- Ninguno de diseño. Retomar: (1) publish 0.3.x vía CI DE-I12, (2) Docker cuando el orquestador levante el deferred de recursos.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
