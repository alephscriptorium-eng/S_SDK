# -*- coding: utf-8 -*-
"""Capa 6: generar fichas profundas por barrio."""
from __future__ import annotations

from pathlib import Path

OUT = Path("ARCHIVO/DEVOPS/CIUDAD/01-BARRIOS")

# Datos contrastados 2026-07-20
BARRIOS = [
    {
        "n": 1,
        "path": "VsCodeExtension",
        "git": "vscode-alephscript-extension",
        "branch": "integration/beta/scriptorium",
        "distrito": "🏛️ Zigurat (host)",
        "runtime": "TypeScript / VS Code Extension (Zigurat)",
        "puertos": [],
        "plugins": [],
        "plugins_note": "Capa Z: ver ARCHIVO/DEVOPS/CIUDAD/00-ZIGURAT/",
        "agentes": 6,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "theatrical elenco — ver 00-ZIGURAT/04-ELENCO-TEATRAL.md",
        "readme": False,
        "blurb": "Zigurat: teatro-orquestador IDE de la ciudad.",
    },
    {
        "n": 2,
        "path": "MCPGallery",
        "git": "alephscript-mcp-presets-site",
        "branch": "integration/beta/scriptorium",
        "distrito": "Runtime/MCP",
        "runtime": "Next.js + MCP mesh SDKs",
        "puertos": [
            "3001 xplus1 / VectorMachineUI overlap doc",
            "3002 wiki-browser",
            "3003 devops",
            "3004 state-machine",
            "3006 prolog-mcp",
            "3010 socket-io-mesh",
            "3020 typed-prompt-mcp",
            "3050 launcher",
            "3100 copilot-logs (mcp.json)",
            "3008 firehose (mcp.json)",
        ],
        "plugins": ["mcp-presets"],
        "plugins_note": "Afinidad fuerte; plugin sin campo submodule en registry",
        "agentes": 10,
        "skills": 0,
        "prompts": 13,
        "chatmodes": 3,
        "edificios": ".github/agents: zeus-architect, mcpgaia, frontend/backend/integration…",
        "readme": True,
        "blurb": "Catálogo y mesh de servidores MCP del ecosistema.",
    },
    {
        "n": 3,
        "path": "VibeCodingSuite",
        "git": "as-utils-sdk",
        "branch": "integration/beta/scriptorium",
        "distrito": "Infra/UI",
        "runtime": "Node.js utils / workspace",
        "puertos": [],
        "plugins": [],
        "plugins_note": "Sin local nativo; 2 chatmodes",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 2,
        "edificios": "solo chatmodes",
        "readme": False,
        "blurb": "Suite de utilidades / vibe coding del ecosistema.",
    },
    {
        "n": 4,
        "path": "AAIAGallery",
        "git": "as-gym",
        "branch": "integration/beta/scriptorium",
        "distrito": "Runtime/MCP",
        "runtime": "TypeScript (as-core) + socket.io",
        "puertos": ["3007 aaia-mcp-server"],
        "plugins": ["aaia-editor"],
        "plugins_note": "submodule path registry: AAIAGallery/as-core",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "agentes del local viven en plaza plugin aaia-editor",
        "readme": True,
        "blurb": "Almas/paradigmas IA (FIAs) para el runtime AAIA.",
    },
    {
        "n": 5,
        "path": "BlockchainComPort",
        "git": "alephscript-network-sdk",
        "branch": "integration/beta/scriptorium",
        "distrito": "Red/stream",
        "runtime": "Docker / Oasis (Scuttlebutt)",
        "puertos": ["Docker compose (sin puerto único canónico en Tecnico)"],
        "plugins": ["network"],
        "plugins_note": "Nativo registry → alephscript-network-sdk",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "plugin network en plaza",
        "readme": True,
        "blurb": "Oasis/Scuttlebutt: sync P2P de BOEs entre Scriptoriums.",
    },
    {
        "n": 6,
        "path": "StreamDesktop",
        "git": "kick-aleph-bot",
        "branch": "integration/beta/scriptorium",
        "distrito": "Red/stream",
        "runtime": "Node.js/TypeScript (Kick gateway)",
        "puertos": [],
        "plugins": [],
        "plugins_note": "Sin plugin registry; barrio de stream",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "—",
        "readme": True,
        "blurb": "Gateway Kick.com ↔ Scriptorium.",
    },
    {
        "n": 7,
        "path": "StreamDesktopAppCronos",
        "git": "kick-aleph-crono-bot",
        "branch": "integration/beta/scriptorium",
        "distrito": "Red/stream",
        "runtime": "HTML/CSS/JS overlay",
        "puertos": [],
        "plugins": [],
        "plugins_note": "Sin plugin registry",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "—",
        "readme": True,
        "blurb": "Overlay visual para streams (Cronos).",
    },
    {
        "n": 8,
        "path": "NovelistEditor",
        "git": "mcp-novelist",
        "branch": "integration/beta/scriptorium",
        "distrito": "Runtime/MCP",
        "runtime": "Node.js MCP",
        "puertos": ["3066 AlephAlpha / Novelist MCP"],
        "plugins": ["novelist"],
        "plugins_note": "Nativo; registry prompts_count desalineado vs disco plugin",
        "agentes": 4,
        "skills": 1,
        "prompts": 1,
        "chatmodes": 0,
        "edificios": "albacea, editor, escritor, lector (.github/agents)",
        "readme": True,
        "blurb": "Editor narrativo con memoria MCP (Novelist).",
    },
    {
        "n": 9,
        "path": "BlocklyEditor",
        "git": "blockly-alephscript-sdk",
        "branch": "integration/beta/scriptorium",
        "distrito": "Editores",
        "runtime": "Angular / Blockly SDK",
        "puertos": [],
        "plugins": ["blockly-editor"],
        "plugins_note": "Nativo; skills densas en SDK (espejo ARCHIVO/MPC-MESH)",
        "agentes": 0,
        "skills": 21,
        "prompts": 10,
        "chatmodes": 0,
        "edificios": "agente del local en plaza; skills en barrio",
        "readme": True,
        "blurb": "Lógica visual Blockly para agentes-personaje / Teatro.",
    },
    {
        "n": 10,
        "path": "WiringEditor",
        "git": "node-red-alephscript-sdk",
        "branch": "integration/beta/scriptorium",
        "distrito": "Editores",
        "runtime": "Node-RED",
        "puertos": ["1880 Node-RED"],
        "plugins": ["wire-editor", "escribiente"],
        "plugins_note": "Multi-local: wire + escribiente (escribiente sin bridge propio)",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "vía plugin_ox_wireeditor",
        "readme": True,
        "blurb": "Flujos asíncronos Node-RED + nodos AlephScript / Escribiente.",
    },
    {
        "n": 11,
        "path": "PrologEditor",
        "git": "iot-sbr-logica-para-bots",
        "branch": "integration/beta/scriptorium",
        "distrito": "Editores",
        "runtime": "SWI-Prolog + Angular UI + Express",
        "puertos": ["5001 UI", "8000 backend", "3006 MCP Prolog (mesh)"],
        "plugins": ["prolog-editor"],
        "plugins_note": "Nativo",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "vía plugin_ox_prologeditor",
        "readme": True,
        "blurb": "Editor y runtime de lógica Prolog para bots/SBR.",
    },
    {
        "n": 12,
        "path": "TypedPromptsEditor",
        "git": "alephscript-typed-prompting",
        "branch": "integration/beta/scriptorium",
        "distrito": "Editores",
        "runtime": "Vite",
        "puertos": ["3019 UI Vite", "3020 typed-prompt-mcp"],
        "plugins": ["typed-prompting"],
        "plugins_note": "Nativo; Tecnico menciona también 5000 en registry legacy",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "vía plugin_ox_typedprompting",
        "readme": True,
        "blurb": "Ontologías NL↔JSON / contratos entre agentes.",
    },
    {
        "n": 13,
        "path": "WorkflowEditor",
        "git": "alephscript-n8n-like-editor",
        "branch": "integration/beta/scriptorium",
        "distrito": "Editores",
        "runtime": "Angular 18 + D3 + Monaco",
        "puertos": ["4200 Angular dev", "4000 SSR"],
        "plugins": ["n8n-editor"],
        "plugins_note": "Nativo; conector a n8n (no reemplazo)",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "vía plugin_ox_n8neditor",
        "readme": True,
        "blurb": "Diseñador visual de workflows estilo n8n.",
    },
    {
        "n": 14,
        "path": "WiringAppHypergraphEditor",
        "git": "wiki-racer",
        "branch": "integration/beta/scriptorium",
        "distrito": "Editores",
        "runtime": "TypeScript (wiki-racer)",
        "puertos": [],
        "plugins": ["wiring-app", "arg-board-app", "hypergraph-editor"],
        "plugins_note": "Multi-local (3 tipologías) sobre mismo submodule",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "tres locales en plaza",
        "readme": True,
        "blurb": "Motor wiki-racer: flows, state-machine ARG y hipergrafos.",
    },
    {
        "n": 15,
        "path": "CopilotEngine",
        "git": "CopilotEngine",
        "branch": "integration/beta/scriptorium",
        "distrito": "Runtime/MCP",
        "runtime": "TypeScript (fork vscode-copilot-chat)",
        "puertos": [],
        "plugins": [],
        "plugins_note": "Motor Copilot; sin plugin; @ox lo consulta para system messages",
        "agentes": 1,
        "skills": 0,
        "prompts": 1,
        "chatmodes": 0,
        "edificios": "Plan.agent.md",
        "readme": True,
        "blurb": "Motor Copilot Chat: flujos User Prompt → System Message → Output.",
    },
    {
        "n": 16,
        "path": "StateMachine",
        "git": "StateMachine",
        "branch": "integration/beta/scriptorium",
        "distrito": "Runtime/MCP",
        "runtime": "TypeScript MCP driver",
        "puertos": ["3004 state-machine-server (mesh)"],
        "plugins": [],
        "plugins_note": "Sin plugin registry; alimenta MCP state-machine",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "—",
        "readme": True,
        "blurb": "Gamificación multi-UI / driver de máquinas de estado MCP.",
    },
    {
        "n": 17,
        "path": "AgentLoreSDK",
        "git": "AgentLoreSDK",
        "branch": "(sin branch en .gitmodules)",
        "distrito": "Lore/voz",
        "runtime": "Markdown + templates / bots lore",
        "puertos": [],
        "plugins": [],
        "plugins_note": "Sin plugin registry; skills propias (parking-naves, cristalizador…)",
        "agentes": 5,
        "skills": 6,
        "prompts": 6,
        "chatmodes": 0,
        "edificios": "bot-biblioteca, bot-hilbert, bot-parking, bot-taller, bot-volatil",
        "readme": True,
        "blurb": "SDK/lore de agentes documentales (mcp-agent-lore-sdk).",
    },
    {
        "n": 18,
        "path": "BotHubSDK",
        "git": "BotHubSDK",
        "branch": "integration/beta/scriptorium",
        "distrito": "Red/stream",
        "runtime": "Bun ≥1.1 / TypeScript / grammY",
        "puertos": [],
        "plugins": ["bot-hub-sdk"],
        "plugins_note": "Nativo; tracking feat/sds_iacm",
        "agentes": 0,
        "skills": 0,
        "prompts": 8,
        "chatmodes": 0,
        "edificios": "vía plugin_ox_bothubsdk",
        "readme": True,
        "blurb": "Bots Telegram + protocolo IACM inter-agente.",
    },
    {
        "n": 19,
        "path": "UISDKThreejs",
        "git": "UISDKThreejs",
        "branch": "(sin branch en .gitmodules)",
        "distrito": "Infra/UI",
        "runtime": "Three.js gamify UI",
        "puertos": [],
        "plugins": [],
        "plugins_note": "Sin plugin; candidato UI gamificación",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "—",
        "readme": False,
        "blurb": "UI Three.js para gamificación (threejs-gamify-ui).",
    },
    {
        "n": 20,
        "path": "DocumentMachineSDK",
        "git": "DocumentMachineSDK",
        "branch": "integration/beta/scriptorium",
        "distrito": "Lore/voz",
        "runtime": "Markdown + Jekyll / SDK editorial",
        "puertos": [],
        "plugins": ["lore-sdk"],
        "plugins_note": "Nave: bridge + agentes .github/agents + mod/agents",
        "agentes": 13,
        "skills": 6,
        "prompts": 57,
        "chatmodes": 0,
        "edificios": "bartleby, archivero, cristalizador, portal, dramaturgo + mod/*",
        "readme": True,
        "blurb": "SDK editorial: cristalizar Voces desde corpus ideológico.",
    },
    {
        "n": 21,
        "path": "onfalo-asesor-sdk",
        "git": "onfalo-asesor-sdk",
        "branch": "integration/beta/scriptorium",
        "distrito": "Lore/voz",
        "runtime": "Markdown + TypeScript SDK",
        "puertos": [],
        "plugins": ["consejo-asesor"],
        "plugins_note": "Nave: 14 agentes consejo en SDK; bridge 1 en plaza",
        "agentes": 33,
        "skills": 1,
        "prompts": 12,
        "chatmodes": 0,
        "edificios": "consejo 16 núcleo + lab FUNDACION + Bartleby",
        "readme": True,
        "blurb": "Consejo Asesor ONFALO: 7 modos dialécticos + pipeline relato.",
    },
    {
        "n": 22,
        "path": "VectorMachineSDK",
        "git": "VectorMachineSDK",
        "branch": "integration/beta/scriptorium",
        "distrito": "Lore/voz",
        "runtime": "Docker + Python/FastAPI + ChromaDB",
        "puertos": ["vector-machine-mcp via uvx chroma-mcp (stdio)", "stack self-hosted"],
        "plugins": ["vector-machine"],
        "plugins_note": "Nativo; UI auxiliar en barrio hermano",
        "agentes": 4,
        "skills": 6,
        "prompts": 1,
        "chatmodes": 0,
        "edificios": "notebook-app-sample: albacea, editor, escritor, lector",
        "readme": True,
        "blurb": "Stack vectorial self-hosted para indexación/consulta semántica.",
    },
    {
        "n": 23,
        "path": "VectorMachineUI",
        "git": "VectorMachineUI",
        "branch": "integration/beta/scriptorium",
        "distrito": "Lore/voz",
        "runtime": "Next.js + React + TypeScript + ChromaDB UI",
        "puertos": ["3001 Next.js admin UI (Tecnico)"],
        "plugins": ["vector-machine"],
        "plugins_note": "Auxiliar del mismo local; no plugin propio",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "—",
        "readme": True,
        "blurb": "Admin UI de colecciones Chroma / VectorMachine.",
    },
    {
        "n": 24,
        "path": "ScriptoriumVps",
        "git": "scriptorium-vps",
        "branch": "integration/beta/scriptorium",
        "distrito": "Infra/UI",
        "runtime": "VPS: Caddy, Node-RED, Verdaccio, MCP DevOps",
        "puertos": ["ops en VPS (ver plugin scriptorium-vps)"],
        "plugins": ["scriptorium-vps"],
        "plugins_note": "⚠️ Plugin en disco, NO en registry; 8 agentes en plaza plugin dir",
        "agentes": 0,
        "skills": 0,
        "prompts": 0,
        "chatmodes": 0,
        "edificios": "vps-ops, nodered-curator, verdaccio-keeper + stubs (en .github_V1/plugins/…)",
        "readme": True,
        "blurb": "Infra pública VPS del Scriptorium (bootstrap + registry npm).",
    },
]


