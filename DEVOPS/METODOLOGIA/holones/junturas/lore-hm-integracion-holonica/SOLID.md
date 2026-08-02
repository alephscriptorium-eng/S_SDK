# Capa SOLID · LORE-HM

> Diseño desde v1 con adapters escalonados. PR #55 es insumo **abierto**, no
> implementación afirmada.

## Fuente provisional

| insumo | ruta / URL | estado |
| ------ | ---------- | ------ |
| Modelo SOLID city | `https://github.com/alephscriptorium-eng/Z_SDK/pull/55` | **verificada** — OPEN al redactar L01; **decisión pendiente** — revalidar estado al iniciar obra SOLID |
| Research DRAFT | `C:\S_LAB\s-sdk\WPS_QUEUE\DRAFT\researches\solid-city.md` | **hipótesis** — cantera; no releído íntegro en L01 |

**verificada** — No copiar árbol del PR en L01 (DS-5).

## Dos representaciones coordinadas

| representación | autoridad | validación | estado |
| -------------- | --------- | ---------- | ------ |
| Wire JSON ejecutable | **autoritativa** para corrida y hashes | JSON Schema + sellado por bytes | **verificada** — plan §14 |
| Vista JSON-LD / RDF | **no autoritativa** salvo familias con canonicalización explícita | SHACL | **verificada** — plan §14 |

**verificada** — Reusar vocabularios: AS2 (Activity/Actor/Object), PROV-O
(derivación), DCTERMS (metadatos) antes de acuñar `hm:` / `lore:` (`plan.md` §15).

## Identidad triple (no fusionar)

| credencial | rol | estado |
| ---------- | --- | ------ |
| WebID | identidad Solid / federación | **verificada** — plan §16 |
| PeerCard | identidad bilateral H/M en room | **verificada** |
| ssbId | identidad SSB / mesh | **verificada** |

**verificada** — Cada vínculo es attestation verificable; degradación honesta si
falta una dimensión (`plan.md` §16).

## PodProtocol vs providers

| provider | uso | estado |
| -------- | --- | ------ |
| `LocalPodProvider` | contingencia files-first playground; IRI lógica; `simulation=true` | **verificada** — plan §17 |
| `SolidPodProvider` | adaptador futuro CSS/LDP | **hipótesis** |
| Regla común | solo el servidor Pod decide acceso; relay sin autoridad | **verificada** — plan §18 |

**verificada** — H puede emitir lease y transportar token; Pod evalúa WAC/ACP;
ausencia/expiración/firma/scope insuficiente → deny (`plan.md` §18).

## Planos de eventos separados

**verificada** — Room/L2 y Solid Notifications/L1 **no** se reenvían uno como
otro; se correlacionan por activity id, trace y provenance (`plan.md` §19).

## Bridge MCP ↔ Solid

| aspecto | regla | estado |
| ------- | ----- | ------ |
| resources | passthrough misma URI | **verificada** — plan §20 |
| tools | actividades que pueden producir artefactos en Pod | **verificada** |
| auth | token relay | **verificada** |
| tool name | **nunca** predicado RDF automático | **verificada** |

## Política de hash (DIC-4)

**verificada** — SHA-256 de bytes sellados por defecto; RDFC-1.0 solo donde
igualdad semántica sea requisito medido; vista JSON-LD no altera `huellaLedger`
existente (`plan.md` §21).

## Escalones de conformance

| versión | alcance | estado |
| ------- | ------- | ------ |
| v1 | local simulado (LocalPodProvider) | **verificada** — plan §22 |
| v1.1 | JSON-LD + SHACL | **hipótesis** |
| v2 | CSS local WebID/WAC/ACP | **hipótesis** |
| v3 | notifications / federación | **hipótesis** |

**verificada** — Arquitectura completa en plan desde v1; adapters reales llegan
después (`plan.md` §22).

## Evidencia por actividad (playground)

**verificada** — Por actividad: wire JSON sellado + vista JSON-LD + evento Pod;
reporte desde eventos; verificador externo comprueba causalidad, hashes, ACL,
transiciones, provenance, cobertura, shutdown offline (`plan.md` §40).

**hipótesis** — Implementación concreta en hub lane 100–111; fuera de L01.

## Wire JSON-LD (DRAFT)

**hipótesis** — Plan DRAFT `pd2_verbos_json-ld_9d69d81d.plan.md` propone wire +
vista JSON-LD; integrar en L02/L03 tras revisión custodio.
