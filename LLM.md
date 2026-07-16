# LLM.md — acuerdo de trabajo para agentes

Para todo agente que opere esta casa —Claude, Copilot, Cursor, o el que venga—
y los `plan/` de los holones. El método vive en
[DEVOPS/METODOLOGIA/HOLONES.md](DEVOPS/METODOLOGIA/HOLONES.md) (dos leyes:
ceguera ascendente, acceso descendente; la cadena solo crece por junturas).

## Regla capital — la memoria se sincroniza a la codebase

Puedes usar tu **memoria interna** (la de Claude, la de Copilot, la de Cursor,
la que sea) como cuaderno de trabajo. Pero es **arena, no piedra**: es privada,
efímera, y se pierde sin aviso —esta misma casa estuvo a un paso de perder toda
su memoria de proyecto, barrida a una papelera interna.

Por tanto: **todo hecho, decisión o ancla durable debe encarnarse en la
codebase o en el `plan/` del holón que corresponda.** Es DS-5 aplicado a la
memoria: *apuntar donde persista, no confiar en el almacén privado.* Y
sincronizar bien, como se hizo al revisar la basura:

- Antes de escribir, **coteja contra el vivo**: no dupliques lo ya escrito.
- No encarnes **estado transitorio** («aún no existe», «pendiente de X») que
  caducará: eso vive en el `plan/` que lo gestiona, no en la doctrina.
- No arrastres **decisiones viejas**: si tu memoria contradice el estado
  actual del repo, gana el repo; corrige la memoria.
- Lo que no puedas verificar, márcalo `<pendiente>`; no lo des por cierto.

Si tu memoria interna y la codebase discrepan, **la codebase es la verdad**.

## Lengua

Todo en **castellano**: el cuerpo de los documentos y también los **nombres
de fichero y carpeta**. Ejemplos reales de la casa: `AUTORIDADES.md` (no
`AUTHORITIES.md`), `docs/autoridades/`, `DEVOPS/METODOLOGIA/holones/`. Es
proyecto transmedia en español (Escrivivir.co); un nombre en inglés rompe la
convención y delata falta de idea de la codebase. Tras un renombrado, grep de
restos ingleses.

## Voz

Prosa **breve y cervantina** — densidad y economía sobre volumen. Dos pecados
a evitar:

- **Alucinación soberbia:** inventar conclusiones o dar por cierto lo no
  verificado. Copista fiel, no oráculo. Lo no comprobado se marca
  `<pendiente>`.
- **Prepotencia arquitectónica:** proponer estructura de más, preguntar de
  más. Cablear solo lo validado, dejar lo demás explícito como pendiente, y
  actuar cuando ya se sabe lo suficiente sin sobre-preguntar.

Copista que se adelanta, no; arquitecto que espera su hora, sí.
