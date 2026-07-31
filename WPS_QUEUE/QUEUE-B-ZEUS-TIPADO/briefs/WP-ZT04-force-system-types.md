# BRIEF candidato · WP-ZT04 · tipos `@zeus/force-system`

> Depende de ZT01 integrado. El orquestador asigna id, completa `WORLD_ROOT`
> y obtiene `identidad-raiz: PASS` antes del despacho.

```text
(rol) plan/roles/WORKER.md

WP: WP-<id-canonico> · Tipos de fachada MCP @zeus/force-system
Rama: wp/<id-canonico>-force-system-types
Worktree/WORLD_ROOT: <C:/S_LAB/.worktrees/z/...>   [BLOQUEANTE]
Reporte: plan/REPORTES/WP-<id-canonico>-force-system-types.md

CANONICAL_WORLD_ROOT=C:/S_LAB/z-sdk
READ_ONLY_ROOTS=["C:/S_LAB/z-sdk","C:/S_LAB/s-sdk"]
DOWNSTREAM_PATTERNS=[".worktrees/*"]
ALCANCE_DIFF=packages/mesh/force-system/** + .changeset/** + reporte del WP

Eje CA aplicable: I + IV
RIESGO_REVISION: independiente
MOTIVO_RIESGO: fachada cruzada engine→mesh y manifest publicable clase C;
  mountedLineaIds y fallback de paths pueden quedar tipados de forma más
  permisiva que el runtime.
CONTRAEVIDENCIA_REQUERIDA: iterable omitido/presente, basePath omitido y
  explícito, ids inválidos, root y ./loader, tarball con types, cero diff
  runtime/src y Lane D.
REVISOR_DISTINTO_WORKER: sí
```

## Lecturas obligatorias

- ZT01 aceptado y declaraciones publicadas en el árbol integrado.
- `plan/PRACTICAS.md`, `plan/PUBLISH-ALLOWLIST.md`.
- `packages/mesh/force-system/{package.json,README.md,src/**,test/**}`.
- `packages/engine/linea-kit/types/**`.

## Obra

Tipar `.` y `./loader`: `loadForcesData`, registry view, resolución de force,
escena y `pairs_with`, reutilizando tipos públicos de `linea-kit`.

`startAll` se declara conforme al runtime observable. No se introduce
conocimiento de FORCES en otro paquete ni se modifica el driver U203.

## CA específicos

1. `mountedLineaIds` acepta el iterable real y no convierte ausencia en
   garantía de líneas montadas.
2. Consumidor A importa raíz; consumidor B usa `./loader` con opciones
   omitidas y explícitas.
3. Ambos compilan strict; exports↔declarations cae con mutante ausente.
4. Tests del sistema, gates, pack dry-run y changeset `patch` verdes.
5. Diff en `src/**`, `linea-kit/src/**` y `volumes-ops/**` = 0.

## Demolición

N/A. No se toca la semántica RO-inmutable de FORCES.
