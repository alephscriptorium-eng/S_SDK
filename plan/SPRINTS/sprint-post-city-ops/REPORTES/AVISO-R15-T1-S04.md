# AVISO R15-T1-S04 · 2026-07-22 · listo para vigía

```text
AVISO · R15-T1-S04 · city-orq → vigía
Asunto: sprint-post-city-ops MONTADO · briefs T1∥S04 🔶 · pedir gate propio
Carril: city-ops · Territorio: runtime zeus/GL + acta + skill usuario zeus
Gobierno: plan/SPRINTS/sprint-post-city-ops/**
Protocolo: R7/R10 (pre-despacho)
Nota: R15-city (webs) es gate DISTINCTO — ya AVISO en sprint-webs-post-city
```

## Claim

Micro-sprint **post-city-ops** montado (partición V2 vs webs). Briefs
definitivos + 🔶 en BACKLOG para **T1** (testing · acta fricción) y
**S04** (skill embajador · re-asignado bosque · **parked** hasta T1 ✅).
Proyección **LOCAL-ONLY**. Partición V2: ∩ paths con WW-* = ∅; **cero**
edición a `sprint-skills-bosque/BACKLOG` (nota encolada). **NO se
despachó ningún worker.**

## Pedido al vigía

Verificar gate **R15-T1-S04** (higiene · partición ops∥webs∥bosque ·
∩ paths tentativos = ∅ · briefs coherentes · S04 parked tras T1 · nota
bosque encolada · vetos Z_SDK #4/#5/#6 OPEN · contrato v1.1 · E_SDK veto).

Tras **PASS**:

1. city-orq puede despachar **T1** (solo).
2. **S04** permanece parked hasta T1 ✅ + acta; entonces despacho S04
   (mismo gate PASS ya consumido para el carril, o re-check higiene).

Tras **FAIL**: lista numerada; sin despacho.

## Checklist R7/R10 (pre-despacho)

| # | chequeo | evidencia |
|---|---------|-----------|
| 1 | Sprint completo (README · BACKLOG · DECISIONES · WPs · BRIEFS) | este árbol |
| 2 | 🔶 T1 + S04 · S04 parked hasta T1 | BACKLOG |
| 3 | Partición V2 ops ≠ webs documentada | README · DC-PCO-particion-v2 |
| 4 | Nota S04→bosque encolada (sin tocar BACKLOG bosque) | NOTA-S04-REASIGNADO |
| 5 | LOCAL-ONLY proyección | DC-PCO-proyeccion |
| 6 | T1: C8 registry · sin commits obra salvo acta | BRIEF-T1 |
| 7 | Vetos E_SDK · Z#4/#5/#6 citar-no-cerrar | README guardarraíles |
| 8 | Worktrees huérfanos city-ops no bloquean | vigía pulso |
| 9 | R15-city (webs) no confundido con este gate | AVISO-R15-city distinto |

## Paths gobierno

| pieza | path |
|---|---|
| sprint | `plan/SPRINTS/sprint-post-city-ops/` |
| briefs | `…/BRIEFS/BRIEF-WP-T1.md` · `…/BRIEFS/BRIEF-WP-S04.md` |
| nota bosque | `…/REPORTES/NOTA-S04-REASIGNADO-bosque.md` |
| este aviso | `…/REPORTES/AVISO-R15-T1-S04.md` |
| gate webs (distinto) | `plan/SPRINTS/sprint-webs-post-city/REPORTES/AVISO-R15-city.md` |

## Fuera de alcance / bloqueos

- Despacho workers → **bloqueado** hasta PASS
- Despacho S04 → **bloqueado** hasta T1 ✅ aunque PASS
- `gh issue create` → LOCAL-ONLY
- Cerrar Z_SDK #4/#5/#6 → veto · E_SDK → veto
- Editar BACKLOG bosque → veto (regla oro 2)

## Confirmación

**Sin despacho.** Montaje + aviso + nota bosque solamente.
