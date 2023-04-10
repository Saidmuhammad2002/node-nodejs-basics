import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fileToRead.txt");

  if (!existsSync(filePath)) throw new Error("FS operation failed");

  try {
    const contents = await readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await read();
