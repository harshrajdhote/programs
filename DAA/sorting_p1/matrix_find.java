import java.util.*;
class matrix_find{
	public static void main(String[] args) {
		int matrix[][]={
			{1,2,3,4},
			{20,21,22,23},
			{30,32,33,34},
			{40,42,43,45}
		};
		int k = 32;
		int n = matrix.length;
		int i = 0;
		int j = matrix[0].length-1;
		while(j>=0 && i<n){
			if(matrix[i][j] == k)
			{
				System.out.println("found at "+i+1+","+j+1+" location");
				break;
			}
			else if(matrix[i][j] > k){
				j--;
			}
			else
				i++;
		}
	}
}