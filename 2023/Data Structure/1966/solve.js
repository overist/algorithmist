// ** Inout
let input =
  `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1` ||
  require("fs").readFileSync("/dev/stdin", "utf8").toString().trim();

// ** Utils
const getN = (input) =>
  Number(input.split("\n").map((l) => l.split(" "))[0][0]);
const getK = (input) =>
  Number(input.split("\n").map((l) => l.split(" "))[0][1]);

const getElements = (input) => input.split(" ").map(Number);
const getLines = (input) => input.split("\n");

// ** Main
const solution = (input) => {
  const n = getN(input);
  const lines = getLines(input).slice(1);

  [...Array(n)].forEach((_, turn) => {
    const [n2, targetIdx] = lines[turn * 2].split(" ").map(Number);
    const importances = lines[turn * 2 + 1]
      .split(" ")
      .map(Number)
      .map((importance) => [importance, originIndex])
      .sort((a, b) => b[0] - a[0]);

    const dequeue = () => importances.shift();

    importances.forEach((_, i) => {
      if (dequeue()[1] == targetIdx) console.log(i);
    });
  });

  console.log(lines);
};

// ** Output
// console.log(solution(input));
solution(input);
