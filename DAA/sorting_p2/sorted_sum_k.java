import java.util.*;
class sorted_sum_k{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m[] = {1,2,3,4,5,6};
        int b[] = {3,4,56,2};
        int k = sc.nextInt();
    Arrays.sort(b); 
    //Scanner sc = new Scanner(System.in);
    int flag = 1;
  for (int i = 0; i < b.length; ++i) {  
        int temp = k - b[i];  
         
        if (binarySearch(m,0,m.length-1,temp)) {
            flag = -1;
            break;

        }  
    }
    if(flag == -1)
    System.out.println("Exist");
    else
    System.out.println("Not Exist");  
    }
    static boolean binarySearch(int arr[], int l, int r, int x) 
{ 
    if (r >= l) { 
        int mid = l + (r - l) / 2; 
        if (arr[mid] == x) 
            return true; 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid - 1, x); 
        return binarySearch(arr, mid + 1, r, x); 
    } 
    return false; 
} 
}