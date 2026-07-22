# WP-R1 · residual micro · merge solo post-aceptación

| dato | valor |
| ---- | ----- |
| acto | **R-1** (residual post R17-bosque PASS · no reopen S03/S07) |
| agente | bosque-orq |
| fecha | 2026-07-22 |
| caso fundante | C05 · acta ciudad-real («merge solo post-aceptación») |
| alcance | hermano `S_SDK-skills-library` + este sprint |
| veto | city / zeus / GL / pins |

## Claim

Lección C05 **no** estaba en el corte `0.5.0`. Cosida en tip hermano
**sin** bump de paquete. Publish `0.5.1` vs defer a próxima ola =
**decisión PO** (propuesta abajo).

## Cosido (hermano)

| path | qué |
| ---- | --- |
| `skills/swarm-orquestacion/reference/ciclo.md` | §3 merge solo post-aceptación + anti-patrón tabla |
| `skills/swarm-orquestacion/reference/roles/WORKER.md` | para sin merge; regla dura post-✅ |
| `skills/swarm-orquestacion/reference/roles/ORQUESTADOR.md` | ✅ = merge; anti-patrón prematuro |
| `CHANGELOG.md` | Note bajo `[Unreleased]` |

| acto | hash |
| ---- | ---- |
| rama | `wp/sb-r1-merge-post-aceptacion` |
| commit / tip `main` POST-push | **`a50787d6e1bb822164d3e0dd52f6a554f1ea54e2`** |
| padre | `4c2e322` (`v0.5.0`) |

`package.json` sigue en **0.5.0** (sin bump).

## Propuesta PO (pegar)

```text
Asunto: R-1 cosido — ¿patch 0.5.1 ahora o próxima ola?

Contenido ya en main hermano @ a50787d (docs/método · Unreleased).
Sin reopen S03/S07.

(A) Patch 0.5.1 ahora
    - bump package.json → 0.5.1
    - mover Note Unreleased → sección [0.5.1]
    - Release + npm publish + regenerar portal/consumo
    - justificación: cosido docs/método sin cambio de contrato
      (DC-22 patch = sin cambio de contrato); lección operativa
      ya tipificada; PO suele aceptar patch rápido

(B) Defer a próxima ola / Unreleased
    - dejar tip a50787d como está (Note en Unreleased)
    - publicar junto al próximo corte minor/patch del carril
    - justificación: 0.5.0 recién brochado; evitar ruido de release

Preferencia operativa orq: (A) si querés la lección en el canal
consumible ya; (B) si preferís agrupar. Carril bosque = CERRADO a
nivel obra; publish opcional según tu sí.
```

## Estado carril

**CERRADO** a nivel obra (contenido cosido + propuesta).
**Condicionado** a decisión PO para el acto de publish `0.5.1`.

## Fuera

S03 / S07 reopen · city · zeus · GL · pins · bump sin mandato PO.
