# Cola B · frontera TypeScript Zeus

| dato | valor |
| ---- | ----- |
| Estado | `QUEUED` · 0 WPs abiertos · 0 workers |
| Mundo propietario | `C:\S_LAB\z-sdk` |
| Fuente de intake | esta carpeta, leída RO desde el swarm Zeus |
| Objetivo | publicar tipos exactos para cuatro contratos consumidos por LORE-HM |
| Freeze observado | carril D detenido tras U203; U204 no forma parte del lote |

## Regla de gobierno

Esta cola **no es** el backlog de Zeus y sus ids `WP-ZTxx` son candidatos
locales. Solo el orquestador Zeus puede:

1. revalidar el tip de `main`, el freeze y la allowlist;
2. asignar ids canónicos sin colisión;
3. copiar los WPs aprobados a `plan/BACKLOG.md`;
4. completar briefs, marcar `🔶`, crear worktrees y despachar;
5. aceptar, mergear y operar Release.

No se edita `z-sdk` desde S-SDK. No hay `npm publish` manual.

## Calibración de intake

| parámetro | valor |
| --------- | ----- |
| `CANONICAL_WORLD_ROOT` | `C:/S_LAB/z-sdk` |
| `WORKTREE_BASE` | `C:/S_LAB/.worktrees/z` |
| `READ_ONLY_ROOTS` del worker | `C:/S_LAB/z-sdk`, `C:/S_LAB/s-sdk` |
| `DOWNSTREAM_PATTERNS` | `.worktrees/*` |
| `WORLD_ROOT` | **bloqueante:** worktree concreto asignado por el orquestador |

Antes de cualquier efecto rige:

```text
DETECTOR → PASS|LOCK → claim de carril → lote+GO → efectos
```

Un `LOCK` o un `WORLD_ROOT` sin materializar devuelve el intake con cero
efectos. El freeze de Lane D no se interpreta como permiso: el custodio debe
autorizar este carril ortogonal y el orquestador debe comprobar idle real.

## Lote candidato

```text
ZT01 linea-kit ─┬─→ ZT03 linea-system ─┐
                └─→ ZT04 force-system ─┼─→ checkpoint Release → ZT05 C8
ZT02 acta-kit ──────────────────────────┘
```

- [`BACKLOG.md`](BACKLOG.md): partición, dependencias y CA globales.
- [`briefs/`](briefs/): briefs candidatos listos para remapear.
- [`PUBLISH-GATE.md`](PUBLISH-GATE.md): checkpoint del orquestador entre
  ZT01–ZT04 y la certificación ZT05.

## Frontera dura

El lote puede tocar declaraciones, manifests de export, tests de tipos,
fixtures TypeScript, changesets y el smoke de registry. No puede tocar:

- `packages/engine/volumes-ops/**`;
- `packages/engine/linea-kit/src/**` ni ningún otro runtime `src/**`;
- U204/FIREHOSE, `linea-editor` o PR SOLID #55;
- schemas wire existentes;
- el backlog de otro carril.

Si una declaración correcta exige cambiar runtime, el WP se bloquea y lo
reporta; no amplía alcance en silencio.
