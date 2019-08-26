import java.util.*;
class string_search{
	public static void main(String[] args) {
		String str[] = {"","at","","","dad","","ball"};

		System.out.println("found at = "+search(str,"dad",0,str.length-1));

	}
	
	public static int search(String arr[], String str, int first,int last) 
{ 
    if (first > last) 
        return -1; 
  
    int mid = (last+first)/2; 
  
    if (arr[mid] == "") 
    { 
        int left  = mid - 1; 
        int right = mid + 1; 
        while (true) 
        { 
            if (left < first && right > last) 
                return -1; 
            if (right<=last && !(arr[right] == "")) 
            { 
                mid = right; 
                break; 
            } 
            if (left>=first && !(arr[left] == "")) 
            { 
                mid = left; 
                break; 
            } 
            right++; 
            left--; 
        } 
    }
    if (str.compareTo(arr[mid]) == 0) 
        return mid; 
    if (str.compareTo(arr[mid]) < 0) 
        return search(arr, str, mid+1, last); 
    return search(arr, str, first, mid-1); 
}

}