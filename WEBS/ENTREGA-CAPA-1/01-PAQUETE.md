# ENTREGA-CAPA-1 — paquete de activación (s-sdk)

> Formato §E (skill `site-web` `reference/metodo-mecanismo.md`).
> Capa-1: **no** muta copy de fichas; fija el contrato de instancia.
> Worker de I30 aplica este paquete creando el árbol `WEBS/` (ya hecho en
> el mismo WP). Workers de I31+ reciben paquetes nuevos.

---

## 1 · Instanciar `WEBS/` (DE-I6)

**ANTES:** no existía `WEBS/` en la raíz de SCRIPT_SDK.

**DESPUÉS (verbatim de estructura):**

```text
WEBS/
  README.md
  CALIBRACION.md
  BASE-1-ARGUMENTO.md
  BASE-2-SISTEMA.md
  BASE-3-MECANISMO.md
  CANTERA/00-contexto.md
  CANTERA/01-inventario-superficies.md
  ENTREGA-CAPA-1/00-NOTA.md
  ENTREGA-CAPA-1/01-PAQUETE.md
```

Copy = de este mundo (VISION, DECISIONES, `docs/` inventariado). Método
citado desde skill `site-web` @ `0.1.0` / library `019a90b`.

---

## 2 · Línea base de portada (sin mutar)

**ANTES** (vivo en repo — no tocar en I30):

```md
# (frontmatter hero de docs/index.md)
name: SCRIPT_SDK
text: Holón 07
tagline: Casa pública de la metodología: web fanzine, anclas HOLONES y skills comunes.
```

**DESPUÉS:** *sin cambio en I30.* La mutación editorial de portada +
fichas queda para paquetes I31/I32. Este bloque ancla el ANTES literal
para el próximo ENTREGA.

---

## CA del paquete

1. Existe el árbol §1 completo bajo `WEBS/`.
2. `test ! -d plan/roles` — el plan no replica protocolo.
3. Grep `mundo.ceguera` (`CALIBRACION.md`) sobre `WEBS/` → 0.
4. Grep de rutas absolutas de cantera ajena / inventarios pegados de
   otros mundos → 0.
5. `docs:build` — no exigido en capa-1 (diff no toca `docs/**`); I31+ sí.

## Decisiones vivas (C7) que incorpora

- DE-I6 método/instancia · DE-I10 protocolo≠datos · cola BASE-3 §F.
