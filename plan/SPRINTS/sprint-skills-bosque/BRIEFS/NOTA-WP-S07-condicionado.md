# NOTA · WP-S07 · publish 0.5.0 · 🔶 CONDICIONADO — NO DESPACHAR

> Replan R15 / B-3. Esta nota **no** es brief de despacho. S07 es el
> **último acto** del carril bosque. Abrir brief real solo cuando las
> tres precondiciones estén ✅.

## Precondiciones (todas obligatorias)

| WP | Qué cuenta como ✅ | Estado al emitir esta nota |
|---|---|---|
| **S05b** | merge a `main` hermano + Pages/C8 limpio (encoding catálogo) | ✅ merge `71824d0` · Docs CI [29922221260](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29922221260) · C8 vivo = verificar URL |
| **S06** | mapa docs mergeado · ceguera 0 · reporte | ✅ merge `2743176` · tip `834f706` |
| **S03** | skill `estacion-viva` en el paquete · merge `main` · ceguera 0 | ⬜ sin BRIEF/obra |

## Acto (cuando las tres ✅)

1. Bump `package.json` → **0.5.0** (debe incluir `estacion-viva`).
2. CHANGELOG: sección `0.5.0` (S01–S06 + estacion-viva).
3. Portal regen (consumo/catálogo a 0.5.0) + `verdad-checks.json`.
4. Release / publish registry + `npm view` evidencia.
5. Citar run-id VERDE CI + Release del tip (regla 16).
6. Ceguera 0 en árbol + `git log -p` reachable.

## ALCANCE (futuro brief)

- `package.json` · `CHANGELOG.md` · `docs/**` (versión) · Release
- VETO: zeus · GL · pins · DECISIONES raíz · reabrir S04

## Regla de oro

**NO empezar S07** hasta S03 ✅ + S06 ✅ + S05b ✅. El `0.5.0` sin
estacion-viva = devolución.
