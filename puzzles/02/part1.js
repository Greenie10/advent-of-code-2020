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
    const pw = x.split("").sort().join("");
    let min = output[i][0];
    let max = output[i][1];
    let letter = output[i][2];
    let password = pw;

    let re = new RegExp(`${letter}{${min},${max}}`);
    if (re.test(password)) {
      count++;
      console.log(
        output[i][0],
        output[i][1],
        output[i][2],
        password,
        re.test(password),
        count
      );
    }
  }
} catch (err) {
  console.error(err);
}
