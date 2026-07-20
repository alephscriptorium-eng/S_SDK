# Ciudad Scriptorium — Índice gamificado

> **Propósito**: listado-índice directorio manejable para gamificación.  
> **Metáfora**: el monorepo es una **ciudad**; los submódulos son **barrios**; los plugins son **locales** o **naves**; los agentes/packs son **edificios** y **talleres**.  
> **Fuentes contrastadas** (2026-07-20): `.gitmodules`, `.github_V1/plugins/registry.json`, escaneo de disco (no solo docs de @ox/@indice).  
> **Pack agéntico canónico**: `.github_V1/` (`.github/` vacío de agentes en este checkout).

---

## Cómo leer la ciudad

| Capa | Carpeta | Qué contiene |
|------|---------|--------------|
| 0 | `MAPA.md` | Vista de una pantalla: plaza + barrios |
| 1 | `01-BARRIOS/` | Un barrio = un path de `.gitmodules` |
| 2 | `02-LOCALES-Y-NAVES/` | Plugins del registry (+ huecos de disco) |
| 3 | `03-EDIFICIOS/` | Agentes / chatmodes ligados a plaza, barrio o local |
| 4 | `04-PACKS/` | Prompts, instructions, skills, templates |
| G | `GRAFO/` | Prints + handoffs (`_INDICE.md`) |

Roadmap de capas: `00-CAPAS.md`.

---

## Leyenda rápida

| Símbolo | Significado |
|---------|-------------|
| 🏛️ Plaza | Núcleo `.github_V1` (gobierno de la ciudad) |
| 🏛️ Zigurat | `VsCodeExtension` — teatro-orquestador IDE (`00-ZIGURAT/`) |
| 🏘️ Barrio | Submódulo Git (`path` en `.gitmodules`) |
| 🏪 Local | Plugin pequeño / mono-agente |
| 🚢 Nave | Plugin grande (multi-agente, hub o SDK pesado) |
| 🏗️ Edificio | `.agent.md` / `.chatmode.md` |
| 🧰 Pack | prompts / instructions / skills / templates |
| 🔒 Nativo | Solo se edifica en su barrio (plugin↔submódulo) |
| 🔁 Franquicia | Reutilizable / transversal (sin submódulo propio) |

---

## Conteos contrastados (capa 1)

| Entidad | Registry / docs | Disco real |
|---------|-----------------|------------|
| Barrios (gitmodules) | Tecnico.md decía **23** | **24** (+ `ScriptoriumVps`) |
| Plugins en registry | **27** | — |
| Plugins en disco | — | **28** (`scriptorium-vps` **no** está en registry) |
| Agentes core + bridges | ~32 en AGENTS.md | **37** en `.github_V1/agents/` (13+24) |
| Agentes en plugins V1 | — | **43** (arg-board 8, scriptorium-vps 8, …) |
| Print grafo (rg hidden) | — | **169** paths en `GRAFO/print-agentes.txt` |
| Agentes full-tree (find) | — | **~164** `.agent.md` (+ chatmodes en print) |
| Handoffs V1 | — | **513** edges → `GRAFO/handoffs.md` |
| Skills | — | **1** (`dossier-feature`) |
| Prompts raíz V1 | — | **31** |
| Instructions raíz V1 | — | **2** (+ packs en plugins) |

---

## Entrada

1. Empieza por [`MAPA.md`](MAPA.md)
2. Barrios: [`01-BARRIOS/_INDICE.md`](01-BARRIOS/_INDICE.md) · fichas [`01-BARRIOS/_FICHAS.md`](01-BARRIOS/_FICHAS.md)
3. Locales/naves: [`02-LOCALES-Y-NAVES/_INDICE.md`](02-LOCALES-Y-NAVES/_INDICE.md)
4. Edificios: [`03-EDIFICIOS/_INDICE.md`](03-EDIFICIOS/_INDICE.md)
5. Packs: [`04-PACKS/_INDICE.md`](04-PACKS/_INDICE.md)
6. Grafo: [`GRAFO/_INDICE.md`](GRAFO/_INDICE.md)
7. DRY: [`07-DRY-VALIDACION.md`](07-DRY-VALIDACION.md)
Z. Zigurat: [`00-ZIGURAT/_INDICE.md`](00-ZIGURAT/_INDICE.md)
→ Handoff (rutas absolutas): [`HANDOFF.md`](HANDOFF.md)
