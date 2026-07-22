# BACKLOG — sprint-embajador-entrada (GO-E1 · E02+f1 ✅ · f2∥A5 🔶)

> Solo el orquestador escribe aquí. Workers: un WP = un chat = rama
> `wp/ee-<id>-<slug>` (+ worktree si paralelo); NO editar este fichero.
> Estados: ⬜ · 🔶 · ✅.
> Padre: [DE-I19 v2](../../DECISIONES.md) · [DECISIONES sprint](DECISIONES.md).
> City E01/E02 fichas = fuente parked; **no** reabrir city WPs.
> Proyección: **LOCAL-ONLY** (umbrellas #22/#23; sin altas WP nuevas).

## Ola EE-1 (GO-E1 · 2026-07-22 — corte entrada)

> E02+f1 **✅** merged tip zeus `aab6a68`. **Aviso vigía R8** — tip listo.
> **NO despachar** ola 2 (f2∥A5) hasta R8 PASS.
> Norte: peercard + `startpack-ciudad-v0.1.0` default.

### Secuencia

1. **E02** primero (identidad cripto = dep dura peercard). ✅
2. **E01-f1** ∥ E02 si paths no se pisan (`embajador-kit/**` vs signaling/crypto). ✅
3. **E01-f2** **tras** E02 (modelo/TTL sobre firma). 🔶 post-R8
4. **A5** tras E02+f1 en tip (**firma+kit reales; no stubs**); f2
   preferible merged (A5 solo consume). 🔶 post-R8

### WPs

- ✅ **WP-E02 · Privacidad federación** — ssbId handshake + firma peercard ·
  tip zeus `25a57a1` → main; **Z_SDK #4** citado OPEN (**no cerrado**).
  Umbrella **#23**. Acta:
  [ACTA-EE1](../../REPORTES/ACTA-EE1-aceptacion-E02-f1-2026-07-22.md).
  Reporte: [WP-E02](../../REPORTES/WP-E02-privacidad-federacion.md).

- ✅ **WP-E01-f1 · Kit embajador** — tip zeus `aab6a68` (rebase post-E02).
  LOCAL bajo **#22**. Reporte:
  [WP-E01-f1](../../REPORTES/WP-E01-f1-kit.md).

- 🔶 **WP-E01-f2 · Peercard** — tarjeta viajera + TTL/ciclo · **post-E02**.
  LOCAL bajo **#22**. Ficha: [WP-E01-f2](WP-E01-f2-peercard.md).
  Brief: [BRIEF-E01-f2](../../REPORTES/BRIEF-WP-E01-f2-peercard.md).
  Rama: `wp/ee-e01-f2-peercard`. **NO despachar** hasta R8.

- 🔶 **WP-A5 · Puerta externos (SEMILLA-ARG §A5)** — árbol dominante
  **Z17-zeus** (+ satélites Z04-GL · webs/S_SDK); paths pineados en brief;
  startpack-ciudad-v0.1.0 default; **sin superficie nueva**; deps
  E02+f1 reales. LOCAL → #22.
  Ficha: [WP-A5](WP-A5-puerta.md).
  Brief: [BRIEF-A5](../../REPORTES/BRIEF-WP-A5-puerta.md).
  Rama: `wp/ee-a5-puerta`. **NO despachar** hasta R8 (∥ f2).

## Paraguas (no en corte · sin 🔶)

- ⬜ E01-f3 niveles (Z_SDK **#6** guardarraíl · no cerrar) · E01-f4 visual —
  parked en S_SDK **#22**.

## Overview

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| [E02](WP-E02-privacidad-federacion.md) | Privacidad federación | Z04 ✅ · D-40 · pav GO-4 | I·IV + ceguera | ✅ | #23 · Z_SDK #4 |
| [E01-f1](WP-E01-f1-kit.md) | Kit embajador | pav GO-4 · ∥ E02 | I·II + ceguera | ✅ | LOCAL→#22 |
| [E01-f2](WP-E01-f2-peercard.md) | Peercard | **E02** · f1 | I·II + ceguera | 🔶 | LOCAL→#22 |
| [A5](WP-A5-puerta.md) | Puerta externos | E02·f1 reales · f2 preferible | I·IV + ceguera | 🔶 | LOCAL→#22 |

## Prep proyección LOCAL (regla 17 · sin apply)

| id | mapa | apply |
| -- | ---- | ----- |
| WP-E02 | → #23 (existe) | n/a (ya proyectado) |
| WP-E01-f1 / f2 / A5 | LOCAL bajo #22 | **post-lote** sync-map |
| E01-f3/f4 | #22 parked | no |

## Checklist R7 pre-despacho

| # | chequeo | esperado |
| - | ------- | -------- |
| 1 | Alcances 🔶 = E02 + E01-f1 + E01-f2 + A5; f3/f4 **sin** 🔶 | PASS literal BACKLOG |
| 2 | Deps: E02 antes f2; f1 ∥ E02 OK; A5 tras E02+f1 reales (no stubs) | DC-EE-apertura · DC-EE-A5-paths |
| 3 | Exclusión mutua paths (tabla DC-EE-exclusion-paths) | sin ∩ en briefs |
| 4 | Env checks en cada brief (`rev-parse` zeus · GL · S_SDK; NUNCA `test -d .git`) | presentes |
| 5 | Vetos: E_SDK/DE-I8 · city cerrado · CIUDAD-REAL/§6/trama-agua · claim→acta/SHA | intactos |
| 6 | Z_SDK #4 trabajar/citar; #5/#6 **no cerrar**; #6 guardarraíl f2/f3 | citados |
| 7 | Proyección LOCAL-ONLY; sin `gh issue create` WP nuevas | prep tabla OK |
| 8 | Workers **no** despachados aún (este GO solo abre) | sin ramas wp/ee-* |

## NO-GO

E_SDK · DE-I8 · reopen ✅ city · 📝→🔶 sin GO · `gh issue create` WP bajo
umbrella · cerrar Z_SDK #5/#6 · despachar antes de R7 · tocar f3/f4.
