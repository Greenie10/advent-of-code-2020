const fs = require("fs");

try {
  const data = fs.readFileSync("./puzzles/02/input.txt", "utf8");
  // split into component parts: min, max, letter, password
  const regex = /:/gi;
  let output = data
    .replace(regex, "")
    .split(/\r?\n/)
    .map((x) => x.split(/[-\s]+/));

  let count = 0;

  for (let i = 0, length = output.length; i < length; i++) {
    let x = output[i][3];
    let letter = output[i][2];
    let min = output[i][0];
    let max = output[i][1];
    const password = x.split("").filter((l) => l === letter);

    if (password.length >= min && password.length <= max) {
      count++;
      console.log(
        output[i][0],
        output[i][1],
        output[i][2],
        password.length,
        count
      );
    }
  }
} catch (err) {
  console.error(err);
}
