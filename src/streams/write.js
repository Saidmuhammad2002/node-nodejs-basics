import { createWriteStream } from "fs";

const write = async () => {
  const fileToWrite = "src/streams/files/fileToWrite.txt";
  const writableStream = createWriteStream(fileToWrite);

  process.stdin.on("data", (chunk) => {
    writableStream.write(chunk);
  });

  process.stdin.on("end", () => {
    writableStream.end(() => {
      console.log(`Data has been written to ${fileToWrite}`);
    });
  });
};

await write();
