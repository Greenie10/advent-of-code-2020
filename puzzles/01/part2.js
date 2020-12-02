const fs = require("fs");

try {
  const data = fs.readFileSync("./puzzles/01/input.txt", "utf8");
  const array = data.split(/\r?\n/).map((x) => +x);

  // i fear this is madly inefficient

  // LOOP 1
  for (let i = 0, length = array.length; i < length; i++) {
    let a = array[i];

    // LOOP 2
    for (let j = 0, length = array.length; j < length; j++) {
      let b = array[j + 1];

      // LOOP 3
      for (let k = 0, length = array.length; k < length; k++) {
        let c = array[k + 1];
        let d = a + b + c;

        if (d === 2020) {
          console.log("a * b * c: ", a * b * c);
        }
      }
    }
  }
} catch (err) {
  console.error(err);
}
