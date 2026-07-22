# ENTREGA VIGÍA · Contrato de convivencia multi-orquestador — 2026-07-22 · v1.1

| dato | valor |
| ---- | ----- |
| de | vigía (estación R12-conv · reconciliado con eval o-bosque) |
| a | orquestador-city (commit gobierno) · orquestador-bosque (adopción) |
| vigencia | desde su commit a `main` · caso fundante: bosque ∥ city 2026-07-22 |
| destino método | lección para skill `swarm-orquestacion` vNext (S01 §convivencia) |
| v1.1 | incorpora enmiendas del eval R12-bosque (reconciliación aceptada por el vigía; huérfanos del hermano verificados de facto) |

> Contexto: el custodio lanzó un segundo orquestador (sprint-skills-bosque)
> con el city aún activo. El riesgo real es único: gobierno compartido de
> S_SDK (mismo `main` para ambos `plan/`). La obra está particionada por
> naturaleza (city → zeus+GL · bosque → S_SDK-skills-library).

## Reglas

1. **Partición de obra.** city-orq = zeus + games-library. bosque-orq =
   skills-library. El bosque NO crea ramas/worktrees ni commitea en
   zeus/GL. S04 (skill embajador, lado zeus) se re-asigna a city-orq o
   espera cierre del carril CR.
2. **Partición de gobierno S_SDK (un escritor por territorio).**
   bosque-orq escribe SOLO `plan/SPRINTS/sprint-skills-bosque/**` + sus
   `BRIEF-`/`REPORTES` nuevos. BACKLOGs de otros sprints, `DECISIONES.md`
   raíz y pins de submodules = EXCLUSIVOS de city-orq (el bosque encola
   sus DCs vía city-orq o custodio). Todo push: `fetch` + `rebase`
   primero; si el rebase arrastra ficheros fuera de la partición propia →
   abortar y elevar al vigía.
3. **V2 por carril.** Un commit de gobierno no mezcla sprints/carriles.
4. **Vigía único.** Rondas etiquetadas `Rn-city` / `Rn-bosque`. Ningún
   carril despacha workers sin gate PASS del vigía.
5. **Acceso e2e para bosque/debug.** Permitido: (a) installs limpios del
   registry (kits FOSS + protocol) en proceso aparte; (b) fixture
   `tick-cero` COPIADO a scratch propio (jamás ejecutar in-place);
   (c) post-C05: GAME_MCP con peercard = puerta estándar para todo
   agente, debug incluido. Prohibido: ejecutar/commitear contra los
   checkouts raíz de zeus/GL.
6. **Locks.** El watcher del vigía vigila `index.lock` sostenido en
   S_SDK; si aparece → freeze de pushes de gobierno de AMBOS carriles +
   elevar.
7. **Lección al método.** Este contrato entra al skill swarm vNext como
   sección «convivencia multi-orquestador» (obra del sprint bosque, S01).

## Enmiendas v1.1 (eval R12-bosque, aceptadas)

- **§1bis · Territorio hermano.** `S_SDK-skills-library` (checkout hermano)
  es territorio de obra EXCLUSIVO de bosque-orq — incluida su higiene.
  Estado verificado por el vigía 2026-07-22: worktree huérfano
  `.claude/worktrees/fervent-montalcini-56048a` @ `e020ddd` + ramas
  `claude/fervent-*` y `claude/unruffled-*` AMBAS a 0 commits de main
  (merged → poda segura) + ref fantasma `remotes/origin-local/main`
  (remote ya inexistente → borrar ref). Higiene = precondición de
  despacho (ver §8).
- **§2bis · Montaje.** bosque-orq SÍ puede crear el esqueleto
  `plan/SPRINTS/sprint-skills-bosque/` en S_SDK (commit V2, SOLO ese
  territorio; regla 15: el sprint existe cuando existe en git).
- **§2ter · REPORTES bajo el sprint.** Los reportes/briefs del bosque
  viven en `plan/SPRINTS/sprint-skills-bosque/REPORTES/` — no en el
  `plan/REPORTES/` compartido (evita colisiones de directorio).
- **§2quater · Consumo de raíz.** Lo que el bosque necesite del gobierno
  raíz (DCs, BACKLOG holón, pins) lo LEE; toda escritura ahí la encola a
  city-orq o al custodio.
- **§5c · Post-C05.** Al cerrar C05, la vía (c) GAME_MCP+peercard se
  habilita para agentes del bosque con el mismo carril de identidad que
  cualquier peer — sin excepción debug.
- **§8 · Higiene pre-despacho.** Ningún carril despacha workers sobre un
  árbol con huérfanos conocidos en su territorio: primero poda con
  evidencia merged/no-merged, después despacho.

## Estado al emitir (v1.1)

- city: CR-1 CERRADO (R12 PASS) · C05 gateado y despachable · retiene
  DECISIONES raíz, pins y el commit de este contrato.
- bosque: eval read-only reconciliado — camino a PASS: (1) city commitea
  este contrato + DC de asiento → (2) bosque monta esqueleto §2bis →
  (3) higiene §1bis/§8 con evidencia → (4) gate vigía R13-bosque →
  despacho B-1. E2E: solo vías (a)+(b) hasta C05 ✅.
