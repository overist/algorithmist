const mode = "debug"; // debug or submit

// ** Inout
let input = "";
switch (mode) {
  case "debug":
    input = `3
3 4 5
4 5 6`;
    break;
  case "submit":
    input = require("fs").readFileSync("/dev/stdin").toString().trim();
    break;
  default:
    throw "no input";
}

// ** Utils
const getN = (input) => Number(input.split("\n")[0]); // 3\n4 5 6 => 3
const getElementList = (input) => input.split(" "); // 1 2 3 => [1, 2, 3]
const getLineList = (input) => input.split("\n"); // 1 2 3\n4 5 6 => ["1 2 3", "4 5 6"]
const getMatrix = (input) => input.split("\n").map(getElementList); // 1 2 3\n4 5 6\n7 8 9 => [[4, 5, 6], [7, 8, 9]]

// ** Main
const solution = (input) => {
  let result = 0;
  const n = getN(input);
  const matrix = getMatrix(getLineList(input).slice(1));
  return result;
};

// ** Output
console.log(solution(input));
