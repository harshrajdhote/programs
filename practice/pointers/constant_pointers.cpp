#include <iostream>
using namespace std;

int main() {
	int i = 10;
	int const k = 0;  //also uninitialization gives error
	//k=0; not allowed
	//cout<<k; this wont work if k is initialized
	int j = 21;
	int const * p;
	p = &i;
    //we can do also like this
 
	//p = &j;
	// p is saying that whom i am pointing i wont change its val, but i can change 
	//therefore below line is valid

	int * const p2 = &i;
	// above line means pointer is const we can change where it is pointing
	(*p2)++;
	//p2 = &j;


	int const * const p3 = &i;  //const pointer to const int means we cant change both
	//p3 = &j; error
  //	(*p3)++; error
}

