# WP-Z15 — Lectura de `intentionalStops` en `@zeus/mcp-launcher` (+ consumo Z12)

| dato | valor |
|---|---|
| track / prio | OPS (mini-extensión Z06) / **alta** — pre-Z12-f2 |
| depende de | Z06 ✅ (actuador write-only hoy) · desbloquea Z12-f2 (guarda de intención real) |
| origen | addenda vigía A2 · `ADDENDAS-GC2-2026-07-21.md` (llegó tarde para aviso en vuelo a Z12-f1; follow-up, no reopen ✅) |
| base | `@zeus/mcp-launcher` `ProcessManager.intentionalStops` (Set write-only en stop/launch) · `@zeus/lifecycle-kit` guarda `intentionalStop` |

> **Estado canónico:** solo en [BACKLOG.md](BACKLOG.md). Esta ficha no lleva glifo de estado.

## Objetivo

Exponer **lectura** de paradas intencionales del actuador (hoy solo se escribe en
`intentionalStops` al `stop`, y se borra al `launch`) para que el cerebro de
lifecycle (Z12) pueda distinguir «apagada por mando» de crash/exit inesperado —
sin inventar política en el launcher.

## Entregables

1. API de lectura en `@zeus/mcp-launcher` (p. ej. getter / tool / campo en
   `health` o export de proceso): consultar si un `serverId`/`spawnGroup` está
   marcado como parada intencional.
2. Contrato documentado (README launcher §Z12): write en stop, clear en launch,
   read para composición; **cero** auto-restart ni XState en Z15.
3. Consumo mínimo en `@zeus/lifecycle-kit` / composición ciudad-lifecycle:
   la guarda de intención lee la señal del actuador (no solo estado interno
   del actor). Si el cableado pleno queda para f2, dejar hook + test de
   contrato y documentar gap literal.
4. Test reproducible (unit/contrato) sin fleet viva obligatoria.

## Criterios de aceptación

- [ ] Tras `stop(id)`, un consumidor puede **leer** que el grupo quedó en
      parada intencional; tras `launch(id)`, la marca desaparece.
- [ ] `health` (u otra superficie pactada) no miente: crash sin `stop` previo
      ≠ parada intencional.
- [ ] Cero XState / supervisión en mcp-launcher (frontera Z06 intacta).
- [ ] Ceguera método: cero tokens de marco en entregables zeus.
- [ ] Evidencia en reporte; vivos deferibles si **A1 npm-ci** pendiente
      (intento documentado).

## Notas

- No reabre Z06 ✅ ni Z12-f1 ✅. Mini-WP barato; caro si Z12-f2 asume la señal.
- Paralelo OK con Z04; **bloquea apertura Z12-f2** hasta ✅ (criterio custodio GC-3).
