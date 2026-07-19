# Brief de ola — I3 · Contenido: los holones (primera activación real)

_Orquestador holón 07 · 2026-07-19 · GO custodio (push raíz + arranque I3)_
_SCRIPT_SDK `main` @ remoto (push inicial DE-I13 cumplido). Skills-library
`main` @ `019a90b` (synced; no re-push)._

---

## Orden del lote (dependencias)

```
I30 (activación en casa)  →  I31 ∥ I32  →  I33
```

- **Ahora:** solo **WP-I30** 🔶. I31/I32/I33 permanecen ⬜ hasta ✅+merge de I30.
- I30 bloquea: sin instancia `WEBS/` ni plan/ como consumidor del skill, no
  hay capa de contenido para fichas (I31/I32) ni pack servido (I33).
- **WP-I27** (ola I2.5) sigue ⬜ — paralelizable con I3 según handoff, pero
  **no** arranca en este brief; no roba worker de I30.

## Cadencia de merge (regla 6 RETRO)

**Merge cada ✅ al llegar** (no esperar el lote entero). Tras ✅ I30 → merge
a `main` → brief I31∥I32 → tras ambos ✅ → merge → brief I33.

## Gobierno (reglas 1–2 RETRO)

- Este brief + BACKLOG 🔶 I30 + HANDOFF actualizado se **commitean a main
  antes** de lanzar el worker I30.
- Workers: **no** editan BACKLOG; **no** push raíz (orquestador empuja tras
  merge). Skills-library: solo si el WP lo exige (I30 suele no tocarla salvo
  leer el skill).

## Gates externos (honestos)

- Push raíz: **hecho** (GO custodio 2026-07-19; validación orquestador+
  vigilante DE-I13 implícita en el GO).
- **WP-I40** restante: Pages Source=Actions + custom domain
  `s-sdk.escrivivir.co` + DNS/HTTPS — **no** cerrado; tick ops pendiente.
- Pages skills-library (`skills.s-sdk.escrivivir.co`): DNS resuelve; HTTP
  404 / activación Pages → WP-I27 (no I3).
- I52: esperando entrega custodio→zeus (fuera de I3).

## Workers a lanzar ahora

| WP | Estado | Worker |
|---|---|---|
| WP-I30 | 🔶 | **1 worker** — brief `BRIEF-WP-I30-activacion-en-casa.md` |
| WP-I31 | ⬜ | no lanzar |
| WP-I32 | ⬜ | no lanzar |
| WP-I33 | ⬜ | no lanzar |
