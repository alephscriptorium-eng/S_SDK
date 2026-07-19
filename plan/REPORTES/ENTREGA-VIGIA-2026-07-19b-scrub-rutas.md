# ENTREGA — scrub de rutas locales en plan/ de zeus (URGENTE, vía custodio)

§Lectura interna (NO sale): F6 de la intervención — el árbol público de
Z_SDK contiene el puntero de vuelta que la ley de ceguera prohíbe (rutas
`SCRIPT_SDK\...` anotadas por su orquestador como procedencia de nuestras
entregas temp-review). La §Nota va encuadrada como higiene de portabilidad
— cierto y suficiente; no menciona el marco. Prueba de ceguera de la §Nota:
grep `holón|holarquía|vigía|marco|skills-library` = 0 («SCRIPT_SDK» aparece
solo como la cadena a borrar, inevitable). Tras la aplicación, el vigía
re-verifica con grep sobre su main y pide que el fix cubra la CLASE
(CA-por-clase): toda ruta absoluta local, no solo las 8 encontradas.

---

## §Nota para el orquestador de zeus (entregable)

> **Higiene · rutas absolutas de máquina local en el plan público**
>
> El repo es público y `plan/` cita rutas absolutas de una máquina de
> desarrollo (formato `C:\Users\...\SCRIPT_SDK\ADDENDA\ENTREGA-*.md` y
> similares) como procedencia de notas externas recibidas. Es deuda de
> portabilidad y de privacidad: rutas de un disco ajeno al repo no son
> resolubles por ningún lector y exponen estructura local.
>
> Ficheros afectados (grep de hoy sobre main):
> `plan/BACKLOG.md` (líneas ~181, ~203) · `plan/DECISIONES.md` (~331) ·
> `plan/BACKLOG-HISTORICO.md` (~1237, ~1353) ·
> `plan/REPORTES/briefs/WP-U108-volumes-gitignore.md` ·
> `plan/REPORTES/briefs/WP-U138-api-nav-spa.md` ·
> `plan/REPORTES/briefs/WP-U139-api-nav-cuerpo.md` ·
> `plan/REPORTES/entregas/ENTREGA-2026-07-19-sprint2/00-INDICE.md` ·
> `plan/REPORTES/temp-review-2026-07-17.md`.
>
> **WP propuesto (micro):** sustituir cada cita de ruta local por la
> referencia neutral «nota externa recibida (temp-review, <fecha>)» —
> conservando el texto de la nota si está pegado.
> **CA (por clase, no por instancia):** grep en todo el repo de patrones de
> ruta absoluta local (`[A-Za-z]:\\Users\\` y `/c/Users/`) = 0 fuera de
> ejemplos de documentación genérica; los 8 ficheros listados limpios.
> **Guía a futuro:** las notas externas se archivan pegadas en
> `plan/REPORTES/` propias del repo y se citan por su ruta INTERNA.
>
> Prioridad sugerida: antes del próximo push a main (el repo es público;
> cada push re-sirve la deuda).

---

Registro: preparada por la intervención de estabilización 2026-07-19;
espera entrega del custodio en quietud del swarm de zeus. El vigía
re-verifica el CA tras el merge (C8: grep real sobre su main).
