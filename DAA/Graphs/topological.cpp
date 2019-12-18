#include<bits/stdc++.h>
using namespace std;
//stack <int> ss ;
class Graph{
    int v,time=0;
    list<int> *adj;
    list<int> ts;
    list<int> start;
    list<int> finish;
    public :
    void addEdge(int v, int w);
    void DFSUtil(int v,bool visited[]);
    void DFS(int v);
    Graph(int v){
    this->v = v;
    adj = new list<int>[v];
    
}
void printTopology(){
    list<int>::iterator it;
    cout<<"\ntopological ordering\n";
    for(it=ts.begin();it!=ts.end();it++)
    cout<<*it<<" ";
}
void printStartTopology(){
    list<int>::iterator it;
    cout<<"\nstart time\n";
    for(it=start.begin();it!=start.end();it++)
    cout<<*it<<" ";
}
void printFinishTopology(){
    list<int>::iterator it;
    cout<<"\nfinish time\n";
    for(it=finish.begin();it!=finish.end();it++)
    cout<<*it<<" ";
}
};
void Graph::addEdge(int v,int w){
    adj[v].push_back(w);
}

void Graph::DFS(int v){
    bool * visited = new bool[this->v];
    for(int i = 0; i<v;i++){
        visited[i]=false;
    }
    // while ()
    // {
        
    // }
   DFSUtil(v,visited);
    // for(int i = 0; i<v;i++){
    //     cout<<"\nvisted : ";
    //     cout<<visited[i]<<"\t";
    // }
    for(int i = 0;i<this->v;i++)
    {
    if(visited[i] == false)
    DFSUtil(i,visited);
    }
    // for(int i = 0; i<v;i++){
    //     cout<<visited[i]<<"\t";
    // }

}
void Graph::DFSUtil(int v, bool visited[]){
    visited[v] = true;
    time = time + 1;
    start.push_front(time);
    cout<<v<<" ";
    list<int>::iterator i;
    for(i=adj[v].begin();i != adj[v].end();i++)
    if(!visited[*i])
    DFSUtil(*i,visited);
    ts.push_front(v);
    time += 1;
    finish.push_front(time);
}
int main(){
   Graph g(5); 
    g.addEdge(0, 2); 
    g.addEdge(0, 1); 
    g.addEdge(1, 3); 
    g.addEdge(1, 2); 
    g.addEdge(2, 4); 
    g.addEdge(3, 2);
    g.addEdge(3,4);
    //g.addEdge(); 
  
    cout << "Following is Depth First Traversal"
            " (starting from vertex 0) \n"; 
    g.DFS(0); 
    //cout<<"topological ordering = ";
    cout<<"\n";
    g.printTopology();
    //cout<<"start times";
    g.printStartTopology();
    g.printFinishTopology();


}