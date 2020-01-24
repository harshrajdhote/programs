#include<iostream>
using namespace std;
template <class X> X getBigger(X n1, X n2){
    if(n1 > n2)
    return n1;
    return n2;
}

int main(){
    cout<<""<<getBigger(23,12);
    //hello();
}
