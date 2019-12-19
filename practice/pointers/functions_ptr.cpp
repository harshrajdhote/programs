#include<bits/stdc++.h>
using namespace std;
void print(int *p){
    cout<<*p<<endl;
}
void incrementPointer(int *p){
    p= p + 1 ;
}
void increment(int *p){
    (*p)++;
}
void sum(int *a,int size) // int  * a and int a[] works same in both cases we are passing the pointer
{ //so the changes in the () also reflected in the actual array **note here both a[] and *a gives the size of pointer
int ans = 0;
for(int i = 0;i<size;i++)
ans+= i[a];
*(a+1) = 1;
a[2] = ans; 
}


int main(){
 int i =10;
 int *p =   &i;
    print(p); // prints p
    cout<<p<<endl;  // prints address of p
    incrementPointer(p); // actually new copy is created at formal parameter and we are incrementing that ptr so
    //that why no change
    cout<<p<<endl;
    increment(p);
    cout<<p<<endl ; // increment p becoz both formal and local ptrs points to the same location 
    // and then we incrementing value at that location for example local p --> 709 and formal --> 709 
    //then we are changing the value at that points thats why value has been changed.
    int a[10];
    cout<<sizeof(a)<<endl; // gives size of array
    sum(a,8); // we can also send the partial array 
    cout<<a[1]<<endl<<a[2]; // gives -1 because we are manipulating that location in the function
}