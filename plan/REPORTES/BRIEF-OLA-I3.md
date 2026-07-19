# Brief de ola — I3 · Contenido: los holones (primera activación real)

_Orquestador holón 07 · 2026-07-19 · post-merge I30 (push raíz GO)_
_SCRIPT_SDK `main` @ `3ec7883` (origin). Skills-library `main` @ `019a90b`
(synced; no re-push)._

---

## Orden del lote (dependencias)

```
I30 ✅  →  I31 ∥ I32 🔶  →  I33 ⬜
```

- **Hecho:** **WP-I30** ✅ mergeado a `main` + push origin; worktree
  `SCRIPT_SDK-wp-i30` retirado.
- **Ahora:** **WP-I31** ∥ **WP-I32** 🔶 — briefs emitidos; 2 workers en
  paralelo. Frontera: I31 = portada + ficha 01; I32 = fichas 02–07 +
  roadmaps. No pisar superficies ajenas.
- **WP-I33** permanece ⬜ hasta ✅+merge de ambos I31 e I32.
- **WP-I27** (ola I2.5) sigue ⬜ — paralelizable con I3 según handoff;
  **no** arranca en este brief.

## Cadencia de merge (regla 6 RETRO)

**Merge cada ✅ al llegar** (no esperar el lote entero). Tras ✅ I31 o
I32 → merge a `main` → push raíz (orquestador). Cuando ambos estén en
main → brief I33.

## Gobierno (reglas 1–2 RETRO)

- Briefs I31/I32 + BACKLOG 🔶 + HANDOFF se **commitean a main antes** de
  lanzar los workers.
- Workers: **no** editan BACKLOG; **no** push raíz (orquestador empuja
  tras merge). Skills-library: solo lectura.

## Gates externos (honestos)

- Push raíz: **hecho** (GO custodio; I30 merge+push 2026-07-19).
- **WP-I40** restante: Pages Source=Actions + custom domain
  `s-sdk.escrivivir.co` + DNS/HTTPS — **no** cerrado; tick ops pendiente.
- Pages skills-library (`skills.s-sdk.escrivivir.co`): DNS resuelve; HTTP
  404 / activación Pages → WP-I27 (no I3).
- I52: esperando entrega custodio→zeus (fuera de I3).

## Workers a lanzar ahora

| WP | Estado | Worker |
|---|---|---|
| WP-I30 | ✅ | cerrado (merge+push; worktree retirado) |
| WP-I31 | 🔶 | **1 worker** — `BRIEF-WP-I31-portada-ficha-mythos.md` |
| WP-I32 | 🔶 | **1 worker** — `BRIEF-WP-I32-fichas-roadmaps.md` |
| WP-I33 | ⬜ | no lanzar |
