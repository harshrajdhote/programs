import java.util.*;
import java.math.*;

public class RSA {

    private static final Scanner sc = new Scanner(System.in);

    private int p, q, n, phi, d = 0, e, i;

    public RSA() {
        System.out.println("Enter 1st prime number p");
        p = sc.nextInt();
        System.out.println("Enter 2nd prime number q");
        q = sc.nextInt();

        n = p * q;
        phi = (p - 1) * (q - 1);
        System.out.println("the value of phi = " + phi);

        for (e = 2; e < phi; e++) {
            if (gcd(e, phi) == 1) // e is for public key exponent
            {
                break;
            }
        }
        //e should be in the range 1-z
        System.out.println("the value of e = " + e);

        // calculate d
        for (i = 0; i <= 9; i++) {
            int x = 1 + (i * phi);
            if (x % e == 0) //d is for private key exponent
            {
                d = x / e;
                break;
            }
        }
        System.out.println("the value of d = " + d);
    }

    private static int gcd(int e, int phi) {
        if (e == 0) {
            return phi;
        } else {
            return gcd(phi % e, e);
        }
    }

    double encrypt(int msg) {
        //Encrypting  C = msg ^e mod n
        return (Math.pow(msg, e)) % n;
    }

    double[] encrypt(String msg) {
        int[] charactersAsNumbers = new int[msg.length()];
        for(int i = 0; i < msg.length(); i++) {
            charactersAsNumbers[i] = msg.codePointAt(i);
        }
      

        double[] encryptedMsg = new double[msg.length()];
        for(int i = 0; i < charactersAsNumbers.length; i++) {
            encryptedMsg[i] = encrypt(charactersAsNumbers[i]);
        }
        return encryptedMsg;
    }

    BigInteger decrypt(double encrypted) {
        //converting int value of n to BigInteger
        BigInteger N = BigInteger.valueOf(n);
        //converting float value of c to BigInteger
        BigInteger C = BigDecimal.valueOf(encrypted).toBigInteger();

        //Decrypt , P = Cˆd mod N , msgback = P
        return (C.pow(d)).mod(N);
    }

    String decrypt(double[] encrypted) {
        StringBuilder builder = new StringBuilder();
        for(double encryptedCharacter: encrypted) {
            BigInteger decryptedCharacter = decrypt(encryptedCharacter);
            builder.append(Character.toChars(decryptedCharacter.intValue()));
        }
        return builder.toString();
    }

    public static void main(String args[]) {
        System.out.println("Enter the text to be encrypted and decrypted");
        String msg = sc.nextLine();
        RSA rsa = new RSA();

        double[] c = rsa.encrypt(msg);
       
        String msgBack = rsa.decrypt(c);
        System.out.println("Decrypted message is : " + msgBack);
    }
}