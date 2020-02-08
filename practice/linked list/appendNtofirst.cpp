//Append the last n elements of a linked list to the front
#include <iostream>
using namespace std;

class node{
public:
    int data;
    node * next;
    node(int data){
        this->data=data;
        this->next=NULL;
    }
};


node* takeinput(){
    int data;
    cin>>data;
    node* head=NULL,*tail=NULL;
    while(data!=-1){
        node *newnode=new node(data);
        if(head==NULL)                  {
            head=newnode;
            tail=newnode;
        }
        else{
            tail->next=newnode;
            tail=newnode;
        }
        cin>>data;
    }
    return head;
}
void print(node *head)
{
    node*temp=head;
    while(temp!=NULL)
    {
        cout<<temp->data<<" ";
        temp=temp->next;
    }
    cout<<endl;
}
int getLength(node *);
node* append_LinkedList(node* head,int n)
{
    if(head == NULL)
        return head;
    int len = getLength(head);
    int ctr = len - n-1;
    int i = 0;
    node * first = head;
    while(i != ctr)
    {
        i++;
        head = head->next;
    }
    
    node * tmp = head->next;
    head->next = NULL;
    node * t = tmp;
    while(t->next != NULL)
        t = t -> next ;
    t->next = first;
    return tmp;
}
int getLength(node * head){
    if(head == NULL)
        return 0;
    return 1  + getLength(head->next);
}
int main()
{
    node* head=takeinput();
    int n;
    cin>>n;
    head=append_LinkedList(head,n);
    print(head);
    return 0;
}
