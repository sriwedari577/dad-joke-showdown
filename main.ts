import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One joke, exactly as submitted — keep the wording unchanged.
const JOKE =
  "My daughter said dad jokes aren't a language. I said they are. I'm fluent in father tongue.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
