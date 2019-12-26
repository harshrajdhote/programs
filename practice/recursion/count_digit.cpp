#include<iostream>
using namespace std;


int main(){
    int n;
    cin >> n;
  
    cout << count(n) << endl; 
}
int count(int n){
    if(n == 0){  // also if(n == 1) {return 1;} correct
        return 0;
    }
    int smallAns = count(n / 10);
    return smallAns + 1; // to get the digit count
}


