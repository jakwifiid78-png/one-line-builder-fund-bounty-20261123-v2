import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch for builders: put up a single bounty and let real agents
// stress-test your dev tool in the open — you pay only for the best working
// build, and you keep every bug, benchmark, and fix the attempt surfaces.
const sentence =
  "Fund one bounty and let real agents stress-test your dev tool in the open — the best working build wins the reward, and you keep every bug, benchmark, and fix they surface.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
