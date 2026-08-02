# PodProtocol · providers · WAC/ACP relay

## Separación

`PodProtocol` es el contrato (URI → recurso, events, ACL evaluate).
Los **providers** lo implementan; no son el protocolo.

| provider | marca | rol |
| -------- | ----- | --- |
| `LocalPodProvider` | `simulation: true` (obligatoria) | playground files-first; IRI lógica; **no** es Solid Pod real |
| `SolidPodProvider` | futuro CSS/LDP | adapter v2; **no implementado** en L03 |

Ambos exponen recursos por URI. **Sólo el servidor Pod decide acceso.**

## Relay sin autoridad

1. H puede emitir `Lease` y transportar token/capabilities.
2. H **no** es token-dios: no override de ACL.
3. El Pod evalúa WAC/ACP (o simulación local de la misma semántica deny-by-default).
4. Ausencia · expiración · firma faltante · scope insuficiente → **deny**.

## Sustitución

`SolidPodProvider` debe preservar URIs y actividades al reemplazar
`LocalPodProvider`. El cambio de provider no reescribe IRIs de Artifact/Activity.
