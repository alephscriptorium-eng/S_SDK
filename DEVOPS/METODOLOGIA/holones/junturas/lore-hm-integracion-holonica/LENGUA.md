# Lengua · LORE-HM (diseño de inception)

> Fase de **diseño** para WP-SDK-L02; este dossier (L01) no crea package ni
> árbol en Network-Engine. Toda implementación queda **decisión pendiente** hasta
> Inception Review + gates E.

## Qué es LORE-HM

**verificada** — LORE-HM **no** es holón 08 ni framework del playground (`WPS_QUEUE/plan.md` §intro).

**verificada** — Es una **lengua común** para ceremonia H/M (anfitrión /
operador Future Machine): roles y capacidades, no tipos de ser.

| atributo | valor | estado |
| -------- | ----- | ------ |
| Incubación técnica | protocolo holón 04 (Network-Engine LANGUAGES) | **hipótesis** — ruta OASIS en FUENTES; no verificada en L01 |
| Destino conceptual | capacidad **Logos (02)** → namespace `@logos/lore-hm` | **hipótesis** — paquete no extraído |
| Activación | E-SDK (03) vía `DocumentMachineProvider` | **decisión pendiente** — obra E |
| Notaría | S-SDK (07) registra origen, pin, junturas | **verificada** — plan §12, DE-I5 |

## Contrato de inception (P1–P5)

**decisión pendiente** — Responder formalmente P1–P5 en L02; aquí se ancla la
intención del plan cola A §6:

| pregunta | respuesta provisional | estado |
| -------- | --------------------- | ------ |
| P1 ¿Qué problema? | autoridad H vs operación M con leases, pods, actividades legales | **hipótesis** |
| P2 ¿Quién habla? | Peer (sujeto); H/M son roles | **verificada** — plan §6 |
| P3 ¿Qué no es? | no barrio, no holón, no segundo JSON plano sin semántica | **verificada** — plan + CA L01 |
| P4 ¿Cómo se valida? | reference checker + reglas no expresables en config plana | **hipótesis** — demo en L02 |
| P5 ¿Cuándo promover? | Inception Review + E01 + línea E11 + dos consumidores compilando | **verificada** — plan §12; criterio alineado dossier tres liturgias |

## Ontología nuclear (cinco primitivas)

**verificada** — Máximo **cinco** primitivas; el resto son proyecciones (`plan.md` §6–7).

| primitiva | semántica | estado |
| --------- | --------- | ------ |
| `Peer` | sujeto que actúa; H y M son roles/capacidades | **verificada** |
| `Unit` | agente o máquina operable | **verificada** |
| `Lease` | autorización temporal y revocable | **verificada** |
| `Activity` | hecho causal dentro de la ceremonia | **verificada** |
| `Artifact` | entidad producida o consumida | **verificada** |

### Proyecciones (no primitivas)

| proyección | mapeo | estado |
| ---------- | ----- | ------ |
| Pod | almacenamiento de Unit | **verificada** — plan §7 |
| Línea / Grafo / Universo / Corto | clases de Artifact | **verificada** |
| Barrio | escenario / contenido (ej. lore-voz #20) | **verificada** |
| Document Machine | provider / capacidad del barrio | **verificada** |

## Semántica no reducible a JSON plano

**hipótesis** — El JSON describe una **corrida**; el lenguaje decide legalidad
(`plan.md` §8). Candidatas a regla no expresable en config plana (demostrar en L02):

| regla | por qué no es solo JSON | estado |
| ----- | ----------------------- | ------ |
| tipestate de Unit | transiciones dependen de estado phantom | **hipótesis** |
| autoridad temporal | grant/deny con expiración y revocación | **hipótesis** |
| `request → grant\|deny → materialize` | fallo atómico y provenance | **hipótesis** |
| chequeo exhaustivo de transiciones | discriminated unions + exhaustive check | **hipótesis** |

## Gramática TypeScript declarativa

**verificada** — Intención: const type parameters, uniones discriminadas, IRIs
y digests branded, phantom states, projection functions (`plan.md` §9).

**decisión pendiente** — Sintaxis textual o parser solo si TypeScript resulta
insuficiente (plan §9).

**decisión pendiente** — No crear `L_SDK` ni repo-mundo nuevo (CA L01).

## Namespace `@logos/*`

**verificada** — Candidato del holón 02 conforme dossier tres liturgias
(`2026-07-16-dossier-notaria-tres-liturgias.md`).

**hipótesis** — `@logos/lore-hm` como package publicable tras puerta de promoción.

## Incubación y extracción

| paso | declaración | estado |
| ---- | ----------- | ------ |
| Incubar en `NETWORK-ENGINE/LANGUAGES/lore-hm` | aprovechar protocolo 04 sin deps runtime antiguas | **hipótesis** — no ejecutado en L01 |
| Puerta de promoción | Inception Review + E01 + E11 + 2 consumidores `tsc` | **verificada** — plan §12 |
| Registro S | origen y pin; no copia de árbol | **verificada** — DS-5 / DE-I5 |
| Destino final del package | package repo dedicado o library 04 | **decisión pendiente** — plan Further Considerations §1 |

## Simulacro vs FM viva (herencia 112)

**verificada** — Mientras E no publique superficie de proceso:

- el lenguaje **describe** ceremonias sobre simulacro playground;
- unidades FM se modelan con `mock=true` / handlers deterministas;
- `.agent.md` OASIS **no** es entrypoint runtime (`REPORTE-WP-HUB-112`).

**verificada** — Onfalo: piezas existen para **import-once**; no implican FM viva.

## Relación con tres liturgias (zeus / Hilbert / emmanuel)

**verificada** — El dossier tres liturgias fija madurez del 02 en 🔴 hasta
E01+E11 (`2026-07-16-dossier-notaria-tres-liturgias.md` §0, §4).

**hipótesis** — LORE-HM unifica semántica de forces (01), mapa/dossier (Hilbert)
y línea emmanuel (03) sin colapsar las tres liturgias en una sola antes de
madurez notarial.
