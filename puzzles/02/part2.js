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
    let position1 = parseInt(output[i][0] - 1);
    let position2 = parseInt(output[i][1] - 1);
    let letter = output[i][2];
    let password = output[i][3];
    let passwordArr = password.split("");

    if (
      (passwordArr[position1] === letter &&
        passwordArr[position2] !== letter) ||
      (passwordArr[position1] !== letter && passwordArr[position2] === letter)
    ) {
      count++;
      console.log(
        count,
        passwordArr[position1],
        letter,
        passwordArr[position2],
        true
      );
    }
    //  else {
    //   console.log(
    //     count,
    //     passwordArr[position1],
    //     letter,
    //     passwordArr[position2],
    //     false
    //   );
    // }
  }
} catch (err) {
  console.error(err);
}
