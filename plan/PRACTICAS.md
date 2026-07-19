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
