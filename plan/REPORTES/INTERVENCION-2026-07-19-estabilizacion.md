# Acta — intervención de estabilización (2026-07-19, post-I2)

Interventor: Fable (vigía con mandato ampliado del custodio para esta
intervención: revisar, replanificar, ajustar). Swarm IDLE al entrar.
Método: 2 workers Sonnet (digest del log del orquestador · code review de
facto de CAs) + verificación y ejecución propias. El log crudo
(`TEMP_LAS_SWARM_LOG.md`) queda backstage (gitignoreado `TEMP_*`).

## Veredictos del code review (de facto, C8)

| WP | Veredicto | Nota |
|---|---|---|
| I01 higiene | **Aceptable** — 4/4 CA PASS literales | — |
| I02 workspace | **Aceptable** — CA PASS; limitación VitePress documentada por el propio worker y resuelta en I10 | — |
| I03 submodules | **Aceptable-con-nota → nota CERRADA por la intervención**: submodules no inicializados en el checkout principal → `git submodule update --init` ejecutado; ceguera re-verificada de facto: «holón/holarquía» = 0 en zeus | descubrió F6 (abajo) |
| I10–I26 | Aceptados por el orquestador con evidencia citada; el digest confirma revisiones con comandos re-ejecutados. No re-verificados WP a WP por esta intervención (muestreo I0 completo) | `⏳` re-verificación total |

Sin ficheros indebidos, sin secretos, sin desviaciones de alcance en los
diffs mergeados (revisión transversal del reviewer).

## Hallazgos nuevos

- **F6 · GRAVE — puntero de vuelta en el árbol público de zeus:** 8
  ficheros de su `plan/` citan rutas `SCRIPT_SDK\ADDENDA|VIGILANCIA\...`
  (procedencia anotada por su orquestador al recibir entregas temp-review).
  «holón/holarquía» = 0 (scrub U118 aguantó); la fuga es solo de rutas.
  NO fue causado por WP-I03 (pre-existía). Tratamiento: **WP-I52** (nota
  ciega preparada: `ENTREGA-VIGIA-2026-07-19b-scrub-rutas.md`) + regla 12
  de la RETRO.
- **F7 · menor — la skills-library pública nombra «zeus»** en comentarios
  de `publish.yml` (viola PRACTICAS delta 5). Scrub en WP-I27.
- Pages de skills-library en 404 (DNS ok — CNAMEs verificados por nslookup;
  falta activación/CNAME en el repo). En WP-I27.

## Acciones ejecutadas por la intervención

1. `git submodule update --init` en el checkout principal + grep de ceguera
   de facto (cierra la nota de I03).
2. `stash@{0} wip-pre-merge-i01`: contenido extraído como red de seguridad
   a `VIGILANCIA/TRASH/HIPOTESIS-stash-pre-merge-i01.md` (49 657 bytes) y
   **drop**. `git stash list` = vacío.
3. Ramas `wp/i01..i26` (13, todas mergeadas) **borradas**. Quedan solo las
   `wp/d0x` del ensayo TEST-SWARM (mundo sellado; no se tocan).
4. `.gitignore` += `TEMP_*` (logs de sesión = backstage).
5. `plan/RETRO-2026-07-19-metodo.md` — 12 reglas para el skill v0.2.
6. BACKLOG: nueva Ola I2.5 (WP-I27) + WP-I52 urgente en Ola I5.
7. PRACTICAS: deltas 7 (gobierno a git primero + checklist de cierre) y 8
   (entregas sin rutas).
8. `ENTREGA-VIGIA-2026-07-19-gobierno.md` marcada SUPERADA (su lote (A) lo
   auto-corrigió el swarm en `092fe5f`; (B) lo cierra esta acta; (C) queda
   cosido en PRACTICAS 7).

## Validación de push del raíz (DE-I13) — cara del vigilante

El vigilante **VALIDA** el contenido de `main` (`82f711f` + commit de esta
intervención) para push a `alephscriptorium-eng/S_SDK`: revisión
transversal sin indebidos; backstage excluido por `.gitignore` verificado
(`git ls-files` limpio de VIGILANCIA/ADDENDA/HANDOFF_/HIPOTESIS/TEMP_);
las menciones a zeus en nuestro plan son acceso descendente legal.
Falta la otra firma (orquestador) + decisión del custodio sobre el momento.
Recomendación: puede pushearse ya; el push NO publica web (Pages del raíz
llega con I40).

## Estado de rearranque

- Swarm IDLE · main local `82f711f`+intervención · stash vacío · worktrees
  solo el principal · submodules inicializados.
- **Siguiente lote propuesto (GO del custodio):** WP-I27 (método v0.2 +
  scrubs) ∥ Ola I3 (I30 activación en casa → I31/I32/I33 contenido) ·
  WP-I52 en paralelo (es entrega del custodio, no ocupa worker).
- Gates externos vivos: entrega de I52 a zeus (custodio) · co-firma del
  push raíz (orquestador) · Pages library (ops en I27).
