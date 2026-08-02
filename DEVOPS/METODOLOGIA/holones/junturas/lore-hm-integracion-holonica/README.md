# Dossier · LORE-HM integración holónica

> **NOTARÍA (2026-08-02). Describir, no prescribir.** Este dossier cartografía
> el programa LORE-HM como costura entre holones 01–04, gobernada y notariada
> por el holón 07. No crea holón 08, no prescribe implementación cross-repo ni
> modifica `HOLONES.md`, fichas 02/03/04 ni el asiento `HOLONES/03-emmanuel`.
> Regla de oro: toda afirmación lleva estado **verificada** / **hipótesis** /
> **decisión pendiente**; la evidencia se apunta por ruta absoluta (DS-5).

## Ubicación y mandato

| dato | valor |
| ---- | ----- |
| Ruta canónica del dossier | `C:\S_LAB\s-sdk\DEVOPS\METODOLOGIA\holones\junturas\lore-hm-integracion-holonica\` |
| WP | `WP-SDK-L01` · lane LENGUA (LORE-HM) |
| Rama de trabajo | `wp/sdk-l01-dossier-holonico-lore-hm` |
| Precedente de ubicación | **verificada** — el dossier de las tres liturgias vive bajo `junturas/` (`C:\S_LAB\s-sdk\DEVOPS\METODOLOGIA\holones\junturas\2026-07-16-dossier-notaria-tres-liturgias.md`); este dossier sigue el mismo patrón: material excedente entre holones, no ficha de holón. |
| Alternativa descartada | **decisión pendiente** — `DEVOPS/METODOLOGIA/lengua/` no tiene precedente de dossier en S-SDK hoy; se prefirió `junturas/` por coherencia notarial. |

**Mandato (ficha L01):** entregar el mapa holónico, la lengua, la capa SOLID, la
matriz de consumidores, las decisiones abiertas y el plan de fases — sin obra
runtime, sin package `@logos/*`, sin tocar mundos hermanos.

## Contenido del dossier

| archivo | función |
| ------- | ------- |
| [`FUENTES.md`](FUENTES.md) | anclas leídas y cantera (WPS_QUEUE); DS-5 |
| [`MAPA-HOLONICO.md`](MAPA-HOLONICO.md) | escalas 01–07, distrito, barrio, unidades, playground |
| [`LENGUA.md`](LENGUA.md) | contrato de inception y primitivas (diseño, no código) |
| [`SOLID.md`](SOLID.md) | wire JSON + vista JSON-LD, identidad triple, escalones |
| [`MATRIZ-CONSUMIDORES.md`](MATRIZ-CONSUMIDORES.md) | quién consume qué y con qué gate |
| [`DECISIONES.md`](DECISIONES.md) | decisiones tomadas, abiertas y heredadas |
| [`PLAN.md`](PLAN.md) | fases 0–6 del programa; dependencias y verificación |

## Herencia del spike HUB-112

**verificada** — El veredicto global del spike es **NO CORRE** para Future
Machine viva con procesos reales hoy:
`C:\S_LAB\wt\scriptorium-wp-hub-112\playground\prueba-de-H-M\spike\REPORTE-WP-HUB-112.md`
(rama `wp/hub-112-hm-spike-viabilidad`, commit `03a051142058ca622533bb7bab98a690d66cd2c8`).

Consecuencia para este dossier y para la lengua:

- **verificada** — Hasta que E-SDK (holón 03) exponga superficie de proceso
  publicada, el lenguaje y el playground describen un **simulacro** con
  handlers deterministas y `mock=true`, no una FM OASIS invocable.
- **verificada** — Las piezas Onfalo existen en disco (import-once medido en
  el spike); son material de cantera, no dependencia runtime.
- **hipótesis** — `DeterministicDocumentMachineProvider` en el playground
  permanece como contingencia marcada `contingency=true` hasta provider real E.

## Promoción futura (fuera de L01)

**decisión pendiente** — Tras revisión del custodio, una síntesis durable podría
promoverse a
`DEVOPS/METODOLOGIA/holones/junturas/2026-08-02-dossier-lore-hm.md` (nombre
provisional). Este WP **no** ejecuta esa promoción.

## Verificación local

Script opcional: [`scripts/verificar-dossier-l01.mjs`](scripts/verificar-dossier-l01.mjs).
Ejecutar desde la raíz del mundo S con identidad PASS. **verificada** — no
sustituye CI de s-sdk (addenda 113 sigue P0; mirror CI **decisión pendiente**).
