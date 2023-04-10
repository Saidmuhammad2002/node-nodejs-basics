import { existsSync } from "fs";
import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const folderPath = join(__dirname, "files");

  if (!existsSync(folderPath)) throw new Error("FS operation failed");

  try {
    const files = await readdir(folderPath);
    files.forEach((file) => {
      console.log(file);
    });
    // console.log(files); // show files as an array
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await list();
