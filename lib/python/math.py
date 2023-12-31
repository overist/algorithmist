import math

# 팩토리얼
def factorial(n):
    return math.factorial(n)

# 소인수분해
def factorization(x:int):
    d = 2
    while d <= x:
        if x % d == 0:
            print(d)
            x = x / d
        else:
            d = d + 1


# 최대공약수
def gcd(a:int, b:int):  
    while b > 0:
        a, b = b, a % b
    return a

# 최소공배수
def lcm(a:int, b:int):
    return a * b / gcd(a, b)

# 진법 변환
def base_convert(number: int, base: int):
    alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    result = ""
    
    while number > 0:
        number, remainder = divmod(number, base)
        result = alphabet[remainder] + result
    
    return result

# 진법 변환
def convert(number: str, base: int):
    return int(number, base)

# 정수를 입력받아 약수를 리스트로 반환
def find_divisors(n):
    divisors = []
    for i in range(1, n + 1):
        if n % i == 0:
            divisors.append(i)
    return divisors

# 에라토스테네스의 체 - 소수 리스트
# n 미만까지 구하기 때문에 이하로 구하기 위해서 n+1 을 넣을 것
def prime_list(n:int):
    s = [True] * n
    m = int(n ** 0.5)
    for i in range(2, m + 1):
        if s[i] == True:
            for j in range(i+i, n, i):
                s[j] = False
    return [i for i in range(2, n) if s[i] == True]

# list 중 m개를 선택할 경우의 최대값 반환
from itertools import combinations
def get_max_combination(lst, m):
    combinations_lst = list(combinations(lst, m))
    max_value = max(sum(combination) for combination in combinations_lst)
    return max_value

# 반올림 (일반)
def my_round(val):
    return int(val) + 1 if val - int(val) >= 0.5 else int(val)
