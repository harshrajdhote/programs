import java.util.*;
class getRank {  
 
public static void main(String[] args)  
{  
	System.out.println("Enter the element array size , array elements and x to find rank");
	Scanner sc = new Scanner(System.in);
	int n = sc.nextInt();
    int arr[] = new int[n];  
     for(int i = 0;i<n;i++)
     arr[i] = sc.nextInt();
     int x = sc.nextInt();  
    Node root = null;  
    for (int i = 0; i < n; i++)  
        root = insert(root, arr[i]);  
  
    System.out.println("rank of " + x + " is "+getRankOfNumber(root, x));  
  
}  


static class Node {  
    int data;  
    Node left, right;  
    int leftSize;  
}  
  
static Node newNode(int data)  
{  
    Node temp = new Node();  
    temp.data = data;  
    temp.left = null; 
    temp.right = null;  
    temp.leftSize = 0;  
    return temp;  
}  

static int getRankOfNumber(Node root, int x)  
{  

    if (root.data == x)  
        return root.leftSize;  
    if (x < root.data) {  
        if (root.left == null)  
            return -1;  
        else
            return getRankOfNumber(root.left, x);  
    }    
    else {  
        if (root.right == null)  
            return -1;  
        else {  
            int rightSize = getRankOfNumber(root.right, x);  
            return root.leftSize + 1 + rightSize;  
        }  
    }  
}  
static Node insert(Node root, int data)  
{  
    if (root == null)  
        return newNode(data);  
  
    if (data <= root.data) {  
        root.left = insert(root.left, data);  
        root.leftSize++;  
    }  
    else
        root.right = insert(root.right, data);  
  
    return root;  
}  
  

}  