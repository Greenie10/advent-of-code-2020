const fs = require("fs");

try {
  const data = fs.readFileSync("./puzzles/03/input.txt", "utf8");
  let array = data.split(/\r?\n/);
  let rightJump = 3;
  let current = rightJump;
  let downJump = 1;
  let lineCount = 0;
  let lineLength = 32;
  let maxCharPosition = lineLength - 1;
  let maxLines = array.length;
  console.log(maxLines);
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

  while (lineCount < maxLines - downJump) {
    if (current >= maxCharPosition) {
      current = current - maxCharPosition;
    }
    lineCount += downJump;
    trees = checkTrees(current, array[lineCount], trees);
    current = current + rightJump;
  }

  // array.forEach((line) => {
  //   // ignore first line or only odd numbers (lineCount % 2) for down 2
  //   if (lineCount === 1) {
  //     lineCount += downJump;
  //     console.log("ignore first line");
  //   } else {
  //     if (current >= maxCharPosition) {
  //       current = current - maxCharPosition;
  //     }
  //     trees = checkTrees(current, array[lineCount], trees);
  //     current = current + rightJump;
  //     lineCount += downJump;
  //     console.log(lineCount);
  //   }
  // });
  console.log("my toboggan hit", trees, "trees");
} catch (err) {
  console.log(err);
}
