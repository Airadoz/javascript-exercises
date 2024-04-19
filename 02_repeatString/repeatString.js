const repeatString = function (string, number) {
  let result = "";

  if (number < 0) return "ERROR";
  if (number === 0) return "";
  if (number > 0) {
    for (i = 0; i < number; i++) {
      result += string;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
