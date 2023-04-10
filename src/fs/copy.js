import { existsSync } from "fs";
import { mkdir, readdir, copyFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceFolderPath = join(__dirname, "files");
  const targetFolderPath = join(__dirname, "files_copy");
  if (!existsSync(sourceFolderPath) || existsSync(targetFolderPath)) {
    throw new Error("FS operation failed: Source folder does not exist");
  }

  try {
    await mkdir(targetFolderPath);
    const files = await readdir(sourceFolderPath);
    files.forEach((file) => {
      const sourceFilePath = join(sourceFolderPath, file);
      const targetFilePath = join(targetFolderPath, file);
      copyFile(sourceFilePath, targetFilePath);
    });
    console.log("Folder copied successfully");
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await copy();
