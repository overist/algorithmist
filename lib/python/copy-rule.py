# ANCHOR 객체 복사
print('#### 객체 복사 ####')
a = [1, 2, 3]
b = a  # 같은 객체 참조

b[0] = 99
print(a)  # [99, 2, 3] (b를 수정하면 a도 영향을 받음)
print(b)  # [99, 2, 3]
print('id 같은가? :', id(a) == id(b))  # True (같은 객체)


# ANCHOR 얕은 복사
print('\n#### 얕은 복사 ####')
a = [1, 2, 3]
b = a[:]  # 얕은 복사 list(a), a.copy()
b[0] = 99

print(a)  # [1, 2, 3] (a는 영향을 받지 않음)
print(b)  # [99, 2, 3]
print('id 같은가? :', id(a) == id(b))  # False (외부 리스트는 다름)


# ANCHOR 얕은 복사 내부
print('\nCF: 내부 요소가 mutable인 reference type일 경우, 내부 요소가 객체 참조를 공유함')
a = [1, [2, 3]]
b = a[:]  # 얕은 복사
b[1][0] = 99  # 내부 리스트 수정

print(a)  # [1, [99, 3]] (내부 리스트는 공유됨)
print(b)  # [1, [99, 3]]
print('내부객체 id 같은가? :', id(a[1]) == id(b[1]))  # True (내부 리스트는 같은 객체)


# ANCHOR 깊은 복사
print('\n#### 깊은 복사(파이썬에서는 재귀적 얕은 복사를 의미) ####')
import copy

a = [1, [2, 3]]
b = copy.deepcopy(a)  # 깊은 복사
b[1][0] = 99  # 내부 리스트 수정

print(a)  # [1, [2, 3]] (원본은 영향을 받지 않음)
print(b)  # [1, [99, 3]] (복사본만 변경됨)
print('내부객체 id 같은가? :', id(a[1]) == id(b[1]))  # False (내부 리스트도 다름)


# ANCHOR 깊은 복사 (Trick)
print('\n#### 깊은 복사 (Trick 1) ####')
a = [[1,2], [3,4]]
b = [a[0][:], a[1][:]]  # 깊은 복사
b[1][0] = 99  # 내부 리스트 수정

print(a)  # [1, [2, 3]] (원본은 영향을 받지 않음)
print(b)  # [1, [99, 3]] (복사본만 변경됨)
print('내부객체 id 같은가? :', id(a[1]) == id(b[1]))  # False (내부 리스트도 다름)


# ANCHOR 깊은 복사 (Trick)
print('\n#### 깊은 복사 (Trick 2) ####')
import json
a = [[1,2], [3,4]]
b = json.loads(json.dumps(a))  # 깊은 복사
b[1][0] = 99  # 내부 리스트 수정

print(a)  # [1, [2, 3]] (원본은 영향을 받지 않음)
print(b)  # [1, [99, 3]] (복사본만 변경됨)
print('내부객체 id 같은가? :', id(a[1]) == id(b[1]))  # False (내부 리스트도 다름)