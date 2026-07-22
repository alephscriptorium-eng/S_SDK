# BACKLOG — sprint-embajador-entrada (GO-E1 · corte ✅ · listo R9)

> Solo el orquestador escribe aquí. Workers: un WP = un chat = rama
> `wp/ee-<id>-<slug>` (+ worktree si paralelo); NO editar este fichero.
> Estados: ⬜ · 🔶 · ✅.
> Padre: [DE-I19 v2](../../DECISIONES.md) · [DECISIONES sprint](DECISIONES.md).
> City E01/E02 fichas = fuente parked; **no** reabrir city WPs.
> Proyección: sync-map post-apply · umbrellas #22/#23 · Z_SDK #4/#5/#6 **OPEN**.

## Ola EE-1 (GO-E1 · 2026-07-22 — corte entrada · **CERRADO**)

> E02+f1+HOTFIX+**f2+A5** **✅**. Tips: zeus `30bfc08` · GL `b54a2d2`.
> Acta ola 2 + cierre:
> [ACTA-EE1-OLA2-cierre-corte](../../REPORTES/ACTA-EE1-OLA2-cierre-corte-2026-07-22.md).
> Norte: peercard + `startpack-ciudad-v0.1.0` default — **cumplido en tip**.

### Hotfix

- ✅ **HOTFIX-CEGUERA-EE1** — tip zeus `bd02d70` (= scrub pre-ola2).
  Acta: [ACTA-HOTFIX-CEGUERA-EE1](../../REPORTES/ACTA-HOTFIX-CEGUERA-EE1-2026-07-22.md).

### Secuencia (hecha)

1. **E02** ✅ → 2. **E01-f1** ✅ → HOTFIX ✅ → 3. **E01-f2** FF ✅ →
   4. **A5** rebase+squash sobre tip post-f2 ✅ · GL A5 ✅

### WPs

- ✅ **WP-E02 · Privacidad federación** — tip zeus `25a57a1` → main;
  **Z_SDK #4** citado OPEN (**no cerrado**). Umbrella **#23**.
  Acta: [ACTA-EE1](../../REPORTES/ACTA-EE1-aceptacion-E02-f1-2026-07-22.md).
  Reporte: [WP-E02](../../REPORTES/WP-E02-privacidad-federacion.md).

- ✅ **WP-E01-f1 · Kit embajador** — tip zeus `aab6a68`. LOCAL→**#22**.
  Reporte: [WP-E01-f1](../../REPORTES/WP-E01-f1-kit.md).

- ✅ **WP-E01-f2 · Peercard** — tip zeus `3ebfce3` (FF sobre `bd02d70`).
  LOCAL→**#22**. Reporte: [WP-E01-f2](../../REPORTES/WP-E01-f2-peercard.md).

- ✅ **WP-A5 · Puerta externos** — tip zeus `30bfc08` · GL `b54a2d2`
  (A5 `d2f5780` + fix CI resolveZeusSdkRoot).
  LOCAL→**#22**. Reporte: [WP-A5](../../REPORTES/WP-A5-puerta.md).
  Scrub pre-merge: `WP-A5` fuera de obra (gate tracking-id).

## Paraguas (no en corte · sin 🔶)

- ⬜ E01-f3 niveles (Z_SDK **#6** guardarraíl · no cerrar) · E01-f4 visual —
  parked en S_SDK **#22**.

## Overview

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| [E02](WP-E02-privacidad-federacion.md) | Privacidad federación | Z04 ✅ · D-40 · pav GO-4 | I·IV + ceguera | ✅ | #23 · Z_SDK #4 |
| [E01-f1](WP-E01-f1-kit.md) | Kit embajador | pav GO-4 · ∥ E02 | I·II + ceguera | ✅ | LOCAL→#22 |
| [E01-f2](WP-E01-f2-peercard.md) | Peercard | **E02** · f1 | I·II + ceguera | ✅ | LOCAL→#22 |
| [A5](WP-A5-puerta.md) | Puerta externos | E02·f1 reales · f2 | I·IV + ceguera | ✅ | LOCAL→#22 |

## Proyección (regla 17 · post-cierre)

| id | mapa | apply |
| -- | ---- | ----- |
| WP-E02 | → #23 | umbrella update |
| WP-E01-f1 / f2 / A5 | → #22 | umbrella update · `.sync-map.json` |
| E01-f3/f4 | #22 parked | no |

Mapa: [`.sync-map.json`](.sync-map.json).

## NO-GO (sigue)

E_SDK · DE-I8 · reopen ✅ city · cerrar Z_SDK #4/#5/#6 · force-push ·
CIUDAD-REAL · despachar f3/f4 sin GO.
