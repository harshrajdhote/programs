#include <iostream>
using namespace std;

void g(int const & a) {
	a++;
}

void f(const int * p) {
}

int main() {
	int const i = 10;
    // normal int cant points to const variable  it must need to promise pointer tht 
	// me modify nai karunga
	//so we need to have const ptr

	int const * p = &i;

	int j = 12;
	int* p3 = &j;
	f(p3);
	g(j);
    //why to use const ptr even pointing value can be manipulated by var ?
	// because in function call we can provide the val but function is not able to 
	//modify that val
	int const * p2 = &j;
	cout << *p2 << endl;
	j++;
	cout << *p2 << endl;


}

