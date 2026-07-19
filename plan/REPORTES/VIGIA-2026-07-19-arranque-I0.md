# Acta del vigía — arranque Ola I0 (2026-07-19)

Rol: vigilante read-only del swarm del holón 07 (mediación transparente —
el orquestador sabe que existe). Verifica de facto (C8), no se fía del ✅.
No marca estados (eso es del orquestador); eleva hallazgos al custodio.

## Evidencia DNS asentada (tick de ops del custodio, DE-I2 / DE-I9)

El custodio creó los registros (2026-07-19). Verificado por el vigía contra
DNS real (`nslookup -type=CNAME`):

| registro | tipo | destino | verificación vigía |
| --- | --- | --- | --- |
| `s-sdk` | CNAME | `alephscriptorium-eng.github.io` | ✅ resuelve |
| `skills.s-sdk` | CNAME | `alephscriptorium-eng.github.io` | ✅ resuelve |
| `z-sdk` | CNAME | `alephscriptorium-eng.github.io` | ✅ resuelve |
| `games.z-sdk` | CNAME | `alephscriptorium-eng.github.io` | ✅ resuelve |
| `scriptorium` | A | `92.243.24.163` (VPS pub Oasis) | provisto; no verificado por el vigía |

Consecuencia: el frágil #3 (DNS) y el lado ops de #1 (dominio) quedan
resueltos para `s-sdk` y `skills.s-sdk`. WP-I11/I20 solo deben commitear el
`docs/public/CNAME` con el valor correcto; la resolución ya existe. Enforce
HTTPS queda como sub-tick al activar Pages (I40/I26).

## Pulso del swarm (2026-07-19, de facto)

- Aislamiento correcto: 3 worktrees / 3 ramas / 3 WP (`wp/i01`, `wp/i02`,
  `wp/i03`). 1 WP = 1 rama = 1 worktree ✅.
- `main` = `9f8e884`: mergeó I01→I02→I03. El conflicto `.gitignore` I01↔I02
  que el worker I01 anticipó se resolvió por unión (commit `72587e3`,
  «unión .gitignore I01+I02») — buen manejo, no se pisó.
- Reportes con evidencia literal y auto-revisión honesta (I01 declara
  `⏳ sin verificar` el grep amplio de I24 — correcto, no lo inventa).
- Submodules I03 + placeholders DE-I8: coherente con lo decidido.

## Hallazgos (code review) — ranking por severidad

### F1 · CRÍTICO — La capa de gobierno del plan NO está commiteada
De facto: `git ls-tree -r main -- plan/` devuelve **solo** los 3 reportes
(`plan/REPORTES/WP-I0{1,2,3}-*.md`). **NO están en git:** `plan/BACKLOG.md`,
`plan/DECISIONES.md` (DE-I0..I13), `plan/VISION.md`, `plan/README.md`,
`plan/PRACTICAS.md`, `plan/HANDOFF-ARRANQUE.md`, los BRIEF-* y REPORTES/README.
Viven solo en el working tree como `??` untracked.
- **WP-I00 fue marcado ✅ «plan/ asentado y coherente» — el sello es falso
  de facto:** el plan que define los CA no existe en la historia.
- Los WP I01/I02/I03 se revisaron y aceptaron contra un BACKLOG/DECISIONES
  que solo viven en un working tree volátil = **blanco móvil**.
- Riesgo real: un `git checkout -- .`, `git clean` o reset borra TODO el
  gobierno (CAs, DE-I0..I13, candados) sin traza recuperable.

### F2 · ALTO — Inversión de la disciplina de commit
Se commitió la implementación (`.gitignore`, `package.json`, submodules,
reportes) pero no el plan que la gobierna. El `.gitignore` de backstage está
en main; su justificación (DE-I11) no. La razón de la regla no viaja con la
regla.

### F3 · MEDIO — Sello antes que objeto
El orquestador siguió escribiendo DECISIONES (DE-I11/I12/I13) DESPUÉS de
marcar I00 ✅. Invariante «un ✅ no se reabre» intacto en forma, pero su
producto (el plan) se reescribió en caliente y sin commits. El acta de I00
cita «DE-I0..I13 con fuente» — pero I11/I12/I13 nacieron tras el sello.

### F4 · MEDIO — `stash@{0}: On main: wip-pre-merge-i01` colgando
Hay un stash con los untracked pre-merge. Los `??` del working tree probable-
mente derivan de ahí. Riesgo de pérdida o de colisión si se aplica sobre un
árbol ya cambiado. Limpiar en quietud tras asentar F1.

### F5 · BAJO (higiene) — `CONECTOR_ZEUS_SDK_BLOCKCHAIN_COMPORT_PLAN.md`
Untracked, nombra zeus+blockchain (clase backstage), fuera de `.gitignore` y
de DE-I11. Ya lo señaló el worker I01 (hallazgo 2). Antes de cualquier push
del raíz (I40): gitignorar o archivar, o un `git add -A` lo mete al índice
publicable rompiendo ceguera.

## Recomendación al custodio / orquestador

*(corregida tras releer el protocolo: `ESTACION.md:87` — «un WP ✅ jamás se
reabre — trabajo nuevo = WP nuevo». I00 NO se re-marca.)*

1. **F1 → WP nuevo (WP-I04 · asentar el gobierno en git), gate del GO de
   Ola I1:** el orquestador commitea `plan/` completo a main. CA:
   `git show main:plan/BACKLOG.md` (y DECISIONES/VISION/README/PRACTICAS)
   existen; el acta de I00 recibe nota del orquestador citando este WP.
   El custodio no da GO a I1 hasta I04 ✅.
2. Resolver F4 (stash) y F5 (conector) dentro de I04 o micro aparte, en la
   misma quietud.
3. F2/F3 son doctrina: sembrar en PRACTICAS que **el gobierno va a git antes
   de abrir WPs sobre él** (retro de este arranque).

Vehículo según protocolo: ENTREGA en quietud (`ESTACION.md:29-31`) — ni stop
de swarm (el vigía no habla con el swarm; no hay workers vivos que parar) ni
«cuando puedas» (F1 es anomalía real, `ESTACION.md:19-20`).

Persistir este veredicto en disco (doctrina del vigía: la memoria y el chat
se pierden).
