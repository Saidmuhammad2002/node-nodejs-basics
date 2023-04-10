import { existsSync } from "fs";
import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fresh.txt");
  console.log(filePath);

  if (existsSync(filePath)) throw new Error("FS operation failed");

  try {
    await writeFile(filePath, "I am fresh and young");
    console.log("File created successfully");
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await create();
