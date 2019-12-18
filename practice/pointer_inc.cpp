#include<bits/stdc++.h>
using namespace std;
int main(){
    int i = 10;
    int *p = &i;
   // *(p+1) = 101; segment fault
   // int *p; cout<<*p;
    // trying to read integer from the garbage value from garbage location
    //this location would be anything ***this sometimes works sometimes not depends on the location
    //to avoid this situation use this declaration int *p = 0
    //so this always gives segmentation fault but above one sometimes works so this is dangerous b
    //because we don't know what we are manipulating
    (*p)++;
    cout<<*p<<setw(40)<<p<<p<<endl; //setw(size) fixed length to adjust content
}