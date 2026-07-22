# WP-F5b — CA ESTRELLA · e2e DOS CIUDADES (registry puro)

| dato | valor |
|---|---|
| estado | 🔶 · **parked** · **NO despachar** hasta F5a ✅ total (ciudad/startpack C8) |
| track | E2E / federación · scratch A+B |
| depende de | R17-city PASS · **F5a ✅** (lote mesh en C8) · Z04/rooms citables |
| paraguas | [WP-F5](WP-F5.md) |
| issue | LOCAL-ONLY |
| brief | [BRIEF-F5b](BRIEFS/BRIEF-WP-F5b.md) |

## Objetivo

**CA estrella:** dos ciudades scratch (A y B), puertos disjuntos,
`npm install` **solo registry C8** (cero `file:` / tip árbol como fuente),
federar (Z04 / rooms), intent cruzado **visible**, claim→acta/SHA.

Flujo mínimo:

1. Scratch ciudad A + scratch ciudad B (puertos distintos).
2. Install C8 de `@zeus/ciudad` · startpack · socket-server · deps mesh.
3. Federar (patrón Z04 / rooms — citar; no reinventar handshake).
4. Intent cruzado observable (announce / presencia / señal acordada).
5. Acta e2e con evidencia literal + tip SHAs.

## CA (ejes I·IV + ceguera)

- [ ] Dos instancias scratch · puertos disjuntos · cero leak a monorepo
      (`file:` / `ZEUS_SDK_ROOT` como fuente de verdad = fail).
- [ ] Federación A↔B con intent cruzado visible (stdout/log/UI sensor).
- [ ] Acta bajo este sprint (`REPORTES/ACTA-F5b-*.md`) · claim→acta/SHA.
- [ ] Fricciones T1 C1/C5/C7 relevantes = muertas o documentadas en
      [checklist C1–C8](REPORTES/CHECKLIST-F5-C1-C8-T1.md).
- [ ] Ceguera regla 1. Z#4/#5/#6 OPEN citados — **no cerrar**.

## Fuera

- Empezar sin F5a ✅ (paquetes aún 404 = no es C8 puro).
- E_SDK · cerrar issues OPEN ajenos · reopen S04.
- Mezclar obra publish (F5a) en misma rama/commit (V2 / un WP = un chat).
