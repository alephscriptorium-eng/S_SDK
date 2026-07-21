# WP-CAMPANAS — CAMPANAS-city (S-03 re-scope)

| dato | valor |
|---|---|
| estado | 🔶 brief emitido / en curso |
| track / prio | SPIN / 1 |
| depende de | A01 ✅ · Z17 ✅ · HOTFIX-ARG-1 verde ✅ |
| DC | [DC-GC-campanas-s03](DECISIONES.md#dc-gc-campanas-s03--2026-07-21--cerrada-candidata-parked) · addenda re-scope |
| issue | S_SDK #25 |

## Objetivo (re-scope 2026-07-21)

El parte de plaza **SUENA** en la vista (operator-ui / dashboard):

- Un evento sonoro por clase de titular: **despertar · degradar · roto**
- Toggle de silencio
- Fuente = **parte-kit** ya fusionado (zeus tip ~`fe75269` / lineage `c7ec7d0`)
- Zeus/GL-side; **sin** mundo nuevo; **sin** E_SDK (juntura 01↔03 = horizonte
  declarado en el issue, **no** implementar inflación DE-I8)

## Criterios de aceptación

- [ ] `claseTitular` / `campanasDesdeParte` en parte-kit (clases ↔ plantillas).
- [ ] Bridge reconoce ledger `parte` y expone eventos de campana (puro).
- [ ] operator-ui: suena por clase + toggle silencio en HUD.
- [ ] Smoke/test evidencia clasificación + mute no dispara tono.
- [ ] Ceguera 0 en packs tocados; sin embajador; sin DE-I8.

## Fuera de alcance

- Inflar `HOLONES/03-emmanuel/` / E_SDK (DE-I8) — horizonte, no obra.
- Epic embajador (E01) · E02 · E03.
- Mundo/satélite nuevo · canal de transporte nuevo · LLM.

## Related

- Mapa: [MAPA-SIETE-PLANTAS.md](MAPA-SIETE-PLANTAS.md) · S-03
- Fuente: [WP-A01](WP-A01-parte-kit.md) · vista: [WP-Z17](WP-Z17-operator-ui-ciudad.md)
- Brief: [BRIEF-WP-CAMPANAS](../../REPORTES/BRIEF-WP-CAMPANAS-city.md)
