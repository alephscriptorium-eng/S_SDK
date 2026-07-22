# WP-C04 · kits-publicos — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-C04 |
| fecha | 2026-07-22 |
| rama | `wp/cr-c04-kits-publicos` (zeus-sdk) |
| base | `6a6afab` (origin/main tip post-version #7) |
| eje(s) CA | I·II + ceguera δ12 · C8 npm view |
| estado propuesto | listo para revisión / merge HOTFIX-style |

## Qué se hizo

Re-auditoría del workspace zeus vs política kits juego/contratos = public ·
apps/monitores/harnesses = private · WIP 0.0.0 sin cambio (antecedente
supersedido: embajador-private).

Se publicaron **5** kits (lista PO = conjunto completo de libs/mcp de juego
aún `private:true`; no hubo kits adicionales a promover). Solo
`package.json` + changeset; **cero** cambios en `src/` ni tests.

## Clasificación (auditoría completa)

### A publicar (esta WP)

| paquete | path | role | antes | acción |
| ------- | ---- | ---- | ----- | ------ |
| `@zeus/embajador-kit` | `packages/engine/embajador-kit` | lib | private + registry | `private:false` |
| `@zeus/parte-kit` | `packages/engine/parte-kit` | lib | private + registry | `private:false` |
| `@zeus/acta-kit` | `packages/engine/acta-kit` | lib | private + registry | `private:false` |
| `@zeus/lifecycle-kit` | `packages/engine/lifecycle-kit` | lib | private + registry | `private:false` |
| `@zeus/ciudad-lifecycle` | `packages/mesh/ciudad-lifecycle` | mcp | private · sin registry | `private:false` + `publishConfig.registry` + `files` |

### Ya publicables (sin cambio)

Todos los demás `zeus.role=lib` con `private` unset + registry
(`protocol`, `authority-kit`, `feed-kit`, `linea-kit`, …).

### Permanecen private (política)

- **apps:** editor-ui, player-ui, player-3d-ui, 3d-monitor, cache-browser,
  firehose-browser, socket-server, webrtc-viewer, operator-ui, …
- **mcp runtime / systems:** mcp-launcher, console-monitor, force-system,
  linea-*, solar-system, ssb-system, oasis-webrtc
- **WIP 0.0.0:** blobstore-client, blob-sync-harness — **sin cambio**

### Fuera de alcance (C02 · no tocado)

`authority-kit/**` · `protocol/**` — ∩ C04 = ∅.

## Archivos tocados

- `packages/engine/{embajador,parte,acta,lifecycle}-kit/package.json` — `private:false`
- `packages/mesh/ciudad-lifecycle/package.json` — `private:false` + publishConfig + files
- `.changeset/kits-foss-public.md` — patch ×5 (base 0.1.0 never-published → registry 0.1.1)
- `plan/REPORTES/WP-C04-kits-publicos.md` (este reporte, superproyecto S)

## Evidencia

### Gates

```
gates: OK (0 offenders)
```

### Tests (manifest-only; sin tocar src)

| workspace | resultado |
| --------- | --------- |
| embajador-kit | 12/12 pass |
| acta-kit | 7/7 pass |
| lifecycle-kit | 16/16 pass |
| ciudad-lifecycle | 15/15 pass |
| parte-kit | 13/14 — fail golden CRLF vs LF en Windows (preexistente; CI Linux) |

### Ceguera δ12 (touched)

```
rg WP-[A-Z]{1,2}\d over package.json×5 + changeset → 0
rg method tokens in changeset → 0
∩ paths C02 = ∅
```

### Changeset status

```
Packages to be bumped at patch:
  @zeus/embajador-kit · parte-kit · acta-kit · lifecycle-kit · ciudad-lifecycle
  (+ @zeus/operator-bridge via updateInternalDependencies; dep parte-kit)
```

### npm view pre-merge (404 esperado)

Los 5 → 404 en `https://npm.scriptorium.escrivivir.co` (nunca publicados).

### Post-merge CA (rellenar al cerrar ciclo)

| CA | evidencia |
| -- | --------- |
| obra SHA | `<pendiente>` |
| bot version PR | `<pendiente>` |
| Release run verde | `<pendiente>` |
| npm view ×5 | `<pendiente>` |
| tip zeus / S | `<pendiente>` |

## Auto-revisión

- [x] Diff solo manifest + changeset (no src)
- [x] Paths disjuntos C02
- [x] WIP 0.0.0 intactos
- [x] Apps/monitores private intactos
- [x] publishConfig.registry en los 5
- [x] Gates OK · ceguera 0 WP-ids en obra tocada
- [x] Commits convencionales (al empujar)

## Hallazgos fuera de alcance

- parte-kit golden CRLF en checkout Windows (preexistente)
- operator-bridge recibirá patch interno por dep `parte-kit` (bot version)

## Dudas / bloqueos

Ninguno bloqueante para merge.
