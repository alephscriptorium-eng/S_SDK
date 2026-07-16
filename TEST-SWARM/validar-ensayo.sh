#!/usr/bin/env bash
# validar-ensayo.sh — gates a–e del ensayo TEST-SWARM (WP-D00)
# Uso: ./validar-ensayo.sh [--violacion a|b|c|d|e|todas]
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
TEST_SWARM="${SCRIPT_DIR}"
FIXTURES="${TEST_SWARM}/pruebas-violacion"
BASE_REF="${BASE_REF:-main}"

ROJO=0
VERDE=0

log_ok()   { echo "  ✓ $*"; VERDE=$((VERDE + 1)); }
log_fail() { echo "  ✗ $*"; ROJO=$((ROJO + 1)); }
log_info() { echo "  · $*"; }

usage() {
  cat <<'EOF'
validar-ensayo.sh — gates del ensayo TEST-SWARM

  ./validar-ensayo.sh                 Ejecuta gates a–e sobre el árbol actual
  ./validar-ensayo.sh --violacion X   Demuestra rojo sintético (a|b|c|d|e|todas)

Gates:
  (a) diff no toca nada fuera de TEST-SWARM/
  (b) nombres de fichero en castellano, sin restos ingleses
  (c) toda ruta citada bajo sello Verificado existe en disco
  (d) cero árboles copiados de otros mundos (excepción: assets/fanzine.css)
  (e) cero unidades monetarias ni equiparación munición-dinero en el pack
EOF
}

# --- utilidades -----------------------------------------------------------

archivos_diff() {
  {
    git -C "${REPO_ROOT}" diff --name-only "${BASE_REF}"...HEAD 2>/dev/null || true
    git -C "${REPO_ROOT}" diff --name-only 2>/dev/null || true
    git -C "${REPO_ROOT}" diff --cached --name-only 2>/dev/null || true
  } | sort -u | grep -v '^$' || true
}

