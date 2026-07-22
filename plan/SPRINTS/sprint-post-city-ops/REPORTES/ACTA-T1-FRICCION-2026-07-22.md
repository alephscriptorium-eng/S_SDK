# ACTA DE FRICCIÓN · WP-T1 · 2026-07-22

| dato | valor |
| ---- | ----- |
| WP | **WP-T1** equipo de testing · acta de fricción |
| agente | worker WP-T1 (testing) |
| fecha | 2026-07-22 |
| rama | sin rama de obra (scratch efímero TMP) |
| commits obra zeus/GL | **ninguno** (veto brief) |
| entregable | este fichero → insumo **S04** (S04 **NO** despachado) |
| ejes CA | **I** · **IV** + ceguera δ12 |
| estado propuesto | listo para revisión city-orq |
| issue | LOCAL-ONLY |
| Z_SDK | [#4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4) · [#5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5) · [#6](https://github.com/alephscriptorium-eng/Z_SDK/issues/6) = **OPEN** (no cerrar) |
| E_SDK | **veto** (no tocado) |

## Pins / canal (sesión)

```text
git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
→ 2aec4cb7d049861a5ea29bdc207c46fad1c22856   (≈ pin brief 2aec4cb)

git -C HOLONES/01-mythos/games-library rev-parse HEAD
→ 20c095cf698ed5b09a18fe409c8a7de37eb003bf   (≈ pin brief 20c095c)

git -C . rev-parse HEAD
→ 511a3224d5f198146089f93b264befb75ba265bc

registry = https://npm.scriptorium.escrivivir.co
```

### `npm view` C8 (literal)

| paquete | resultado |
| ------- | --------- |
| `@zeus/protocol` | **0.4.0** |
| `@zeus/player-mcp-kit` | **0.1.3** |
| `@zeus/rooms` | **0.1.1** |
| `@zeus/operator-bridge` | **0.1.2** |
| `@zeus/parte-kit` | **0.1.1** |
| `@zeus/acta-kit` | **0.1.1** |
| `@zeus/lifecycle-kit` | **0.1.1** |
| `@zeus/ciudad-lifecycle` | **0.1.1** |
| `@zeus/embajador-kit` | **0.1.1** |
| `@zeus/authority-kit` | **0.4.1** |
| `@zeus/presets-sdk` | **0.1.2** |
| `@zeus/room-client-browser` | **0.1.3** |
| `@zeus/ui-3d-kit` | **0.1.3** |
| `@zeus/ciudad` | **404** |
| `@zeus/startpack-ciudad` | **404** |
| `@zeus/operator-ui` | **404** (`private: true` en árbol) |
| `@zeus/socket-server` | **404** (`private: true` en árbol) |
| `@zeus/mcp-launcher` | **404** |
| `@zeus/room-client` | **404** |
| `@zeus/parte` / `@zeus/acta` / `@zeus/lifecycle` (sin `-kit`) | **404** |

## Qué se hizo (sesión viva)

Scratch efímero bajo `%TEMP%` (no versionado). Flujo pedido:
puerta humana + actor MCP + presencia/announce + CA diferido «campana
suena» + misiones/partes — ejercido **hasta donde el canal C8 permite**;
gaps explícitos abajo (sin inventar mecánicas).

1. **Puerta (tick-cero copiado)** — install C8 + `node run.mjs` →
   `TICK_CERO_OK` con `@zeus/protocol@0.3.0` desde `node_modules` (no árbol).
2. **Kits mesh C8** — install selectivo; peercard seat +
   `campanasDesdeParte` / `campanasFromLedger` OK en scratch.
3. **Embajador + authority-kit** — install C8 OK; exports legibles.
4. **Híbrido árbol (scratch, sin commit)** — authority + MCP ciudad
   arrancan proceso; **fallan** sin socket-server vivo; socket-server del
   tip zeus no arranca (`@alephscript/mcp-core-sdk` ausente en
   `node_modules`).
5. **Misiones** — `npm run misiones-smoke -w @zeus/ciudad` →
   `MISIONES_SMOKE_OK` (dominio GL; no superficie MCP).

## Qué costó

| # | fricción | evidencia |
| - | -------- | --------- |
| C1 | **Stack live no es C8-puro** | authority = `@zeus/ciudad` (404) · startpack (404) · room = `@zeus/socket-server` private/404 · UI = `@zeus/operator-ui` private/404 sin `dist/` |
| C2 | **`ciudad-lifecycle` instala roto** | dep `@zeus/mcp-launcher@*` → 404; tumba `npm install` si se pide el kit «embajador/parte/acta/lifecycle/ciudad-lifecycle» juntos |
| C3 | **Nombres del brief ≠ nombres npm** | brief: `parte`/`acta`/`lifecycle` → reales: `*-kit`; `npm view @zeus/parte` confunde |
| C4 | **Deriva de pin protocol** | tick-cero fixture fija **0.3.0**; `npm view` + authority-kit piden **0.4.0**; ambos seat-OK, pero docs/embajador deben elegir rango |
| C5 | **Tip zeus incompleto para room** | `node_modules` existe pero `npm ls @alephscript/mcp-core-sdk -w @zeus/socket-server` vacío → `ERR_MODULE_NOT_FOUND` al spawn |
| C6 | **operator-ui no es paquete usable** | `private: true`; build Angular (`build:operator-ui`) obligatorio; sin dist → cero «campana suena» audible en browser |
| C7 | **e2e monorepo asume hermano** | `e2e/games-root.mjs` busca `../Z_SDK-games-library`, no `HOLONES/01-mythos/games-library` |
| C8 | **PowerShell + `@zeus`** | `@zeus` se expande como variable; hay que citar `"@zeus/..."` |

## Qué confunde

| # | confusión | detalle |
| - | --------- | ------- |
| D1 | «Kits del registry» vs «levantar authority+UI+MCP» | Los kits FOSS (protocol, player-mcp-kit, rooms, parte-kit, operator-bridge, embajador, authority-kit) **sí** están en C8; el **mesh ciudad** (juego + socket + UI) **no**. El operador cree que `npm i` basta. |
| D2 | Cable CA C05 vs live | C05 ✅ prueba campanas en unit/ledger (`player_leer_parte` → clases). Live «suena en operator-ui» sigue siendo hito observación / PRUEBA-DE-DOS — **no** hay un `npm run campana-live` documentado con deps C8. |
| D3 | MCP tools ≠ misiones | Tools MCP: `join/walk/announce/wake/state/leer_parte`. Misiones viven en `misiones.mjs` + smoke; **no** hay `player_misión` en la card MCP. |
| D4 | Presencia vs announce | Presencia = loop/domain (`SeñalDePresencia`); announce = intent plaza. Ambos existen en dominio; el agente MCP solo expone announce explícito. |
| D5 | `ZEUS_SDK_ROOT` / árbol vs C8 | README/tests GL aún hablan de pin tip kit vía env/sibling; choca con la doctrina C8 del brief T1. |
| D6 | `npm search @zeus --registry scriptorium` | En esta sesión devolvió ruido de npmjs público (`@zeus-js/*`); la verdad es `npm view` paquete a paquete. |

## Qué falta (insumo S04 — mapa «dónde está cada cosa»)

> Destilar en skill embajador. **No** implementado aquí. S04 parked.

| id | gap | sugerencia para S04 |
| -- | --- | ------------------- |
| F1 | Catálogo C8 **publicado vs private** | Tabla estable: kit FOSS → versión; app private → «solo monorepo / build» |
| F2 | Receta mínima **puerta** | tick-cero + protocol rango (`^0.3 \|\| ^0.4`) + peercard seat |
| F3 | Receta **campana (sensor)** | `parte-kit` + `operator-bridge.campanasFromLedger` (C8) — audio UI = árbol |
| F4 | Receta **mesh live** (si existe) | orden: socket-server → authority ciudad → MCP → operator-ui build; ports (`ZEUS_PORT_SCRIPTORIUM`, `ZEUS_MCP_CIUDAD=4133`); secret |
| F5 | Publish faltantes o veto explícito | ¿publicar `ciudad` / `startpack-ciudad` / `socket-server` / `mcp-launcher`? ¿u operator-ui tarball? Decisión PO — fuera T1 |
| F6 | URLs anti-deprecated | peercard: `@zeus/protocol/peer-card-seat`; campanas: `@zeus/parte-kit` + `@zeus/operator-bridge`; **no** inventar `@zeus/parte` |
| F7 | Z_SDK #4/#5/#6 | citar OPEN en skill; no cerrar; handshake/ACL/federación = deuda visible |
| F8 | Tooling Windows | nota PowerShell quoting `@scope` |

## Flujo vivo — veredicto por paso

| paso | estado | nota |
| ---- | ------ | ---- |
| kits registry C8 (selectivos) | ✅ | cero `file:` / cero leak a `zeus-sdk`/`games-library` en scratch kits |
| entrada humana puerta | ✅ | tick-cero C8 · seatOk · reject tamper |
| peercard agente (API) | ✅ | protocol@0.4.0 seat en scratch; MCP tip GL emite card al bootstrap |
| actor MCP listening | ⚠️ parcial | `:4133/mcp` up; **sin** room (xhr poll error) |
| presencia + announce live | ❌ gap | requiere authority↔room; smoke dominio existe aparte |
| «campana suena» operator-ui | ❌ gap | cable ledger✅ (C05+scratch); audio UI no levantable C8 ni tip sin build |
| misiones / partes de paso | ⚠️ parcial | misiones-smoke✅; partes vía `leer_parte` cableado; no e2e mesh |

## Evidencia (comandos)

```text
# Puerta C8
SCRATCH=%TEMP%\wp-t1-scratch-20260722-151657
npm install --registry https://npm.scriptorium.escrivivir.co
node run.mjs
→ TICK_CERO_OK {"protocol":"@zeus/protocol@0.3.0",...,"seatOk":true,"rejectTamper":true}

# Kits + campanas C8
SCRATCH=%TEMP%\wp-t1-kits-20260722-151732
# deps: protocol@0.4.0 player-mcp-kit@0.1.3 rooms@0.1.1 operator-bridge@0.1.2
#       parte-kit@0.1.1 acta-kit@0.1.1 lifecycle-kit@0.1.1
node probe.mjs
→ seatOk:true
→ campanas clases ["despertar","roto"] match ledger:true
→ leak=false (todos en node_modules)

# Install tumba
npm i @zeus/ciudad-lifecycle → E404 @zeus/mcp-launcher

# Híbrido live (sin commit)
socket-server tip → ERR_MODULE_NOT_FOUND @alephscript/mcp-core-sdk
authority → startpack OK · "Error de conexión: xhr poll error"
MCP → listening :4133 · mismo xhr poll error

# Misiones (árbol GL @ 20c095c)
npm run misiones-smoke -w @zeus/ciudad
→ MISIONES_SMOKE_OK { actor:'red-stream', barrio:'stream-desktop', hops:3 }

# Issues
gh issue view 4|5|6 --repo alephscriptorium-eng/Z_SDK → state OPEN
```

## Auto-revisión (PRACTICAS)

- [x] Diff solo `ALCANCE_DIFF` (este acta bajo `sprint-post-city-ops/REPORTES/`)
- [x] Scratch efímero no versionado; cero commits zeus/GL
- [x] Sellos con fuente (`npm view`, stdout, `gh issue view`)
- [x] Sin claim live campana sin gap explícito
- [x] Eje I: consumidor real de kits C8 (scratch peercard + campanas)
- [x] Eje IV: 2º carril — puerta tick-cero + sensor campanas (bridge); mesh UI pendiente
- [x] Ceguera: no se versionó scratch de producto; acta en `plan/` (excepción C9)
- [x] No BACKLOG · no S04 despacho · no E_SDK · Z#4/#5/#6 OPEN citados
- [x] ∩ webs (`docs/**`) = ∅ · ∩ bosque = ∅

## Hallazgos fuera de alcance

- Completar install tip zeus (`mcp-core-sdk`) / publish socket-server — ops, no T1.
- Build operator-ui + e2e campana browser — PRUEBA-DE-DOS / observación.
- Decisión publish `@zeus/ciudad` + startpack — PO / C04 follow-up.

## Dudas / bloqueos

Ninguno para aceptar el **acta**. Mesh live completo bloqueado por F1/F4/F5
(no es defecto del worker: es el mapa que S04 debe narrar).

**Aviso city-orq:** T1 entrega lista; **S04 sigue parked** hasta aceptación
de esta acta ✅. No despachar S04 desde este chat.

---

## Revisión del orquestador

**Aceptado ✅** · city-orq · 2026-07-22

| chequeo | resultado |
| ------- | --------- |
| Diff solo acta `plan/.../ACTA-T1-FRICCION-2026-07-22.md` | ✅ (rama S `wp/pco-t1-testing` @ `dbadefa`) |
| Cero commits obra zeus/GL | ✅ |
| F1–F8 + catálogo public/private + mesh gaps | ✅ legibles para S04 |
| Z_SDK #4/#5/#6 OPEN · E_SDK veto | ✅ citados / no tocados |
| Merge main | ✅ tip merge `ff1cb66` (padre S `dbadefa`) |

S04 queda **liberado** del parked (despacho en commit gobierno aparte · V2).
