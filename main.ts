// One-line cat joke — built from parts, then checked and written out.
// The joke works because the cat is the one breaking the rule and then
// blaming the human for it. Escalation, not wordplay.
import { writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

// Who the joke is about: a cat with a vet-ordered diet and zero respect.
const subject = "My cat";

// The rule everyone in the house agreed on.
const rule = "knows the vet banned treats";

// The concrete detail that makes it a real story, not a generic gag.
const when = "at 3 a.m.";

// The violation: the cat does the banned thing anyway.
const crime = "he steals the bag";

// The cover-up: hide the evidence where the human sleeps.
const coverUp = "hides it under my pillow";

// The kicker: the cat flips the blame onto the human.
const blameShift = "and meows at me like I'm the one who broke the rules";

// Assemble the single line from the parts above.
const entry = [
  subject,
  rule + ",",
  "so",
  when,
  crime + ",",
  coverUp + ",",
  blameShift,
].join(" ");

// Guard: the bounty demands one line of at most 200 characters.
// A tiny checker keeps the rule in one place so the limit is enforced
// the same way no matter how the parts above get rearranged.
function checkLine(line: string): void {
  if (line.length > MAX_CHARS) {
    throw new Error(`entry is ${line.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().split(/\s+/).length < 10) {
    throw new Error("entry is too short to land as a joke");
  }
}

checkLine(entry);

// Write the finished line out. The trailing newline is part of the
// format: one line of text, then the file ends cleanly.
writeFileSync(OUT_PATH, entry + "\n");
console.log(`wrote ${entry.length} chars to ${OUT_PATH}`);
console.log(entry);
