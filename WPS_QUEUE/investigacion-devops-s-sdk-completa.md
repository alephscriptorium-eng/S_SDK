# Investigación COMPLETA: DEVOPS s-sdk + Integration Network-Engine + e-sdk + Playground

## 1. ESTRUCTURA Y CONTRATOS DEVOPS (s-sdk)

### Jerarquía de holones (C:\S_LAB\s-sdk\DEVOPS\METODOLOGIA\)
- **Holón 01 (Mythos/zeus-sdk)**: cosmológica, destino cerrado, un cosmos
  - Ancla: `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk` (ceguera unidireccional 07→01)
  - Anclaje verificado 2026-07-15 por custodio: **anclado**

- **Holón 04 (Ilustración/NETWORK-ENGINE)**: embudo, método legítimo
  - Ancla: `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\transmedia-system\SCRIPTORIUM-CORE\NETWORK-ENGINE` (MAYÚSCULAS; python network-engine es cantera vieja)
  - Anclaje verificado 2026-07-15 por custodio: **anclado**
  - Desambiguación: NETWORK-ENGINE (TS) ≠ network-engine (Python)
  - Grieta declarada en DOSSIERS/game-xzzx: "orquestador de juego no existe"

- **Holón 07 (SCRIPT_SDK)**: holarquía como método
  - Estado: **activo** — se descubrió siendo holón al escribir el registro
  - Rol: ancla piezas 01-06 por rutas absolutas (DS-5: apuntar, no contener)

### Dos leyes fundamentales
1. **Ceguera ascendente**: holón no concibe sucesor
   - En zeus-sdk: cero menciones a SCRIPT_SDK/HOLONES/holarquía (regla dura)
   - Validación: `comprobar-ceguera.sh` busca {zeus,holón,holarquía,SCRIPT_SDK,S_SDK,juntura} = 0

2. **Acceso descendente**: sucesor relee y reinterpreta anteriores
   - s-sdk relee 01-06 desde HOLONES/ (submodules) y DOSSIERS/ (investigación)

### DS-5 (Decisión Sistema 5): Composición sin contención
- Apuntar, nunca copiar árboles
- Submodules = punteros verificables (git links 160000)
- Nunca inflar ni subir código ajeno al repo
- Composición desde registry `npm.scriptorium.escrivivir.co`

### Contratos clave
- **Visto Bueno 2026-07-15**: Autoriza ancla de holones 01 y 04 con 4 condiciones no negociables
  - Ruta absoluta COMPLETA siempre
  - Ceguera = no sucesores, sí antepasados materiales (cantera/VOLUMES)
  - Anclaje unidireccional + regla dura documentada
  - HOLONES.md filas 01 y 04 con estado "anclado"

## 2. LIFECYCLE DE ALTA/INTEGRACIÓN/MIGRACIÓN (s-sdk BACKLOG-F2 Lanes)

### Ola I0-I3 (Histórico, cerrado 2026-07-19)
- **I0**: Plan autocontenido + roles interinos
- **I01**: Higiene backstage (HIPOTESIS, HANDOFF, .gitignore)
- **I02**: Workspace raíz (package.json, .npmrc → registry, bunfig.toml)
- **I03**: Submodules holón 01 (mythos/zeus-sdk + games-library, ceguera verificada)
- **I10-I12**: VitePress + CNAME + publicar-la-web
- **I20**: Scaffold skills-library (repo hermano público)

### Ola F2 (Viva) - Lane de Composición
**CANTERA**: generación reproducible (censso, estado, proyección, provenance, manifest)

**DATA-CONTRACT**: frontera cantera/packs/root con documentación adaptador
- Los tres momentos: instalar kit → sembrar pack → sincronizar por driver

**HOLONES**: anclas DS-5, roadmaps, limpieza root
- WP-SDK-H06: DS5-registry-composition (segundo consumidor)

