const fs = require("fs");

const requiredCredentialsValidation = {
  byr: {
    description: "four digits; at least 1920 and at most 2002",
    regex: "^(19[2-8][0-9]|199[0-9]|200[0-2])$",
  },
  iyr: {
    description: "four digits; at least 2010 and at most 2020",
    regex: "^(201[0-9]|2020)$",
  },
  eyr: {
    description: "four digits; at least 2020 and at most 2030",
    regex: "^(202[0-9]|2030)$",
  },
  hgt: {
    description:
      "a number followed by either cm or in If cm, the number must be " +
      "at least 150 and at most 193 If in, the number must be at least " +
      "59 and at most 76",
    regex: "^((1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)",
  },
  hcl: {
    description: "a # followed by exactly six characters 0-9 or a-f",
    regex: "^#([0-9]|[a-f]){6}$",
  },
  ecl: {
    description: "exactly one of amb blu brn gry grn hzl oth",
    regex: "^(amb|blu|brn|gry|grn|hzl|oth){1}$",
  },
  pid: {
    description: "a nine-digit number, including leading zeroes",
    regex: "^\\d{9}$",
  },
  cid: {
    description: "nothing here",
    regex: ".*",
  },
};

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
  // console.log(Object.keys(requiredCredentialsValidation));

  for (let i = 0; i < passportsArray.length; i++) {
    let credentialsArray = passportsArray[i].split(" ");
    // console.log(credentialsArray);
    let credentialsObject = {};
    credentialsArray.forEach((x) => {
      [cred, value] = x.split(":");
      // console.log(cred, value);
      credentialsObject[cred] = value;
    });
    // console.log("credentialsObject", credentialsObject);
    const keysPresent = Object.keys(credentialsObject);
    const keysValues = Object.entries(credentialsObject);
    // console.log("keysPresent", keysPresent);
    // console.log("requiredCredentials", requiredCredentials.sort());
    let validity = true;
    for (let i = 0; i < requiredCredentials.length; i++) {
      if (!keysPresent.includes(requiredCredentials[i])) {
        validity = false;
      } else {
        for (let i = 0; i < keysPresent.length; i++) {
          let currentKey = keysPresent[i];
          let valueOfCurrentKey = credentialsObject[currentKey];
          let criteria = requiredCredentialsValidation[currentKey].regex;
          valueOfCurrentKey.match(criteria) ? null : (validity = false);
        }
      }
    }

    // if passes,then below can be incremented, otherwise not
    validity ? validPassportCount++ : null;

    // console.log(validity);
  }
  console.log("validPassportCount", validPassportCount);
} catch (err) {
  console.log(err);
}
