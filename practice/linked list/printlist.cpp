#include<bits/stdc++.h>
//#include"Node.cpp"
using namespace std;
class Node{
    public : 
    int data;
    Node * next;
    Node() {
        data = 0;
        next = nullptr;
    }
    Node(int x){
        data = x;
        next = nullptr;
    }
    void printList(Node * head){
        Node * tmp = head;
        while (tmp != nullptr)
        {
            cout<<""<<tmp->data<<" ---> "<<tmp->next<<endl;
            tmp = tmp->next;
        }
        
    }
    
    Node * addAtBegin(Node *head,int data){
        Node * tmp;
       
        if(head == nullptr){
             tmp = new Node(data);
            head = tmp;
           
            tmp->next = nullptr;
            cout<<head->data<<endl;
            return head;
        }
        
         tmp = new Node(data);
        tmp->next = head;
        
        head = tmp;
        cout<<"after 1 node";
        cout<<head->data<<endl;
        return head;

    } 
};

int main(){
    Node *n = new Node;
   // Node *head ;
     Node *head1 ;
    Node  *head2 = n->addAtBegin(nullptr,16);
     n->addAtBegin(head2,2);
    //n->addAtBegin(head,3);
    n->printList(head2);


}