**METHOD-CONSUMER**: pin/sync/activación del método publicado
- WP-SDK-M01: pin exacto del paquete
- WP-SDK-M02: segundo consumidor real del skill
- WP-SDK-M04: composición publicada sin fachada duplicada

**WEB-FOSS**: portal con ceguera
- Licencia SPDX coherente

**GOVERNANCE**: backlog, prácticas, cierre

## 3. DOSSIER/PLAN GLOBAL — qué debe contener

### Archivo(s) en s-sdk
- `plan/VISION.md`: dos repos (núcleo + library), reparto skill/instancia
- `plan/BACKLOG.md`: histórico olas I0-I2 (cerrado)
- `plan/BACKLOG-F2.md`: olas vivas (F2 adelante) con 7 lanes
- `plan/DECISIONES.md`: decisiones asentadas (DE-I0 adelante)
- `plan/PRACTICAS.md`: protocolo del swarm
- `plan/README.md`: goberanza

### Archivos en DEVOPS/METODOLOGIA
- `HOLONES.md`: tabla 7×7 de holones + estado
- `VISION.md`: hipótesis OSI (modelo de capas)
- `holones/01..07-*.md`: ficha por holón con ceguera/acceso/juntura/anclaje
- `holones/TEMPLATE.md`: plantilla standard (canon)
- `holones/junturas/*.md`: material excedente entre junturas

### Archivo en DEVOPS/METODOLOGIA/partes
- `2026-07-15-visto-bueno-01-04.md`: acta custodio autorizando anclas + 4 condiciones
  - Usada como precedente para auditorías futuras

## 4. MECANISMOS: LINKS, ADAPTERS, PROVIDERS, REGISTRY, GATES, PUBLICACIÓN

### Registry: npm.scriptorium.escrivivir.co
- **ADR 0013**: Scope `@zeus/*` consumido exclusivamente desde registry
- **bunfig.toml**: config `[install.scopes]` con token env `$ZEUS_NPM_TOKEN`
- **Consumo anónimo**: productor no se nombra en código/config (asimetría)
- **Verificación**: sondeo `npm view @zeus/protocol` detecta si registry sirve scope

### Adapters y Edges (NETWORK-ENGINE)
- **F0 (Zeus Bridge)**: `@network-engine/edge-zeus` → adaptador `PubSubBridge`
  - Interfaz: `connect/disconnect`
  - Mapeo: `NetworkTransportEvent {source,target,room}` ↔ envelope publicado
  - Outbound-only: cliente WSS hacia `rooms.*`
  - Regla: jamás vendorear/submodule (DB-0)

- **F1**: Editor MCP renderizando ledger de ronda externa

- **F2**: Volúmenes JSON externos (read-only en DocumentStore)

- **Gates**: Ejecución limitada a reglas 2-3 (composición pura, asimetría)
  - `WP-B00`: gates del bridge
  - `WP-B10`: spike routing por room real
  - `WP-B11`: demo completa MCP App + ledger

### Lifecycle de paquete de método (Holón 07)
1. **Extraction**: skill-library separa método de instancia
   - Método: SKILL.md + plantillas + doctrina (marco-agnóstico)
   - Instancia: calibración por mundo + CANTERA + reportes

2. **Publication**: a registry `npm.scriptorium.escrivivir.co`
   - Skill: `@alephscript/skills-scriptorium` (o scope custodio)
   - Paquete method: versión exacta + lock + espejo auditables

3. **Activation**: segundo consumidor (sensor de contrato real)
   - `npm install @alephscript/skills-scriptorium`
   - Agente monta fixture sin contexto marco (Eje IV del RE-PLAN)
   - Materialización multi-runtime (Claude/Cursor/runner genérico)

## 5. LÍMITES DE ESCRITURA/REPOS + RELACIÓN SWARM

### Límite de escritura por world_root
- **s-sdk** (`C:\S_LAB\s-sdk`): ALCANCE_DIFF mínimo; extracción/contrato Ejes I/IV
- **e-sdk** (`C:\S_LAB\e-sdk`): sound system, plan-based, sin código aún (2026-07-16)
- **NETWORK-ENGINE**: AOS monorepo TS, su propio plan + INSTRUCTIONS

