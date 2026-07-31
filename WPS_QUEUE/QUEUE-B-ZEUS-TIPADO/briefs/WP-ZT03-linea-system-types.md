# BRIEF candidato · WP-ZT03 · tipos `@zeus/linea-system`

> Depende de ZT01 integrado. El orquestador asigna id, completa `WORLD_ROOT`
> y obtiene `identidad-raiz: PASS` antes del despacho.

```text
(rol) plan/roles/WORKER.md

WP: WP-<id-canonico> · Tipos de fachada MCP @zeus/linea-system
Rama: wp/<id-canonico>-linea-system-types
Worktree/WORLD_ROOT: <C:/S_LAB/.worktrees/z/...>   [BLOQUEANTE]
Reporte: plan/REPORTES/WP-<id-canonico>-linea-system-types.md

CANONICAL_WORLD_ROOT=C:/S_LAB/z-sdk
READ_ONLY_ROOTS=["C:/S_LAB/z-sdk","C:/S_LAB/s-sdk"]
DOWNSTREAM_PATTERNS=[".worktrees/*"]
ALCANCE_DIFF=packages/mesh/linea-system/** + .changeset/** + reporte del WP

Eje CA aplicable: I + IV
RIESGO_REVISION: independiente
MOTIVO_RIESGO: fachada cruzada engine→mesh y manifest publicable clase C;
  duplicar shapes de linea-kit o tipar defaults de entorno falsamente rompe C8.
CONTRAEVIDENCIA_REQUERIDA: tipos importan/reusan linea-kit; basePath omitido y
  explícito compilan; root y ./loader resuelven; tarball contiene types;
  runtime/src y Lane D sin diff.
REVISOR_DISTINTO_WORKER: sí
```

## Lecturas obligatorias

- ZT01 aceptado y declaraciones publicadas en el árbol integrado.
- `plan/PRACTICAS.md`, `plan/PUBLISH-ALLOWLIST.md`.
- `packages/mesh/linea-system/{package.json,README.md,src/**,test/**}`.
- `packages/engine/linea-kit/types/**`.

## Obra

Tipar `.` y `./loader`, incluida la fachada `loadLineaData`, rescaneo,
lecturas de wikitext/registro y resolvers reexportados. Los retornos y tipos
de dominio se importan de `@zeus/linea-kit`; no se copian definiciones.

`startAll` se declara según su runtime real después de leer tests/start, sin
prometer lifecycle o handle no observable.

## CA específicos

1. Cero interfaces LINEA duplicadas en `linea-system`; grep de las formas
   canónicas apunta a `linea-kit`.
2. Consumidor A importa raíz y arranque; consumidor B usa `./loader` con
   basePath explícito/default y resolvers.
3. Ambos compilan strict y el gate detecta subpath/declaration ausente.
4. Tests del sistema, gates, pack dry-run y changeset `patch` verdes.
5. Diff en `src/**`, `linea-kit/src/**` y `volumes-ops/**` = 0.

## Demolición

N/A. La fachada runtime permanece fina y sin lógica duplicada.
