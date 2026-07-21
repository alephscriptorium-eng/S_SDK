# PRÁCTICAS — deltas del holón 07

Base heredada: `TEST-SWARM/plan/PRACTICAS.md` (§1 reglas duras y §4
auto-revisión rigen aquí tal cual, salvo los deltas siguientes). No se copia
el texto: se referencia (la réplica es el defecto que este plan combate).

## Deltas

1. **Autocontención redefinida:** este mundo escribe en TODO el repo S_SDK
   y en `S_SDK-skills-library`. Los mundos ajenos jamás se tocan directo:
   zeus solo vía canal ENTREGA/vigía con prueba de ceguera (grep = 0);
   emmanuel y aleph-scriptorium solo en los WP de activación (I60/I61) con
   el custodio mediando, y únicamente su `plan/roles/`.

2. **Submodules read-only:** ningún commit dentro de `HOLONES/*`. Un diff
   dentro de un submodule = devolución automática.

3. **C8 y familia (doctrina del vigía, adoptada):** todo comando citado se
   ejecuta contra su canal real; todo enlace se navega (browser, no solo
   curl); un CA de bug cubre la clase, no la instancia; el pulso incluye el
   último run de CI de main.

4. **Los 5 ejes del RE-PLAN son CA obligatorios por tipo de WP:**
   - extracción → ≥1 consumidor real verificado (Eje I);
   - demolición/extracción → destino canónico declarado por símbolo, grep
     del absorbido = 1 definición (Eje II);
   - auditoría/layout → gate de dedup de código vivo (Eje III);
   - contrato/capa → no se cierra sin segundo cliente independiente (Eje IV);
   - relación con swarms ajenos → mediación transparente: se ofrece, no se
     impone; se esconde la capa, no el vigía (Eje V).

5. **Skills marco-agnósticos:** la cara pública de todo skill parametriza
   «el mundo» y jamás nombra mundos reales ni el marco. Prueba de ceguera
   antes de publicar: grep `zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura`
   = 0 en el contenido del paquete público (el nombre del paquete es la
   única excepción evidente).

6. **Quién publica (alineado a DE-I7 + DE-I13).** Los workers **nunca**
   hacen `git push` por su cuenta ni `npm publish` fuera del WP que lo
   autorice. Relajaciones explícitas:
   - **Skills-library** (DE-I7): el swarm **crea** el remote
     (`gh repo create`) y **publica** el paquete al registry
     (procedimiento DE-I12 / WP-I26).
   - **Repo raíz S_SDK** (DE-I13 / WP-I40): el push queda condicionado a
     **validación orquestador + vigilante** (mediación transparente), no
     a un tick manual exclusivo del custodio. Hasta esa doble validación,
     nadie empuja el raíz.
   Auth de escritura al Verdaccio (si falta en `.npmrc`) sigue siendo tick
   de ops del custodio — no inventar credenciales (DE-I12).

7. **El gobierno va a git antes que la obra** (retro I0–I2). El orquestador
   commitea `plan/` ANTES de abrir el primer brief; cada 🔶/✅/brief es
   commit atómico inmediato. Al cierre de cada ola, checklist de higiene:
   `git stash list` vacío · `plan/` sin diff · ramas `wp/*` mergeadas
   borradas o justificadas. Detalle completo y resto de reglas:
   `plan/RETRO-2026-07-19-metodo.md` (12 reglas → skill v0.2, WP-I27).

8. **Las entregas entre mundos viajan sin rutas de origen** (retro, regla
   12 — nace de F6): se entrega contenido pegado o adjunto neutro; la
   procedencia citable es «nota externa recibida (temp-review, fecha)»,
   jamás una ruta de disco.

9. **Contrato 0.3.4 adoptado — regla 15 + semver DC-22** (base DE-I17; el
   método vive en el skill versionado, el mundo lo cita, no lo copia). Se
   adoptan dos piezas nuevas del skill `swarm-orquestacion` (paquete
   `@alephscript/skills-scriptorium@0.3.4`, badge de método v0.4):
   - **Regla 15 — fuente de verdad única + efimeralidad**
     (`reference/reglas-metodo-v04.md`, publicada en el paquete **0.3.1**,
     `CHANGELOG §[0.3.1] · WP-05`): el plan trazado en git es la **única**
     fuente de verdad; memoria interna y carpetas de IDE (`.claude/` etc.)
     son scratch efímero (se conserva solo su config funcional; se prohíbe
     dejar en ellas texto de estado/decisiones). Holón 07 **cumple de
     facto**: su fuente de verdad única es el `plan/` trazado — BACKLOG,
     DECISIONES, REPORTES —, y por delta 7 **solo el orquestador escribe el
     BACKLOG** (gobierno a git antes que obra). No se refactoriza nada
     retro; se **cita**.
   - **Doctrina semver DC-22 — por versión** (`CHANGELOG.md §[0.3.4]` del
     skill, estrenada en ese corte · `WP-13`): cambio de **regla de método**
     → al menos **minor**; **patch** = **sin cambio de contrato**. La
     «versión de método» (badge) y el «semver de paquete» son ejes
     distintos, con la correspondencia declarada en el `README.md` raíz del
     skill. Evidencia por versión en el propio `CHANGELOG` del skill: `0.2.0`
     y `0.3.0` = **minor** (contrato ampliado: reglas 1–12, luego 13–14);
     `0.3.1`–`0.3.4` = **patch** publicable por override del custodio
     (reconciliación de la expansión regla 15 + gates 0.3.x; retarget del
     0.4.0 previsto). Holón 07 no versiona el skill (lo **consume** con rango
     `0.x`, DE-I17); solo **cita** la doctrina como contrato del mundo.

   Sin sello de futuro: «cumple de facto» no promete trabajo nuevo — se
   apoya en prácticas ya vigentes (delta 1 autocontención, delta 7 gobierno
   a git / orquestador único escritor del BACKLOG). Sin refactor retro.

10. **Cierre de ola cita run-id verde** (clase reincidente ×2 · 2026-07-21:
    GC-5 y ARG-1). Todo cierre de ola que el orquestador acepte **cita
    run-id VERDE de CI y de Release** del tip de **cada repo tocado**
    (zeus, games-library, raíz, etc.). Sin run-id verde citado = ola no
    cerrada (claim sin acta de runner). Compatible con delta 3 (C8: el
    pulso incluye el último run de CI de main).

11. **El sync-map se commitea post-apply** (clase reincidente ×2 · 2026-07-21:
    Z15; A01–A03). El fichero `.sync-map.json` (o mapa del sprint) **nunca**
    se commitea con números de issue **antes** de que esos issues existan
    en el tracker. Orden: apply (crear/actualizar issues) → mapa refleja
    IDs reales → commit mapa + acta. Mapa especulativo = devolución.
