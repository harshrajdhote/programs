import java.util.*;
class maxmin{
    int max,min;
    public void results(){
        System.out.println("Max is "+max+" Min is "+min);
    }
}

class ass1
{
    public static void main(String[] args) {
     maxmin pair = new maxmin();
     int arr[] = {1,-1,-4};
     pair = getMaxmin(arr,0,arr.length-1);   
     pair.results();
    }
   static maxmin getMaxmin(int arr[],int l, int r){
        maxmin pair,mml,mmr;
        pair = new maxmin();
        mml = new maxmin();
        mmr =  new maxmin();
        int mid;
                if(l==r)
                {
                     pair.max = arr[l];
                     pair.min = arr[l];
                     System.out.println("inside one");
                     return pair;    
                }
                if(r == l+1){
                    pair.min = (arr[r] < arr[l])?arr[r]:arr[l];
                    pair.max = (arr[r] > arr[l])?arr[r]:arr[l];
                    System.out.println("inside two");
                    pair.results();
                    return pair;
                }
                mid = (l+r)/2;
                mml = getMaxmin(arr, l, mid);
                mmr = getMaxmin(arr, mid+1, r);
                //setting min
                mml.results();
                mmr.results();
                if(mml.min < mmr.min){
                    pair.min = mml.min;
                }else
                {
                    pair.min = mmr.min;
                }
    
                if(mml.max < mmr.max){
                    pair.max = mmr.max;
                }else
                {
                    pair.max = mml.max;
                }
                System.out.println("inside three");
                pair.results();
                return pair;
    
    
    }
    
}