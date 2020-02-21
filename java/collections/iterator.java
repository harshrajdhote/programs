import java.util.*;
class iterator{
    public static void main(String[] args) {
       LinkedList<Integer> a = new LinkedList<Integer>();
    a.add(12);
    a.add(23);
    a.add(34);
    a.add(345);
    Iterator it = a.iterator();
    while(it.hasNext())
    {

        System.out.println( it.next() instanceof Integer);//true even if generics not used
        a.add(23);
    }
   
    }
}