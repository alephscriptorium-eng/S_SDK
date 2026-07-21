# WP-A03 — Acta de barrio + estado `roto` · SEMILLA-ARG §A3

| dato | valor |
|---|---|
| estado | 🔶 brief emitido (ola **ARG-1** · 2026-07-21 · gate «A1 viva» → A01 ✅) |
| track / prio | PACK / 1 · **ola ARG-1** |
| depende de | A01 ✅ (plaza / parte-kit) · Z10 ✅ (reparación como viaje) — **no** reabre ninguno |
| fuente | [SEMILLA-ARG.md](SEMILLA-ARG.md) §A3 (literal) |
| base | contrato **ActaDeBarrio v1** junto a plaza (kit hermano de `parte-kit` **o**
      módulo en `@zeus/ciudad`) + estado `roto` + misión reparar vía viaje Z10 |

## Objetivo

Regla de persistencia del ARG: las ventanas terminan; solo sobrevive lo que llegó
a la plaza o al ledger. Un visitante que adopta un barrio recibe su **acta de
barrio**; si el residente anterior no persistió, el barrio despierta `roto`
(drift doc↔realidad). Tipo de misión nuevo: **reparar un barrio roto**.

## Entregables

1. Contrato **ActaDeBarrio v1** congelado (JSDoc / `tipos.mjs`) — ver
   SEMILLA-ARG §A3.
2. Emisión / adopción de acta: el acta viaja por la plaza (consumir A01; no
   canal nuevo). Firma pura donde aplique (tick/huella como input).
3. Regla de wake: adopción sin acta persistida → barrio `roto`.
4. Misión **reparar**: un viaje (Z10 / `@zeus/linea-kit/viaje`) que, al
   completarse, cierra el drift (sale de `roto`). Adapter; **no** reopen Z10.
5. Tests: acta round-trip; wake `roto` sin persistencia; reparación vía viaje
   de juguete; ceguera.
6. Reporte: `plan/REPORTES/WP-A03-acta-barrio.md`.

## Criterios de aceptación (contrato §A3)

- [ ] Contrato `acta/1`: campos literales SEMILLA-ARG §A3; `resumen` ≤400 chars.
- [ ] Emisión → plaza/ledger: acta recuperable por visitante que adopta el barrio.
- [ ] Sin acta persistida → barrio despierta `estado: 'roto'` (drift).
- [ ] Misión reparar: viaje Z10 (fixture) completado → barrio deja de ser `roto`.
- [ ] Diff solo en `ALCANCE_DIFF`; ceguera árbol + `git log -p`; marca
      `aleph`/`scriptorium` OK (DC-GC-ceguera-marca).

## Ejes CA

- **I** — tests de emisión/adopción/wake/`roto`/reparar.
- **II** — contrato ActaDeBarrio v1 congelado; no inventar campos.
- Ceguera ampliada (plaza + packs).

## Fuera de alcance

- §A4–§A6 · SEMILLA §2–§4/§6 · Z05 items 3–6 · epic embajador.
- Reopen A01 / A02 / Z10 / Z16.
- Canal de transporte nuevo; LLM; nuevas clases de jugador.
- BACKLOG (solo orquestador).

## Notas

- Gate histórico DC-GC-arg-1 («cuando A1 viva») **satisfecho** (A01 ✅
  `c7ec7d0`). A02 ✅ no bloquea; soft-dep presencia.
- Rama: `wp/gc-a03-acta-barrio`.
- **Listo para despacho** (orquestador despacha aparte; este gobierno no spawnea worker).