ruta_existe() {
  local ruta="$1"
  local candidatos=()

  if [[ "${ruta}" == /* ]] || [[ "${ruta}" =~ ^[A-Za-z]:[/\\] ]]; then
    candidatos+=("${ruta}")
  elif [[ "${ruta}" == ../* ]]; then
    candidatos+=("${REPO_ROOT}/${ruta#../}")
    candidatos+=("$(cd "${REPO_ROOT}/.." && pwd)/${ruta#../}")
  elif [[ "${ruta}" == TEST-SWARM/* ]]; then
    candidatos+=("${REPO_ROOT}/${ruta}")
  elif [[ "${ruta}" == SCRIPT_SDK/* ]]; then
    candidatos+=("${REPO_ROOT}/${ruta#SCRIPT_SDK/}")
  else
    candidatos+=("${REPO_ROOT}/${ruta}")
    candidatos+=("${TEST_SWARM}/${ruta}")
    candidatos+=("${REPO_ROOT}/TEST-SWARM/${ruta}")
  fi

  local c
  for c in "${candidatos[@]}"; do
    # normalizar separadores Windows
    c="${c//\\//}"
    if [[ -e "${c}" ]]; then
      return 0
    fi
  done
  return 1
}

extraer_rutas_de_linea() {
  local linea="$1"
  {
    grep -oE '\`[^`]+\`' <<<"${linea}" 2>/dev/null | tr -d '\`' || true
    grep -oE '(SCRIPT_SDK/|TEST-SWARM/|\.\./)[^[:space:]`'"'"'<>|]+' <<<"${linea}" 2>/dev/null || true
    grep -oE '[A-Za-z]:[/\\][^[:space:]`'"'"'<>|]+' <<<"${linea}" 2>/dev/null || true
    grep -oE '[A-Za-z0-9_.-]+\\[A-Za-z0-9_.\\-]+' <<<"${linea}" 2>/dev/null || true
  } | grep -v '^$' || true
}

# --- gate (a) -------------------------------------------------------------

gate_a_diff() {
  local modo="${1:-normal}"
  echo "=== Gate (a): diff solo dentro de TEST-SWARM/ ==="

  if [[ "${modo}" == "violacion" ]]; then
    local fuera="${FIXTURES}/gate-a-fuera-test-swarm.txt"
    if [[ ! -f "${fuera}" ]]; then
      log_fail "fixture ausente: ${fuera}"
      return
    fi
    log_info "modo violación: simulando diff con ${fuera}"
    local f
    while IFS= read -r f; do
      [[ -z "${f}" ]] && continue
      if [[ "${f}" != TEST-SWARM/* ]]; then
        log_fail "fuera de TEST-SWARM/: ${f}"
      else
        log_ok "${f}"
      fi
    done < "${fuera}"
    return
  fi

  local archivos
  archivos="$(archivos_diff)"
  if [[ -z "${archivos}" ]]; then
    log_ok "sin cambios en diff respecto a ${BASE_REF} (índice limpio)"
    return
  fi

  local f
  while IFS= read -r f; do
    [[ -z "${f}" ]] && continue
    if [[ "${f}" != TEST-SWARM/* ]]; then
      log_fail "fuera de TEST-SWARM/: ${f}"
    else
      log_ok "${f}"
    fi
  done <<< "${archivos}"
}

# --- gate (b) -------------------------------------------------------------

excluir_escaneo_normal() {
  local f="$1"
  [[ "${f}" == *"/pruebas-violacion/"* ]] && return 0
  return 1
}

patron_resto_ingles() {
  # restos ingleses y nombres de transición (PRACTICAS §1.4, §1.6)
  echo '(^|/)(legacy|utils|helpers|config|settings|tests|temp|tmp|backup)(/|\.|$)|-(old|new)(\.|/|$)|legacy-'
}

gate_b_nombres() {
  local modo="${1:-normal}"
  local raiz="${2:-${TEST_SWARM}}"
  echo "=== Gate (b): nombres en castellano, sin restos ingleses ==="

  if [[ "${modo}" == "violacion" ]]; then
    raiz="${FIXTURES}/gate-b-nombre-ingles"
    log_info "modo violación: escaneando ${raiz}"
  fi

  local patron_ingles
  patron_ingles="$(patron_resto_ingles)"
  local hallazgos=0

  while IFS= read -r -d '' f; do
    [[ "${modo}" != "violacion" ]] && excluir_escaneo_normal "${f}" && continue
    local rel="${f#${raiz}/}"
    if [[ "${rel}" =~ ${patron_ingles} ]]; then
      log_fail "resto inglés o transición: ${rel}"
      hallazgos=$((hallazgos + 1))
    fi
  done < <(find "${raiz}" -type f -print0 2>/dev/null)

  if [[ "${hallazgos}" -eq 0 ]]; then
    log_ok "sin restos ingleses detectados bajo ${raiz#${TEST_SWARM}/}"
  fi
}

# --- gate (c) -------------------------------------------------------------

gate_c_verificado() {
  local modo="${1:-normal}"
  local raiz="${2:-${TEST_SWARM}}"
  echo "=== Gate (c): rutas bajo sello Verificado existen ==="

  if [[ "${modo}" == "violacion" ]]; then
    raiz="${FIXTURES}"
    log_info "modo violación: incluye ${raiz}/gate-c-ruta-fantasma.md"
  fi

  local errores=0
  local verificados=0

  while IFS= read -r -d '' md; do
    [[ "${modo}" != "violacion" ]] && excluir_escaneo_normal "${md}" && continue
    # meta del ensayo (reportes WP), no pack — evita falsos positivos por evidencia literal
    [[ "${modo}" != "violacion" && "${md}" == *"/plan/REPORTES/"* ]] && continue
    # acta v1 histórica: fuente con sellos narrativos, fuera del pack nuevo
    [[ "${modo}" != "violacion" && "${md}" == *"Municiones"* ]] && continue
    local num=0
    while IFS= read -r linea; do
      linea="${linea//$'\r'/}"
      num=$((num + 1))
      [[ "${linea}" =~ [Vv]erificado ]] || continue
      # ignorar menciones meta del propio gate en plan/
      if [[ "${md}" == *"/plan/"* ]] && [[ "${linea}" =~ (sello[[:space:]]+Verificado|bajo[[:space:]]+sello|gate[[:space:]]*\(c\)) ]]; then
        continue
      fi

      local bloque="${linea}"
      local sig
      sig="$(sed -n "$((num + 1))p" <(tr -d '\r' < "${md}") 2>/dev/null || true)"
      bloque="${bloque} ${sig}"

      local rutas
      rutas="$(extraer_rutas_de_linea "${bloque}")"
      [[ -z "${rutas}" ]] && continue

      while IFS= read -r ruta; do
        [[ -z "${ruta}" ]] && continue
        # saltar URLs y anclas markdown
        [[ "${ruta}" == http* ]] && continue
        [[ "${ruta}" == *"#"* ]] && ruta="${ruta%%#*}"
        verificados=$((verificados + 1))
        if ruta_existe "${ruta}"; then
          log_ok "Verificado → ${ruta}"
        else
          log_fail "Verificado → ruta inexistente: ${ruta} (en ${md#${TEST_SWARM}/}:${num})"
          errores=$((errores + 1))
        fi
      done <<< "${rutas}"
    done < <(tr -d '\r' < "${md}")
  done < <(find "${raiz}" -type f -name '*.md' -print0 2>/dev/null)

  if [[ "${verificados}" -eq 0 ]]; then
    log_ok "ninguna ruta citada bajo sello Verificado en el ámbito escaneado"
  elif [[ "${errores}" -eq 0 ]]; then
    log_ok "todas las rutas Verificado comprobadas (${verificados})"
  fi
}

# --- gate (d) -------------------------------------------------------------

marcadores_mundos() {
  echo 'zeus emmanuel emmanuel-sdk NETWORK-ENGINE aleph-scriptorium HIPOTESIS.md LLM.md'
}

gate_d_arboles() {
  local modo="${1:-normal}"
  local raiz="${2:-${TEST_SWARM}}"
  echo "=== Gate (d): cero árboles copiados de otros mundos ==="

  if [[ "${modo}" == "violacion" ]]; then
    raiz="${FIXTURES}/gate-d-arbol-copiado"
    log_info "modo violación: escaneando ${raiz}"
  fi

  local errores=0

  # directorios/ficheros marca de mundos ajenos
  for marca in $(marcadores_mundos); do
    while IFS= read -r -d '' hit; do
      [[ "${modo}" != "violacion" ]] && excluir_escaneo_normal "${hit}" && continue
      local rel="${hit#${raiz}/}"
      log_fail "posible árbol copiado (${marca}): ${rel}"
      errores=$((errores + 1))
    done < <(find "${raiz}" -ipath "*${marca}*" -print0 2>/dev/null)
  done

  # DEVOPS/ dentro del ensayo
  if [[ -d "${raiz}/DEVOPS" ]]; then
    log_fail "árbol DEVOPS/ dentro del ensayo (copia de backstage)"
    errores=$((errores + 1))
  fi

  # fanzine.css: excepción DE-8 con cabecera de procedencia
  while IFS= read -r -d '' css; do
    if head -n 25 "${css}" | grep -qi 'procedencia'; then
      log_ok "excepción DE-8: ${css#${TEST_SWARM}/} (cabecera de procedencia)"
    else
      log_fail "fanzine.css sin cabecera de procedencia: ${css#${TEST_SWARM}/}"
      errores=$((errores + 1))
    fi
  done < <(find "${raiz}" -type f -path '*/assets/fanzine.css' -print0 2>/dev/null)

  if [[ "${errores}" -eq 0 ]]; then
    log_ok "sin árboles copiados detectados"
  fi
}

# --- gate (e) -------------------------------------------------------------

excluir_gate_e() {
  local f="$1"
  case "${f}" in
    */plan/*|*/pruebas-violacion/*|*/validar-ensayo.sh) return 0 ;;
    *Municiones\ —\ acta*) return 0 ;;  # acta v1 histórica intocada
  esac
  return 1
}

