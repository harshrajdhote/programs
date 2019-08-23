import java.util.*;
class contains_rep{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		boolean flag=false;
		int arr[] = {1,2,3,2,1};
		Arrays.sort(arr);
		int f = arr[0];
		for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) flag = true;
    }
    flag = false;
    System.out.println(""+flag);
	}
}