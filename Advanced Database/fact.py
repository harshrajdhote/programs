def factorial(n):
    if(n == 1):
        return 1
    else:
        return n*factorial(n-1)
if __name__ == "__main__":
    print("Enter the number to calculate its factorial")
    n = int(input())
    print(f'Factorial is {factorial(n)}')     