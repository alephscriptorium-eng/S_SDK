# ENTREGA-I31 — portada + ficha 01 Mythos

> Formato §E (skill `site-web`). Mutación editorial de `docs/` tras
> línea base I30 (`ENTREGA-CAPA-1` §2) y fichas 02–07 de I32.

---

## 1 · Portada `docs/index.md`

**ANTES** (I30 / ENTREGA-CAPA-1 §2; I32 no mutó portada):

```md
name: SCRIPT_SDK
text: Holón 07
tagline: Casa pública de la metodología: web fanzine, anclas HOLONES y skills comunes.
```

Features: Autoridades · Piel zine · Base parametrizada.

**DESPUÉS (I31, post-merge I32):**

```md
name: SCRIPT_SDK
text: Holón 07
tagline: Casa pública de la holarquía: fichas de holones, anclas HOLONES y skills comunes.
```

- CTA brand → `/holones/01-mythos`
- Features: 01 Mythos · 02–06 cadena · 07 esta casa · Autoridades
- Tabla holarquía 01–07 con enlaces vivos (01 I31 + 02–07 I32)

## 2 · Ficha `docs/holones/01-mythos.md`

**ANTES:** no existía.

**DESPUÉS:** ficha pública con identidad, anclas `HOLONES/01-mythos/*`
(read-only), superficies selladas (z-sdk, games.z-sdk, registry `@zeus`,
GitHub Z_SDK + games-library + Releases). Cero rutas OASIS absolutas.
Fichas 02–07: intactas (I32).

## 3 · Nav / sidebar `docs/.vitepress/config.mjs`

**ANTES (post-I32):** Holones 02–07 + comentario hook I31.

**DESPUÉS:** bloque Holones **01–07** completo (01 Mythos + 02–07 I32).

## CA del paquete

1. URLs citadas navegadas (browser) — evidencia en reporte I31.
2. `npm view @zeus/*` contra canal real — evidencia en reporte I31.
3. Sello por afirmación en la ficha 01.
4. `npm run docs:build` verde; ceguera: sin rutas OASIS absolutas en
   `docs/`; `HOLONES/` no mutado; fichas 02–07 no tocadas.
