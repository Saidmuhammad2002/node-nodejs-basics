import { existsSync } from "fs";
import { readdir, rename as renameFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = dirname(__filename);
  const wrongFile = join(__dirname, "files", "wrongFilename.txt");

  const properFile = join(__dirname, "files", "properFilename.md");

  if (!existsSync(wrongFile) || existsSync(properFile))
    throw new Error("FS operation failed");

  try {
    await renameFile(wrongFile, properFile);
    console.log("File renamed successfully");
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await rename();
