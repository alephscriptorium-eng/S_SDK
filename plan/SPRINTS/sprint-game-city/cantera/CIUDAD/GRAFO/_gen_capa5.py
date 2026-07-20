"""Capa 5: print agentes + grafo handoffs. Usa rg (rápido), no glob en ARCHIVO entero."""
from __future__ import annotations

import re
import subprocess
from collections import Counter, defaultdict
from pathlib import Path

OUT = Path("ARCHIVO/DEVOPS/CIUDAD/GRAFO")

# Roots con agentes conocidos (scan 85446) — sin ARCHIVO/MPC-MESH profundo vía glob ciego
AGENT_ROOTS = [
    ".github_V1",
    "DocumentMachineSDK",
    "onfalo-asesor-sdk",
    "VsCodeExtension",
    "CopilotEngine",
    "MCPGallery",
    "AgentLoreSDK",
    "VectorMachineSDK",
    "NovelistEditor",
    "VibeCodingSuite",
    "BotHubSDK",
    "BlocklyEditor",
    "ARCHIVO/DISCO",
    "ARCHIVO/PLUGINS",
    "ARCHIVO/DEVOPS",
]

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)


def rg_files(root: str, globs: list[str]) -> list[str]:
    """List agentic files. --hidden --no-ignore: muchos .github/ están ignorados por gitignore."""
    if not Path(root).exists():
        return []
    cmd = [
        "rg",
        "--files",
        "--hidden",
        "--no-ignore",
        "--glob",
        "!**/node_modules/**",
        "--glob",
        "!**/.git/**",
        "--glob",
        "!**/dist/**",
        "--glob",
        "!**/build/**",
    ]
    for g in globs:
        cmd.extend(["-g", g])
    cmd.append(root)
    try:
        r = subprocess.run(
            cmd, capture_output=True, text=True, encoding="utf-8", errors="replace"
        )
    except FileNotFoundError:
        found = []
        p = Path(root)
        for pat in ("**/*.agent.md", "**/*.chatmode.md"):
            for f in p.glob(pat):
                s = f.as_posix()
                if "node_modules" not in s and "/.git/" not in s:
                    found.append(s)
        return sorted(set(found))
    paths = [ln.replace("\\", "/") for ln in r.stdout.splitlines() if ln.strip()]
    # filter noise from no-ignore (playwright etc.)
    paths = [p for p in paths if "node_modules" not in p]
    return sorted(set(paths))


def collect() -> dict[str, list[str]]:
    by: dict[str, list[str]] = {}
    for root in AGENT_ROOTS:
        by[root] = rg_files(root, ["*.agent.md", "*.chatmode.md"])
    return by


def write_print(by_root: dict[str, list[str]]) -> int:
    total = sum(len(v) for v in by_root.values())
    lines = [
        "# Print de edificios agénticos (.agent.md / .chatmode.md)",
        "# Generado: capa 5 — contraste codebase (rg)",
        f"# Total: {total}",
        "",
    ]
    for root, paths in by_root.items():
        lines.append(f"## {root}")
        lines.extend(paths if paths else ["(ninguno)"])
        lines.append("")
    (OUT / "print-agentes.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")
    return total


def parse_handoffs(text: str) -> list[dict[str, str]]:
    m = FRONTMATTER_RE.match(text)
    if not m:
        return []
    fm = m.group(1)
    hm = re.search(r"^handoffs:\s*\n((?:[ \t].*\n?)*)", fm, re.MULTILINE)
    if not hm:
        return []
    block = hm.group(1)
    items: list[dict[str, str]] = []
    cur: dict[str, str] = {}
    for line in block.splitlines():
        if re.match(r"^\s*-\s+label:", line):
            if cur.get("agent"):
                items.append(cur)
            cur = {"label": line.split(":", 1)[1].strip().strip("\"'")}
        elif re.match(r"^\s+agent:", line):
            cur["agent"] = line.split(":", 1)[1].strip().strip("\"'")
    if cur.get("agent"):
        items.append(cur)
    return items


def agent_id(path: str) -> str:
    name = Path(path).name
    for suf in (".agent.md", ".chatmode.md"):
        if name.endswith(suf):
            return name[: -len(suf)]
    return name


