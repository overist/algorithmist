// ** Inout
let input =
  `10
1
3
5
4
0
0
7
0
0
6` || require("fs").readFileSync("/dev/stdin").toString().trim();

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
  const lines = getLines(input).slice(1).map(Number);

  const stack = [];
  const push = (x) => stack.push(x);
  const pop = (x) => stack.pop(x);

  lines.forEach((call) => {
    if (call) push(call);
    else pop(call);
  });

  const sumStack = stack.reduce((a, v) => a + v, 0);

  return sumStack;
};

// ** Output
console.log(solution(input));
