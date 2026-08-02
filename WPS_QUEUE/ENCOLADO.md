# ENCOLADO · intake `WPS_QUEUE` · 2026-07-31

| dato | valor |
| ---- | ----- |
| Estado | **▶ LAS DOS COLAS PROMOVIDAS.** **cola A: PROMOVIDA** el 2026-08-02 por orden del **product owner** — repartida por dueño en **17 fichas**: hub lane `LORE-HM` (`WP-HUB-100`–`111`, gate `GHM`) + `s-sdk` lane `LENGUA` (`WP-SDK-L01`–`L05`). Ya no es carpeta encolada · **cola B: PROMOVIDA** el 2026-07-31 a ids canónicos de Z `U245–U249`, ventana de despacho **abierta desde `GD`** |
| Decisión | del custodio (2026-07-31, al descongelar el swarm): «encolar y limpiar; fijar la carpeta y la tarea de investigar después» |
| Quién fija | **Anfitrión** (orquestador del swarm Z·V·G·L·O·HUB) |
| Quién produjo el material | otra ventana (**S / «Sol»**), en modo investigación READ-ONLY |
| Mundo notarial | `C:\S_LAB\s-sdk` (holón 07) |
| Cuándo se abre | **después** del frente vivo (carril D de Z + V) y **después de O**, con GO explícito del custodio |

Este documento no juzga el contenido del intake: lo **ancla** para que no se
pierda ni interfiera. El veredicto de fondo es la tarea diferida de §4.

## §1 · Qué contiene esta carpeta (inventario, tal como se recibió)

| pieza | qué es |
| ----- | ------ |
| `QUEUE-A-PLAN-HOLONICO-LORE-HM/` | cola A: plan holónico LORE-HM **en bruto**, entregado sin convertir sus fases en WPs. Payload = `plan.md` (5 fases). Pide veredicto del custodio sobre el programa completo, no GO de implementación |
| `QUEUE-B-ZEUS-TIPADO/` | cola B: campaña de tipos públicos TS para cuatro paquetes de Z (`linea-kit`, `acta-kit`, `linea-system`, `force-system`) + certificación C8. 5 briefs candidatos `ZT01–ZT05`, `BACKLOG.md` y `PUBLISH-GATE.md` |
| `plan.md` | payload de la cola A (fases 0–4: dossier en S · inception de la lengua · capa SOLID · frontera de tipos Zeus · demostración) |
| `investigacion-*.md` (5) | investigaciones READ-ONLY: ecosistema de SDKs · DEVOPS de S · e-sdk/DocumentMachine · holones de S · freeze/vigilancia |
| `z-sdk-*.md` (2) | investigaciones READ-ONLY sobre Z: `linea-kit` y matriz de 17 paquetes |
| `DRAFT/` | cantera previa: dossier «prueba-de-H-M y Barrio LORE» (PLAN, FUENTES) + planes y researches sueltos |

**La carpeta entera es cantera, no fuente de verdad operativa** — así lo
declara su propia cola A, y esta ficha lo ratifica.

## §0 · ✎ PROMOCIÓN DE LA COLA A (2026-08-02) — lo que invalida de esta ficha

Orden del product owner: *«vamos a cambiar una carpeta pendiente de encolar
por una rama sólida de WPs para el backlog»*. El Anfitrión leyó el material
entero y ejecutó el triaje `T-S01` en vez de dejarlo diferido.

**Corrección que consta**: el Anfitrión había escrito —aquí en §3 y en la fila
`U244` de Z— que el programa quedaba parado por una **decisión de reparto
pendiente del custodio**. Era falso: **el propio material la tiene tomada**.
`plan.md` §Decisions lo dice sin ambigüedad —*no se crea holón 08 ni `L_SDK`*—
y la cadena está fijada: `e-sdk` **ya es** el holón 03 con plan propio,
`a-sdk` entra **RO import-once** (holón 05, cantera), Network-Engine (04) se
**sella como fuente histórica** y S (07) notaría. No había nada que decidir:
había trabajo que repartir.

