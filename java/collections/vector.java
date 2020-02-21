import java.util.*;
class vector{
    public static void main(String[] args) {
        Vector v = new Vector();
        v.add(23);
        v.add(34);
        Enumeration e = v.elements();
        while(e.hasMoreElements()){
            System.out.println(e.nextElement());
            v.add(23);//infinity
        }
    }
}