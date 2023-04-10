import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";

const compress = async () => {
  const fileToCompress = "src/zip/files/fileToCompress.txt";
  const archiveFile = "archive.gz";

  const readStream = createReadStream(fileToCompress);
  // Create a writable stream to the archive file
  const writeStream = createWriteStream(archiveFile);

  const gzip = zlib.createGzip();
  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`File ${fileToCompress} has been compressed to ${archiveFile}`);
  });
};

await compress();
