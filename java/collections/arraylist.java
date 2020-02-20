import java.util.*;
class arraylist{
public static void main(String[] args) {
    LinkedList<Integer> a = new LinkedList<Integer>();
    a.add(12);
    a.add(23);
    a.add(34);
    a.add(345);
    System.out.println("Size = "+a.size());
    a.remove(2);
    a.remove(1);
    System.out.println("Size = "+a.size());
    //a.add(3,345); exception IOB


}
}