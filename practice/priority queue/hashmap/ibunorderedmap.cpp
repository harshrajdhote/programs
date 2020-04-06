#include<bits/stdc++.h>
using namespace std;
int main(){
    unordered_map <string,int> m;
    m["a"] = 1;
    cout<<m["b"]<<endl;//default create if n exist puts 0 val
    //m.at("b") gives expection
    //check presence
    if(m.count("ghi") > 0)
    cout<<"present"<<endl;
}