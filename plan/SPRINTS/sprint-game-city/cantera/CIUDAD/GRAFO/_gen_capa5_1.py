"""Capa 5.1: handoffs de barrios + edges Zigurat (alephscript.*)."""
from __future__ import annotations

import json
import re
import subprocess
from collections import Counter, defaultdict
from pathlib import Path

OUT = Path("ARCHIVO/DEVOPS/CIUDAD/GRAFO")

# Barrios / roots con pack agéntico (además de V1 ya en capa 5)
BARRIO_ROOTS = [
    "DocumentMachineSDK",
    "onfalo-asesor-sdk",
    "VsCodeExtension",
    "MCPGallery",
    "AgentLoreSDK",
    "VectorMachineSDK",
    "NovelistEditor",
    "CopilotEngine",
    "VibeCodingSuite",
    "BotHubSDK",
]

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)


def rg_files(root: str, globs: list[str]) -> list[str]:
    if not Path(root).exists():
        return []
    cmd = [
        "rg", "--files", "--hidden", "--no-ignore",
        "--glob", "!**/node_modules/**",
        "--glob", "!**/.git/**",
        "--glob", "!**/dist/**",
        "--glob", "!**/build/**",
        "--glob", "!**/DEPRECATED/**",
    ]
    for g in globs:
        cmd.extend(["-g", g])
    cmd.append(root)
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    paths = [ln.replace("\\", "/") for ln in r.stdout.splitlines() if ln.strip()]
    return sorted({p for p in paths if "node_modules" not in p})


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


def scan_handoffs(paths: list[str], scope: str):
    edges = []
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
            edges.append((scope, path, src, dst, label))
            out_deg[src] += 1
            in_deg[dst] += 1
    return edges, out_deg, in_deg


def zigurat_command_edges() -> list[tuple[str, str, str]]:
    """Edges lógicos Zigurat → barrio desde package.json + demo + PREFIX."""
    edges: list[tuple[str, str, str]] = []
    # demo.runAll (extensionBootstrap)
    for dst, label in [
        ("docs/Jekyll", "demo.runAll → serve-site"),
        ("MCPGallery", "demo.runAll → launcher/model/zeus"),
        ("NovelistEditor", "demo.runAll → novelist + docs:serve"),
    ]:
        edges.append(("alephscript.demo.runAll", dst, label))
    edges.append(("alephscript.demo.stopAll", "MCPGallery+NovelistEditor", "dispose demo terminals"))

    # PREFIX_METADATA
    prefix_map = {
        "SCP": "Scriptorium (root)",
        "MCP": "MCPGallery",
        "BHS": "BotHubSDK",
        "AIA": "AAIAGallery",
        "APB": "PrologEditor",
        "NOV": "NovelistEditor",
        "TPE": "TypedPromptsEditor",
        "OAE": "openasyncapi-editor (plugin)",
        "NRE": "WiringEditor",
        "BLE": "BlocklyEditor",
        "JKL": "docs/Jekyll",
        "ZEU": "MCPGallery",
        "ZEUS": "MCPGallery",
        "INS": "MCPGallery",
        "CHS": "sockets/mesh",
        "DMO": "demo",
        "DEMO": "demo",
    }
    for pref, barrio in prefix_map.items():
        edges.append((f"HackerTasks:{pref}", barrio, "PREFIX_METADATA"))

    # plaza bridges → zigurat commands
    for src in ("ox", "aleph", "indice"):
        edges.append((src, "alephscript.demo.runAll", "run_vscode_command"))
        edges.append((src, "alephscript.demo.stopAll", "run_vscode_command"))

    # command families from package.json
    pkg = Path("VsCodeExtension/package.json")
    if pkg.exists():
        data = json.loads(pkg.read_text(encoding="utf-8"))
        cmds = [
            c["command"]
            for c in data.get("contributes", {}).get("commands", [])
            if c.get("command", "").startswith("alephscript.")
        ]
        fam: Counter = Counter(c.split(".")[1] for c in cmds)
        for family, n in fam.most_common():
            edges.append(("Zigurat", f"alephscript.{family}.*", f"{n} commands"))
    return edges


