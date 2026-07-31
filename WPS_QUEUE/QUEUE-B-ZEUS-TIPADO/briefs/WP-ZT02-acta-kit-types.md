# BRIEF candidato · WP-ZT02 · tipos `@zeus/acta-kit`

> El orquestador debe asignar id canónico, completar `WORLD_ROOT` y ejecutar
> el detector antes de copiar este brief al plan Zeus.

```text
(rol) plan/roles/WORKER.md

WP: WP-<id-canonico> · Tipos públicos completos de @zeus/acta-kit
Rama: wp/<id-canonico>-acta-kit-types
Worktree/WORLD_ROOT: <C:/S_LAB/.worktrees/z/...>   [BLOQUEANTE]
Reporte: plan/REPORTES/WP-<id-canonico>-acta-kit-types.md

CANONICAL_WORLD_ROOT=C:/S_LAB/z-sdk
READ_ONLY_ROOTS=["C:/S_LAB/z-sdk","C:/S_LAB/s-sdk"]
DOWNSTREAM_PATTERNS=[".worktrees/*"]
ALCANCE_DIFF=packages/engine/acta-kit/** + .changeset/** + reporte del WP

Eje CA aplicable: IV
RIESGO_REVISION: independiente
MOTIVO_RIESGO: declara un shape congelado y cambia exports de un paquete
  publicable; una declaration más ancha que el guard crea autoridad falsa.
CONTRAEVIDENCIA_REQUERIDA: shape omitida/inválida no se estrecha como acta;
  resumen/tick/huella conservan restricciones reales; cada subpath resuelve;
  npm pack incluye types; diff src = 0.
REVISOR_DISTINTO_WORKER: sí
```

## Lecturas obligatorias

- `plan/PRACTICAS.md` completo.
- `plan/PUBLISH-ALLOWLIST.md`.
- `packages/engine/acta-kit/{package.json,README.md,src/**,test/**}`.
- Precedentes U155/U157 de tipos y segundo consumidor.

## Obra

Tipar raíz y todos los subpaths públicos:

```text
.
./tipos
./emitir
./validar
./publicar
./adoptar
./huella
```

Debe cubrir `ActaDeBarrio`, constantes, type guard, emisión pura,
validación, publicación ledger, adopción y huella, sin alterar el shape
`acta/1` ni `src/**`.

## CA específicos

1. `isActaDeBarrioShaped` estrecha `unknown` al shape exacto que valida el
   runtime; campos ausentes o extra no ganan contrato por declaración.
2. Consumidor A ejercita emitir/validar/huella; consumidor B
   publicar/adoptar y subpaths.
3. Ambos compilan strict sin `any`; un campo inventado produce error TS.
4. Gate exports↔declarations y mutante declaration ausente fallan.
5. Tests del paquete, gates y pack dry-run verdes.
6. Changeset `patch`; diff `src/**` vacío.

## Demolición

N/A. Shape y canales existentes permanecen congelados.
