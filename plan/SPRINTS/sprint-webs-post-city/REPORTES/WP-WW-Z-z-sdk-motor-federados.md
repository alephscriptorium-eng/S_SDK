# WP-WW-Z · z-sdk-motor-federados — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WW-Z |
| fecha | 2026-07-22 |
| rama | `wp/ww-z-motor-federados` (zeus-sdk) |
| worktree | `HOLONES/01-mythos/zeus-sdk/.worktrees/wp-ww-z-motor-federados` |
| commits | `2985c76806faf9cb562b70a087c149b77d302008` |
| base | `2aec4cb7d049861a5ea29bdc207c46fad1c22856` |
| eje(s) CA | III · IV · ceguera regla 1 |
| estado propuesto | listo para revisión (sin merge · sin push) |

## Qué se hizo

**Desviación honesta (antes que nada):** la puerta **Jugar** del PO apunta a
`games/ciudad`, pero esa URL publicada responde **404** hoy (W1 selló la fila
en `/startpacks`; la ficha dedicada es obra de WW-G). La puerta enlaza la
superficie **viva** `https://games.z-sdk.escrivivir.co/startpacks` (200) y
cita `startpack-ciudad-v0.1.0` en copy — cero promesa de ficha inexistente.

En zeus docs:

1. Portada con tres puertas (Jugar · Federar · Construir) y lema «motor de
   mundos federados» (argumento PO del brief).
2. Nav superior + sidebar: **Federar** → `/guide/external-handshake`,
   **Construir** → `/guide/kits-foss` (página nueva).
3. Voz del handshake: celebra `ssbId` / `seatSignature` **hecho** en código;
   cita [Z_SDK#4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4)
   **OPEN** (no cerrado); enlace a tubería casa publicada.
4. Catálogo kits FOSS con versiones **C8** (`npm view` 2026-07-22). Nota:
   brief listaba `@zeus/protocol@0.3.0`; el canal responde **`0.4.0`** — se
   cita el canal, no el número del brief.

Sin tocar BACKLOG, packages, GL docs, S docs/tubería, ni issues.

## Archivos tocados

| path | cambio |
| ---- | ------ |
| `docs/index.md` | portada tres puertas |
| `docs/.vitepress/config.mjs` | nav Jugar/Federar/Construir + sidebar kits; scrub comentario WP-id |
| `docs/guide/external-handshake.md` | voz Federar + ssbId HECHO · #4 OPEN |
| `docs/guide/kits-foss.md` | **creado** — catálogo C8 |
| `plan/SPRINTS/sprint-webs-post-city/REPORTES/WP-WW-Z-z-sdk-motor-federados.md` | este reporte (S) |

## Evidencia

### SHAs entorno (arranque)

```
zeus-sdk  2aec4cb7d049861a5ea29bdc207c46fad1c22856
games-lib 20c095cf698ed5b09a18fe409c8a7de37eb003bf
S_SDK     a64b63a14b575e811841f66168370c0a3a822714
```

### Tip obra

```
2985c76806faf9cb562b70a087c149b77d302008  docs(portal): tres puertas, nav Federar y catálogo kits FOSS
```

### npm view C8 (`https://npm.scriptorium.escrivivir.co`)

```
@zeus/protocol@0.4.0
@zeus/player-mcp-kit@0.1.3
@zeus/rooms@0.1.1
@zeus/embajador-kit@0.1.1
@zeus/parte-kit@0.1.1
@zeus/acta-kit@0.1.1
@zeus/lifecycle-kit@0.1.1
@zeus/ciudad-lifecycle@0.1.1
```

### Build local

```
npx vitepress build docs  →  build complete in 26.78s (exit 0)
dist: index.html · guide/external-handshake.html · guide/kits-foss.html
```

(`npm run docs:build` completo falla en worktree fresco sin deps de
`spec:generate`; gate de portal = vitepress build sobre `docs/`.)

### Ceguera regla 1 (obra docs tocada)

```
rg "WP-[A-Z]{1,2}\d|SCRIPT_SDK|S_SDK|hol[oó]n|holarqu[ií]a|juntura"
  docs/index.md docs/guide/kits-foss.md docs/guide/external-handshake.md
  docs/.vitepress/config.mjs
→ 0 matches (rg exit 1)
```

Marca `aleph`/`scriptorium` admisible (DC-GC-ceguera-marca). `#4` del
tracker Z_SDK citado a propósito (no scrub).

### C8 externos (pre-merge; navegados HEAD)

| URL | HTTP |
| --- | ---- |
| https://games.z-sdk.escrivivir.co/startpacks | 200 |
| https://s-sdk.escrivivir.co/guide/tuberia-protegida | 200 |
| https://github.com/alephscriptorium-eng/Z_SDK/issues/4 | 200 |
| https://npm.scriptorium.escrivivir.co | 200 |
| https://games.z-sdk.escrivivir.co/games/ciudad | **404** (motivo de la desviación Jugar) |
| https://z-sdk.escrivivir.co/guide/external-handshake | 200 (ya publicado; nav top pendiente de merge) |

### Cómo verificar C8 post-merge (orquestador)

Tras merge + deploy Docs de Z_SDK:

1. `https://z-sdk.escrivivir.co/` — hero tres puertas · 200
2. Nav **Federar** → `/guide/external-handshake` · 200
3. Nav **Construir** → `/guide/kits-foss` · 200
4. Re-correr `npm view` ×8 (tabla del catálogo) en el registry
5. Confirmar que el texto de handshake **no** cierra #4 (issue sigue OPEN)

## Auto-revisión (PRACTICAS)

- [x] Diff solo `docs/**` zeus + este reporte S (`ALCANCE_DIFF`)
- [x] Cero copia de árboles ajenos; destilado de publicado + CANTERA/PO
- [x] Sellos: npm view · HTTP 200 · SHA · issue #4 OPEN
- [x] Sin fluff de futuro; `/games/ciudad` no afirmado vivo
- [x] Eje III: una sola tabla de versiones (kits-foss); nav no duplica claims
- [x] Eje IV: segundo sensor = registry C8 + portal games startpacks (distinto del monorepo docs)
- [x] Ceguera 0 en paths tocados
- [x] Commit convencional; sin push; sin merge; sin `gh issue create`

## Hallazgos fuera de alcance

- `/games/ciudad` 404 → WW-G (absorción W2). Tras exista, se puede retarget
  la puerta Jugar sin reabrir kits/handshake.
- Drift brief `protocol@0.3.0` vs canal `0.4.0`.
- `docs/guide/estado.md` sigue con ids de planificación históricos (no
  tocado; fuera del scrub de esta obra).
- Tubería casa (`docs/guide/tuberia-protegida.md` en S) no editada (WW-S/A5);
  solo citada desde handshake.

## Dudas / bloqueos

Ninguno bloqueante. Gate R15-city: despacho asumido por orquestador (este
chat); AVISO-R15-city en plan aún dice «sin despacho» — el orquestador
debe alinear acta PASS si aplica.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
