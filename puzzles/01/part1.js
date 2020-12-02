const fs = require("fs");

try {
  const data = fs.readFileSync("./puzzles/01/input.txt", "utf8");
  const array = data.split(/\r?\n/).map((x) => +x);

  // loop 1, take each number in turn from the array, call it 'a'
  // loop 2, add 'a' to each subsequent number in the array (called 'b'), call the result 'c'
  // test if 'c' equals 2020

  // LOOP 1
  for (let i = 0, length = array.length; i < length; i++) {
    let a = array[i];

    // LOOP 2
    for (let j = 0, length = array.length; j < length; j++) {
      let b = array[j + 1];
      let c = a + b;

      if (c === 2020) {
        console.log("a + b = c: ", a, b, c);
        console.log("a * b: ", a * b);
      }
    }
  }
} catch (err) {
  console.error(err);
}