def scan_handoffs(paths: list[str]):
    edges: list[tuple[str, str, str]] = []
    out_deg: Counter = Counter()
    in_deg: Counter = Counter()
    for path in paths:
        try:
            text = Path(path).read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        src = agent_id(path)
        for h in parse_handoffs(text):
            dst = h["agent"]
            label = h.get("label", "")
            edges.append((src, dst, label))
            out_deg[src] += 1
            in_deg[dst] += 1
    return edges, out_deg, in_deg


def mid(s: str) -> str:
    return re.sub(r"[^A-Za-z0-9_]", "_", s)


def write_grafo(edges, out_deg: Counter, in_deg: Counter, scope: str) -> None:
    hubs = [a for a, _ in out_deg.most_common(12)]
    hub_set = set(hubs)
    mermaid_edges = []
    seen = set()
    for src, dst, _ in edges:
        if src in hub_set:
            key = (src, dst)
            if key not in seen:
                seen.add(key)
                mermaid_edges.append((src, dst))
    mermaid_edges = mermaid_edges[:80]

    lines = [
        "# Grafo de handoffs — capa 5",
        "",
        f"> {scope}",
        "",
        f"**Edges parseados**: {len(edges)}",
        f"**Agentes con salida**: {len(out_deg)}",
        f"**Targets únicos**: {len(in_deg)}",
        "",
        "## Top emisores (out-degree)",
        "",
        "| Agente | Salidas |",
        "|--------|--------:|",
    ]
    for a, n in out_deg.most_common(20):
        lines.append(f"| `{a}` | {n} |")

    lines += [
        "",
        "## Top destinos (in-degree)",
        "",
        "| Agente | Entradas |",
        "|--------|--------:|",
    ]
    for a, n in in_deg.most_common(20):
        lines.append(f"| `{a}` | {n} |")

    lines += [
        "",
        "## Mermaid (hubs top-12 → destinos únicos, máx 80 edges)",
        "",
        "```mermaid",
        "flowchart LR",
    ]
    for src, dst in mermaid_edges:
        lines.append(f"  {mid(src)}[{src}] --> {mid(dst)}[{dst}]")
    lines += ["```", ""]

    by_src: dict[str, list[str]] = defaultdict(list)
    for src, dst, label in edges:
        by_src[src].append(f"{dst} — {label}" if label else dst)

    lines += ["## Adyacencia (emisores con ≥3 salidas)", ""]
    for src, n in out_deg.most_common():
        if n < 3:
            break
        lines.append(f"### `{src}` ({n})")
        for item in by_src[src][:40]:
            lines.append(f"- {item}")
        if len(by_src[src]) > 40:
            lines.append(f"- … +{len(by_src[src]) - 40} más")
        lines.append("")

    # Bridges map: plugin_ox_* → first-hop targets
    bridges = sorted(a for a in out_deg if a.startswith("plugin_ox_"))
    lines += ["## Puentes plaza → locales (bridges `plugin_ox_*`)", ""]
    if not bridges:
        lines.append("(ningún bridge con handoffs en frontmatter)")
    for b in bridges:
        targets = sorted({e[1] for e in edges if e[0] == b})
        lines.append(f"- `{b}` → {', '.join(f'`{t}`' for t in targets) if targets else '—'}")
    lines.append("")

    (OUT / "handoffs.md").write_text("\n".join(lines), encoding="utf-8")
    (OUT / "handoffs.tsv").write_text(
        "\n".join(["# src\tdst\tlabel", *[f"{s}\t{d}\t{l}" for s, d, l in edges]]) + "\n",
        encoding="utf-8",
    )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    by = collect()
    total = write_print(by)
    print(f"print-agentes: {total}")
    for r, ps in by.items():
        if ps:
            print(f"  {r}: {len(ps)}")

    v1 = by.get(".github_V1", [])
    edges, out_deg, in_deg = scan_handoffs(v1)
    write_grafo(
        edges,
        out_deg,
        in_deg,
        "Scope: `.github_V1` (plaza + plugins). Handoffs desde YAML frontmatter.",
    )
    print(f"handoffs edges: {len(edges)}")


if __name__ == "__main__":
    main()
