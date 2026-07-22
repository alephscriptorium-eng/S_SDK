# Acta · S04 aceptación skill embajador · 2026-07-22

| dato | valor |
| ---- | ----- |
| WP | **WP-S04 ✅** |
| tip zeus | `cbde42e11154a0cc3a787047b034eed6f8e91704` (`origin/main`) |
| obra citada | `3c9387b` → rebase onto `2917634` (UTF-8 docs ya en main = `ccb4113` equiv.) → FF |
| tip S | `dfe0ff5` (acta) · padre `207bf29` (WW cierre ya pin zeus `cbde42e`) · reporte `df2fa51` |
| ejes | **I·V** + ceguera regla 1 |
| tests | embajador-kit **13/13** |
| ceguera | árbol skill + `git log -p` main..tip = **0** hits |
| higiene zeus | rama `wp/pco-s04-skill-embajador` podada (local+remote) · WW wt **intacta** |
| Z_SDK #4/#5/#6 | **OPEN** (no cerrar) |
| E_SDK | **veto** |
| WW-* | **no tocado** (merge webs en curso — tips coordinados) |

## CA

| eje | evidencia | veredicto |
| -- | --------- | --------- |
| I | skill apunta APIs peercard reales + tests kit emitir→consumir | ✅ |
| V | mapa C8 vs private; no impone publish | ✅ |
| ceguera 1 | `WP-*` / tokens método = 0 | ✅ |

## Follow-up

- **Publish skill empaquetado:** `files: ["skill"]` en tip; **sin changeset** en obra S04.
  Release bot encolado post-push (`Release` run tip) — si abre PR version:
  seguir bump `@zeus/embajador-kit` para que el tarball lleve `skill/`.
  Si no: follow-up changeset manual.

## Fuera

- Cerrar Z#4/#5/#6 · E_SDK · BACKLOG bosque · WW docs.
