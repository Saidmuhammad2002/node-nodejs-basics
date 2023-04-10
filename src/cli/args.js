const parseArgs = () => {
  const args = process.argv.slice(2); // remove the first two elements (node executable and script name)

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace("--", "");
    const value = args[i + 1];
    console.log(`${propName} is ${value}`);
  }
};

parseArgs();
