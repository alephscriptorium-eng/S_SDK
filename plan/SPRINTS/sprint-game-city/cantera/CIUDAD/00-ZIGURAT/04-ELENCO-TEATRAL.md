# Elenco teatral del Zigurat

> Dos compañías distintas: **Zigurat** (IDE) vs **Plaza** (`.github_V1`).

## Compañía Zigurat (`VsCodeExtension/src/theatrical/agents/`)

| Agente | Archivos | ChatParticipant |
|--------|----------|-----------------|
| Indra | `indra.agent.md` + manager/participant | sí |
| Isaac | `isaac.agent.md` + … | `@isaac` |
| Don Álvaro | `don-alvaro.agent.md` + … | `@don-alvaro` |
| Capitán Didac | `capitan-didac.agent.md` + … | `@capitan-didac` |
| Backend Agent | `backend-agent.agent.md` + … | sí |

Copia content: `theatrical-content/content/agents/isaac.agent.md`.

## Compañía Plaza (no viven en el Zigurat)

Aleph, Revisor, Periódico, Banderas, Ox, Índice, Vestíbulo, bridges `plugin_ox_*` →  
ver [`../03-EDIFICIOS/plaza-central.md`](../03-EDIFICIOS/plaza-central.md).

## Relación

```
Usuario en VS Code
  ├─ ChatParticipants Zigurat (@isaac, …)  → elenco theatrical
  └─ Agentes Copilot Plaza (@ox, @aleph)   → gobierno + demos vía comandos
```

El Zigurat **escenifica**; la Plaza **legisla** (índices, plugins, handoffs).
