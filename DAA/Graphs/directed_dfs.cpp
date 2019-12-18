#include<bits/stdc++.h>
using namespace std;
//stack <int> ss ;
class Graph{
    int v;
    list<int> *adj;
    public :
    void addEdge(int v, int w);
    void DFSUtil(int v,bool visited[]);
    void DFS(int v);
    Graph(int v){
    this->v = v;
    adj = new list<int>[v];

}
};
void Graph::addEdge(int v,int w){
    adj[v].push_back(w);
}
void Graph::DFS(int v){
    bool * visited = new bool[v];
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
    cout<<v<<" ";
    list<int>::iterator i;
    for(i=adj[v].begin();i != adj[v].end();i++)
    if(!visited[*i])
    DFSUtil(*i,visited);
}
int main(){
   Graph g(5); 
    g.addEdge(0, 1); 
    g.addEdge(0, 2); 
    g.addEdge(1, 2); 
    g.addEdge(2, 0); 
    g.addEdge(2, 3); 
    g.addEdge(3, 3);
    g.addEdge(4,0);
    //g.addEdge(); 
  
    cout << "Following is Depth First Traversal"
            " (starting from vertex 2) \n"; 
    g.DFS(2); 
}