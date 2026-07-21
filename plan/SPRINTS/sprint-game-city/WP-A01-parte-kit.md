# WP-A01 — Parte de plaza (`parte-kit`) · SEMILLA-ARG §A1

| dato | valor |
|---|---|
| estado | 🔶 brief emitido (ola **ARG-1** · 2026-07-21) |
| track / prio | PACK / 1 · **ola ARG-1** |
| depende de | Z01 ✅ · Z02 ✅ · Z07 ✅ · Z05-f1 ✅ (deltas) — **no** reabre ninguno |
| fuente | [SEMILLA-ARG.md](SEMILLA-ARG.md) §A1 (literal) |
| base | paquete nuevo `parte-kit` junto a kits de lectura en zeus (`packages/engine/*-kit`) |

## Objetivo

Hacer **visible** el juego con UN mensaje común de la plaza: prosa (periódico)
+ JSON delta. Calculadora determinista — no poeta / no LLM.

## Entregables

1. Paquete `parte-kit` (rol lectura): tipos + `redactarParte` + `renderProsa` +
   `validarParte`.
2. Contrato **ParteDeCiudad v1** congelado en `tipos.mjs` (JSDoc) — ver
   SEMILLA-ARG §A1.
3. Cableado al pack mock (Z01/Z02) como fuente de deltas/eventos; publicar el
   parte como evento del canal existente (cero canal nuevo).
4. Tests: determinismo (snapshot 50 deltas), pureza, ceguera envenenada,
   tres consumidores (prosa / JSON / pendientes).
5. Reporte: `plan/REPORTES/WP-A01-parte-kit.md`.

## Criterios de aceptación (contrato §A1)

- [ ] Determinismo: `npm test` incluye snapshot — misma fixture de 50 deltas →
      parte byte-idéntico dos corridas.
- [ ] Pureza: test 2× mismo estado → deep-equal.
- [ ] Ceguera: fixture con delta envenenado → `validarParte.ok === false` y
      sin publicación.
- [ ] Tres consumidores: (a) prosa → markdown golden; (b) JSON valida schema
      `tipos.mjs`; (c) `pendientes` no vacío si hay barrios latentes/rotos.
- [ ] Frontera: grep imports del engine en `parte-kit` = solo protocolo y kits
      de lectura; cero imports del reducer del juego (`domain.mjs`).
- [ ] Diff solo en `ALCANCE_DIFF`; ceguera árbol + `git log -p` (regla 14);
      marca `aleph`/`scriptorium` OK (DC-GC-ceguera-marca).

## Ejes CA

- **I** — tests/smoke del kit ejercitan redactar/render/validar.
- **II** (parcial) — contrato de datos congelado; no inventar campos fuera de v1.
- Ceguera ampliada (patrón proyector reutilizado como guardarraíl).

## Fuera de alcance

- LLM / generación libre.
- Tocar `domain.mjs` / reducer ciudad (→ A02 si hace falta presencia).
- Canal de transporte nuevo; estado propio persistente del parte.
- §A3 actas · §A4–§A6 · SEMILLA §2–§4/§6 · Z05 items 3–6 · epic embajador.
- BACKLOG (solo orquestador).

## Notas

- Paralelo OK con WP-A02 (paths: zeus `parte-kit` vs GL `ciudad`/presencia).
- Rama: `wp/gc-a01-parte-kit`.
