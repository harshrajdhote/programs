#include<bits/stdc++.h>
using namespace std;
class Graph{
    int v;
    list<int> *adj;
    public:
    Graph(int v){
        this->v = v;
        adj = new list<int>[v];
    }
    bool isCyclicUtil(int v, bool visited[], bool *rs);
    void isCyclic();  
    void DFS(int v){
     int s = this->v;
     int * cycle = new int[s];
     bool * visited = new bool[s];
      for(int i = 0;i<this->v;i++){
          visited[i] = false;
      }
      DFSUtil(v,visited,cycle);
      for(int i = 0;i<this->v;i++){
          if(visited[i] == false)
          DFSUtil(i,visited,cycle);
      }


    }
    void addEdge(int v,int w)
    {
        adj[v].push_back(w);
    }
    void DFSUtil(int v,bool visited[], int cycle[]){
        visited[v] = true;
        cout<<v<<" ";
        list<int>::iterator it;
        for(it = adj[v].begin();it != adj[v].end();it++){
            if(!visited[*it])
            DFSUtil(*it,visited,cycle);
        }
    }
};
void Graph::isCyclic() 
{ 
    // Mark all the vertices as not visited and not part of recursion 
    // stack 
    bool *visited = new bool[v]; 
    bool *recStack = new bool[v]; 
    for(int i = 0; i < v; i++) 
    { 
        visited[i] = false; 
        recStack[i] = false; 
    } 
  
    // Call the recursive helper function to detect cycle in different 
    // DFS trees 
    for(int i = 0; i < v; i++) 
        if (isCyclicUtil(i, visited, recStack)) 
           {
               cout<<"\nCycle found\n";
               for(int i = 0; i < v; i++) 
                { 
                    if(recStack[i])
                    cout<<i;
                } 
           }
       
  

} 
bool Graph::isCyclicUtil(int v, bool visited[], bool *recStack) 
{ 
    if(visited[v] == false) 
    { 
        // Mark the current node as visited and part of recursion stack 
        visited[v] = true; 
        recStack[v] = true; 
  
        // Recur for all the vertices adjacent to this vertex 
        list<int>::iterator i; 
        for(i = adj[v].begin(); i != adj[v].end(); ++i) 
        { 
            if ( !visited[*i] && isCyclicUtil(*i, visited, recStack) ) 
                return true; 
            else if (recStack[*i]) 
                return true; 
        } 
  
    } 
    recStack[v] = false;  // remove the vertex from recursion stack 
    return false; 
} 
int main(){
     Graph g(5); 
    g.addEdge(0, 2); 
    g.addEdge(2, 1); 
    g.addEdge(1, 0); 
    g.addEdge(0, 3); 
    g.addEdge(3, 4); 
   // g.addEdge(4, 3);
    g.addEdge(4,0);
    //g.addEdge(); 
  
    // cout << "Following is Depth First Traversal"
    //         " (starting from vertex 2) \n"; 
    // g.DFS(2); 
    g.isCyclic();
}