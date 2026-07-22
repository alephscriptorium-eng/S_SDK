# AVISO R15-city · 2026-07-22 · listo para vigía

```text
AVISO · R15-city · city-orq → vigía
Asunto: sprint-webs-post-city MONTADO · briefs WW-Z∥WW-G∥WW-S 🔶 · pedir gate R15-city
Carril: city · Territorio obra: zeus docs · GL docs · S_SDK docs
Gobierno: plan/SPRINTS/sprint-webs-post-city/**
Protocolo: R7/R10 (pre-despacho)
```

## Claim

Sprint **webs-post-city** montado (patrón estándar). Briefs definitivos +
🔶 en BACKLOG para **WW-Z** · **WW-G** (⊃ **W2** absorbido) · **WW-S**.
Proyección **LOCAL-ONLY** (DC-WW-proyeccion). Partición V2 respetada:
**cero** toque a `sprint-skills-bosque/`. **NO se despachó ningún worker.**

## Pedido al vigía

Verificar gate **R15-city** (higiene · partición city∥bosque · ∩ paths
tentativos = ∅ · briefs coherentes · W2 absorbido no suelto · vetos
Z_SDK #4/#5/#6 OPEN · contrato v1.1). Tras **PASS**: city-orq puede
despachar WW-Z ∥ WW-G ∥ WW-S. Tras **FAIL**: lista numerada; sin despacho.

## Checklist R7/R10 (pre-despacho)

| # | chequeo | evidencia |
|---|---------|-----------|
| 1 | Sprint completo (README · BACKLOG · DECISIONES · WPs · BRIEFS) | este árbol |
| 2 | 🔶 solo WW-Z/G/S · W2 no suelto | BACKLOG + ABSORCION-W2 |
| 3 | LOCAL-ONLY proyección documentada | DC-WW-proyeccion |
| 4 | Veto bosque / skills-library | README guardarraíles |
| 5 | Ceguera / promesas / C8 en briefs | BRIEFS/* |
| 6 | Worktrees huérfanos city no bloquean | vigía pulso |
| 7 | Bosque S03/S05b no pisado (dirs disjuntos) | contrato v1.1 |

## Paths gobierno

| pieza | path |
|---|---|
| sprint | `plan/SPRINTS/sprint-webs-post-city/` |
| briefs | `…/BRIEFS/BRIEF-WP-WW-{Z,G,S}.md` |
| absorción W2 | `…/REPORTES/ABSORCION-W2.md` |
| este aviso | `…/REPORTES/AVISO-R15-city.md` |

## Fuera de alcance / bloqueos

- Despacho workers → **bloqueado** hasta PASS
- `gh issue create` → LOCAL-ONLY
- Cerrar Z_SDK #4/#5/#6 → veto
- Obra en hermano skills-library → carril bosque
- **Ops T1/S04** → gate distinto
  [AVISO-R15-T1-S04](../../sprint-post-city-ops/REPORTES/AVISO-R15-T1-S04.md)
  (`sprint-post-city-ops` · runtime/acta/skill ≠ docs)

## Confirmación

**Sin despacho.** Montaje + aviso solamente.
