
#include<iostream>
#include<tuple>
using namespace std;
int main(){
   tuple <string,int,int> s;
   s = make_tuple("pranay chutiya",1,2);
   cout<<get<0>(s)<<endl;
}    