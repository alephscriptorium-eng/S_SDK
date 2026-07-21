# PROYECCIÓN — items de seguridad (A-20 / WP-I75) · 2026-07-21

| dato | valor |
| ---- | ----- |
| estado | **apply OK** — issues creados ANTES del build de la página |
| alcance | items abiertos de seguridad (no backlog I completo; DC-15 opt-in del WP) |
| protocolo | trivial `gh issue create` (city/I: issues en tracker del repo de código + tracker de la casa) |
| página | `docs/guide/tuberia-protegida.md` (WP-I75) |

## Issues creados (C8 verificado)

| id | repo | nº | URL | título |
| -- | ---- | -- | --- | ------ |
| abierto-1 | Z_SDK | 4 | https://github.com/alephscriptorium-eng/Z_SDK/issues/4 | ssbId en handshake + firma de tarjeta viajera |
| abierto-2 | Z_SDK | 5 | https://github.com/alephscriptorium-eng/Z_SDK/issues/5 | ACL direccional por peer |
| abierto-3 | Z_SDK | 6 | https://github.com/alephscriptorium-eng/Z_SDK/issues/6 | Niveles de federación |
| WP-I75 | S_SDK | 21 | https://github.com/alephscriptorium-eng/S_SDK/issues/21 | WP-I75 · Página pública «La tubería, protegida» |

Verificación literal:

```text
gh issue view 4 --repo alephscriptorium-eng/Z_SDK → OPEN
gh issue view 5 --repo alephscriptorium-eng/Z_SDK → OPEN
gh issue view 6 --repo alephscriptorium-eng/Z_SDK → OPEN
gh issue view 21 --repo alephscriptorium-eng/S_SDK → OPEN
```

## Orden (PRACTICAS delta 11)

1. Apply (crear issues) — **hecho**
2. Build de la página enlazando números reales — **sigue**
3. Commit acta + página (mapa no especulativo)

No se usó `plan/.sync-map.json` de I74 (sigue `{}`): estos issues no son
proyección del BACKLOG I completo; son el subconjunto de seguridad del WP.
