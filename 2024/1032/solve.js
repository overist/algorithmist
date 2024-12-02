const mode = "debug"; // debug or solve

// ** Inout
let input = "";
switch (mode) {
  case "debug":
    input = `2
contest.txt
context.txt`;
    break;
  case "solve":
    input = require("fs").readFileSync("/dev/stdin").toString().trim();
    break;
  default:
    throw "no input";
}

// ** Utils
const getN = (input) =>
  Number(input.split("\n").map((l) => l.split(" "))[0][0]);
const getElements = (input) => input.split(" ");
const getLines = (input) => input.split("\n");
const getMatrix = (linesExceptN) =>
  linesExceptN.map((line) => getElements(line).map(String));

// ** Main
const solution = (input) => {
  const n = getN(input);
  const matrix = getLines(input).slice(1);

  let memo = matrix.shift();
  matrix.forEach((word) => {
    const len = word.length; // 파일 이름 길이는 모두 같다.
    for (let i = 0; i < len; i++) {
      const newMemo = memo.split("");
      if (memo[i] !== word[i]) {
        newMemo[i] = "?";
        memo = newMemo.join("");
      }
    }
  });

  // return matrix;
  return memo;
};

// ** Output
console.log(solution(input));
