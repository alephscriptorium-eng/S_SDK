# WP-A02 — Señal de presencia · SEMILLA-ARG §A2

| dato | valor |
|---|---|
| estado | 🔶 brief emitido (ola **ARG-1** · 2026-07-21) |
| track / prio | PACK / 1 · **ola ARG-1** |
| depende de | Z16 ✅ (loop) · soft Z06/Z15/Z05-f2 (enchufe futuro, no obra) |
| fuente | [SEMILLA-ARG.md](SEMILLA-ARG.md) §A2 (literal) |
| base | módulo `presencia` en `@zeus/ciudad` (pack del loop) **o** kit hermano
      en games-library — UN contrato + UN adapter mock |

## Objetivo

Enganchar el decay de Z16 a **señal de presencia**: barrio `vivo` mientras hay
sesión que lo sostiene. Mock primero; contrato enchufable a health/paradas/zona
después.

## Entregables

1. Contrato **SeñalDePresencia v1** + interfaz `FuentePresencia` — ver
   SEMILLA-ARG §A2.
2. Adapter **mock** que emite presencia desde el pack de datos.
3. Reducer del loop consume presencia como input por tick (junto a intents);
   constante `TICKS_PRESENCIA` en config del juego (no hardcode mágico).
4. Tests: señal sostenida → sigue vivo; corte → degrada en
   `TICKS_PRESENCIA + 1`; swap de adapter sin tocar reducer; clase `flujo`
   cuenta presencia pero **no** recarga energía (solo `announce` recarga).
5. Reporte: `plan/REPORTES/WP-A02-presencia.md`.

## Criterios de aceptación (contrato §A2)

- [ ] Barrio con señal sostenida N×2 ticks → sigue `vivo`.
- [ ] Corte de señal → degrada exactamente al tick `TICKS_PRESENCIA + 1`
      (reloj simulado).
- [ ] Swap adapter mock → fake distinto sin tocar el reducer (test interfaz).
- [ ] Señal clase `flujo` = presencia sí, recarga energía no.
- [ ] Diff solo en `ALCANCE_DIFF`; ceguera árbol + `git log -p`; marca OK.

## Ejes CA

- **I** — tests de integración con el loop Z16.
- **II** — contrato SeñalDePresencia congelado; fuentes reales no implementadas.
- Ceguera ampliada.

## Fuera de alcance

- Leer procesos reales (health launcher, paradas, zona) — solo enchufe.
- Acoplar reducer a fuente concreta.
- Nuevas clases de jugador.
- §A1 parte-kit (otro WP) · §A3 actas · §A4–§A6 · SEMILLA §2–§4/§6 ·
  Z05 items 3–6 · epic embajador.
- BACKLOG (solo orquestador).

## Notas

- Paralelo OK con WP-A01 (paths distintos).
- Rama: `wp/gc-a02-presencia`.