### Playground: punto de reunión neutral
- Ubicación: `C:\S\scriptorium\playground\`
- Casos: `prueba-de-dos` (2 peers, 1 room), `ciudad` (roles múltiples)
- Propiedad: S (custodio) decide protocolo; nadie pisa kit
- Escritura permitida: solo handoffs regenerables + registro de corrida
- Lectura: todos los carriles (G/V/Z/O/L/S) pueden leer tras whitelist

### Protocolo Swarm
- Roles: orquestador + workers (definidos en plan/roles/)
- Gobierno: RE-PLAN (5 ejes) + protocolo ESTACION (doctrina vigilancia)
- Sincronía: no commits de roles generados; logs en VIGILANCIA/

### Relación SCRIPT_SDK ↔ Swarm
- SCRIPT_SDK = método que todos usan como habilidad componible
- Swarm implementa backlogs en s-sdk/e-sdk/NETWORK-ENGINE
- Skills-library = paquete público del método (repo hermano)
- Instancias = calibración por mundo (cada plan/ propio)

## 6. RUTAS ABSOLUTAS (DS-5: verificadas)

### Holones anclados
| Holón | Ruta | Verificado |
|-------|------|-----------|
| 01 Mythos | `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk` | 2026-07-15 |
| 04 Ilustración | `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\transmedia-system\SCRIPTORIUM-CORE\NETWORK-ENGINE` | 2026-07-15 |
| 05 Sospecha | `C:\Users\aleph\OASIS\aleph-scriptorium\plan\` | histórico S0/S3/S4 |
| 06 Posmodernidad | `C:\Users\aleph\OASIS\aleph-scriptorium\plan\` (spinoff registry) | histórico S1/S2 |

### Mundos (world_roots)
- `C:\S_LAB\s-sdk` (holón 07 casa pública)
- `C:\S_LAB\e-sdk` (sound system, plan WIP)
- `C:\S_LAB\a-sdk` (multiuso plugins/gallery)
- `C:\S_LAB\z-sdk` (games library — NO incluir en s-sdk, ya en submodules I03)
- `C:\S_LAB\g-sdk` (generador G)
- `C:\S_LAB\v-sdk` (IDE consumer)

### Registry
- `https://npm.scriptorium.escrivivir.co` (Verdaccio scope `@zeus/*`)
- Token env: `$ZEUS_NPM_TOKEN` (jamás en archivos de config)

### Playground
- `C:\S\scriptorium\playground\` (punto de reunión — S decide whitelist)

## 7. PRECEDENTES USADOS POR ALEPH-SCRIPTORIUM

### Anclaje tipo DB-3
- NETWORK-ENGINE se ancló desde dentro (mismo gesto DS-6)
- Verificado existente: `plan/DECISIONES.md` **DB-3** declara "pieza técnica del holón 04"

### Skill como método reutilizable
- `@alephscript/skills-scriptorium`: composición agnóstica
- 3 skills core: `site-web` (WEBS protocol), `swarm-orquestacion` (roles), `vigilancia` (ESTACION)
- Replicados en múltiples `.claude/skills/` → extracción a skills-library

### Pattern de espejo (núcleo + library)
- zeus: `Z_SDK` + `Z_SDK-games-library`
- método: `S_SDK` + `S_SDK-skills-library`

### Verificación de ceguera
- Script `comprobar-ceguera.sh` en cada skill
- Busca fragmentos de {zeus, holón, holarquía, SCRIPT_SDK, S_SDK, juntura}
- Grep = 0 = ceguera OK; se ejecuta como CA en WP

### Composición sin submodule-como-carpeta
- Submodules = punteros git (160000) solo para lectura cross-repo
- Consumo runtime vía registry + npm install
- Generación local de datos (CANTERA, estado) separada de método
