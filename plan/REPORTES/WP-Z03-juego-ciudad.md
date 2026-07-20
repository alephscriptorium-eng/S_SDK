# WP-Z03 · juego-ciudad — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-z03 (swarm) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z03-juego-ciudad` (games-library) · reporte en SCRIPT_SDK `wp/gc-z03-juego-ciudad` |
| commits | games-library `0d7d821ab62c969550fae9c15fcf4438da4a59c7` |
| eje(s) CA | I (e2e entra→walk→wake→snapshot) · IV diferido (Z04/Z08) |
| estado propuesto | listo para revisión |

## Qué se hizo

Se creó el paquete `@zeus/ciudad` en games-library (patrón pozo): contrato
`game:'ciudad'`, dominio puro (`join`/`walk`/`announce`/`wake`), autoridad de
una room, MCP player (`player_*`), `spec/CASOS.md` (C-01 MVP + C-02 rechazo
`barrio_muerto`) y smoke `fixtures/mvp-smoke.mjs`. La escena se siembra desde
`@zeus/startpack-ciudad` (Z02), sin topología hardcodeada. `wake` asienta offer
de tool en ledger con `horseMode:'stub'` — gap documentado hacia Z06
(`tools/call` físico por horse aún no vivo). Workspace + `ZEUS_STARTPACK_CIUDAD`
en resolve-startpack. **Sin push** (gate §E a). Eje IV diferido.

## Archivos tocados

- `packages/ciudad/**` (creado): contract/domain/scene/authority/player-mcp/spec/tests/fixtures/README
- `package.json` / `package-lock.json` (modificado): workspace `packages/ciudad` + `test:ciudad`
- `scripts/resolve-startpack.mjs` (modificado): env `ZEUS_STARTPACK_CIUDAD`
- `plan/REPORTES/WP-Z03-juego-ciudad.md` (creado, superproyecto): este reporte

## Evidencia

> Worktree GL: `C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z03-juego-ciudad`
> Rama código: `wp/gc-z03-juego-ciudad` @ `0d7d821`
> Env: `git -C …/games-library/.worktrees/wp-gc-z03-juego-ciudad rev-parse HEAD` → `0d7d821…`
> Env: `git -C …/zeus-sdk rev-parse HEAD` → `29e9d49…`

```
$ node --test test/*.test.mjs   # cwd packages/ciudad
# tests 7
# pass 7
# fail 0
  ok — CASOS C-01..C-02 coherencia playbook-kit
  ok — ceguera método (0 tokens marco)
  ok — escena startpack (ciudad-v0, 24 barrios)
  ok — MVP e2e dominio: join → walk → wake → snapshot vivo
  ok — wake sobre workflow-editor → barrio_muerto
  ok — announce plaza / walk gates
  ok — rol_no_autorizado en wake(dj)

$ node fixtures/mvp-smoke.mjs
ok join / walk / walk / wake
SMOKE_OK { sceneId: 'ciudad-v0', barrio: 'vivo', lastWake: { barrioId: 'blockly-editor', tool: 'barrio.ping', horseMode: 'stub' } }
```

Push tip / CI runner: **no afirmado** (brief §E a — tip main ahead sin CI;
pedir push al custodio). E2e con socket+horse real: ⏳ sin verificar (gap Z06).

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: paquete ciudad + workspace/resolve mínimos + reporte; sin mcp-launcher / flows f4 / lifecycle / BACKLOG
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: patrón pozo citado; escena vía startpack Z02
- [x] Sellos con fuente; rutas citadas existentes: worktree + SHA
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: horse físico / slot presets `ciudadPlayer` / eje IV = pendiente
- [x] Eje(s) aplicables evidenciado(s): I vía dominio e2e + smoke; IV diferido (Z04/Z08)
- [x] Gates ejecutados de verdad: node:test 7/7 + smoke
- [x] Commits convencionales: `feat(ciudad): …`
- [x] Diff solo del alcance del WP: sí (no BACKLOG, no Z06/Z08)

## Hallazgos fuera de alcance

- **Slot presets-sdk `ciudadPlayer`:** puerto vía `ZEUS_MCP_CIUDAD` default 4133; registrar en presets-sdk = tick/WP engine (no Z03).
- **Horse físico / tools/call:** contrato `wake` listo; actuador real espera Z06.
- **E2e transporte** (socket + MCP HTTP estilo `pozo-mcp-demo`): no cableado en este WP; dominio+smoke cubren CA e2e de mecánica.
- **Vista/monigotil:** no incluida (nota ficha: ui-3d-kit opt-in posterior).

## Dudas / bloqueos

- Ningún bloqueo para revisión. ¿El orquestador actualiza puntero submodule en el merge, o solo mergea la rama GL?
- Confirmar con custodio push GL tip cuando quieran afirmar CI/runner (§E a).

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

Obra games-library `0d7d821` (FF `main` sobre padre `8a39ece`) · reporte `cd7090a` · bump submodule SCRIPT_SDK → `0d7d821`. Diff = paquete `@zeus/ciudad` (contrato/dominio/escena/authority/player-mcp/spec/tests/fixtures) + workspace/`resolve-startpack` mínimos + este reporte. Eje **I** ✅ (node:test 7/7 + smoke join→walk→wake). Eje **IV** diferido (Z04/Z08). Horse físico / `tools/call` = gap Z06. Slot presets `ciudadPlayer` fuera de alcance. Z06/Z08-f4..5/hotfix intactos.
