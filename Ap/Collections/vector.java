import java.util.*;
class vector{
    public static void main(String[] args) {
        Vector ll = new Vector();
        
        // ll.add(13);
        // ll.add(14);        
        // ll.set(2,34);
        // ll.addFirst(1);
        // ll.addLast(56);
        // ll.removeLast();
        for(int i = 0; i<5;i++ ){
             ll.add(i);
         }
         for(Iterator i = ll.iterator();i.hasNext();)
         {
             ll.add(23);
             System.out.println(i.next());
         }
        //ll.get(0).add(0,1);
        
    }
}