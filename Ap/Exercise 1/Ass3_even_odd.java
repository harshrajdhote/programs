/*Given two arrays, implement a Java program to rearrange their elements such that one array contains odd numbers
 and other contains even numbers without using Collection Framework. 
1. Both arrays have same number of elements initially. 2. Each array has different number of elements initially. 
*/

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
class Ass3_even_odd{
  public static void main(String[] args) {
        Array list1_o = new Array(5);
        Array list2_e = new Array(5);
        list1_o.add(1);
        list1_o.add(3);
        list1_o.add(2);
        list1_o.add(4);
        list1_o.add(5);
        list2_e.add(6);
        list2_e.add(7);
        list2_e.add(8);
        list2_e.add(9);
        list2_e.add(10);
        for(int i = 0;i<list1_o.size();i++){
          if(list1_o.get(i)%2 == 0){
            list2_e.add(list1_o.get(i));
            list1_o.remove(i);
          }
          
          if(list2_e.get(i)%2 != 0){
            list1_o.add(list1_o.get(i));
            list2_e.remove(i);
          }
          
        }
        System.out.println("Odd List");
        list1_o.display();
        System.out.println("\nEven List");
        list2_e.display();


  }
}
