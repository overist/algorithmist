# 2xn 타일링

https://www.acmicpc.net/problem/11726

## 문제

2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.

첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

## 테스트케이스

- 2 => 2
- 9 => 55

## 해설 및 리뷰

테스트케이스로 주어진 "9: 55" 에서 피보나치를 떠올릴 수 있다라면 매우 좋았겠지만
"5까지 점진적으로 늘리며 그려봤을 때" 피보나치 점화식과 일치함을 알 수 있다.

- 2 => 2
- 3 => 3
- 4 => 5
- 5 => 8
  ...
- 9 => 55

구현하면 되는데, JS는 number MAX값이 있어 오답케이스가 발생한다.
JS number의 맥스값은 다음과 같다.

```
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
```

### 엣지케이스 처리

```
  // 오답
  for (let i = 3; i <= n; i++) {
    memo.push(memo[i - 1] + memo[i - 2]);
  }

  result = memo[n] % 10007;
```

피보나치 수열의 100번째 값은 573147844013817200000 이다.
최대값을 넘어선다. JS는 연산 결과가 9007199254740991 보다 커질 경우 덧셈 처리하지 않는다.

수식을 역인수분해하면 array push 단계에서 모듈러 연산을 해도 해가 동일하다.
따라서 DP로 구한 최종 결과배열의 특정 인덱스를 10007로 모듈러 연산하는 것이 아닌
배열 저장 단계부터 모듈러 연산해야한다. 공간복잡도 측면에서도 유리하다.

```
  // 정답
  for (let i = 3; i <= n; i++) {
    memo.push((memo[i - 1] + memo[i - 2]) % 10007);
  }

  result = memo[n];
```