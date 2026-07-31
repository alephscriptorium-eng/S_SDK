# User
Vale, guardado el plan en la codebase. Vamos a por la siguiente. Esta es más complicada porque implica que seas S (del skill, el vigía). Tenemos que recuperar todo lo que haya (don't repeat yourself, con rutas absolutas, o relativas tras explicitar la absoluta) sobre la future machine. Me gustaría recuperarla y hacer los verbos para que la prueba-de-dos en tre H y M ya incluya el "simulador de TUI". Los verbos para interaccionar. Vamos a investigar primero, y vemos como casa con lo que tenemos.

Recuerda las hornadas (la vieja, vieja: "aleph-scriptorium"; la siguiente scriptorium-v0) explicadas en HOLONES.

¿Donde está este https://escrivivir-co.github.io/para-la-voz-sdk/engine/ log? Verás que fake se hizo a partir de cosas que también tienes que aislar EL CRISTALIZADOR. Verás que es tema agéntico para generar patrón github copilot chat, vamos a generalizarlo. Entonces, hay un pack de archivos prompt para "inicializar y arrancar en modo consola que produce los resultados de la web enlazadda" simulando. Orquesta un poco de searching pero déjame ayudarte no te pierdas deepsearching.

# Agent

Mapa corto (S-read-only). Sin deepsearch.

## Dónde está el log de la web

La página [para-la-voz-sdk/engine/](https://escrivivir-co.github.io/para-la-voz-sdk/engine/) **no es un runtime**: es HTML estático que **reproduce** una sesión `log-std` fake/simulada.

| qué | ruta absoluta |
|-----|----------------|
| Fuente del log (la que cita la web) | `C:\Users\aleph\OASIS\aleph-scriptorium\DocumentMachineSDK\tmp\engine-log-2026-04-20-063151.md` |
| Página que lo maqueta | `…\DocumentMachineSDK\docs\engine.md` (`permalink: /engine/`) |
| Copia en hornada v0 | `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\emmanuel-sdk\DocumentMachineSDK\tmp\engine-log-2026-04-20-063151.md` |
| Banner/demo más corta | `…\DocumentMachineSDK\banner\future-machine\engine-log-2026-04-20-001032.md` |

El contenido que pegaste del search **coincide línea a línea** con ese `tmp/engine-log-…063151.md`.

---

## Hornadas (dónde vive la máquina)

| hornada | raíz | rol |
|---------|------|-----|
| **aleph-scriptorium** (vieja) | `C:\Users\aleph\OASIS\aleph-scriptorium\` | Holones 05–06 en docs; DocumentMachineSDK = **para-la-voz-sdk** |
| **scriptorium-v0** | `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\` | Siguiente hornada; espejo bajo `emmanuel-sdk\DocumentMachineSDK\` + `transmedia-system\` (dossier Future Machine) |
| **scriptorium actual** (07) | `C:\S\scriptorium\` + `C:\S_LAB\s-sdk\` | Joyas **aparcadas** — no reescritas: [`plan/REGISTRO-DE-JOYAS.md`](c:\S\scriptorium\plan\REGISTRO-DE-JOYAS.md) |

Puntero canónico en cadena holones (WIP, no doctrina):

`C:\S_LAB\s-sdk\DEVOPS\METODOLOGIA\holones\junturas\2026-07-16-dossier-holon-03-future-machine.md`  
(espejo: `codebase/s-sdk/…` bajo scriptorium)

---

## Qué aislar: pack “consola TUI” vs Cristalizador

**Future-machine / TUI simulada** (esto es lo que quieres para PD2):

| pieza | ruta (hornada aleph; misma forma en SCRIPTORIUM_V0) |
|-------|-----------------------------------------------------|
| Skill protocolo | `…\DocumentMachineSDK\.github\skills\engine-plan\SKILL.md` |
| Prompt activación | `…\DocumentMachineSDK\.github\prompts\engine-plan.prompt.md` |
| Dossier | `…\DocumentMachineSDK\sala\dossiers\engine-plan-sdk\` |
| Skill obra/futuros | `…\DocumentMachineSDK\.github\skills\futures-engine\SKILL.md` |
| Formato log | §3–§15 del skill: `run`, `inspect`, `gaps`, `data`, `spec`, `docs`, `trace`, `coverage`, `status`, `exit` · modos `log` / `log-std` |

**Cristalizador** (meta: genera patrón Copilot chat / infra agéntica — **no** es el simulador TUI):

| pieza | ruta |
|-------|------|
| Agente | `…\DocumentMachineSDK\.github\agents\cristalizador.agent.md` |
| Task de misión | `…\sala\archivo\sprint-cristalizacion-v1\dossiers\future-machine-universo-1\tasks\TASK-02_CRISTALIZADOR_MISION_INTERVENCION.md` |
| En e-sdk (plugin lore) | `C:\S\scriptorium\codebase\e-sdk\.github\plugins\lore-sdk\` (prompts `crear-voz`, etc.) |

En el log web, `@Cristalizador` aparece como slot **READY meta** junto a Pipeline/Portal; su oficio es **proponer infra** (agents/skills/hooks), no emitir intents de ciudad. Para generalizar el patrón Copilot: Cristalizador = fábrica; engine-plan = consola que **consume** agentes ya cristalizados.

Pipeline canónico (skill §1): Loreador → Bartleby/Archivero → Grafista → Demiurgo → Dramaturgo (+ Pipeline, Portal, Cristalizador transversales).

---

## Cómo casa con lo que tenemos (PD2 + JSON-LD)

Sin plan nuevo aún — solo encaje:

| PD2 actual (plan delta) | Analogía future-machine |
|-------------------------|-------------------------|
| Ticks `PD2-*` en mesa | Comandos TUI `run` / `inspect` / `gaps`… |
| Envelope L1–L3 + wire JSON | Línea de log `[ts] @Agente │ STATUS │ msg` |
| Vista `.jsonld` por verbo | Vista semántica del mismo evento (no sustituye el log) |
| H = autoridad / M = visitante | En TUI: un operador emite comando; el otro ve reflejo en log/state |
| Cerco playground | Simulación `log-std` → fichero bajo `MESA-PRUEBA/` (como `tmp/engine-log-*`), **sin** tocar DocumentMachineSDK |

Verbos TUI candidatos a portar a la mesa (del skill §15): `run`, `inspect {nodo}`, `gaps`, `status`, `data`, `spec`, `trace`, `coverage`, `exit` — primero como **protocolo de evidencia** H/M; el pipeline editorial completo queda joya e-sdk con GO.

---

## Rol S aquí

Como vigía: inventariar y citar rutas (DS-5), no despertar para-la-voz ni mergear OASIS. La joya sigue encolada en [`REGISTRO-DE-JOYAS.md`](c:\S\scriptorium\plan\REGISTRO-DE-JOYAS.md) / [`docs/cola.md`](c:\S\scriptorium\docs\cola.md).