def write_barrios_grafo(all_edges, by_root_stats) -> None:
    lines = [
        "# Grafo 5.1 — Handoffs en barrios",
        "",
        "> Scope: YAML handoffs en agentes fuera de `.github_V1` (DocumentMachine, onfalo, MCPGallery, Zigurat theatrical, …).",
        "",
        f"**Edges**: {len(all_edges)}",
        "",
        "## Por root",
        "",
        "| Root | Agentes escaneados | Edges handoff |",
        "|------|-------------------:|--------------:|",
    ]
    for root, (n_agents, n_edges) in sorted(by_root_stats.items()):
        lines.append(f"| `{root}` | {n_agents} | {n_edges} |")

    out_deg: Counter = Counter()
    in_deg: Counter = Counter()
    for _scope, _path, src, dst, _label in all_edges:
        out_deg[src] += 1
        in_deg[dst] += 1

    lines += [
        "",
        "## Top emisores (barrios)",
        "",
        "| Agente | Salidas |",
        "|--------|--------:|",
    ]
    for a, n in out_deg.most_common(15):
        lines.append(f"| `{a}` | {n} |")

    lines += [
        "",
        "## Top destinos",
        "",
        "| Agente | Entradas |",
        "|--------|--------:|",
    ]
    for a, n in in_deg.most_common(15):
        lines.append(f"| `{a}` | {n} |")

    lines += ["", "## Muestra de edges (máx 60)", ""]
    for scope, path, src, dst, label in all_edges[:60]:
        short = path if len(path) < 70 else "…" + path[-67:]
        lines.append(f"- `{src}` → `{dst}` — {label} _(scope {scope})_")
        lines.append(f"  - `{short}`")

    if len(all_edges) > 60:
        lines.append(f"- … +{len(all_edges) - 60} más (ver TSV)")

    lines.append("")
    (OUT / "handoffs-barrios.md").write_text("\n".join(lines), encoding="utf-8")

    tsv = ["# scope\tpath\tsrc\tdst\tlabel"]
    for scope, path, src, dst, label in all_edges:
        tsv.append(f"{scope}\t{path}\t{src}\t{dst}\t{label}")
    (OUT / "handoffs-barrios.tsv").write_text("\n".join(tsv) + "\n", encoding="utf-8")


def write_zigurat_grafo(edges: list[tuple[str, str, str]]) -> None:
    lines = [
        "# Grafo 5.1 — Zigurat (`alephscript.*` + demos + tasks)",
        "",
        "> Edges lógicos (no YAML). Fuentes: `extensionBootstrap.ts`, `HackerTasksPanelProvider.PREFIX_METADATA`, `package.json`, handoffs plaza.",
        "",
        f"**Edges**: {len(edges)}",
        "",
        "## Tabla",
        "",
        "| Origen | Destino | Nota |",
        "|--------|---------|------|",
    ]
    for src, dst, note in edges:
        lines.append(f"| `{src}` | `{dst}` | {note} |")

    lines += [
        "",
        "## Mermaid (resumen)",
        "",
        "```mermaid",
        "flowchart LR",
        "  plaza[Plaza ox/aleph/indice] --> demo[alephscript.demo.*]",
        "  demo --> MCP[MCPGallery]",
        "  demo --> NOV[NovelistEditor]",
        "  demo --> JEK[Jekyll docs]",
        "  tasks[HackerTasks PREFIX] --> BLE[BlocklyEditor]",
        "  tasks --> NRE[WiringEditor]",
        "  tasks --> APB[PrologEditor]",
        "  tasks --> AIA[AAIAGallery]",
        "  tasks --> BHS[BotHubSDK]",
        "  tasks --> MCP",
        "```",
        "",
    ]
    (OUT / "handoffs-zigurat.md").write_text("\n".join(lines), encoding="utf-8")
    tsv = ["# src\tdst\tnote", *[f"{a}\t{b}\t{c}" for a, b, c in edges]]
    (OUT / "handoffs-zigurat.tsv").write_text("\n".join(tsv) + "\n", encoding="utf-8")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    all_edges = []
    stats = {}
    for root in BARRIO_ROOTS:
        paths = rg_files(root, ["*.agent.md", "*.chatmode.md"])
        edges, _, _ = scan_handoffs(paths, root)
        stats[root] = (len(paths), len(edges))
        all_edges.extend(edges)
        print(f"{root}: agents={len(paths)} edges={len(edges)}")

    write_barrios_grafo(all_edges, stats)
    zedges = zigurat_command_edges()
    write_zigurat_grafo(zedges)
    print(f"barrios edges total={len(all_edges)}")
    print(f"zigurat edges={len(zedges)}")

    # index snippet
    idx = OUT / "05.1-INDICE.md"
    idx.write_text(
        "\n".join(
            [
                "# Capa 5.1 — Grafo ampliado",
                "",
                "| Artefacto | Contenido |",
                "|-----------|-----------|",
                f"| [`handoffs-barrios.md`](handoffs-barrios.md) | Handoffs YAML en barrios (**{len(all_edges)}** edges) |",
                "| [`handoffs-barrios.tsv`](handoffs-barrios.tsv) | Machine-readable |",
                f"| [`handoffs-zigurat.md`](handoffs-zigurat.md) | Comandos/demos/tasks (**{len(zedges)}** edges) |",
                "| [`handoffs-zigurat.tsv`](handoffs-zigurat.tsv) | Machine-readable |",
                "| [`handoffs.md`](handoffs.md) | Capa 5 original (solo `.github_V1`) |",
                "",
                "Regenerar: `python ARCHIVO/DEVOPS/CIUDAD/GRAFO/_gen_capa5_1.py`",
                "",
            ]
        ),
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
