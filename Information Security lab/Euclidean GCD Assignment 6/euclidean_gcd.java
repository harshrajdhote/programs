import java.util.*;
import java.math.*;
class GCDCalculate
{
    static BigInteger gcd(BigInteger bigger, BigInteger smaller)
    {
         BigInteger remainder = bigger.mod(smaller);
         if(remainder==BigInteger.valueOf(0))
         {
            return smaller;
         }
         return gcd(smaller,remainder);     
   }

   public static void main(String []args)
   {
    
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter no1: ");
      BigInteger  no1=sc.nextBigInteger();
      System.out.println("Enter no2: ");
      BigInteger no2=sc.nextBigInteger();
      BigInteger b=BigInteger.valueOf(0),s=BigInteger.valueOf(0);
      if(no1.compareTo(no2)>0)
      {
         b=no1;
         s=no2;
      }
      else{
         b=no2;
         s=no1;
         }
         
         long startTime = System.nanoTime();
      System.out.println("The common divisor of "+no1+" and "+no2+" is "+gcd(b,s));
      long elapsedTime = System.nanoTime() - startTime;
      System.out.println("Total execution time "+ (elapsedTime/1000000) + " milliseconds ");

   }

}