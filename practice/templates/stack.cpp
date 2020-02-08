#include<iostream>
#include<stack>
using namespace std;
int main(){
    stack<int> s;
    s.push(12);
    s.push(13);
    cout<<s.top();
    s.pop();
    cout<<endl<<s.size();
    s.pop();
    cout<<endl<<s.empty(); 
}