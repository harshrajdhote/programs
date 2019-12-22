def max(list):
    n = len(list)
    max = list[0]
    for i in range(1,n):
        if(list[i] > max ):
            max = list[i]
    return max            