const fs = require("fs");

try {
  const data = fs.readFileSync("./puzzles/04/input.txt", "utf8");
  let regex1 = /\n\n/gi;
  let tempSeparator = data.replace(regex1, "\t");
  let regex2 = /\n/gi;
  let removeReturns = tempSeparator.replace(regex2, " ");
  let passportsArray = removeReturns.split("\t");
  let requiredCredentials = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let validPassportCount = 0;
  // console.log(passportsArray);

  for (let i = 0; i < passportsArray.length; i++) {
    let credentialsArray = passportsArray[i].split(" ");
    // console.log(credentialsArray);
    let credentialsObject = {};
    credentialsArray.forEach((x) => {
      [cred, value] = x.split(":");
      // console.log(cred);
      credentialsObject[cred] = value;
    });
    // console.log("credentialsObject", credentialsObject);
    const keysPresent = Object.keys(credentialsObject);
    // console.log("keysPresent", keysPresent);
    // console.log("requiredCredentials", requiredCredentials.sort());
    let validity = true;
    for (let i = 0; i < requiredCredentials.length; i++) {
      if (!keysPresent.includes(requiredCredentials[i])) {
        validity = false;
      }
    }
    if (validity === true) {
      validPassportCount++;
    }
    // console.log(validity);
  }
  console.log("validPassportCount", validPassportCount);
} catch (err) {
  console.log(err);
}
