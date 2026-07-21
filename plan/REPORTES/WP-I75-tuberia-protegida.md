# Reporte — WP-I75 · Página «La tubería, protegida»

| dato | valor |
| ---- | ----- |
| WP | WP-I75 |
| rama | `wp/i75-tuberia-protegida` |
| agente | gobierno+obra · mismo brazo |
| fecha | 2026-07-21 |
| issue casa | https://github.com/alephscriptorium-eng/S_SDK/issues/21 |

## Entregables

| pieza | path |
| ----- | ---- |
| Página | `docs/guide/tuberia-protegida.md` |
| Nav/sidebar | `docs/.vitepress/config.mjs` |
| Enlace ficha 01 | `docs/holones/01-mythos.md` §Confianza |
| Proyección abiertos | `plan/REPORTES/PROYECCION-I75-seguridad-2026-07-21.md` |
| Brief | `plan/REPORTES/BRIEF-WP-I75-tuberia-protegida.md` |

## CA (cinco)

| # | criterio | veredicto | evidencia |
| - | -------- | --------- | --------- |
| 1 | Página navegable desde nav | **PASS** | entry nav + sidebar `/guide/tuberia-protegida`; `docs:build` EXIT=0; `dist/guide/tuberia-protegida.html` existe |
| 2 | Claims «hoy» trazables | **PASS** | tabla con WSS, handshake, TTL 1h, D-40/`b67b9ca`, catalog gate |
| 3 | Abiertos → issues reales | **PASS** | `gh issue view` Z_SDK#4/#5/#6 = OPEN; enlaces en página |
| 4 | Proyección antes del build | **PASS** | acta PROYECCION-I75; issues creados pre-build |
| 5 | Ceguera + voz | **PASS** | grep mediación = 0; «pronto»/«en breve» = 0 |

## Ceguera (literal)

```text
Select-String docs/guide/tuberia-protegida.md -Pattern
  "vig[ií]a|vigilancia|addenda|bit[aá]cora|estaci[oó]n|revisi[oó]n externa"
→ 0
```

## Fuera de alcance (honrado)

- Sin HOTFIX · sin CAMPANAS · sin DE-I8
- Sin tocar submodules HOLONES/
- Sin proyección del BACKLOG I completo (solo items de seguridad + WP-I75)

## Desviaciones

Ninguna bloqueante. C8 de navegación en sitio vivo queda para el deploy
tras push a `main` (Pages); build local verde.
