#include<vector>
#include<iostream>
using namespace std;
int main(){
   vector <int> v {1,2,3,4} ; //initialize while declaring
   vector <int> v1(4,1); // size 4 all default values are 1
   //methods [] , at() , push_back()  , pop_back(), size() , capacity() , clear(), front() and back()
   //to insert we need iterator
   vector <int> :: iterator it= v1.begin();
   v1.insert(it+2,35);

}    