# WP-Z10 — «Viaje»: el gestor de caminos wiki, extraído a librería sobre linea-kit

| dato | valor |
|---|---|
| track / prio | ENGINE / 2 |
| depende de | — (lib pura); **bloqueado por tick A1** (checkout `zeus-sdk` / `linea-kit` desmaterializado — ver BACKLOG §Bloqueos); consumidores: Z08 (ciudadanos que caminan), Z03 (walks del juego) |
| referencia a extraer | `WiringAppHypergraphEditor` (wiki-racer): `src\juego.ts` (máquina de estados de navegación, `src\estado.ts` Etapa/Error), `src\scraper\engine.ts` (candidatos por enlaces de artículo, Puppeteer), `src\utils\cache.ts` (cache de recorridos en disco, `CRIPTA\tree.json`) |
| base zeus | `@zeus/linea-kit` (U80/U81 ✅): `conectar-satelite` (remotes wiki/ATProto/SSB), `fetchSnapshot` (wikitext con gate `approve`), `readWikitext`, `segmentar`, curación unificada, schemas+validador · volumen `DISK_02\LINEAS` · `presets-sdk\src\paths\lineas.mjs` · consumidor `packages\mesh\linea-system` |
| deuda fundacional que toca | refs `linea:*` no montadas en linea-system (BACKLOG-HISTORICO zeus ~L746); pythons de referencia (`segment_linea`, `fetch_wp_historia`, `fetch_snapshot` — DATOS.md §7) fuera del monorepo, en NETWORK-ENGINE |

> **Estado canónico:** solo en [BACKLOG.md](BACKLOG.md). Esta ficha no lleva glifo de estado.
> **Bloqueo:** no abrir implementación hasta tick A1 (rematerializar checkout zeus-sdk / linea-kit).

## Objetivo

Rescatar del wiki-racer el **concepto de camino**: navegar un grafo nodo→nodo por
enlaces, con candidatos, elección, poda y **cache del recorrido** — y dárselo a zeus como
librería reusable en el marco de la cache wiki / líneas. NO se importa el paquete ni se
depende de él (regla U81: portar el concepto, no el código).

Un **viaje** = origen → destino → secuencia de pasos sobre un grafo de nodos, con el
recorrido materializado y curable. Fuentes de grafo intercambiables: wiki (enlaces de
artículo — el caso probado por wiki-racer), una línea (tronco `nodos.yaml` + satélites),
o el gamemap ciudad (anchors + calles).

## Entregables

1. **Familia `viaje`** (candidato: subpath `@zeus/linea-kit/viaje`, o paquete
   `@zeus/viaje-kit` si el kit engorda): modelo de viaje (origen, destino, pasos,
   candidatos, poda, estado de la travesía como máquina de estados), con `GraphSource`
   agnóstico (wiki / línea / gamemap como adaptadores).
2. **Cache wiki como volumen curado:** los recorridos se materializan validando contra
   los schemas del kit, con curación (`raw`/`candidate`/`labeled` vía
   `CURATION_STATUSES`); snapshots de nodos wiki vía `fetchSnapshot` (gate `approve`
   incluido — no scrapear a lo loco). El `tree.json` del wiki-racer es el formato de
   partida a normalizar, no el destino.
3. **Segmentación de viajes:** un recorrido largo se segmenta en milestones con las
   reglas de `segmentar` (mismo patrón que historial→manifest) — el viaje se vuelve
   material de línea/satélite consumible por linea-system.
4. **Puente con la ciudad:** adaptador gamemap — un viaje calculado se reproduce como
   secuencia de intents `walk` (calles entre anchors de Z02/Z03). Es el cerebro de
   ruta de los ciudadanos de Z08 (ellos ponen el cuándo; el viaje pone el por-dónde).
5. **Saldo de deuda fundacional:** montar (o especificar cómo viaje consume) las refs
   `linea:*` pendientes en linea-system.

## Criterios de aceptación

- [ ] Viaje de juguete e2e sobre una línea sintética (starterkit U81): origen→destino,
      camino calculado, recorrido materializado en cache que **valida contra los schemas
      del kit** sin tocarlos.
- [ ] Mismo modelo con adaptador wiki: un viaje corto real (2-3 saltos) con snapshots
      materializados vía `fetchSnapshot` + gate.
- [ ] Adaptador gamemap: el viaje se reproduce como walks aceptados por la authority de
      Z03 (o pozo si Z03 no está).
- [ ] Cero dependencia de wiki-racer en package.json; el repo original queda como
      referencia citada, intacto.
- [ ] Regla de los dos juegos respetada: la lib en engine no conoce nombres de juego.

## Notas

- Si al portar hace falta mirar los pythons originales, están en NETWORK-ENGINE
  (punteros en `zeus-sdk\plan\DATOS.md` §7) — misma regla: concepto, no línea a línea.
- Puppeteer NO viene: el fetch wiki de zeus ya existe (`fetchSnapshot`/remotes de
  `conectar-satelite`); si un caso pidiera scraping vivo, es decisión aparte.
