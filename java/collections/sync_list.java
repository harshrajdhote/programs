import java.util.*;
class sync_list{
    public static void main(String[] args) {
        List l1 = Collections.synchronizedList(new ArrayList(2));
        LinkedList ll = new LinkedList();
        ll.add(23);
        ll.add(24);
        ll.set(3,56);
        //System.out.println(ll);
    }
}