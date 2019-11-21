import java.util.*;
import java.io.*;
class sort implements Comparator<String>{
    public int compare(String o1,String o2){
        return o1.compareTo(o2);
    }

}
class set{
    public static void main(String[] args) {
        Set <String>s = new <String>LinkedHashSet();
        s.add("seh");
        s.add("ase");
        s.add("ter");
        System.out.println(s);


    }
}