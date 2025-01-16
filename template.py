import sys

# ** Utilities ---------------------
# def getElementList(input): return input.split()
# def getNumberList(input): return [int(character) for character in input.split()]
# def getLineList(input): return input.split("\n")
# def getMatrix(lineList): return [getNumberList(line) for line in lineList]
# ----------------------------------

# ** Function Block ----------------
# solution ---
def solution():
    n = sys.stdin.readline().strip()
    xList = [int(x) for x in sys.stdin.readlines()]
    return n
# ----------------------------------

# ** Main --------------------------
if __name__ == "__main__":
    if sys.stdin.isatty() :
        with open('input.txt', "r") as f :
            sys.stdin = f
            solution()
    else : solution()
# ----------------------------------