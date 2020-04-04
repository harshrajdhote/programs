#include<bits/stdc++.h>
using namespace std;
class PriorityQueue{
    vector<int> pq;
    public:
    PriorityQueue(){

    }
    bool isEmpty(){
        return pq.size() == 0;
    }
    int getSize(){
        return pq.size();
    }
    int getMin(){
        if(!isEmpty())
        return pq[0];
    }
    void insert(int n){
        pq.push_back(n);
        buildheap();
    }
    void buildheap(){
        if(getSize() == 1)
        return;
        int parent = (getSize()-2)/2;
        int curr = getSize()-1;
        while (curr > 0 && pq[parent] > pq[curr])
        {
            int t = pq[curr];
            pq[curr] = pq[parent];
            pq[parent] = t;
            curr = parent;
            parent = (curr - 1)/2;
        }
        
    }
    void display(){
        cout<<"Display : ";
        for(auto a : pq){
            cout<<a<<" ";
        }
    }
    void remove(){
        if(isEmpty())
        return;
        pq[0] = pq[getSize()-1];
        pq.resize(getSize()-1);
        heapdown();
    }
    void heapdown(){
        int parent = 0;
        int child;
        if(pq[1] > pq[2])
        child = 2;
        else
            child =1 ;
        
        while(child < getSize() && pq[parent] > pq[child] )
        {
            int t = pq[parent];
            pq[parent] = pq[child];
            pq[child] = t;
            //t = parent;
            parent = child;
            child = (2*parent + 1 );
        }
    }
};
int main(){
    PriorityQueue p;
    p.insert(1);
    p.insert(2);
    p.insert(-1);
    p.insert(23);
    p.insert(10);
    cout<<p.getMin()<<endl;
    p.display();
    p.remove();
    p.display();
    p.remove();
    cout<<endl<<p.getMin();
}