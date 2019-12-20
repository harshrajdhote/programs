#include <iostream>
using namespace std;

int main() {
	int i = 65;
	char c = i;
	cout << c << endl;

	int * p = &i;
	char * pc = (char*)p;

	cout << p << endl;
	cout << pc << endl; // prints chars till it doesnt finds null

	cout << *p << endl; 
	cout << *pc << endl;  // integer is stored as little endian means that the 65 is like this
    // in 4 bytes of memory b1 65 b2 0 b3 0 b4 thats why this gives A as output 
  	cout << *(pc + 1) << endl; // this gives null thats y nothing is printing there
	cout << *(pc + 2) << endl; // same here
	cout << *(pc + 3) << endl; // here
}