def render(b: dict) -> str:
    # Zigurat: stub corto que apunta a capa Z
    if b["path"] == "VsCodeExtension":
        return """# Barrio 01 — `VsCodeExtension` → 🏛️ Zigurat

> **Reclasificado**: no es barrio Runtime/MCP. Es el **Zigurat** (teatro-orquestador IDE).  
> Detalle canónico: [`../00-ZIGURAT/_INDICE.md`](../00-ZIGURAT/_INDICE.md)

| Campo | Valor |
|-------|-------|
| Path | `VsCodeExtension/` |
| Submodule git | `vscode-alephscript-extension` |
| Branch | `integration/beta/scriptorium` |
| Rol | 🏛️ Host IDE / Zigurat |
| Plugin registry | — |
| README-SCRIPTORIUM | ❌ (cubierto por capa Z) |

Esta ficha existe solo como **ancla gitmodules** (#1 de 24). No duplicar plantas/comandos aquí.
"""
    readme_line = (
        f"`{b['path']}/README-SCRIPTORIUM.md`"
        if b["readme"]
        else "❌ **falta** README-SCRIPTORIUM.md"
    )
    ports = "\n".join(f"- {p}" for p in b["puertos"]) if b["puertos"] else "- _(ninguno documentado)_"
    plugs = ", ".join(f"`{p}`" for p in b["plugins"]) if b["plugins"] else "— (sin local nativo)"
    tip = (
        "🔒 Solo tipologías nativas"
        if b["plugins"]
        else "🔁 Franquicias desde plaza / infra host"
    )
    if len(b["plugins"]) > 1:
        tip = "🔒 Multi-local nativo (varias tipologías en este barrio)"

    return f"""# Barrio {b['n']:02d} — `{b['path']}`

> Distrito: **{b['distrito']}** · {tip}

| Campo | Valor |
|-------|-------|
| Path | `{b['path']}/` |
| Submodule git | `{b['git']}` |
| Branch | `{b['branch']}` |
| Runtime | {b['runtime']} |
| Locales/naves | {plugs} |
| README-SCRIPTORIUM | {readme_line} |
| Agentes / skills / prompts | {b['agentes']} / {b['skills']} / {b['prompts']} |
| Chatmodes | {b['chatmodes']} |

## Qué es

{b['blurb']}

## Puertos

{ports}

## Zonificación (qué se puede edificar)

{b['plugins_note']}

## Edificios agénticos

{b['edificios']}

## Enlaces ciudad

- Índice barrios: [`_INDICE.md`](_INDICE.md)
- Locales: [`../02-LOCALES-Y-NAVES/_INDICE.md`](../02-LOCALES-Y-NAVES/_INDICE.md)
- Grafo: [`../GRAFO/_INDICE.md`](../GRAFO/_INDICE.md)
"""


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    links = ["# Fichas por barrio (capa 6)", "", "| # | Ficha | Distrito | README |", "|---|-------|----------|--------|"]
    for b in BARRIOS:
        name = f"{b['n']:02d}-{b['path']}.md"
        (OUT / name).write_text(render(b), encoding="utf-8")
        flag = "✅" if b["readme"] else "❌"
        links.append(
            f"| {b['n']} | [`{name}`]({name}) | {b['distrito']} | {flag} |"
        )
        print("wrote", name)
    links += [
        "",
        "## Huecos README-SCRIPTORIUM",
        "",
    ]
    missing = [b["path"] for b in BARRIOS if not b["readme"]]
    for m in missing:
        links.append(f"- `{m}/`")
    links.append("")
    # append section to _INDICE rather than overwrite — write companion
    (OUT / "_FICHAS.md").write_text("\n".join(links), encoding="utf-8")
    print("wrote _FICHAS.md", "missing readmes:", missing)


if __name__ == "__main__":
    main()
