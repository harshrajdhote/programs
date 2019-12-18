#include<bits/stdc++.h>
#define V 4
using namespace std;
bool isBipartite(int G[][V],int src){
    int colorArr[V];
    for(int i = 0;i<V;++i)
    colorArr[i] = -1;
    colorArr[src] = 1;
    queue<int> q;
    q.push(src);
    while(!q.empty()){
        int u = q.front();
        q.pop();
        if(G[u][u] == 1)
        return false;
        for(int i = 0;i<V;i++){
            if(G[u][i] && colorArr[i] == -1)
            {
                    colorArr[i] = 1 - colorArr[u] ;
                    q.push(i);
            }
            else if(G[u][i] && colorArr[i] == colorArr[u]){
                return false;
            }
        }
    }
    return true;

}
int main() 
{ 
    int G[][V] = {{0, 1, 0, 1}, 
        {1, 0, 1, 0}, 
        {0, 1, 0, 1}, 
        {1, 0, 1, 0} 
    }; 
  
    isBipartite(G, 0) ? cout << "Yes" : cout << "No"; 
    return 0; 
} 