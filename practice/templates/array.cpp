#include<array>
#include<iostream>
using namespace std;
int main(){
    array <int,5> arr;
    for(int i =0;i<5;i++)
    arr[i] = i;
    for(int i = 0;i<5;i++)
    cout<<arr[i];
    //mostly used methods
    // at
    //front() back() fill() swap() size() begin() end()
    // arr.front() arr.back()   returns exact last even if not present then return zero i.e 
    // we have allocated 5 size array but only 3 elements are there then last should be 0 thats why op is 0
    // arr.fill(10) fills same value in the entire array
    //firstarr.swap(secondarr) swaps content of first array with second provided they are of same size 
    //and type
    //size() returns the size
    //begin() and end() returns iterators 
    

}