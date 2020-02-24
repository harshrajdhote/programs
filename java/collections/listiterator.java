import java.util.*;
class listiterator{
    public static void main(String[] args) {
        LinkedList<Integer> a = new LinkedList<Integer>();
    a.add(12);
    a.add(23);
    a.add(34);
    a.add(345);
    ListIterator it = a.listIterator();  // if we use parent class ref to hold the child obj it access only 
    while(it.hasNext()){                 // parent specific methods   
        System.out.println(it.nextIndex());
        System.out.println(it.next());
        
    }
    // it.add(23);  illegalstateException
    // it.set(5);
    while(it.hasPrevious()){
        System.out.println(it.previous());

    }
    }
}