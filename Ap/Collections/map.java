import java.util.*;
class compareTree implements Comparator<Integer>{
    public int compare(Integer a1,Integer a2)
    {
        if(a1 > a2)
        return 1;
        else if(a1<a2)
        return -1;
        else 
        return 0;
    }
}
class map{
    public static void main(String[] args) {
        Map <Integer,String> m = new TreeMap<Integer,String>(new compareTree());
        m.put(2,"asda");
        m.put(1,"sdfsd");
        for(Map.Entry<Integer,String> entry : m.entrySet()){
            System.out.println(""+entry.getKey()+""+entry.getValue());
        }
        
    }
}