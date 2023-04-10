import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
const decompress = async () => {
  const fileToDecompress = "src/zip/files/fileToCompress.txt";
  const archiveFile = "archive.gz";

  const readStream = createReadStream(archiveFile);
  const writeStream = createWriteStream(fileToDecompress);

  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(
      `File ${archiveFile} has been decompressed to ${fileToDecompress}`
    );
  });
};

await decompress();
