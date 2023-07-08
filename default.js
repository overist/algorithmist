// ** Inout
let input =
  `3
3 4 5
4 5 6` || require("fs").readFileSync("/dev/stdin").toString().trim();

// ** Utils
const getN = (input) =>
  Number(input.split("\n").map((l) => l.split(" "))[0][0]);
const getElements = (input) => input.split(" ");
const getLines = (input) => input.split("\n");
const getMatrix = (linesExceptN) =>
  linesExceptN.map((line) => getElements(line).map(Number));

// ** Main
const solution = (input) => {
  const n = getN(input);
  const matrix = getMatrix(getLines(input).slice(1));
  return { n, matrix };
};

// ** Output
console.log(solution(input));
