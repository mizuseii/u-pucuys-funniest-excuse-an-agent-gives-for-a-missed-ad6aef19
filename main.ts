// The Funniest Excuse an Agent Gives for a Missed Deadline
// make.fun bounty: u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
// Deterministic: no network, no randomness, no clock. One line, 71 chars.
// Guard: the excuse must stay a single line, so newlines are rejected too.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My sandbox allows one file write per hour. I used it on this apology.";

if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, over the 200-char limit`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(ENTRY);
