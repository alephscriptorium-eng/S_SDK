# Sellado · Network-Engine como fuente histórica (WP-SDK-L05)

> **NOTARÍA.** Describir lo que hay. No inventar madurez ni destilación.

## Mandato

Sellar la generación anterior (incubación LORE-HM bajo protocolo `LANGUAGES/`
del holón 04) como **fuente histórica** del lenguaje: definición, commits de
lane LENGUA y decisiones anclados desde S. Ningún consumidor conserva
dependencia de runtime ni path hacia ella.

| dato | valor | estado |
| ---- | ----- | ------ |
| WP | WP-SDK-L05 | **verificada** |
| Árbol sellado en s-sdk | `NETWORK-ENGINE/LANGUAGES/lore-hm/` | **verificada** |
| Rol | incubación / histórico — **no** runtime consumer | **verificada** |
| Lane | LENGUA (LORE-HM) · cierra ola 6 | **verificada** |

## Qué se sella (no borrar)

| tramo | WP | contenido |
| ----- | -- | --------- |
| Inception | L02 | primitivas, tipestate, P1–P5, puerta promoción |
| SOLID | L03 | capa solid/, schemas, DIC-4, conformidad |
| Vocabulario | L04 | `vocab/registro.json` + contrato hub-101 |

## Criterio de consumidores limpios

**verificada** — Gate local:
`scripts/verificar-sellado-l05.mjs` → exit 0 si cero imports/paths hacia
`NETWORK-ENGINE` en consumidores fuera de esta incubación declarada.

Zonas tratadas como **consumidor** (deben quedar a cero):

- `package.json` / `package-lock.json` (deps `file:` / paths)
- `WEBS/**` código y manifests
- `HOLONES/**` código y manifests (el asiento `03-emmanuel` no se infla)
- cualquier `*.{ts,js,mjs,cjs,json}` fuera del allowlist

Allowlist (incubación / sellado histórico — **no** consumidor):

- `NETWORK-ENGINE/**` (este árbol)

Zonas **notariales / cantera** (citas DS-5 permitidas; no son runtime):

- `DEVOPS/`, `plan/`, `docs/`, `WPS_QUEUE/`, `.claude/`

## Junturas 01↔02 · 02↔03 · 03↔04

**Criterio notarial de madurez** (precedente tres liturgias): 🟢 = SPEC
ratificada (WP-E01) **+** línea real de dramaturgo en boca pública (WP-E11).

**Estado hoy: 🔴 — 0 de 2** (leído en
`DEVOPS/METODOLOGIA/holones/junturas/2026-07-16-dossier-notaria-tres-liturgias.md`
§4; no re-ejecutado contra emmanuel-sdk en L05 → se hereda el acta).

**Consecuencia L05:** las junturas **no** se reescriben con material excedente
LORE-HM inventado. Queda documentado `⏳ pendiente` en cada fichero de juntura
y en `junturas/README.md`. Actualización de cuerpo = **decisión pendiente**
tras acta 🟢 (DA-L01-05).

## HOLONES.md · costura, no fila

**verificada** — `DEVOPS/METODOLOGIA/HOLONES.md` mantiene **siete filas**.
LORE-HM aparece como **costura ejecutable** (sección aparte), no como holón 08.

## Asiento 03-emmanuel

**verificada** — `HOLONES/03-emmanuel/` sin inflar (DE-I8 / D-L01-12). L05 no
añade submodule ni árbol.

## Anclas

| ancla | ruta | estado |
| ----- | ---- | ------ |
| Dossier L01 | `DEVOPS/METODOLOGIA/holones/junturas/lore-hm-integracion-holonica/` | **verificada** |
| Incubación L02–L04 | `NETWORK-ENGINE/LANGUAGES/lore-hm/` | **verificada** |
| Ficha 04 (AOS externo) | `DEVOPS/METODOLOGIA/holones/04-ilustracion.md` | **verificada** — DS-5 OASIS |
| Registro holones | `DEVOPS/METODOLOGIA/HOLONES.md` | **verificada** — costura L05 |

## Verificación

```bash
node NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-sellado-l05.mjs
```

## Fuera de alcance L05

- Extraer `@logos/lore-hm` (puerta L02 + consumidores reales)
- Editar BACKLOG / merge a main
- Destilar holón 02 o inflar E
- Borrar L02–L04
