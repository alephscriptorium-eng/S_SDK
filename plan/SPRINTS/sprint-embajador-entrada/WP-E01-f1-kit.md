# WP-E01-f1 — Kit embajador

| dato | valor |
|---|---|
| estado canónico | [BACKLOG.md](BACKLOG.md) · 🔶 GO-E1 |
| track / prio | FED / 1 · ola **EE-1** |
| depende de | pavimentación GO-4 · Z04 ✅ · coordinación E02 (firma vía API) |
| issue | LOCAL bajo S_SDK **#22** (sin alta nueva) |

## Objetivo

API/contrato mínimo para **emitir y consumir** credencial de peer
(`embajador-kit`), sin reinventar el borde federado ni duplicar crypto E02.

## Entregables

1. Paquete nuevo `@zeus/embajador-kit` (o nombre acordado en reporte) en
   `packages/engine/embajador-kit/**`.
2. Emitir + consumir peercard enchufable a startpack-ciudad-v0.1.0 default.
3. Tests + ceguera.
4. Reporte: `plan/REPORTES/WP-E01-f1-kit.md`.

## Criterios de aceptación

- [ ] Contrato kit estable (eje **II**): un destino canónico; no duplicar en engine suelto.
- [ ] Eje **I**: smoke consume emit/consume.
- [ ] Ceguera regla 14.
- [ ] Diff solo `embajador-kit/**` + lock + reporte.
- [ ] No toca crypto/handshake E02 ni f3/f4.

## Fuera de alcance

- Firma/ssbId (E02) · TTL modelo (f2) · niveles · visual · E_SDK · GL.

## Notas

- Paralelo OK con E02 si paths no se pisan.
- Rama: `wp/ee-e01-f1-kit`.
