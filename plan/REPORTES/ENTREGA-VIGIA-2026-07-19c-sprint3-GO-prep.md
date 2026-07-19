# ENTREGA — Sprint 3 / I50 (§Nota redactada · lista para entrega)

§Lectura interna (NO sale a zeus): GO aparte del custodio 2026-07-19.
Redacción del vigía con **triaje contra los repos vivos** (origin/main de
ambos, 2026-07-19 noche) — el mandato «no inventar frágiles» cazó que 4 de
los 6 ítems del plan original YA están resueltos:

| Frágil | Estado real verificado | ¿Va en la nota? |
|---|---|---|
| #1 CNAME commiteado | **VIVO ×2** — zeus `docs/public/` solo `.gitkeep`; library ni tiene `docs/public/` | **SÍ** |
| #4 `npm install` en docs.yml library | **VIVO** — L34 `npm install` (zeus usa `npm ci`); semi-intencional («@zeus desde registry») | **SÍ (como consulta)** |
| #2 guard base MSYS | ya existe en su `config.mjs` | no |
| #5 `dist/` commiteado library | 0 ficheros — resuelto | no |
| #7 gap `paths: docs/**` | ya documentado (comentario WP-U104/D-22 + `workflow_dispatch` + guía) | no |
| A-13 economía CI | ya aplicado: `paths-ignore` push+PR y `concurrency` en su ci.yml | no |

Lección aplicada: evidencia sin tokens (ni rutas ni nombres del marco);
oferta del paquete SOLO por nombre npm (sin dominio `skills.s-sdk...` ni
repo GitHub — el token `skills-library` no debe entrar al árbol de zeus).
Prueba de ceguera §Nota: grep `holón|holarquía|vigía|marco|SCRIPT_SDK|
skills-library|s-sdk` = 0.

---

## §Nota para el orquestador de zeus (entregable — solo este bloque)

> **Sprint 3 (micro) — dos ítems de robustez del pipeline de docs + un
> recurso del registry**
>
> Triaje previo hecho sobre vuestros main: la mayoría de la deuda de
> pipeline detectada en su día ya está resuelta (guard de base, dist
> fuera del índice, gap de paths documentado, economía de CI con
> paths-ignore y concurrency). Quedan dos cosas pequeñas:
>
> | # | Ítem | Propuesta | CA |
> |---|---|---|---|
> | 1 | El dominio custom vive solo en Settings→Pages (el repo del portal tiene `docs/public/` vacío; el del catálogo ni lo tiene). Si Pages se reconfigura, el dominio se pierde en silencio. | Commitear `docs/public/CNAME` con el dominio de cada portal (el build de Pages lo recoge del artifact). | `git ls-files docs/public/CNAME` devuelve el fichero en ambos repos; tras el siguiente deploy, el custom domain persiste (Settings lo refleja). |
> | 2 | El docs.yml del catálogo usa `npm install` (comentado «deps desde registry») mientras el del portal usa `npm ci`. | Consulta, no imposición: `npm ci` también resuelve del registry vía lockfile+`.npmrc`; si el motivo era otro, documentarlo en el propio yml. | O bien `npm ci` en ambos con build verde, o comentario en el yml explicando por qué no. |
>
> **Recurso disponible en vuestro registry** (opcional, cero compromiso):
> `@alephscript/skills-scriptorium@0.2.0` — paquete público con método de
> orquestación de swarms por WP/CA, generación de sites con Pages, y
> protocolo de revisión externa; incluye checklist de cierre de ola y
> reglas de higiene (worktrees, ramas, evidencia). `npm view
> @alephscript/skills-scriptorium --registry=https://npm.scriptorium.escrivivir.co`
> para verlo. Si algo os sirve, es adoptable por partes; si no, nada.
>
> Esta nota es propuesta, no decreto. Prioridad baja (nada roto hoy).

---

Registro: §Nota redactada por el vigía 2026-07-19 (triaje en tabla
interna). Pendiente: entrega del custodio → zeus archiva (U142) → triage
suyo → I51 re-verifica lo que se aplique. I50 🔶 hasta entrega efectiva.
