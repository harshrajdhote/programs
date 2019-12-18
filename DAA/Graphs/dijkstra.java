import java.util.*;
class dijkstra{
    static void dijkstra(int [][] adjMat){
        int v = adjMat.length;
        boolean visited[] = new boolean[v];
        int distance[] = new int[v];
        distance[0] = 0;
        for(int i =1 ;i<v;i++){
            distance[i] = Integer.MAX_VALUE;
        }
        for(int i = 0;i<v-1;i++){
            int minVertex = findMinVertex(distance,visited);
            visited[minVertex] = true;
            for(int j = 0;j<v;j++){
                if(adjMat[minVertex][j] != 0 && visited[j] && distance[minVertex] != Integer.MAX_VALUE){
                    int newdistance = distance[minVertex] + adjMat[minVertex][j];
                    if(newdistance  < distance[j])
                    {
                        distance[j] = newdistance;

                    }
                }
            }
    
        }
    for(int i=0;i<v;i++){
        System.out.println(i + "" + distance[i]);
    }
    
    }
    
    static int findMinVertex(int [] distance,boolean visited[])
    {
        int minVertex = -1;
        for(int i= 0;i<distance.length;i++){
            if(!visited[i] && (minVertex == -1 || distance[i] < distance[minVertex]   )){
                minVertex = i;
            }
        }
        return minVertex;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int v = sc.nextInt();
        int e = sc.nextInt();
        int adjMat[][] = new int[v][v];
        for(int i = 0;i<e;i++){
            int v1 = sc.nextInt();
            int v2 = sc.nextInt();
            int wt  = sc.nextInt();
            adjMat[v1][v2] = wt;
            adjMat[v1][v2] = wt;

        }
        dijkstra(adjMat);
        
    }
}