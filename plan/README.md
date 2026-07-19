# plan/ — centro de mando del holón 07 (SCRIPT_SDK)

Primer **swarm real** de este repo: la inicialización del holón 07 como
workspace raíz de la holarquía, su web fanzine en `s-sdk.escrivivir.co`, y la
extracción de las habilidades comunes (site-web, orquestación de swarms,
vigilancia) al repo hermano **`S_SDK-skills-library`** — parejo a
`Z_SDK-games-library` — para que cada holón active el skill común en vez de
replicar el protocolo.

## Protocolo: activado vía skill

**Definición canónica:** skill `swarm-orquestacion` en
`S_SDK-skills-library` @ `019a90b` /
`@alephscript/skills-scriptorium@0.1.0`
(`skills/swarm-orquestacion/` — SKILL.md, `reference/roles/`, ejes, ciclo,
plantilla de reporte).

Este `plan/` **referencia** el skill; **no** replica `plan/roles/` propio
(grep dedup = 1 definición canónica = el skill). Calibración local:
VISION, PRACTICAS (deltas), BACKLOG, DECISIONES, REPORTES.

**Puntero operativo (ensayo sellado):** mientras los chats del swarm de
este repo arrancan, los prompts de rol se pueden leer desde
`TEST-SWARM/plan/roles/` como copia de trabajo del ensayo — explícitamente
*no* canónica; la fuente a citar y a la que volver es el skill. Tras I27
(v0.2) se podrá alinear o sustituir ese puntero.

Instancia de capa de contenido: `WEBS/` (skill `site-web`, DE-I6).

## Mapa de documentos

| doc | qué contiene | quién lo edita |
| --- | ------------ | -------------- |
| [VISION.md](VISION.md) | la idea, los dos repos, los candados | orquestador |
| [BACKLOG.md](BACKLOG.md) | olas I0–I6 con CA | orquestador (estado); swarm propone |
| [PRACTICAS.md](PRACTICAS.md) | deltas sobre las heredadas — **lectura obligatoria** | orquestador |
| [DECISIONES.md](DECISIONES.md) | DE-In tomadas y DA-In abiertas (las cierra el custodio) | orquestador |
| [REPORTES/](REPORTES/README.md) | un acta por WP (plantilla del skill) | swarm |
| roles/ | **ausente** — canónico en skill; puntero ensayo en TEST-SWARM | — |
| [`../WEBS/`](../WEBS/README.md) | instancia site-web (CANTERA + ENTREGAS) | swarm (WPs de copy) |

## Ciclo de trabajo

El del skill `swarm-orquestacion` (resumen): orquestador asigna (🔶 en
BACKLOG, siempre en main) y entrega brief → worker implementa en rama
`wp/<id>-<slug>` (worktree si hay paralelo) → reporte con evidencia
literal (`⏳ sin verificar` existe; inventar observaciones, no) →
orquestador revisa contra CA + PRACTICAS y marca ✅ (= autorización de
merge) o devuelve. **1 WP = 1 worker = 1 rama = 1 worktree.** Push del
raíz: tras validación orquestador+vigilante (DE-I13); skills-library: el
swarm crea/publica (DE-I7). Workers no empujan solos salvo brief que lo
autorice en `wp/*`.

## Las reglas que gobiernan todo lo demás

- **Ceguera ascendente 07→01 es ley:** el árbol de zeus jamás menciona este
  marco. Todo lo que va a zeus va por el canal ENTREGA/vigía con prueba de
  ceguera (grep = 0). Los submodules son anclas read-only descendentes.
- **Ningún sello sin fuente**; lo no comprobado se declara `<pendiente>`.
- **C8:** todo comando o URL citado se verifica contra su **canal real**
  (navegar, no solo curl; `npm install` real, no «hay Release»).
- **Munición ≠ moneda**; cifras en puntos de scrum.
