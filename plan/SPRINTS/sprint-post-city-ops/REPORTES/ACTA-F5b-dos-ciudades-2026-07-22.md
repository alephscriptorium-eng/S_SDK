# ACTA F5b · dos ciudades registry puro · 2026-07-22

| dato | valor |
| ---- | ----- |
| WP | WP-F5b |
| ejes | I · IV + ceguera r.1 |
| scratch | `.worktrees/f5b-dos-ciudades-scratch/` (NO versionado) |
| registry | `https://npm.scriptorium.escrivivir.co` |
| estado | ✅ gates G0–G6 verdes |
| Z_SDK | #4/#5/#6 = **OPEN** (citar, no cerrar) |
| E_SDK | **veto** (no tocado) |

## Claim

Dos ciudades scratch (A+B), puertos disjuntos, `npm install` **solo C8**
(cero `file:` / `link:` / `ZEUS_SDK_ROOT`), federación vía rooms (patrón
Z04 peer+intent), intent cruzado B→A **visible** en STATE.

## Pins (sesión)

```text
zeus origin/main → (post F5a embajador B; ver acta F5)
GL   origin/main → d1783646f4364fce49ae9b421c863bc51bfad4aa
```

## npm view C8 (precondición F5a ✅)

| paquete | versión |
| ------- | ------- |
| `@zeus/startpack-kit` | **0.1.0** |
| `@zeus/startpack-ciudad` | **0.1.0** |
| `@zeus/ciudad` | **0.1.0** |
| `@zeus/socket-server` | **0.1.1** |
| `@zeus/mcp-launcher` | **0.1.1** |
| `@zeus/rooms` | **0.1.1** |

## Instalación scratch

```text
npm install --registry https://npm.scriptorium.escrivivir.co
→ added 291 packages (exit 0)
package-lock: cero resolved file:/link:
ZEUS_SDK_ROOT: unset
```

Deps directas: `@zeus/socket-server@0.1.1` · `@zeus/ciudad@0.1.0` ·
`@zeus/startpack-ciudad@0.1.0` · `@zeus/startpack-kit@0.1.0` ·
`@zeus/rooms@0.1.1` · `@zeus/protocol` · `@zeus/authority-kit` ·
`@zeus/presets-sdk`.

## Coreografía

| ciudad | socket | room | authority user |
| ------ | ------ | ---- | -------------- |
| **A** | `:13151` | `CIUDAD_F5B_A` | `ciudad-authority-a` |
| **B** | `:13152` | `CIUDAD_F5B_B` | `ciudad-authority-b` |

1. Boot socket+authority A y B desde `node_modules/@zeus/*` (cero monorepo).
2. Peer A: join + announce → STATE actors=`actor-a`.
3. Peer B: join + announce → STATE actors=`actor-b`.
4. Visitante B→A: join + announce en room A → STATE
   `actors=actor-a,actor-B-x-A` (**intent cruzado visible**).

Script: `.worktrees/f5b-dos-ciudades-scratch/e2e-dos-ciudades.mjs`
(efímero; no entra a git).

## Gates (literal)

```text
✅ G0 C8-puro (cero file:/link: · ZEUS_SDK_ROOT unset) · lock OK
✅ G1 socket A · :13151
✅ G2 authority A · room=CIUDAD_F5B_A
✅ G1 socket B · :13152
✅ G2 authority B · room=CIUDAD_F5B_B
✅ G3 announce A visible en A · actors=actor-a
✅ G4 announce B visible en B · actors=actor-b
✅ G5 intent cruzado B→A visible (STATE) · actors=actor-a,actor-B-x-A
✅ G6 puertos disjuntos · 13151≠13152
🟢 F5b dos ciudades: gates en verde
```

## Checklist C1–C8 (cierre F5b)

| id | estado |
| -- | ------ |
| **C1** | ✅ **muerta** en canal mesh ciudad (ciudad/startpack/socket C8; UI = B) |
| **C2** | ✅ **muerta** (mcp-launcher@0.1.1) |
| **C3** | ✅ documentada (S04 `*-kit`) |
| **C4** | ✅ documentada (protocol pin) |
| **C5** | ✅ **muerta** en scratch C8 (socket arranca; mcp-core-sdk resuelto) |
| **C6** | ✅ **documentada** · sello PO **B** (build-doc; private) |
| **C7** | ✅ **muerta** · scratch sin hermano monorepo |
| **C8** | ✅ documentada · quoting `"@zeus/..."` (PowerShell) |

## Ceguera / vetos

- Obra scratch efímera · sin ids WP en producto publicado.
- Z#4/#5/#6 OPEN · E_SDK veto.
