#include<iostream>
using namespace std;
template <class T>
class stack{
   int capacity,size;
   T *ptr;
   public : 
   stack(int x){
       capacity = x;
       ptr = new T[x];
       size = 0;
   }
//    T pop(){
//        return ptr[capacity--];
//    }
   void push(T a){
       if(capacity == size){
           T * newdata = new T[2*capacity];
           for(int i = 0;i<capacity;i++){
               ptr[i] = newdata[i];
           }
    //   }
       capacity *= 2;
       delete [] ptr;
       ptr = newdata;
   }
   ptr[size] = a;
   size++;
   }
   T pop(){
       if(size == 0)
       cout<<"Stack is empty"<<endl;
       size--;
       return  ptr[size];
   }

};
int main(){
    stack <int>s(2);
    s.push(1);
    s.push(2);
    s.push(3);
    cout<<"Popped output = "<<s.pop();
}