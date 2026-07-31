# BRIEF candidato · WP-ZT05 · certificación TypeScript desde registry

> Solo se abre desde `main` post-release, después de completar
> [`../PUBLISH-GATE.md`](../PUBLISH-GATE.md).

```text
(rol) plan/roles/WORKER.md

WP: WP-<id-canonico> · Certificar cuatro contratos TypeScript desde registry
Rama: wp/<id-canonico>-registry-types-certification
Worktree/WORLD_ROOT: <C:/S_LAB/.worktrees/z/...>   [BLOQUEANTE]
Reporte: plan/REPORTES/WP-<id-canonico>-registry-types-certification.md

CANONICAL_WORLD_ROOT=C:/S_LAB/z-sdk
READ_ONLY_ROOTS=["C:/S_LAB/z-sdk","C:/S_LAB/s-sdk"]
DOWNSTREAM_PATTERNS=[".worktrees/*"]
ALCANCE_DIFF=scripts/smoke-ts-registry.mjs + examples/ts-registry-consumer/**
  + CI solo si es imprescindible + reporte del WP

Eje CA aplicable: IV + C8
RIESGO_REVISION: independiente
MOTIVO_RIESGO: gate de canal real y CI; un skip, versión stale o resolución
  transitiva puede fabricar un verde sin instalar los cuatro paquetes.
CONTRAEVIDENCIA_REQUERIDA: E404 de versión esperada falla; registry caído se
  distingue de PASS; lock file:/tarball falla; .d.ts ausente falla; consumer
  con any falla; tsc strict compila los cuatro paquetes y subpaths.
REVISOR_DISTINTO_WORKER: sí
```

## Lecturas obligatorias

- `scripts/smoke-ts-registry.mjs` y reporte U158.
- Versiones realmente publicadas por el checkpoint Release.
- Reports y contrarrevisiones ZT01–ZT04.
- Política C8/C9 y revisión adversarial del skill.

## Obra

Ampliar el smoke existente, sin demoler su cobertura anterior, para instalar
directamente desde el registry:

- `@zeus/linea-kit`;
- `@zeus/acta-kit`;
- `@zeus/linea-system`;
- `@zeus/force-system`.

Las versiones esperadas se derivan de los manifests post-release o de una
fuente única auditable; no se mantiene una segunda tabla manual stale. El
consumidor compila imports de root y subpaths representativos sin `any`.

## CA específicos

1. `package-lock.json` temporal demuestra URLs del registry para cada paquete
   directo; una resolución `file:`/workspace/tarball refuta el CA.
2. Se comprueba presencia física de las declarations cubiertas.
3. `tsc --noEmit` strict termina con exit 0.
4. E404 de una versión esperada es FAIL; indisponibilidad de red es
   `⏳ skipped`, nunca evidencia C8 verde.
5. CI ejecuta el smoke sin skip y aporta run-id `success`.
6. El reporte cita versiones, URLs resueltas, run-id y conclusión literal.
7. Si el WP no toca paquete publicable, changeset = N/A justificado.

## Demolición

N/A. La cobertura protocol/rooms/webrtc de U158 permanece activa.
