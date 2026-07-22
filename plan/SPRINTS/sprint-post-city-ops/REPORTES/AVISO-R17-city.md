# AVISO R17-city · 2026-07-22 · listo para vigía

```text
AVISO · R17-city · city-orq → vigía
Asunto: sprint-post-city-ops · ola PCO-2 WP-F5 MONTADA · briefs F5a∥F5b∥F5c 🔶
Carril: city-ops · Territorio F5: publish mesh · e2e dos ciudades · check oasis
Gobierno: plan/SPRINTS/sprint-post-city-ops/** (solo territorio F5 este commit)
Protocolo: R7/R10 (pre-despacho) · regla 17 sync-map post-apply
Nota: R15-T1-S04 ya consumido (T1✅·S04✅) — este es gate NUEVO para F5
```

## Claim

Ola **PCO-2 / WP-F5** («ciudad instanciable + federación») montada bajo
`sprint-post-city-ops/` (ampliación V2 · **sin** micro-sprint aparte).
Paraguas **WP-F5** + sub-WPs **F5a** · **F5b** · **F5c** en 🔶 con briefs
definitivos. Checklist C1–C8 (acta T1) absorbida. S04-v2 **parked** (sin
reopen S04). Proyección **LOCAL-ONLY**. **NO se despachó ningún worker.**

## Pedido al vigía

Verificar gate **R17-city** (higiene · briefs coherentes · F5b parked
hasta F5a ✅ · F5c no bloquea a/b · protocolos PUB citados · checklist
C1–C8 · vetos Z#4/#5/#6 OPEN · E_SDK · ceguera r.1 · V2 solo territorio F5 ·
contrato v1.1 · ∩ WW/bosque = ∅).

Tras **PASS**:

1. city-orq puede despachar **F5a** y **F5c** (paralelo; ∩ = ∅).
2. **F5b** permanece parked hasta **F5a ✅** (C8); entonces despacho F5b
   (mismo gate PASS consumido para el carril, o re-check higiene).

Tras **FAIL**: lista numerada; sin despacho.

## Checklist R7/R10 (pre-despacho)

| # | chequeo | evidencia |
|---|---------|-----------|
| 1 | Sprint F5 completo (stubs · briefs · checklist · nota S04-v2) | este árbol |
| 2 | 🔶 F5a · F5b · F5c · F5b parked hasta F5a | BACKLOG |
| 3 | F5c no bloquea a/b · config custodio fuera de árbol | BRIEF-F5c · WP-F5c |
| 4 | Protocolos o-sdk PUB citados (RECOVERY · UPGRADE) | BRIEF-F5c · DC-PCO-F5-oasis |
| 5 | C1–C8 T1 → checklist cierre F5 | CHECKLIST-F5-C1-C8-T1 |
| 6 | S04-v2 parked · S04 ✅ intacto | NOTA-S04-v2-parked |
| 7 | LOCAL-ONLY · sync-map sin mapa especulativo de issues nuevos | .sync-map.json |
| 8 | Vetos E_SDK · Z#4/#5/#6 citar-no-cerrar · ceguera r.1 | README · briefs |
| 9 | Commit gobierno = solo territorio F5 (V2; no mezcla ✅ ajeno) | tip SHA |
| 10 | Worktrees huérfanos / locks no bloquean | vigía pulso |

## Paths gobierno

| pieza | path |
|---|---|
| sprint | `plan/SPRINTS/sprint-post-city-ops/` |
| paraguas | `…/WP-F5.md` |
| stubs | `…/WP-F5a.md` · `WP-F5b.md` · `WP-F5c.md` |
| briefs | `…/BRIEFS/BRIEF-WP-F5a.md` · `F5b` · `F5c` |
| checklist T1 | `…/REPORTES/CHECKLIST-F5-C1-C8-T1.md` |
| S04-v2 | `…/REPORTES/NOTA-S04-v2-parked.md` |
| este aviso | `…/REPORTES/AVISO-R17-city.md` |

## Fuera de alcance / bloqueos

- Despacho workers → **bloqueado** hasta PASS
- Despacho F5b → **bloqueado** hasta F5a ✅ aunque PASS
- `gh issue create` → LOCAL-ONLY
- Cerrar Z_SDK #4/#5/#6 → veto · E_SDK → veto
- Reopen S04 ✅ → veto
- Config custodio oasis en árbol → veto

## Confirmación

**Sin despacho.** Montaje + aviso F5 solamente.
