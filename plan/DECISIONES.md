# DECISIONES — holón 07, inicialización

Tomadas = DE-In (decisión, fuente, consecuencia). Abiertas = DA-In (las
cierra el custodio). Fuente común de las DE: conversación custodio↔Fable,
2026-07-19 (reunión de status + plan aprobado en `plan/BACKLOG.md`).

## Tomadas

- **DE-I0 · Inicialización como workspace raíz.** S_SDK deja de estar vacío
  en remoto: se conecta entero a GitHub, estructura tipo aleph-scriptorium
  (raíz que trae git submodules — ya puede traer los de zeus).
  Consecuencia: olas I0/I1; revisa DE-7 de TEST-SWARM (ver DE-I4).

- **DE-I1 · Web tech = VitePress + piel zine.** Export del mecanismo zeus
  completo; base limpia = variante library
  (`Z_SDK-games-library/.github/workflows/docs.yml` + su `config.mjs`).
  Los 7 puntos frágiles detectados en el pipeline zeus se corrigen de serie.

- **DE-I2 · Dominio = `s-sdk.escrivivir.co`**, parejo a z-sdk. Recursos
  parejos habilitados: CNAME commiteado, DNS CNAME →
  `alephscriptorium-eng.github.io`, Enforce HTTPS.

- **DE-I3 · Repo nuevo `S_SDK-skills-library`**, parejo a
  `Z_SDK-games-library`. Las habilidades hoy replicadas (WEBS;
  VIGILANCIA+ADDENDA; roles/ de swarm copiado en 4 planes) se convierten en
  **skills con formato estándar público**, publicadas al registry propio.
  Cada holón **activa** el skill común en vez de mantener copia.
  Consecuencia: ola I2 entera; I6 (activación en holones); aplica los ejes
  II/III/IV del RE-PLAN.

- **DE-I4 · Revisión de DE-7 (TEST-SWARM).** Ya no main huérfano solo-docs:
  publicación abierta del repo con línea público/backstage (DA-I1).
  El pack TEST-SWARM se conserva servido (DA-4 de TEST-SWARM se honra).

- **DE-I5 · Revisión de DS-5.** Entran submodules como **anclas read-only**
  (el puntero es descendente 07→01: legal; el árbol de zeus sigue ciego).
  La composición por registry que DS-5 protegía se **restaura** por la vía
  skills (DE-I3): los mundos componen método desde el registry, no copias.

- **DE-I6 · Capa de contenido por método WEBS.** La web de holones se
  redacta con el método de `OASIS/SCRIPTORIUM_V0/WEBS/` (backtracking,
  C8/C9, entrega verbatim §E). El **método** vive en el skill `site-web`;
  la **instancia** (CANTERA, ENTREGA-CAPA) vive en `WEBS/` de este repo.

- **DE-I7 · Creación y publicación de la skills-library delegada al swarm**
  *(cierra el tick «crear el repo»; custodio 2026-07-19).* El swarm tiene
  capacidades (gh CLI + npm publish al Verdaccio): **crea** el repo
  `S_SDK-skills-library` y **publica** el paquete de skills. Relajación
  puntual de DA-5 (que reservaba todo push al custodio). La skills-library
  no contiene material sensible (skills marco-agnósticos, PRACTICAS delta 5),
  luego su creación+push es segura para el swarm. *El push del repo raíz
  S_SDK ya no queda «solo custodio»: ver DE-I13. Nota de ops: si `npm
  publish` pide auth de escritura y el `.npmrc` no la trae, eso es tick de
  ops del custodio, no bloqueo del WP (procedimiento canónico: DE-I12).*

- **DE-I8 · Asentar sin inflar remotos** *(cierra DA-I2 y DA-I4; custodio
  2026-07-19).* Los submodules de aleph-scriptorium (05–06) y emmanuel (03)
  **no se añaden todavía**: se **asientan** — ficha + link en la web,
  placeholder de anclaje preparado en `HOLONES/` (ruta reservada, sin
  `git submodule add`). Solo el holón 01 (zeus + games-library) se ancla de
  verdad en WP-I03. Se re-abre cuando el custodio dé el tick de inflado.

- **DE-I9 · Dominio de la skills-library** *(cierra DA-I3; custodio
  2026-07-19).* Parejo al patrón games: `skills.s-sdk.escrivivir.co`
  (mismo esquema que `games.z-sdk.escrivivir.co`). CNAME commiteado + DNS +
  HTTPS, recursos parejos. Ya no bloquea el Pages de I24.

