import java.util.*;
class count{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int flag=0;
		int arr[] = {1,2,3,2,1};
		Arrays.sort(arr);
		int max = arr[arr.length-1];
		for (int i = 0; i < arr.length ; i++) {
        if (arr[i] == max) flag++;
    }
    //flag = false;
    System.out.println("winner "+flag);
	}
}