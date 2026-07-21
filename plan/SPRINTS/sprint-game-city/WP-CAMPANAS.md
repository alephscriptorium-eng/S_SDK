# WP-CAMPANAS — CAMPANAS (S-03)

| dato | valor |
|---|---|
| estado | ⬜ **parked** — candidata · sin GO · no abrir · sin brief |
| track / prio | SPIN / — |
| depende de | A01 ✅ · **(i) HOTFIX-ARG-1 verde ✅** · **(ii) tick DE-I8 pend** |
| DC | [DC-GC-campanas-s03](DECISIONES.md#dc-gc-campanas-s03--2026-07-21--cerrada-candidata-parked) |

## Objetivo

Primera costura jugable entre planta 01 (ciudad) y planta 03 (voz / campanas):
anuncio perceptible en la ciudad cuando el satélite 03 esté listo para sonar.
Candidata post-ARG-1; **no se abre** hasta condiciones del DC.

## Condiciones para des-aparcar

1. Runner HOTFIX-ARG-1 verde — **✅** (acta
   `plan/REPORTES/ACTA-HOTFIX-ARG-1-2026-07-21.md` · CI `29865037586` ·
   Release `29865037568` @ tip `fe75269`).
2. Tick custodio: inflar satélite 03 (DE-I8) — **pendiente**.
3. GO explícito + brief al abrir.

## Criterios de aceptación (cuando abra)

- [ ] Costura 01↔03 verificable (contrato + check), no solo prosa.
- [ ] Señal / anuncio en plaza sin romper ceguera de entregables de pack.
- [ ] Dep A01 consumida; no reopen A01.

## Fuera de alcance

- Abrir ahora · brief · ejecutar DE-I8 · HOTFIX nuevo.
- Epic embajador (E01) · E02 · E03.

## Related

- Mapa: [MAPA-SIETE-PLANTAS.md](MAPA-SIETE-PLANTAS.md) · S-03
- SEMILLA-ARG nota candidata hermana
