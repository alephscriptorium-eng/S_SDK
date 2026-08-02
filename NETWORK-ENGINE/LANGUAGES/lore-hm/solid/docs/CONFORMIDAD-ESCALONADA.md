# Conformidad escalonada · capa SOLID LORE-HM

> Arquitectura completa en diseño desde v1. Adapters reales llegan por peldaño.
> Cada fila declara explícitamente lo que el peldaño **NO** garantiza.

| peldaño | alcance afirmado | **NO garantiza** | estado |
| ------- | ---------------- | ---------------- | ------ |
| **v1** | Local simulado: `LocalPodProvider` files-first, IRI lógica, wire JSON + JSON Schema + sellado sha256 de bytes, identidad triple tipada con degradación honesta, planos Room/Notifications separados en contrato, bridge MCP reglas tipadas | CSS/LDP real · WebID federado · WAC/ACP evaluado por servidor Solid · notificaciones Solid · federación · igualdad semántica RDF · que la vista sea autoritativa | **verificada** (diseño L03) |
| **v1.1** | Vista JSON-LD + validación SHACL aditiva; contexto reutiliza AS2/PROV-O/DCTERMS; vista sigue **no** autoritativa salvo familia con canonicalización semántica **explícita** | Runtime CSS · WebID/WAC productivos · que expandir JSON-LD cambie `huellaLedger` · federación | **hipótesis** (contratos + shapes presentes; validador SHACL runtime `<pendiente>`) |
| **v2** | CSS local + WebID + evaluación WAC/ACP en el Pod (`SolidPodProvider`); relay H sin autoridad | Federated Solid · notifications L1 productivas · que H pueda override ACL del Pod | **hipótesis** · adapter futuro |
| **v3** | Solid Notifications (L1) y federación; correlación con Room/L2 por activity id / trace / provenance | Sustitución de Room/L2 por Notifications · fusión de planos · autoridad de H sobre ACL remota | **hipótesis** · fuera de L03 runtime |

## Reglas transversales (todos los peldaños)

1. Wire JSON es autoritativo para corrida y hashes.
2. Vista JSON-LD/RDF no altera `huellaLedger` (DIC-4).
3. WebID, PeerCard y ssbId no se fusionan en un solo tipo/credencial.
4. Solo el servidor Pod decide acceso; H transporta, no otorga.
5. Tool name MCP ≠ predicado RDF automático.
6. Z_SDK#55 es insumo OPEN por curar — no implementación afirmada.
