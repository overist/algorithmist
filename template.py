import sys

# ** Utilities ---------------------
def getElementList(input): return input.split(" ")
def getNumberList(input): return [int(character) for character in input.split(" ")]
def getLineList(input): return input.split("\n")
def getMatrix(lineList): return [getNumberList(line) for line in lineList]
# ----------------------------------

# ** Function Block ----------------

# solution ---
def solution(input):
    lineList = getLineList(input)[1:]
    matrix = getMatrix(lineList)
    return matrix
# ----------------------------------

# ** Main --------------------------
# Preprocess input
input = """1 3
2 4 5
3 4 7""" if sys.stdin.isatty() else sys.stdin.read().strip()

# Run solution
if __name__ == "__main__":
    result = solution(input)
    print(result)
# ----------------------------------