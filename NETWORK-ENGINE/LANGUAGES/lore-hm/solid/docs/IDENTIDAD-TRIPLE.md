# Identidad triple · WebID · PeerCard · ssbId

Tres credenciales **relacionadas** y **jamás fusionadas**. Cada vínculo es una
attestation verificable. Si falta una dimensión → degradación honesta (no
inventar, no colapsar tipos).

## Credenciales

| id | rol | plano típico |
| -- | --- | ------------ |
| `webId` | identidad Solid / federación | L1 Solid / CSS |
| `peerCard` | identidad bilateral H/M en room | L2 Room |
| `ssbId` | identidad SSB / mesh | mesh / offline |

## Attestations

Un `IdentityLink` declara `from` → `to` con evidencia (`digest`, emisor,
`expiresAt`). Ausencia de link ≠ fusión implícita.

## Degradación honesta

| situación | comportamiento |
| --------- | -------------- |
| Falta WebID | operar room/ssb si hay PeerCard/ssbId; marcar `missing: ['webId']` |
| Falta PeerCard | no afirmar bilateridad H/M; deny en planos que la exijan |
| Falta ssbId | no afirmar mesh; continuar Solid/room si aplica |
| Hostil omite dimensión | **deny** en el plano que la requiere (fail-closed) |

## Prohibiciones

- Un solo string “identity” que mezcle las tres.
- Inferir WebID desde PeerCard sin attestation.
- Tratar PeerCard como WebID en WAC/ACP.
