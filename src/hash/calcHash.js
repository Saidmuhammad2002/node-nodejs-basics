import crypto from "crypto";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToCalculateHashFor = join(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const fileData = await readFile(fileToCalculateHashFor);

  const hash = crypto.createHash("sha256");
  hash.update(fileData);
  const hashHex = hash.digest("hex");

  console.log(`SHA256 hash for ${fileToCalculateHashFor}: ${hashHex}`);
};

await calculateHash();
