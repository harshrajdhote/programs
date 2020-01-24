#include<map>
#include<iostream>
using namespace std;
int main(){
   map <int,string> cust ;
   cust[100] = "oppo";
   cust[101] = "mayur";
   cust[102] = "shaggy";
   cust[103] = "bot";
   map <int,string> visitors{
       {100,"mayuri"},{101,"shreya"}
   };
   // methods
   // [] , at() , size() , empty() --> 1 if empty else 0, insert() , clear()
    map <int,string> :: iterator p = cust.begin();
    while(p != cust.end())
    {
        cout<<p->second<<endl;
        p++;
    }
    visitors.insert(pair<int,string>(102,"kalpe"));
    cout<<visitors.at(100);
}