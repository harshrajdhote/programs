#include<bits/stdc++.h>
using namespace std;
class test{
public:
int a;
public:
test(){}
test(test &t){
cout<<"copy called";
}
};

int main(){
   test t;
   t.a = 0;
   test t2 = t;
   t2 = t;
   
}

/*
#include<iostream> 
#include<stdio.h> 

using namespace std; 

class Test 
{ 
	public: 
  int a;
	Test() {} 
	Test(const Test &t) 
	{ 
		cout<<"Copy constructor called "<<endl; 
	} 
	
	Test& operator = (const Test &t) 
	{ 
		cout<<"Assignment operator called "<<endl; 
		return *this; 
	} 
}; 

// Driver code 
int main() 
{ 
	Test t1, t2; 
   t1.a = 5;
	t2 = t1;
    t2.a = 6;
   cout<<""<<t1.a;
	Test t3 = t1; 
	getchar(); 
	return 0; 
} 
*/
