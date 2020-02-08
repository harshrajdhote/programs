#include<iostream>
using namespace std;
template <typename T>
class Node{
    public:
    T data;                      //if we keep data members private it doesnt work
    Node <T>*next;
    
    Node(T e){
        data = e;
        next = NULL;
    }
};
template <typename T>
class stack{
    Node <T> *head;
    int size;
    public:
    stack(){
        head = NULL;
        size = 0;
        //this->size = size;
    }
    void push(T e){
       
       
        Node <T> * newNode = new Node<T>(e);
        newNode->next = head;
        head = newNode;
        size++;
    }
    T pop(){
        if(size == 0){
        cout<<"Stack is empty";
        return 0;
        }
        size--;
        return head->data;
        head = head->next;
    }

};
int main(){
    stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);
    cout<<"Popped output = "<<s.pop();
}