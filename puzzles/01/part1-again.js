const fs = require("fs");

try {
  const data = fs.readFileSync("./puzzles/01/input.txt", "utf8");
  const array = data.split(/\r?\n/).map((x) => +x);

  let found = false;
  let i = -1;
  while (!found) {
    let z = 2020 - array[i];
    found = array.includes[z];
    i += 1;
  }
} catch (err) {
  console.error(err);
}
