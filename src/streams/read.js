import { createReadStream } from "fs";
const read = async () => {
  const fileToRead = "src/streams/files/fileToRead.txt";
  const readableStream = createReadStream(fileToRead, { encoding: "utf8" });
  readableStream.on("data", (data) => {
    process.stdout.write(data);
  });
  readableStream.on("end", () => {
    readableStream.close();
  });
};

await read();
