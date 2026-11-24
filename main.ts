// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In my defence, the sock was on the floor, unmoving, and legally debris. I stand by my suction.";

// Gate: the entry must be one line, 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || /\n/.test(LINE)) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
