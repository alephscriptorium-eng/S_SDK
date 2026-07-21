# Ficha ilustrativa · el camino de los U-sprints

> No exhaustiva. Patrón de flota `wp/u*` visto en H2.3 (2026-07-22).
> Destino canónico sugerido (dato de-identificado): skills-library `instancias/`.
> Esta copia vive en S_SDK `plan/REPORTES/` junto al acta de arqueología.
> Si se materializa en `instancias/`: **ceguera = 0** obligatoria.

## Una frase

Un U-sprint es un WP corto en rama `wp/uNN-<slug>`: nace del claim, deja tip en el repo del mundo, se acepta por merge a `main`, y la cáscara remota se poda solo cuando `--merged origin/main`.

## Camino (ilustrativo)

```text
  claim / BRIEF
       │
       ▼
  rama wp/uNN-slug  ──► commits (feat|fix|docs|chore)
       │
       ▼
  reporte + hashes en plan/REPORTES
       │
       ▼
  revisión orquestador ──► merge FF/merge a main
       │
       ▼
  cáscara remota origin/wp/uNN-slug
       │
       ├── tip ⊆ main  →  poda (`push --delete`, sin -f)
       └── tip ⊄ main  →  conservar (listar; no borrar)
```

## Tres caras del mismo número

| cara | qué muestra | ejemplo (no catálogo) |
| ---- | ----------- | --------------------- |
| **pareja de repos** | mismo `uNN` puede vivir en SDK y en library con SHAs distintos | U109: tip docs en un repo · tip refactor en el otro |
| **cáscara docs** | muchas ramas Z post-aceptación son tip = «docs(plan): tip HEAD / hashes» | U119, U130, U134… |
| **residuo no-merged** | tip con feat real que no es ancestro de main | conservada hasta decisión explícita |

## Señal de higiene post-sprint

| señal | lectura |
| ----- | ------- |
| `for-each-ref origin/wp/u*` vacío tras poda | flota cerrada en ese repo |
| quedan 1–2 no-merged | cola de arqueología / decisión, no olvido silencioso |
| `main` SHA idéntico pre/post poda | poda no reescribe historia |

## Qué no es este camino

- No es force-push ni squash remoto de `main`.
- No es borrar por antigüedad: solo por **merged**.
- No es el prefijo `wp/gc-*` (otra flota / otro sprint).

## Puente a skills-library

Al copiar esta ficha a `instancias/`:

1. Sustituir nombres de mundo/repo por parámetros (`mundo M`, `repo-A` / `repo-B`).
2. Quitar SHAs y subjects literales del histórico real (o sustituir por sintéticos).
3. Correr prueba de ceguera sobre el texto publicable → **0 matches**.
4. Indexar en `instancias/README.md`.

Acta de inventario y poda: [`ARQUEOLOGIA-U-SPRINTS-2026-07-22.md`](./ARQUEOLOGIA-U-SPRINTS-2026-07-22.md).
