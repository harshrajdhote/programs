class try_catch{
    public static void main(String[] args) {
        int a ;

        try {
            //int a = 10/0;
        } catch (Exception e) {
            System.out.println("inside catch"+a);  
        }
        System.out.println("outside catch");
    }
}