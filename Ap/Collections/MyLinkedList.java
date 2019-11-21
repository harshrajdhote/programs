import java.util.*;
class MyLinkedList{
    public static void main(String[] args) {
        LinkedList<LinkedList> ll = new <LinkedList>LinkedList();
        ll.add(new LinkedList());
        // ll.add(13);
        // ll.add(14);        
        // ll.set(2,34);
        // ll.addFirst(1);
        // ll.addLast(56);
        // ll.removeLast();
        // for(int i = 0; i<ll.size();i++ ){
        //     System.out.println(""+ll.get(i));
        // }
        ll.get(0).add(0,1);
        
    }
}