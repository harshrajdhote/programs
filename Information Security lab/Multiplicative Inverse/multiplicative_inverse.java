// import java.math.BigInteger;
// import java.util.*;
// import java.time.*;
// public class multiplicative_inverse{

//     final static BigInteger ZERO = new BigInteger("0");
//     final static BigInteger ONE = new BigInteger("1");
//     
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter N(mod) :");

//         BigInteger n = sc.nextBigInteger();
//         System.out.println("Enter (Number) :");

//         BigInteger b = sc.nextBigInteger();
//         Instant start;
//         Instant end;
//         Duration timeElapsed;
//         start = Instant.now();

//         BigInteger bInv = modInv(b, n);

//         end = Instant.now();
//         timeElapsed = Duration.between(start, end);
//         System.out.println("Time taken: "+ timeElapsed.toMillis() +" milliseconds");

//         
//         if (bInv != null) {
//         
//             System.out.println("The inverse is "+bInv);
//         
//             System.out.println("Java gets "+b.modInverse(n));
//         }
//         else
//             System.out.println("no inverse");
//     }
//     
//     
//     
//     // Returns the modular inverse of value mod n.
//     public static BigInteger modInv(BigInteger value, BigInteger n) {
//         
//         
//         // Set up all initial values.
//         BigInteger b0 = value;
//         BigInteger n0 = n;
//         BigInteger t0 = ZERO;
//         BigInteger t = ONE;
//         BigInteger q = n.divide(b0);
//         BigInteger r = n0.subtract(q.multiply(b0));
//         
//         // Loop while the remainder in the successive divisions is positive.
//         while (r.compareTo(ZERO) > 0) {
//             
//             // Simulates the subtraction step in the Extended Euclidean Alg.
//             BigInteger temp = t0.subtract(q.multiply(t));
//             
//             // Adjust temp if it's negative.
//             if (temp.compareTo(ZERO) > 0)
//               temp = temp.mod(n);
//             if (temp.compareTo(ZERO) < 0)
//               temp = n.subtract(temp.negate().mod(n));
//             
//             // Update each variable as necessary.
//             t0 = t;
//             t = temp;
//             n0 = b0;
//             b0 = r;
//             q = n0.divide(b0);
//             r = n0.subtract(q.multiply(b0));
//         }
//         
//         // Print out the GCD of value and n.
//         System.out.println("GCD is "+b0);
//         
//         // No inverse!
//         if (!b0.equals(ONE))
//             return null;
//             
//         // Here's the inverse!  
//         else
//             return t.mod(n);
//     }
//     
// }
import java.math.BigInteger;
import java.util.*;
import java.time.*;
public class multiplicative_inverse {

	final static BigInteger ZERO = new BigInteger("0");
	final static BigInteger ONE = new BigInteger("1");
	
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter N (mod) : ");
		// Set up a test case and run it and Java's method also...		
        BigInteger n = sc.nextBigInteger();
        System.out.println("Enter Number : ");
        BigInteger b = sc.nextBigInteger();
        Instant start;
        Instant end;
        Duration timeElapsed;
        start = Instant.now();
		BigInteger bInv = modInv(b, n);
        end = Instant.now();
        timeElapsed = Duration.between(start, end);
        System.out.println("Time taken: "+timeElapsed.toMillis()+" milliseconds");
		if (bInv != null) {
		
			System.out.println("The inverse is "+bInv);
		
			System.out.println("Java gets "+b.modInverse(n));
		}
		else
			System.out.println("no inverse");
	}
	
	
	
	// Returns the modular inverse of value mod n.
	public static BigInteger modInv(BigInteger value, BigInteger n) {
		
		// Set up all initial values.
		BigInteger b0 = value;
		BigInteger n0 = n;
		BigInteger t0 = ZERO;
		BigInteger t = ONE;
		BigInteger q = n.divide(b0);
		BigInteger r = n0.subtract(q.multiply(b0));
		
		// Loop while the remainder in the successive divisions is positive.
		while (r.compareTo(ZERO) > 0) {
			
			// Simulates the subtraction step in the Extended Euclidean Alg.
			BigInteger temp = t0.subtract(q.multiply(t));
			
			// Adjust temp if it's negative.
			if (temp.compareTo(ZERO) > 0)
			  temp = temp.mod(n);
			if (temp.compareTo(ZERO) < 0)
			  temp = n.subtract(temp.negate().mod(n));
			
			// Update each variable as necessary.
			t0 = t;
			t = temp;
			n0 = b0;
			b0 = r;
			q = n0.divide(b0);
			r = n0.subtract(q.multiply(b0));
		}
		
		// Print out the GCD of value and n.
		System.out.println("GCD is "+b0);
		
		// No inverse!
		if (!b0.equals(ONE))
			return null;
			
		// Here's the inverse!	
		else
		 	return t.mod(n);
	}
	
}