**Reparto resultante** (nada se despacha sin GO; las 17 fichas nacen sin worker):

| destino | fichas | qué se lleva |
| ------- | ------ | ------------ |
| hub `C:\S\scriptorium` | `WP-HUB-100`–`111` (lane `LORE-HM`, gate `GHM`) | la obra: kit, schemas, ontología, generador, pods, import Onfalo, cadena determinista, ceremonia bilateral, verificador externo, **mapa 7 holones × 6 distritos × 24 barrios**, despertar de `lore-voz`, negativos y consumidor limpio |
| `s-sdk` | `WP-SDK-L01`–`L05` (lane `LENGUA`) | dossier holónico · inception de las **cinco primitivas** · capa SOLID de primera clase · registro de vocabulario · sellado del 04 |
| `z-sdk` | `U245`–`U249` (ya promovidas) | frontera de tipos de los cuatro paquetes |
| `e-sdk` | — | el `DocumentMachineProvider` real es **obra de E**; el hub sólo define su puerto y una contingencia determinista marcada `contingency=true` |

Las **seis preguntas de §4** quedan contestadas así: **(1)** cola B ortogonal,
ya remapeada · **(2)** partición hecha, tabla de arriba · **(3)** no se amplía
el reparto — respuesta que **ya estaba en el material** · **(4)** `L03` absorbe
el diseño SOLID, `U243` de Z queda aparte y se alimenta de él · **(5)** entra
**antes que O**, porque la obra es del hub y no depende de O · **(6)** lo
verificable hoy es lo citado en las fichas; lo caducado queda marcado en `L01`.

**Lo que sigue vigente de esta ficha**: el cerco de §2 (nada se despacha desde
esta carpeta; la carpeta es cantera) y las divergencias de §3 salvo la de
reparto, corregida arriba.

## §2 · Cerco mientras esté encolada (vinculante)

1. **Cero despachos desde aquí.** Ningún worker se lanza con un brief de esta
   carpeta hasta que el custodio dé GO y el orquestador abra el carril.
2. **Los ids `ZT01–ZT05` son candidatos locales, no ids canónicos de Z.** Solo
   el orquestador de Z asigna ids sin colisión y copia WPs aprobados a
   `z-sdk/plan/BACKLOG.md`. Hoy **no** están copiados: están apuntados (§5).
3. **No se edita ningún mundo hermano desde esta carpeta** (`z-sdk`, `v-sdk`,
   `e-sdk`, Network-Engine, hub, playground). Escritura autorizada: solo
   dentro de `WPS_QUEUE/`.
4. **Sin `npm publish` manual** y sin tocar Release por este camino.
5. Las afirmaciones del intake sobre otros mundos son **de la fecha en que se
   escribió**: se revalidan antes de promover nada (§3).

## §3 · Divergencias ya detectadas contra el swarm vivo (resolver al promover)

Anotadas ahora para que nadie las herede como verdad:

- **El freeze del carril D que el intake observa ya no rige.** Se congeló tras
  U203 el 2026-07-31 por reinicio de máquina; el swarm está **descongelado** y
  **U204 (driver FIREHOSE) está en vuelo**. Toda regla de la cola B que se
  apoye en «U204 sigue sin diff» debe medirse contra el `main` del momento,
  no contra el tip que el intake cita.
- **Base de worktrees**: la cola B calibra `WORKTREE_BASE = C:/S_LAB/.worktrees/z`;
  la convención viva del swarm es **`C:\S_LAB\wt\<mundo>-<wp>`**. Se impone la
  convención viva.
- **`DOWNSTREAM_PATTERNS`**: el preflight de identidad-raíz da `LOCK` si el
  patrón declarado cubre al propio `WORLD_ROOT` (p. ej. `wt/*` con el worktree
  dentro de `wt/`). Calibrar con la ruta del worktree **fuera** del patrón.
