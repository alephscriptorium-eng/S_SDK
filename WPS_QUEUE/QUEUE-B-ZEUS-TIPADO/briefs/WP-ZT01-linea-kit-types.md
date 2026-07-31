# BRIEF candidato · WP-ZT01 · tipos `@zeus/linea-kit`

> El orquestador debe asignar id canónico, completar `WORLD_ROOT` y ejecutar
> el detector antes de copiar este brief al plan Zeus.

```text
(rol) plan/roles/WORKER.md

WP: WP-<id-canonico> · Tipos públicos completos de @zeus/linea-kit
Rama: wp/<id-canonico>-linea-kit-types
Worktree/WORLD_ROOT: <C:/S_LAB/.worktrees/z/...>   [BLOQUEANTE]
Reporte: plan/REPORTES/WP-<id-canonico>-linea-kit-types.md

CANONICAL_WORLD_ROOT=C:/S_LAB/z-sdk
READ_ONLY_ROOTS=["C:/S_LAB/z-sdk","C:/S_LAB/s-sdk"]
DOWNSTREAM_PATTERNS=[".worktrees/*"]
ALCANCE_DIFF=packages/engine/linea-kit/** + .changeset/** + reporte del WP

Eje CA aplicable: IV
RIESGO_REVISION: independiente
MOTIVO_RIESGO: cambia manifest y contrato TypeScript de un paquete publicable;
  una firma permisiva o un subpath sin types puede romper consumidores sin
  afectar los tests JS.
CONTRAEVIDENCIA_REQUERIDA: retirar una declaration debe romper el gate;
  importar cada subpath bajo NodeNext; consumidor sin any; npm pack contiene
  types; diff runtime/src y volumes-ops = 0.
REVISOR_DISTINTO_WORKER: sí
```

## Lecturas obligatorias

- `plan/PRACTICAS.md` completo.
- `plan/PUBLISH-ALLOWLIST.md`.
- `plan/REPORTES/WP-U155-protocol-types-subpaths.md`.
- `plan/REPORTES/WP-U157-dts-grafo-cercano.md`.
- `packages/engine/linea-kit/{package.json,README.md,src/**,schemas/**}`.

## Obra

Añadir declaraciones exactas y condiciones `types` para los subpaths JS:

```text
.
./curation
./resolve
./force-activation
./validate
./loader
./tools
./starterkits
./viaje
```

El glob `./schemas/*` sigue siendo export JSON. Un consumidor debe probar su
resolución con `resolveJsonModule`; no se inventa una API TypeScript paralela.

La solución debe incluir:

- `types` raíz y `types/**` publicados;
- auditoría automática exports↔declarations;
- consumidor A browser-safe: curación, resolve y force activation;
- consumidor B Node: loader, validate, tools, starterkits, viaje y schema;
- ningún cambio a `src/**`, schemas o comportamiento runtime;
- changeset `patch`.

## CA específicos

1. Todos los símbolos exportados por los nueve subpaths JS son importables y
   reciben firmas coherentes con runtime/tests/schemas.
2. `GraphSource`, resultados de loader/validator y opciones públicas quedan
   nombrados cuando el contrato los sostiene; datos abiertos permanecen
   `unknown`/records acotados, nunca `any`.
3. Dos consumidores independientes pasan `tsc --noEmit` en strict.
4. El gate cae ante declaration ausente o export JS nuevo sin types.
5. Tests `@zeus/linea-kit`, gates globales y pack dry-run verdes.
6. Hash/diff de `packages/engine/linea-kit/src/**` sin cambios.

## Demolición

N/A. No se retiran exports ni compatibilidad runtime.
