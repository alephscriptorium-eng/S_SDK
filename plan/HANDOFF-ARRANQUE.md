# HANDOFF — arranque del swarm del holón 07

De: vigía (Fable, sesión 2026-07-19) · Para: orquestador del swarm ·
Media: el custodio. Nota desechable tras el arranque (archivar en
REPORTES/ o borrar cuando la ola I0 cierre).

## Quién eres y qué lees primero

Eres el **orquestador** de este mundo. Lecturas obligatorias, en orden:
1. `plan/README.md` (mapa y ciclo)
2. `plan/PRACTICAS.md` (deltas; la base es `TEST-SWARM/plan/PRACTICAS.md`)
3. `plan/BACKLOG.md` (olas I0–I6)
4. `plan/DECISIONES.md` (DE-In / DA-In)
5. Roles interinos: `TEST-SWARM/plan/roles/` (ORQUESTADOR.md es el tuyo)

Este mundo NO es ciego: el marco (holones, SCRIPT_SDK) es tu casa. La
ceguera aplica solo hacia zeus (todo lo de la ola I5 va por canal
ENTREGA/vigía, jamás directo).

## Estado verificado por el vigía (2026-07-19, canal real)

- `plan/` asentado hoy (sin commitear). El árbol trae VIGILANCIA/, ADDENDA/,
  HANDOFF_*, HIPOTESIS.md: **no improvises con ellos** — son exactamente el
  material que WP-I24 abstrae y separa (protocolo→skill, dato→fixture,
  histórico→backstage local+gitignore, DE-I11). Hasta llegar a I24, léelos
  read-only (salvo la higiene de I01: mover scratch / gitignorear, no borrar).
- Remote `alephscriptorium-eng/S_SDK`: **existe y está vacío** (ls-remote
  sin refs) — el push inicial es WP-I40 tras validación orquestador+vigilante
  (DE-I13).
- Remotes zeus vivos: `Z_SDK` (main + ramas) y `Z_SDK-games-library`
  (main + ramas) — listos para WP-I03.
- Remote `S_SDK-skills-library`: **no existe aún** (verificado: not found).
  **Lo crea el swarm** (`gh repo create`, DE-I7) — ya no espera al custodio.
- Registry propio vivo: `npm view @zeus/protocol
  --registry=https://npm.scriptorium.escrivivir.co` → `0.2.0`.
  (El `npm publish` de I26 usa el procedimiento DE-I12; si no hay auth de
  escritura en `.npmrc`, es tick de ops del custodio.)

## GO otorgado (custodio, vía vigía) — lote de arranque

- **WP-I00** — revisa lo asentado contra su CA y márcalo tú (✅ es tuyo).
- **WP-I01 ∥ WP-I02 ∥ WP-I03** — DA-I1 resuelta (DE-I10): I01 desbloqueado;
  higiene básica (HIPOTESIS.md scratch fuera) + workspace raíz + submodules
  holón 01 (solo zeus+games; emmanuel/aleph asentados sin inflar, DE-I8).
- **Ola I1 entera:** I10 ∥ I12; I11 tras I10.
- **Ola I2 completa — la abstracción (DE-I10):** I20 (scaffold +
  `gh repo create`, DE-I7) → I21 ∥ I22 ∥ I23 (los tres skills, sin datos) →
  **I24 (separación de datos + error fundamental DS-5)** → I25 (primer caso
  de verificación) → I26 (publish, DE-I12). I24: saca la vigilancia de zeus
  del núcleo publicable, de-identifica fixture `ejemplo-M`, preserva
  histórico **local + gitignore** (DE-I11).

## Ticks cerrados (custodio 2026-07-19) — ya no «esperando»

| Tick anterior | Decisión | Estado |
|---|---|---|
| I24 destino backstage | DE-I11 · local + `.gitignore` (no remoto privado) | cerrado |
| I26 procedimiento publish | DE-I12 · mismo que zeus/Verdaccio (`publish-package.sh` + D-24 `_password`) | cerrado |
| I40 push del raíz «solo custodio» / DA-I1 | DE-I13 · push tras validación orquestador + vigilante | cerrado |

**Sin GO residual (declarar al cierre si aparece):**
- I26 publish → si `npm publish` pide auth de escritura → «esperando: tick
  de ops (.npmrc / secrets) del custodio»; el resto (crear repo, GitHub,
  Pages, dry-run del procedimiento) va.
- I5 tras I2 · I6 tras I3 (dependencias de ola, no ticks de custodio).

## Reglas que el vigía va a verificar de facto

1 WP = 1 worker = 1 rama `wp/<id>-<slug>` = 1 worktree · workers no empujan
solos (push raíz: DE-I13; skills-library: DE-I7) · cero commits dentro de
`HOLONES/*` · C8 en todo CA con canal externo (navegar, no solo curl;
install real) · evidencia literal en REPORTES/ (`⏳ sin verificar` existe;
inventar, no) · cierre de sprint con estado declarado: «IDLE sin pendientes»
o «esperando: <tick> de <quién>» — nunca silencio.

Hay vigilancia externa read-only sobre este swarm (mediación transparente:
puedes saberlo, y las addendas que recibas del custodio pueden venir de
ella). Los «Devueltos» son señal de salud, no de fallo.

---

## Nota de orquestador (2026-07-19)

Lote I0 ejecutado: I00 ✅ · I01∥I02∥I03 🔶 con briefs en
`plan/REPORTES/BRIEF-WP-I0{1,2,3}-*.md`. Este handoff puede archivarse a
`plan/REPORTES/` cuando I01–I03 cierren ✅.
