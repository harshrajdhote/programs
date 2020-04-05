#include<bits/stdc++.h>
using namespace std;
int main(){
    priority_queue<int> pq;
    priority_queue<int,vector<int>,greater<int>> my_min_heap;
    my_min_heap.push(12);
    my_min_heap.push(13);
    my_min_heap.push(14);
    pq.push(1);
    pq.push(2);
    pq.push(3);
    pq.push(4);//max pqueue
    cout<<"Size = "<<pq.size();
    while(!my_min_heap.empty())
    {
        cout<<"\t"<<my_min_heap.top()<<"\t";
        my_min_heap.pop(); 
    }

}