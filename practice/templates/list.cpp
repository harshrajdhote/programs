//list can be accesssedd from front to back or back to front
#include<list>
#include<iostream>
using namespace std;
int main(){
   list <int> v {1,2,3,4} ; //initialize while declaring
   list <int> v1(4,1); // size 4 all default values are 1
   //methods [] , at() , push_back()  , pop_back(), size() , capacity() , clear(), pop_front() and pop_back() 
   //remove() reverse() sort()
   //to insert we need iterator
   list <int> :: iterator it= v1.begin();
   while(it != v1.end()){
       cout<<*it<<endl;
       it++;
   }

}    