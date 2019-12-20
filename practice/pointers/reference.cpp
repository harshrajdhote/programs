//https://www.educba.com/c-plus-plus-reference-vs-pointer/ difference ptrs and reference
// references doesn't have its own address but the pointers has 
// null cant be assigned to references
// reassignment cant be done
#include <iostream>
using namespace std;

void increment(int& i) {
	i++;
}
// why we dont have pointers in java because of illegal memory access  and as we can why there bad practice
// is returing becoz on returning that () space may be cleared these leds to loss in value
// one more reason for java we can derieve from here is that garbage collection. relate this with
// with above line
// bad practice
int& f(int n) {
	int a = n;
	return a;
}

// bad practice
int* f2() {
	int i = 10;
	return &i;
}

int main() {
	int* p = f2();

	int i;
	i = 10;

	int& k1 = f(i);


	increment(i);
	cout << i << endl;

	int& j = i;

	i++;
	cout << j << endl;
	j++;
	cout << i << endl;

	int k = 100;
	j = k;
	cout << i << endl;
}
