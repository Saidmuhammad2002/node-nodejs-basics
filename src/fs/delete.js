import { existsSync } from "fs";
import { rm } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fileToRemove.txt");

  if (!existsSync(filePath)) throw new Error("FS operation failed");

  try {
    await rm(filePath);
    console.log("File removed successfully");
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await remove();
