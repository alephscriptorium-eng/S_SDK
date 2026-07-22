# WP-F5c · sidecar-pub-oasis — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-F5c (chat fresco) |
| fecha | 2026-07-22 |
| rama | n/a (sin rama de obra · solo reporte) |
| commits | n/a |
| HEAD estación | `841c13452de4ae04e5733242baf49bbe2e1f3ac8` |
| eje(s) CA | V · ceguera (regla 1 / PRACTICAS δ12) |
| estado propuesto | **`<pendiente>`** honesto · listo para revisión |
| bloquea F5a/F5b | **NO** (DC-PCO-F5-oasis) |

## Qué se hizo

Check read-only sidecar→pub oasis sin config custodio (no está en árbol
zeus; no se inventó ni se pidió). Se citaron y probaron por HTTP los
protocolos PUB canónicos. Se intentó alcanzar cara pública del pub y
runtime local (Docker/sidecar). Resultado del camino sidecar→pub:
**`<pendiente>`** — faltan daemon Docker + config custodio + evidencia
de contenedor/red oasis. **Este WP no bloquea F5a ni F5b.**

Nota gate: en árbol `AVISO-R17-city.md` sigue como **pedido** (sin acta
PASS). El despacho llegó del orquestador; se ejecutó solo el check
alcanzable. Z#4/#5/#6 se citan **OPEN** (veto: no cerrar). E_SDK veto.

## Archivos tocados

- `plan/SPRINTS/sprint-post-city-ops/REPORTES/WP-F5c-sidecar-pub-oasis.md` — creado (único entregable)

## Evidencia

> Literal. Sin secretos. Sin abrir `.env` de submódulos.

### 1. Protocolos PUB (obligatorio)

| URL | método | status | bytes (GET) |
| --- | --- | --- | --- |
| https://o-sdk.escrivivir.co/PUB/RECOVERY-PROTOCOL | HEAD + GET | **200 OK** | 37399 |
| https://o-sdk.escrivivir.co/PUB/UPGRADE-PROTOCOL | HEAD + GET | **200 OK** | 30417 |

Contenido leído (WebFetch): ambos son checklists operativos del fork
dockerizado Oasis; RECOVERY enfatiza `secret`/claves como único
irremplazable y sync desde pub; UPGRADE enfatiza preflight, fork-guards
y deploy pub vía scripts custodio (`OASIS_PUB/...`, `.env.prod`) — **fuera
de alcance worker** sin GO custodio.

### 2. Cara pública / directorio (sin credenciales)

| URL | status |
| --- | --- |
| https://pub.escrivivir.co/ | **200** (len=17817) |
| https://o-sdk.escrivivir.co/PUB/ | **404** (índice; no bloquea protocolos) |
| https://oasis-project.pub/api/pubs | **FAIL** — no es posible conectar con el servidor remoto |

### 3. Sidecar / runtime local

```
docker ps / docker network ls
→ failed to connect to the docker API at
  npipe:////./pipe/dockerDesktopLinuxEngine
  (daemon no disponible en la estación worker)
```

Red `oasis-pub-scriptorium_oasis_pub_net` / contenedores sidecar:
**no verificables** sin Docker.

Config custodio oasis (compose override, `.env.prod` pub, invites, caps):
**ausente del entregable y no aportada al worker** (correcto por DC-PCO-F5-oasis).
No se versionó ni se inventó.

Nombres `.env` hallados bajo HOLONES (submodule zeus / deps) — **no abiertos**,
no usados, no copiados al diff F5c. No son el canal de entrega de config
custodio para este WP.

### 4. CA checklist WP-F5c

| CA | resultado |
| --- | --- |
| Protocolos PUB con URL + HTTP | **PASS** (ambos 200) |
| Check sidecar→pub PASS/FAIL/`<pendiente>` | **`<pendiente>`** (ver §faltó) |
| Cero secretos / config custodio en diff | **PASS** (solo este reporte) |
| Explicitar no bloquea a/b | **PASS** (arriba + DC-PCO-F5-oasis) |
| Ceguera r.1 · Z#4/#5/#6 OPEN | **PASS** citar; no cerrar · E_SDK veto |

### 5. Qué faltó para PASS del camino sidecar→pub

1. **Docker Desktop / daemon** en la estación worker.
2. **Config custodio** aportada fuera de árbol (canal custodio→worker,
   no git) — invite/caps/override según protocolos.
3. Contenedor **sidecar** (o stack ciudad) unido a la red oasis pub y
   handshake verificable (p. ej. conn ESTABLISHED / invite / seq sync
   según RECOVERY §4 — sin ejecutar recovery destructivo).
4. (Opcional) alcanzabilidad de `oasis-project.pub/api/pubs` desde la
   estación (hoy FAIL de red).

Hasta entonces: **`<pendiente>`**. Reintento = tick custodio + daemon +
config fuera de árbol; no es bloqueo de F5a (publish mesh) ni F5b (e2e
registry).

## Auto-revisión (PRACTICAS)

- [x] Diff solo dentro de `ALCANCE_DIFF`: solo `REPORTES/WP-F5c-*.md`
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia
- [x] Sellos con fuente; URLs citadas existentes y probadas
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`
- [x] Eje V: mediación transparente — se ofrece check, no se impone
      config custodio ni se bloquea a/b
- [x] Ceguera r.1: sin meter secrets/config custodio en árbol; sin
      ids de tracking nuevos en obra de paquetes (este WP no toca packages/)
- [x] Gates ejecutados de verdad: HTTP + intento Docker
- [x] Commits: n/a (reporte only; orq decide commit gobierno)
- [x] Z#4/#5/#6 OPEN citados · no cerrados · E_SDK no tocado

## Hallazgos fuera de alcance

- `oasis-project.pub/api/pubs` inalcanzable desde esta estación (red) —
  posible follow-up ops custodio; no es F5a/F5b.
- Índice `o-sdk.escrivivir.co/PUB/` → 404; páginas de protocolo sí 200.
- Acta **R17-city PASS** no aparece aún en `plan/.../REPORTES/` (solo
  AVISO pedido) — higiene orq/vigía, no obra F5c.

## Dudas / bloqueos

- **Bloqueo blando del check oasis:** falta config custodio + Docker.
  No bloquea aceptación/despacho de F5a∥F5b.
- ¿Canal para recibir config custodio en reintento? (fuera de git;
  tick PO.) Worker no pide ni versiona secretos.

---

## Revisión del orquestador

**✅ aceptado** · 2026-07-22 · city-orq

1. Protocolos PUB RECOVERY + UPGRADE → **200** (CA PASS).
2. Sidecar→pub → **`<pendiente>`** honesto (Docker daemon ausente + config
   custodio fuera de árbol) — válido por DC-PCO-F5-oasis.
3. **No bloquea** F5a ni F5b.
4. Diff solo reporte · ceguera · Z# OPEN · E_SDK veto.
5. Reintento = tick custodio (daemon + config fuera de git); no reopen obligatorio.