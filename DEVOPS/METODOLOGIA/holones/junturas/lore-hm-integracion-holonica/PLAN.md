# Plan · LORE-HM integración holónica

> Síntesis notarial de `C:\S_LAB\s-sdk\WPS_QUEUE\plan.md` para el dossier L01.
> Fases 1–6 son **obra futura**; L01 completa solo Fase 0 (dossier global).

## Estado por fase

| fase | nombre | owner principal | estado L01 | estado global |
| ---- | ------ | --------------- | ---------- | ------------- |
| 0 | Dossier global en S | S-SDK (07) | **verificada** — este dossier | en curso |
| 1 | Inception lengua Logos | S L02 + 04 incubación | no iniciada | **hipótesis** |
| 2 | Capa SOLID | S L03 + diseño cross-cutting | no iniciada | **hipótesis** |
| 3 | Tipos Zeus | z-sdk U245–U249 | no iniciada | **decisión pendiente** — cola B |
| 4 | Activación E-SDK | e-sdk | no iniciada | **decisión pendiente** |
| 5 | Playground consumidor | hub 100–111 | simulacro (112) | **verificada** — 112 NO CORRE FM viva |
| 6 | Promoción / migración NE | custodio + consumidores | no iniciada | **decisión pendiente** |

---

## Fase 0 · Dossier global (L01 — este WP)

| # | paso | entregable | estado |
| - | ---- | ---------- | ------ |
| 0.1 | Crear dossier con 8 archivos | `junturas/lore-hm-integracion-holonica/` | **verificada** |
| 0.2 | Fijar escalas en MAPA-HOLONICO | 03=E, 04=NE, 07=S, distrito, barrio, unidades, playground | **verificada** |
| 0.3 | Cadena 01–07; 05–06 cantera | MAPA + DECISIONES | **verificada** |
| 0.4 | Promover síntesis durable | `2026-08-02-dossier-lore-hm.md` (provisional) | **decisión pendiente** — post custodio |
| 0.5 | No tocar HOLONES.md, fichas, asiento 03 | diff vacío exigido | **verificada** — forbidden |
| 0.6 | Citar precedentes + I60/I61 + DS-5 | FUENTES.md | **verificada** |
| 0.7 | Heredar veredicto 112 | README, LENGUA, MATRIZ | **verificada** |

**verificada** — Ruta elegida: `DEVOPS/METODOLOGIA/holones/junturas/lore-hm-integracion-holonica/`
(por precedente tres liturgias), no `.cursor/dossiers/` del plan bruto original.

---

## Fase 1 · Inception lengua (WP-SDK-L02)

| # | paso | gate | estado |
| - | ---- | ---- | ------ |
| 1.1 | Definir LORE-HM P1–P5 | Inception Review | **hipótesis** |
| 1.2 | Cinco primitivas + proyecciones | LENGUA.md como borrador | **verificada** — diseño |
| 1.3 | Gramática TS declarativa | demo regla no-JSON-plano | **hipótesis** |
| 1.4 | Incubar en `NETWORK-ENGINE/LANGUAGES/lore-hm` | sin deps runtime antiguas | **hipótesis** |
| 1.5 | Puerta promoción package | E01 + E11 + 2 consumidores | **verificada** — plan §12 |

---

## Fase 2 · Capa SOLID (WP-SDK-L03)

| # | paso | estado |
| - | ---- | ------ |
| 2.1 | Ingerir PR #55 como insumo (no copia) | **decisión pendiente** |
| 2.2 | Wire JSON + JSON-LD coordinados | **hipótesis** — SOLID.md |
| 2.3 | Identidad triple + PodProtocol | **hipótesis** |
| 2.4 | Escalones v1→v3 | **hipótesis** |

---

## Fase 3 · Tipos Zeus (z-sdk, fuera S)

**verificada** — Acción separada; no edita BACKLOG z desde S (`plan.md` §23).

