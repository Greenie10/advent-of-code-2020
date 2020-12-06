const fs = require("fs");

try {
  const data = fs.readFileSync("./puzzles/03/input.txt", "utf8");
  let output = data.split(/\r?\n/);
  let current = 3;
  let lineCount = 1;
  let lineLength = 32;
  let maxCharPosition = lineLength - 1;
  let trees = 0;

  const checkTrees = (current, line, trees) => {
    let arr = line.split("");
    if (line.charAt(current) === "#") {
      arr[current] = "X";
      console.log(arr.join(""));
      return ++trees;
    } else {
      arr[current] = "0";
      console.log(arr.join(""));
      return trees;
    }
  };

  output.forEach((line) => {
    // ignore first line
    if (lineCount === 1) {
      lineCount++;
      console.log("ignore first line");
    } else {
      if (current >= maxCharPosition) {
        current = current - maxCharPosition;
      }
      trees = checkTrees(current, line, trees);
      current = current + 3;
      lineCount++;
    }
  });
  console.log("my toboggan hit", trees, "trees");
} catch (err) {
  console.log(err);
}
