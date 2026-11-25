// make.fun entry: The Best Meal You Ever Had
// Writes one sentence about the best meal ever had to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The best meal I ever had was my grandmother's rendang at midnight, the beef falling apart in coconut gravy while rain drummed on the tin roof and nobody spoke, we just ate.";

// Count real characters (code points), not UTF-16 units, and reject a
// blank or multi-line entry so the gate never sees whitespace-only text.
const length = [...entry].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("Entry must be a single non-empty sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
