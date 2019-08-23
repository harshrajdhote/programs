import java.util.*;
class sorted_sum_k{
    public static void main(String[] args) {
        int a[] = {1,2,3,4,5,6};
        int b[] = {3,4,56,2};
        int k = sc.nextInt();
        Map<Integer> map = new HashMap<Integer> ();  
    for (int i = 0; i < n1; ++i)  
    { 
        map.put(a[i]); 
    }  
    Scanner sc = new Scanner(System.in);
    int flag = 1;
  for (int i = 0; i < n2; ++i) {  
        int temp = k - b[i];  
         
        if (m.containsKey(temp)) {
            flag = -1;
            break;

        }  
    }
    if(flag = -1)
    System.out.println("Exist");
    else
    System.out.println("Not Exist");  
    }
}