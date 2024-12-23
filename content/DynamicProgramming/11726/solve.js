const mode = "debug"; // debug or submit

// ** Inout
let input = "";
switch (mode) {
  case "debug":
    input = `9`;
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

  // 빠른 계산
  if (n === 1) return 1;
  if (n === 2) return 2;

  // 초기화
  let memo = [0, 1, 2]; // index에 대응되는 경우의 수 결과값

  // 피보나치 점화식 바텀업 DP 구현
  for (let i = 3; i <= n; i++) {
    memo.push((memo[i - 1] + memo[i - 2]) % 10007);
  }

  result = memo[n];

  return result;
};

// ** Output
console.log(solution(input));
