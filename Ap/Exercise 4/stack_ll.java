import java.util.*;
class stack{
    //Integer i;
    LinkedList<Integer> ll ; 
    stack()
    {
     ll = new LinkedList<Integer>();
    }
    stack(Integer n){
     ll = new LinkedList<Integer>();
    }
    public Integer top()
    {
        return ll.get(ll.size()-1);
    }
    public void push(Integer n){
        ll.add(n);
    }
    public Integer pop(){
        return (Integer)ll.getLast();
    }
    public void print(){
        for(int i = ll.size()-1;i>=0;i--){
            System.out.println(ll.get(i));
        }
    }

}
class stack_ll
{
    public static void main(String[] args) {
        stack s = new stack(5);
        s.push(new Integer(1));
        s.push(new Integer(2));
        s.push(new Integer(3));
        s.push(new Integer(4));
        s.print();
        s.pop();
        s.print();
    }
}