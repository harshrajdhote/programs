def partition(arr,low,high):
    i =low-1
    pivot=arr[high]
    for j in range(low,high):
        if(arr[j]<=pivot):      #find elements <=pivot also >pivot
            i+=1
            arr[i],arr[j]=arr[j],arr[i]     #all elements <pivot should be at locations < that of pivot
            print(arr)
    arr[i+1],arr[high]=arr[high],arr[i+1]
    print(arr,"-")
    return i+1                  

def quicksort(arr,low,high):
    print(arr)
    if(low<high):
        pi=partition(arr,low,high)
        quicksort(arr,low,pi-1)         #No need for arr[pi] pivot 
        quicksort(arr,pi+1,high)
        
        
#arr=[93,833,724,65,56,4,3,2,1]
a=[6,5,4,8,9,6,9,2,1]
quicksort(a,0,8)
print(arr)