gate_e_moneda() {
  local modo="${1:-normal}"
  local raiz="${2:-${TEST_SWARM}}"
  echo "=== Gate (e): cero moneda / munición=dinero en el pack ==="

  if [[ "${modo}" == "violacion" ]]; then
    raiz="${FIXTURES}"
    log_info "modo violación: escaneando ${raiz}/gate-e-moneda.md"
  fi

  local patron='€|\$|unidades monetarias|pólvora seca|hockey'

  while IFS= read -r -d '' f; do
    if [[ "${modo}" != "violacion" ]] && excluir_gate_e "${f}"; then
      continue
    fi
    if grep -qiE "${patron}" "${f}" 2>/dev/null; then
      local rel="${f#${TEST_SWARM}/}"
      while IFS= read -r hit; do
        log_fail "${rel}: ${hit}"
      done < <(grep -niE "${patron}" "${f}" 2>/dev/null || true)
    fi
  done < <(find "${raiz}" -type f \( -name '*.md' -o -name '*.htm' -o -name '*.html' -o -name '*.txt' \) -print0 2>/dev/null)

  if [[ "${ROJO}" -eq 0 ]]; then
    log_ok "sin patrones monetarios/munición-dinero en el pack"
  fi
}

# --- ejecución ------------------------------------------------------------

ejecutar_gate() {
  local letra="$1"
  local modo="${2:-normal}"
  case "${letra}" in
    a) gate_a_diff "${modo}" ;;
    b) gate_b_nombres "${modo}" ;;
    c) gate_c_verificado "${modo}" ;;
    d) gate_d_arboles "${modo}" ;;
    e) gate_e_moneda "${modo}" ;;
    *) echo "Gate desconocido: ${letra}"; return 1 ;;
  esac
}

resumen() {
  echo ""
  echo "--- Resumen ---"
  echo "  OK:   ${VERDE}"
  echo "  FAIL: ${ROJO}"
  if [[ "${ROJO}" -gt 0 ]]; then
    echo "RESULTADO: ROJO"
    return 1
  fi
  echo "RESULTADO: VERDE"
  return 0
}

main() {
  local violacion=""

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --violacion) violacion="${2:-}"; shift 2 ;;
      -h|--help) usage; exit 0 ;;
      *) echo "Opción desconocida: $1"; usage; exit 1 ;;
    esac
  done

  echo "validar-ensayo.sh — repo: ${REPO_ROOT}"
  echo "base: ${BASE_REF} | ámbito: TEST-SWARM/"
  echo ""

  ROJO=0
  VERDE=0

  if [[ -n "${violacion}" ]]; then
    if [[ "${violacion}" == "todas" ]]; then
      local g
      for g in a b c d e; do
        ROJO=0
        VERDE=0
        ejecutar_gate "${g}" violacion
        resumen || true
        echo ""
      done
      # salida global: violaciones deben ser rojas
      exit 0
    fi
    ejecutar_gate "${violacion}" violacion
    resumen
    # en modo violación esperamos ROJO
    if [[ "${ROJO}" -eq 0 ]]; then
      echo "AVISO: violación sintética no produjo fallo"
      exit 1
    fi
    exit 0
  fi

  for g in a b c d e; do
    ejecutar_gate "${g}" normal
    echo ""
  done
  resumen
}

main "$@"
