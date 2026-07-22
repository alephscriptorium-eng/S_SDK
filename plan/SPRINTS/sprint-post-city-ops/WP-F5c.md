# WP-F5c — CHECK sidecar → pub oasis

| dato | valor |
|---|---|
| estado | 🔶 · **sin despacho** hasta **R17-city** PASS · **no bloquea** F5a∥F5b |
| track | OPS / oasis · read-only check |
| depende de | R17-city PASS · protocolos o-sdk PUB alcanzables |
| paraguas | [WP-F5](WP-F5.md) |
| issue | LOCAL-ONLY |
| brief | [BRIEF-F5c](BRIEFS/BRIEF-WP-F5c.md) |

## Objetivo

Verificar (o dejar **pendiente honesto**) el camino **sidecar → pub
oasis** según protocolos públicos:

- https://o-sdk.escrivivir.co/PUB/RECOVERY-PROTOCOL
- https://o-sdk.escrivivir.co/PUB/UPGRADE-PROTOCOL

**Config del custodio NO en el árbol** (ni secretos, ni `.env` de pub,
ni overrides locales versionados). Worker solo cita protocolos +
resultado de check alcanzable sin credenciales.

Si el pub/sidecar es inaccesible desde la estación worker → marcar
`<pendiente>` con evidencia de intento; **no** bloquear F5a ni F5b.

## CA (ejes V + ceguera)

- [ ] Protocolos PUB citados con URL + estado alcanzable (HTTP) en
      reporte.
- [ ] Check sidecar→pub: PASS / FAIL / `<pendiente>` — sin inventar
      acceso a config custodio.
- [ ] Cero secretos / config custodio en diff.
- [ ] Explicitar «no bloquea a/b» en reporte.
- [ ] Ceguera regla 1. Z#4/#5/#6 OPEN citados.

## Fuera

- Meter config custodio en repo.
- Bloquear merge/aceptación de F5a o F5b por este check.
- E_SDK · cerrar Z#4/#5/#6 · ejecutar upgrade/recovery destructivo sin GO.
