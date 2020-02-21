import java.util.*;
class listiterator{
    public static void main(String[] args) {
        LinkedList<Integer> a = new LinkedList<Integer>();
    a.add(12);
    a.add(23);
    a.add(34);
    a.add(345);
    ListIterator it = a.listIterator();
    while(it.hasNext()){
        System.out.println(it.nextIndex());
        System.out.println(it.next());
        
    }
    }
}