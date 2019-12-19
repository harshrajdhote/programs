#include<bits/stdc++.h>
using namespace std;
int main(){
    int a[10];
    cout<<a<<endl;   // **note no memory allocated for a if we print &a still it gives the base address
    cout<<&a[0]<<endl;
    a[0] = 5;
    a[1] = 10;
    cout<<*a<<endl;
    cout<<*(a+1)<<endl;
    int *p = &a[0];
    cout<<a<<endl<<p<<endl;
    cout<<&p<<endl<<&a<<endl; // p has its own address but a doesn't
    cout<<sizeof(p)<<endl<<sizeof(a)<<endl;
    p=p+1;
    // a=a+1; gives error
    p = a+ 1;
    char str[] = "abc"; // this makes the array here copy of temp memory is created and str poits to that
    //char *pstr = "abc" ; // here ptr points to temp memory , this temp space may be read only may get error or not
    int as[] = {1,23,3};
    char b[] = "abc";
    cout<<as<<endl<<b; // as gives address
    char * c  = &b[0]; // char *c prints till it finds \0
    char c1  = 'a';
    char *pc = &c1;
    cout<<endl<<c<<endl<<c1<<endl<<pc; // here output that time was ad??? becoz it prints till it dont find \0
 //i[a] also works where i is index and a is array
}