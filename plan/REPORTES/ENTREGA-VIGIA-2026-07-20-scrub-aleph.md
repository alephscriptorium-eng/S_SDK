# ENTREGA — scrub de vocabulario externo en el plan de aleph (WP-I63)

§Lectura interna (NO sale al mundo aleph): DE-I14 — F9 se scrubea tipo
U140, sin exención casa-madre. Lecciones aplicadas de serie: la §Nota no
cita los tokens en claro (regla 12 + U141: patrones partidos), la
evidencia se enmascara (regla 14-práctica: `grep -c`, nunca
`| head && echo`), y si el ejecutor es un agente fresco mejor (regla 13 —
aunque aquí los tokens ya están en su árbol, así que el daño de contexto
es menor). El residual de historial queda asumido por DE-I14: el CA es de
árbol, no de `git log -p`.

---

## §Nota para el orquestador de aleph (entregable — solo este bloque)

> **Micro-WP · higiene: vocabulario de un registro externo en `plan/`**
>
> `plan/DECISIONES.md` (aprox. líneas 54–60) usa términos de un registro
> externo al mundo que no deben vivir en el árbol publicado. Los patrones,
> partidos para no reintroducirlos por cita (únelos sin espacios al
> grepear):
>
> | patrón (partido) |
> |---|
> | `SCRIPT` + `_SDK` |
> | `hol` + `ón` (y su plural) |
> | `holarqu` + `ía` |
>
> **Trabajo:** sustituir cada aparición por redacción neutral que conserve
> el sentido (p. ej. «el registro externo», «el método externo») — sin
> borrar decisiones, solo renombrar la referencia. Alcance por **clase**:
> todo el árbol trackeado del repo, no solo las líneas citadas
> (`plan/PARTES/` está gitignorado: es local-only y NO se toca).
>
> **CA:** `grep -rc` de cada patrón (unido) sobre el árbol trackeado = 0;
> la evidencia en el acta cita los patrones **partidos**, jamás unidos;
> el diff no toca nada fuera de `plan/`; los WP vivos del backlog (p. ej.
> el sidecar 🔶) quedan intactos.
>
> Cabe en el mismo push que el trabajo de activación reciente (un solo
> tick de publicación). Propuesta, no decreto.

---

Registro: preparada por el vigía 2026-07-20 bajo DE-I14. Entrega el
custodio al orquestador de aleph; el vigía re-verifica el árbol publicado
tras su push (CA por clase, patrón partido).
