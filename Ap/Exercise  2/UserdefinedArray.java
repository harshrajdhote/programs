import java.util.*;
class Array{
    int arr[],size=0,cap=0;
    public Array(int size){
        arr = new int[size + size/2];
        //System.out.print(arr.length);
        cap = size + size/2; 
    }
    public int get(int i)
    {
      return arr[i];
    }
    public void add(int i){
        
        
        
            arr[size] = i;
        
        size++;
        if(size == cap)
        {
            int tmp[] = arr;
            arr = new int[size()+size()/2];
            for(int k = 0;k<size;k++)
            {
                arr[k] = tmp[k];
            }
            cap = size() + size()/2;
        }
    }
    public int capacity(){
      return cap;
    }
    public int size(){
      return size;
    }
    public void remove(int i){
          for(int k = i;k<size-1;k++){
              arr[k] = arr[k+1];
                                  
          }
          arr[size-1] = 0;
          size--;
    }
    public void copyto(int dest[]){
          for(int i = 0;i<size;i++){
              dest[i] = arr[i];
          }
    }
    public void swap(int i,int j){

    }
    public void display(){
        for(int i = 0;i<size;i++)
        System.out.print(arr[i]+" ");
    }
    public void add(int n,int arr[])
    {
       int k = 0;
        int tmp = size;
      for(int i = tmp-1 ; i<(tmp-1+n);i++){
          add(arr[k]);
         k++;
      }
    }
}
class UserDefinedArray{
    public static void main(String[] args) {
        Array a = new Array(2);
        a.add(1);
        a.add(2);
        a.add(3);
        int arr[] = {4,5};
        a.add(2,arr);
        a.add(6);
        a.display();
        a.remove(2);
        System.out.print("\n");
        a.display();
    }
}