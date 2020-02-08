#include<iostream>
using namespace std;
template <class T>
class Queue{
    T * data;
    int nxt_ind;
    int frt_ind;
    int size,capacity;
    public:
    Queue(int s){
        data = new T[s];
        nxt_ind = 0;
        frt_ind = -1;
        size = 0;
        capacity = 0;
    }
    int getSize()
    { return size; }

    bool isEmpty(){
        return (size == 0);
    
    }
    void enqueue(T e){
        if(size == capacity){
        cout<<"queue is full"<<endl;
        return;
        }
        data[nxt_ind] = e;
        nxt_ind = (nxt_ind + 1) % capacity;
        if(frt_ind == -1){
            frt_ind = 0;
        }
        size++;
    }
    T front()
    {
        if(isEmpty()){
        cout<< "Queue is empty"<<endl;
        return 0;
        }
        return data[frt_ind];

    }
     T dequeue(){
         if(isEmpty()){
             cout<<"queue is empty"<<endl;
         }
         int ans = data[frt_ind]; 
         frt_ind = (frt_ind+1) % capacity;
         size--;
         return ans;
     
      if(size == 0)
      {
          frt_ind = -1;
          nxt_ind = 0;

      }
     }

};
int main(){
    Queue <int>q(2);
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue();
    q.dequeue();
    q.enqueue(2);
    q.enqueue(3);
    
}