- **DE-I10 · La abstracción decide qué es público** *(cierra DA-I1;
  custodio 2026-07-19).* No es «esconder histórico»: es **separar protocolo
  de datos**. Regla:
  - **Protocolo/método → skill** (público, marco-agnóstico, SIN datos):
    roles del swarm, doctrina del vigía (ESTACION), método WEBS. Parametriza
    «el mundo»; jamás nombra mundos reales.
  - **Datos → instancia** (separada del skill): la sesión de vigilancia de
    zeus, sus addendas, los handoffs. Es DATO de un mundo, no método.
  - **Error fundamental nombrado:** que la VIGILANCIA del plan de zeus viva
    dentro de SCRIPT_SDK **viola DS-5** (el holón 07 no almacena código/dato
    de otro mundo — reléelo y ancla, no lo guardes). Corregirlo es parte del
    trabajo: esos datos **salen del núcleo** de SCRIPT_SDK.
  - **Primer caso de verificación:** los datos de vigilancia de zeus, una
    vez separados y **de-identificados** (mundo → parámetro), son el primer
    corpus-instancia que prueba que **otro holón puede usar el skill**
    (Eje IV del RE-PLAN: el segundo consumidor valida el contrato). El
    histórico real se preserva backstage (respeta ceguera 07→01); la
    derivación de-identificada es la fixture pública del skill.
  - **Alcance:** tanto VIGILANCIA+ADDENDA como WEBS se someten a esta
    abstracción (protocolo→skill · datos→instancia).
  - **Simulación (sin remotos aún):** como todavía no hay repos remotos ni
    registry para bajar los skills sin datos, el swarm **simula** el ciclo:
    estructura la skills-library en local, referencia por ruta/`npm pack`, y
    deja todo listo para que al publicar de verdad funcione igual.
  Consecuencia: reestructura la Ola I2 (ver BACKLOG); tras la separación,
  el núcleo de SCRIPT_SDK que se publica es solo marco (DEVOPS, plan, docs,
  TEST-SWARM, HOLONES, WEBS-instancia-propia).

- **DE-I11 · Destino backstage del histórico de vigilancia = local +
  `.gitignore`** *(cierra el tick de destino I24; custodio 2026-07-19).* El
  histórico real (`VIGILANCIA/`, `ADDENDA/`, `HANDOFF_*`, y lo que I24
  separe del núcleo) **permanece en la codebase LOCAL** y se excluye del
  remoto vía `.gitignore`. **No** se abre un remoto privado nuevo ni una
  rama privada dedicada. Consecuencia: WP-I24 (y la higiene de WP-I01 que
  alinea `.gitignore`) preservan el histórico en disco; el árbol
  publicable/remoto no lo contiene. Compatible con DE-I10 (dato fuera del
  núcleo publicable) sin inventar infra remota.

- **DE-I12 · Procedimiento de publish I26 = el mismo que zeus / Verdaccio
  canónico** *(custodio 2026-07-19).* Fuente verificada (lectura en disco,
  2026-07-19):
  - Canónico ops: `C:\Users\aleph\OASIS\aleph-scriptorium\ScriptoriumVps\.npmrc.example`
    + `C:\Users\aleph\OASIS\aleph-scriptorium\ScriptoriumVps\scripts\publish-package.sh`
    (username + `_password` base64 + email + `always-auth`; **NO** `_auth` /
    `_authToken`; secrets desde `.env.generated-secrets`;
    `npm publish --registry https://npm.scriptorium.escrivivir.co`).
  - Espejo en zeus (CI): `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\.github\workflows\release.yml`
    y `publish-operator-bridge.yml` (secrets `NPM_USERNAME`/`NPM_PASSWORD`,
    D-24 (a), WP-U122 ✅).
  - Repo zeus local (no submodule aún en S_SDK):
    `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\` (también
    `Z_SDK-games-library/` hermano).
  Consecuencia: WP-I26 reutiliza ese patrón (script o pasos equivalentes);
  no inventar JWT/`NPM_TOKEN`. Si falta auth de escritura en el entorno del
  worker → tick ops del custodio (no bloquea el resto del WP).

- **DE-I13 · Push del repo raíz tras validación orquestador + vigilante**
  *(cierra el tick «I40 solo custodio»; custodio 2026-07-19).* El push
  inicial / de main del **raíz S_SDK** (WP-I40) **ya no es exclusivo del
  custodio**. Condición: **validación del orquestador + del vigilante**
  (el vigilante se presentará; mediación transparente, Eje V). Sustituye
  la reserva residual de DA-5/DE-I7 sobre el push del raíz y anula el
  bloqueo falso «DA-I1» en I40 (DA-I1 ya cerró por DE-I10). El custodio
  puede seguir mediando ops (DNS, HTTPS, secrets), pero el GO de push no
  exige su tick manual exclusivo.

## Abiertas (bloquean lo indicado)

*(ninguna propia viva — DA-I1..I4 cerradas por DE-I8/I9/I10; ticks I24/
I26-proc/I40 cerrados por DE-I11/I12/I13. I40 ops cerradas formalmente
2026-07-19 — verificado por custodio/estación; acta C8 = WP-I41.)*

*(Heredada, de TEST-SWARM: DA-6 «la puerta única» sigue abierta allí;
bloquea WP-D31 de aquel mundo, no bloquea este plan.)*

## Notas no bloqueantes (GO 2026-07-19)

- ⏳ Pages `skills.s-sdk.escrivivir.co` — cubierto por **WP-I27**.
- ✅ **GO I5** (custodio · 2026-07-19) — cola **WP-I52** 🔶 abierta.
  Entregable = §Nota ciega
  `plan/REPORTES/ENTREGA-VIGIA-2026-07-19b-scrub-rutas.md` (canal
  ENTREGA/vigía; ceguera 07→01). Zeus aplica micro-WP propio; CA I52
  abierto hasta merge + re-verificación vigía. **I52 ≠ I50** (I52 = F6
  scrub; I50 = Sprint 3). **I50/I51** sin GO (no arrancar). **I152 no
  existe.**
- I41 ✅ (acta C8); estación/vigilante como insumo ya consumido.