| paquete | alcance | estado |
| ------- | ------- | ------ |
| linea-kit | todos subpaths públicos | **decisión pendiente** — U245+ |
| acta-kit | idem | **decisión pendiente** |
| linea-system | raíz + `./loader` | **decisión pendiente** |
| force-system | raíz + `./loader` | **decisión pendiente** |

---

## Fase 4 · Activación E-SDK

**verificada** — Dependencias E00/E01/E11/E12/E13 son del mundo E; S no replanifica.

| # | paso | estado |
| - | ---- | ------ |
| 4.1 | Puerto `DocumentMachineProvider` gobernado por `@logos/lore-hm` | **decisión pendiente** |
| 4.2 | Registry + pin; cero rutas OASIS runtime | **verificada** — intención |
| 4.3 | Candados E (sound system, epoché, nave no genera, …) | **verificada** — plan §34 |

**verificada** — Runtime E inexistente al medir spike 112; fase 4 bloqueada en
«procesos reales» hasta obra E.

---

## Fase 5 · Playground (hub)

| # | paso | matiz post-112 | estado |
| - | ---- | -------------- | ------ |
| 5.1 | Consumir lengua + Zeus + provider E/contingencia | simulacro si no E | **verificada** |
| 5.2 | Heredar room bilateral `prueba-de-dos` | **hipótesis** |
| 5.3 | `DeterministicDocumentMachineProvider` contingencia | **hipótesis** |
| 5.4 | LocalPodProvider files-first | **hipótesis** |
| 5.5 | Import-once Onfalo | **verificada** — viable |
| 5.6 | Cadena FM | **solo mock** — 112 | **verificada** |
| 5.7 | Verificador externo 107 | **hipótesis** |

---

## Fase 6 · Promoción y cierre generación NE

| # | paso | estado |
| - | ---- | ------ |
| 6.1 | Dos consumidores registry smoke | **decisión pendiente** |
| 6.2 | Extraer `@logos/lore-hm` fuera de NE | **decisión pendiente** |
| 6.3 | Sellar NE como fuente histórica | **hipótesis** |
| 6.4 | Actualizar junturas tras madurez | **decisión pendiente** |
| 6.5 | `HOLONES.md` sin octava fila | **verificada** — decisión tomada |

---

## Verificación (checklist plan original)

| # | criterio | L01 | estado |
| - | -------- | --- | ------ |
| V1 | Toda afirmación con fuente/estado; no holón 08; no confusión E | dossier completo | **verificada** |
| V2 | Inception P1–P5 + regla no-JSON | L02 | **hipótesis** — fuera L01 |
| V3 | SOLID wire + JSON-LD + SHACL | L03 | **hipótesis** |
| V4 | Zeus types tests + tarball | z-sdk | **hipótesis** |
| V5 | E01+E11 antes promover Logos | dossier tres liturgias | **verificada** — aún 🔴 |
| V6 | Playground E2E offline | hub | **hipótesis** — simulacro |
| V7 | Migración sin deps NE runtime | fase 6 | **decisión pendiente** |

---

## Secuencia recomendada post-L01 (spike 112 + cola A)

| orden | WP / hito | nota | estado |
| ----- | --------- | ---- | ------ |
| 1 | L01 dossier (este) | verde local | **verificada** — en commit |
| 2 | HUB-113 CI mirror | P0 ola 0 | **decisión pendiente** — GO custodio |
| 3 | L02 inception | tras aceptar L01 | **decisión pendiente** |
| 4 | HUB-100+ con CA «simulacro» | hereda 112 | **decisión pendiente** |
| 5 | Cola B tipos Zeus | paralelo posible | **decisión pendiente** |

---

## WPs S-SDK lane LENGUA (referencia BACKLOG-F2)

| WP | tema | relación L01 | estado |
| -- | ---- | ------------ | ------ |
| L01 | dossier holónico | **este entregable** | **verificada** |
| L02 | inception lengua | siguiente P0 | **decisión pendiente** |
| L03+ | SOLID, anclas, … | ver BACKLOG-F2 | **hipótesis** — no detallado en L01 |
