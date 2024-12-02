const mode = "debug"; // debug or solve

// ** Inout
let input = "";
switch (mode) {
  case "debug":
    input = `3
3 4 5
4 5 6`;
    break;
  case "solve":
    input = require("fs").readFileSync("/dev/stdin").toString().trim();
    break;
  default:
    throw "no input";
}

// ** Utils
const getN = (input) =>
  Number(input.split("\n").map((l) => l.split(" "))[0][0]); // 3\n4 5 6 => 3
const getElementList = (input) => input.split(" "); // 1 2 3 => [1, 2, 3]
const getLineList = (input) => input.split("\n"); // 1 2 3\n4 5 6 => ["1 2 3", "4 5 6"]
const getMatrix = (lineList) =>
  lineList.map((line) => getElementList(line).map(Number)); // 1 2 3\n4 5 6\n7 8 9 => [[4, 5, 6], [7, 8, 9]]
const getShiftedLineList = (input) => getLineList(input).slice(1); // 3\n4 5 6 => ["4 5 6"]
const getShiftedMatrix = (input) => getMatrix(getShiftedLineList(input)); // 3\n4 5 6\n7 8 9 => [[4, 5, 6], [7, 8, 9]]

// ** Main
const solution = (input) => {
  const n = getN(input);
  const matrix = getMatrix(getLineList(input).slice(1));
  return { n, matrix };
};

// ** Output
console.log(solution(input));
