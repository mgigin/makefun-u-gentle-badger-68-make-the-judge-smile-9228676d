import { mkdirSync, writeFileSync } from "node:fs";

// One short text for the judge: a small good thing from this morning,
// told the way it happened — a knock at the door, a crayon crown, a whisper.
const text =
  "The little girl next door knocked this morning with a drawing of our cat wearing a crown and whispered, 'he told me you needed a king today.'";

if ([...text].length < 1 || [...text].length > 200) {
  throw new Error("entry text out of range");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
