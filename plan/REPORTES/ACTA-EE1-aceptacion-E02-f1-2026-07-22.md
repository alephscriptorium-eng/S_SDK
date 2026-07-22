# Acta · EE-1 aceptación E02+f1 · 2026-07-22

| dato | valor |
| ---- | ----- |
| ola | EE-1 (EMBAJADOR-ENTRADA · corte E02+f1) |
| WPs | **WP-E02 ✅** · **WP-E01-f1 ✅** |
| tip zeus | `aab6a68c7a1368d95491855564208aacaea056c2` (`origin/main`) |
| base | `1086392d67d6398b43ccf5379062713b3c0dd486` |
| orden merge | **E02 FF** → main · **f1 rebase** sobre tip post-E02 · FF |
| criterio | E02 identidad dura (sin lock); f1 lock aditivo (`@zeus/embajador-kit`) |
| higiene zeus | worktrees removidos · ramas locales podadas · remotas wp inexistentes |
| tests tip | protocol **27/27** · webrtc-signaling **22/22** · embajador-kit **11/11** |
| nota tip | types-sync: flake local Windows CRLF (`autocrlf`); contenido = gen ignorando EOL |
| listo-R8 | **sí** — aviso vigía R8; **NO** despachar ola 2 (f2∥A5) |

## GATE PRE-MERGE · ∩ ficheros

| | E02 | f1 |
| --- | --- | --- |
| exclusivo | protocol peer-card/seat · webrtc-signaling · docs handshake · changeset | `embajador-kit/**` · `package-lock.json` |
| **∩** | **∅** (vacío) | — |
| esperado | sin lock · sin embajador-kit | solo lock como riesgo (no ∩ real con E02) |

Rebase f1: limpio; lock conserva entrada `@zeus/embajador-kit` (+ `parte-kit` en operator-bridge).

## CA de facto

| WP | ejes | tests | ceguera 14 | veredicto |
| -- | ---- | ----- | ---------- | --------- |
| E02 | I·IV | protocol 27/27 · signaling 22/22 | 0 tokens método (árbol + `git log -p`) | ✅ |
| f1 | I·II | embajador-kit 11/11 | 0 tokens método (árbol + `git log -p`) | ✅ |

## LOCAL-ONLY (no apply)

| id | acción | estado |
| -- | ------ | ------ |
| Z_SDK #4 / #5 / #6 | **no cerrar** (citar) | OPEN intactos |
| S_SDK #22 / #23 | umbrellas; sin `gh issue create` WP nuevas | sin apply |
| sync-map f1/f2/A5 | post-lote | diferido |

## Fuera de este acta

- WP-E01-f2 · WP-A5 → siguen 🔶; despacho solo tras vigía **R8** PASS.
- Ola 2 **no** despachada.