- **Estado del grafo**: el intake describe `prueba-de-dos` con 0/7 marcas; hay
  **1/7** desde el 2026-07-31 (fila Z estampada con evidencia de runtime).
- **Mundos citados fuera del reparto actual**: `e-sdk`, `a-sdk` y
  Network-Engine/OASIS aparecen como piezas del programa. El swarm vivo opera
  seis mundos (Z·V·G·L·O·HUB) + S como notaría. Ampliar el reparto es
  **decisión del custodio**, no consecuencia de aceptar el intake.

## §4 · Tarea diferida que queda fijada (esto es lo que se investigará)

**T-S01 · Triaje del intake `WPS_QUEUE`** — clase: investigación + partición,
sin efectos. Se ejecuta al final del programa, con GO.

Entregable: un veredicto por cola, con estas preguntas numeradas resueltas y
citadas (nada por inferencia):

1. **Cola B (tipado Zeus)** — ¿la campaña `ZT01–ZT05` es un carril ortogonal
   real al carril D, o comparte ficheros con él? Medir contra el `main` de Z
   del momento, no contra el que el intake cita. Si es ortogonal: remapear a
   ids canónicos de Z y decidir su ola. Si toca `src/**` de runtime: se bloquea
   por su propia frontera dura.
2. **Cola A (LORE-HM)** — separar qué parte es **notaría de S**, qué parte es
   **inception de lenguaje**, qué parte es **obra de E** y qué parte es
   **playground**. El intake pide expresamente que esa partición la haga quien
   lo reciba, con decisión del custodio.
3. **¿Se amplía el reparto de mundos?** (`e-sdk`, `a-sdk`, Network-Engine).
   Pregunta al custodio, no inferencia. Sin respuesta, el intake permanece
   encolado.
4. **Solapes con lo ya decidido**: la capa SOLID/PODs/RDF de la fase 2 solapa
   con el spike **U243** de Z (PODs/Solid · líneas como RDF, `P2 DEFERRED`
   hasta U206) y con la decisión ④ del custodio (VPS al final, subida por
   imágenes). Decidir si T-S01 absorbe U243, lo alimenta o queda aparte.
5. **Precedencia frente a la orden ⑤** (Z+V → G+L → O al final): ¿este intake
   entra antes de O, con O, o después? Hoy la respuesta por defecto es
   **después**.
6. **Qué de las 7 investigaciones es verificable hoy** y qué caducó. Marcar
   cada afirmación como verificada / hipótesis / decisión pendiente, que es
   justo lo que la cola A exige de sí misma.

Regla de la tarea: **no promueve nada por inferencia**. Sale con decisiones
numeradas para el custodio y, solo tras ellas, con WPs en el backlog del mundo
propietario.

## §5 · Dónde queda registrado (para que no se pierda)

- **Aquí** — esta ficha, dentro de la propia carpeta, ya trackeada en `s-sdk`.
- **`z-sdk/plan/BACKLOG.md`** — `U244`, `P2 DEFERRED`: triaje de la **cola A**
  (T-S01). Y **cola B promovida** el 2026-07-31 con autorización del custodio:
  `U245–U249` (ZT01→U245 · ZT02→U246 · ZT03→U247 · ZT04→U248 · ZT05→U249),
  bajo el epígrafe «Cola promovida — frontera TypeScript». **No se despacha
  hasta `GD`**: `@zeus/linea-kit` es territorio vivo del carril D y la campaña
  promete cero cambios en runtime — adelantarla sería programar la colisión.
  `acta-kit` (U246) no comparte territorio y puede adelantarse si hace falta.
- **`C:\S\scriptorium\plan\PLAN-SCRIPTORIUM-V1.md`** — encolado en la secuencia
  del programa, al final.
- **`C:\S\scriptorium\sincronia\INDICE.md`** — visible en el estado de la sala.

— **Anfitrión** (orquestador del swarm)
