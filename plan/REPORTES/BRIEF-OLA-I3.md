# Brief de ola — I3 · Contenido: los holones (primera activación real)

_Orquestador holón 07 · 2026-07-19 · post-✅ I31+I32 (push raíz)_
_SCRIPT_SDK `main` @ origin (merge I31). Skills-library `main` @ `019a90b`
(synced; no re-push)._

---

## Orden del lote (dependencias)

```
I30 ✅  →  I31 ✅ ∥ I32 ✅  →  I33 🔶
```

- **Hecho:** **WP-I30** ✅ · **WP-I32** ✅ · **WP-I31** ✅ mergeados a
  `main` + push. Worktrees I30/I31/I32 retirados. Nav Holones 01–07 unificado.
- **Ahora:** **WP-I33** 🔶 — brief emitido; 1 worker. Pack TEST-SWARM
  servido desde la web (DA-4).
- **WP-I27** (ola I2.5) sigue ⬜ — paralelizable con I3 según handoff;
  **no** arranca en este brief.

## Cadencia de merge (regla 6 RETRO)

**Merge cada ✅ al llegar.** Tras ✅ I33 → merge a `main` → push raíz
(orquestador). Cierra ola I3 de contenido.

## Gobierno (reglas 1–2 RETRO)

- Brief I33 + BACKLOG 🔶 se **commitean a main antes** de lanzar el worker.
- Worker: **no** edita BACKLOG; **no** push raíz (orquestador empuja
  tras merge). Skills-library: solo lectura.

## Gates externos (honestos)

- Push raíz: **hecho** (GO custodio).
- **WP-I40** restante: Pages Source=Actions + custom domain
  `s-sdk.escrivivir.co` + DNS/HTTPS — **no** cerrado; tick ops pendiente.
  CA «moira en Pages» de I33: verificar en build local / preview; sitio
  vivo completo sigue I40.
- Pages skills-library: WP-I27 (no I3).
- I52: esperando entrega custodio→zeus (fuera de I3).

## Workers a lanzar ahora

| WP | Estado | Worker |
|---|---|---|
| WP-I30 | ✅ | cerrado |
| WP-I31 | ✅ | cerrado (merge+push; worktree retirado) |
| WP-I32 | ✅ | cerrado |
| WP-I33 | 🔶 | **1 worker** — `BRIEF-WP-I33-test-swarm-servido.md` |
