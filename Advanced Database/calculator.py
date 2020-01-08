import sys

if __name__ == '__main__':
    if sys.argv[1] == 'add':
        print( int(sys.argv[2]) + int(sys.argv[3]))
    elif sys.argv[1] == 'sub':
        print( int(sys.argv[2]) - int(sys.argv[3]))
    elif sys.argv[1] == 'div':
        print( int(sys.argv[2]) / int(sys.argv[3]))
    elif sys.argv[1] == 'mul':
        print(int(sys.argv[2]) * int(sys.argv[3]))
    else:
        print("Invalid choice")        