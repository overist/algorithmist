const mode = "debug"; // debug or submit

// ** Inout
let input = "";
switch (mode) {
  case "debug":
    input = `7
1 1 2 3 4 2 1`;
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
  const n = getN(input);
  const A = input.split("\n")[1].split(" ").map(Number);

  // Step1 등장 횟수 객체 생성
  const F = new Map();
  for (const a of A) {
    if (F.has(a)) F.set(a, F.get(a) + 1);
    else F.set(a, 1);
  }

  // Step2 초기화
  const stack = [];
  const result = Array(n).fill(-1);

  // Step3 배열을 순회하며 스택의 탑과 비교
  // NOTE : why 스택? => 좌에서 우로 하나씩 넣다가, 조건에 맞으면 그때서야 "인덱스"를 찾아가 변경한다. O(n)으로 해법.
  for (let i = 0; i < n; i++) {
    const f = F.get(A[i]);

    // 스택의 탑에 있는 값이 현재 값보다 작은지 확인
    while (stack.length > 0 && F.get(A[stack[stack.length - 1]]) < f) {
      const changeIdx = stack.pop();
      result[changeIdx] = A[i];
    }

    // 현재 인덱스를 스택에 추가
    stack.push(i);
  }

  return result;
};

// ** Output
console.log(solution(input).join(" "));
