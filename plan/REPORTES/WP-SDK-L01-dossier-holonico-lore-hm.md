# WP-SDK-L01 · dossier-holonico-lore-hm — reporte worker

| dato | valor |
| ---- | ----- |
| WP | WP-SDK-L01 |
| agente | worker lane LENGUA |
| fecha | 2026-08-02 |
| rama | `wp/sdk-l01-dossier-holonico-lore-hm` |
| worktree | `C:/S_LAB/wt/s-sdk-wp-sdk-l01` |
| preflight | `identidad-raiz: PASS` |
| estado propuesto | **listo para revisión adversarial** |

## Entregables

| artefacto | ruta |
| --------- | ---- |
| Dossier (8 archivos) | `DEVOPS/METODOLOGIA/holones/junturas/lore-hm-integracion-holonica/` |
| Índice junturas (enlace) | `DEVOPS/METODOLOGIA/holones/junturas/README.md` |
| Check local | `…/lore-hm-integracion-holonica/scripts/verificar-dossier-l01.mjs` |
| Este reporte | `plan/REPORTES/WP-SDK-L01-dossier-holonico-lore-hm.md` |

### Archivos del dossier

- `README.md` — mandato, ubicación, herencia 112
- `FUENTES.md` — anclas DS-5, cola A, precedentes, I60/I61
- `MAPA-HOLONICO.md` — escalas 01–07, E≠barrio, unidades, playground
- `LENGUA.md` — primitivas, proyecciones, simulacro vs FM viva
- `SOLID.md` — wire/JSON-LD, identidad triple, escalones
- `MATRIZ-CONSUMIDORES.md` — consumidores, gates, modos real/simulacro
- `DECISIONES.md` — tomadas, heredadas 112/I6, abiertas
- `PLAN.md` — fases 0–6; L01 = fase 0

## Ubicación elegida

**verificada** — `DEVOPS/METODOLOGIA/holones/junturas/lore-hm-integracion-holonica/`
por precedente del dossier tres liturgias en la misma carpeta `junturas/`.

**verificada** — No se usó `.cursor/dossiers/` del plan bruto WPS_QUEUE (mesa
temporal); el material durable vive en el árbol de método.

## CA · autocomprobación

| CA | cumplimiento | nota |
| -- | ------------ | ---- |
| Mapa escalas sin confusión | ✅ | MAPA-HOLONICO §E-SDK, barrio 20, unidades, playground |
| 05–06 cantera, no runtime | ✅ | MAPA + DECISIONES D-L01-04 |
| Toda afirmación con estado | ✅ | marcadores en los 8 archivos; script min 3/archivo |
| No holón 08 ni L_SDK | ✅ | DECISIONES D-L01-01 |
| E-SDK ≠ barrio/unidad | ✅ | MAPA matriz confusión prohibida |
| HOLONES.md, fichas 02/03/04, asiento 03 sin tocar | ✅ | ver §prueba diff |
| Precedentes citados con ruta | ✅ | FUENTES + enlaces en cuerpo |
| Herencia spike 112 NO CORRE | ✅ | README, LENGUA, MATRIZ, PLAN fase 5 |
| No editar BACKLOG | ✅ | diff vacío en `plan/BACKLOG*.md` |
| No push | ✅ | commit local solo |

## Gaps / huecos para revisión adversarial

| gap | severidad | detalle |
| --- | --------- | ------- |
| G1 | menor | Varias fuentes WPS_QUEUE marcadas **hipótesis** (no releídas íntegro en L01) |
| G2 | menor | Ruta `.cursor/dossiers/prueba-de-h-m-barrio-lore` declarada pero no verificada en worktree |
| G3 | esperado | Fase 1–6 son diseño; sin package `@logos/*` ni código |
| G4 | esperado | Promoción a `2026-08-02-dossier-lore-hm.md` **decisión pendiente** custodio |
| G5 | esperado | CI s-sdk mirror (113) no existe; verde solo local |
| G6 | menor | Script check no valida cada línea prosa; solo conteo mínimo de marcas |

## Verificación local

```text
node DEVOPS/METODOLOGIA/holones/junturas/lore-hm-integracion-holonica/scripts/verificar-dossier-l01.mjs
→ verificar-dossier-l01: PASS
```

## Prueba · paths prohibidos sin diff

Comando: `git diff -- DEVOPS/METODOLOGIA/HOLONES.md DEVOPS/METODOLOGIA/holones/02-logos.md DEVOPS/METODOLOGIA/holones/03-revelacion.md DEVOPS/METODOLOGIA/holones/04-ilustracion.md HOLONES/03-emmanuel plan/BACKLOG.md plan/BACKLOG-F2.md`

Resultado: **vacío** · commit dossier `f94ce7cbc283f7e4e0f2b137ecc974cb3be8f7fb`.

## ¿Listo para revisión adversarial?

**Sí**, con reservas G1–G2 (fuentes cantera no re-leídas al 100%) y G5 (sin CI).
El dossier cumple el mandato L01: cartografía notarial, herencia 112, fronteras
de ownership y plan de fases sin obra cross-repo.

## Siguiente WP sugerido

- **WP-SDK-L02** inception lengua (tras GO custodio post-revisión)
- **HUB-113** en paralelo si el PO confirma (spike 112)
