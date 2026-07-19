# plan/ — centro de mando del holón 07 (SCRIPT_SDK)

Primer **swarm real** de este repo: la inicialización del holón 07 como
workspace raíz de la holarquía, su web fanzine en `s-sdk.escrivivir.co`, y la
extracción de las habilidades comunes (site-webs, orquestación de swarms,
vigilancia) al repo hermano **`S_SDK-skills-library`** — parejo a
`Z_SDK-games-library` — para que cada holón active el skill común en vez de
replicar el protocolo.

Procedencia del protocolo: `TEST-SWARM/plan/roles/` (@2026-07-19, el ensayo
general, sellado) + los 5 ejes de `VIGILANCIA/RE-PLAN-protocolo-swarm.md`.
**Interinidad declarada:** hasta que exista el skill `swarm-orquestacion`
(WP-I21) y se active en casa (WP-I30), los roles se leen de
`TEST-SWARM/plan/roles/` — este plan NO copia el protocolo (evitar la
réplica es precisamente uno de sus objetivos).

## Mapa de documentos

| doc | qué contiene | quién lo edita |
| --- | ------------ | -------------- |
| [VISION.md](VISION.md) | la idea, los dos repos, los candados | orquestador |
| [BACKLOG.md](BACKLOG.md) | olas I0–I6 con CA | orquestador (estado); swarm propone |
| [PRACTICAS.md](PRACTICAS.md) | deltas sobre las heredadas — **lectura obligatoria** | orquestador |
| [DECISIONES.md](DECISIONES.md) | DE-In tomadas y DA-In abiertas (las cierra el custodio) | orquestador |
| [REPORTES/](REPORTES/README.md) | un acta por WP (plantilla interina de TEST-SWARM) | swarm |
| roles/ | **no existe aquí**: interino en `TEST-SWARM/plan/roles/`, destino en el skill | — |

## Ciclo de trabajo

El de TEST-SWARM (resumen): orquestador asigna (🔶 en BACKLOG, siempre en
main) y entrega brief → worker implementa en rama `wp/<id>-<slug>` (worktree
si hay paralelo) → reporte con evidencia literal (`⏳ sin verificar` existe;
inventar observaciones, no) → orquestador revisa contra CA + PRACTICAS y
marca ✅ (= autorización de merge) o devuelve. **1 WP = 1 worker = 1 rama =
1 worktree.** Push del raíz: tras validación orquestador+vigilante (DE-I13);
skills-library: el swarm crea/publica (DE-I7). Workers no empujan solos.

## Las reglas que gobiernan todo lo demás

- **Ceguera ascendente 07→01 es ley:** el árbol de zeus jamás menciona este
  marco. Todo lo que va a zeus va por el canal ENTREGA/vigía con prueba de
  ceguera (grep = 0). Los submodules son anclas read-only descendentes.
- **Ningún sello sin fuente**; lo no comprobado se declara `<pendiente>`.
- **C8:** todo comando o URL citado se verifica contra su **canal real**
  (navegar, no solo curl; `npm install` real, no «hay Release»).
- **Munición ≠ moneda**; cifras en puntos de scrum.
