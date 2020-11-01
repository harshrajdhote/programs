import java.math.*;
import java.net.*;
import java.util.*;
class Client
{
	public static void main(String[] args) 
	{
		Scanner sc=new Scanner(System.in);
		
		System.out.print("\nEnter prime no (P) = ");
		BigInteger p =  sc.nextBigInteger();
		
		int count = 0;
		
		for(int i=2;i<p.intValue();i++)
		{
			if(p.intValue()%i==0)
			{
				count++;
				break;
			}
		}
		if(count>0)
		{
			System.out.println("Entered no is not prime");
			System.exit(0);
		}
		
		
		System.out.print("\nEnter primitive root of "+p+" (g) = ");
		BigInteger g = sc.nextBigInteger();
		System.out.print("\nEnter secret no for Alice less than "+p+" (a) = ");
		BigInteger a =  sc.nextBigInteger();
		BigInteger A =g.modPow(a,p);
		System.out.println("\nAlice's secret key (A) = "+A);
	 try{
		DatagramSocket socket = new DatagramSocket(8888,InetAddress.getLocalHost());
		socket.connect(InetAddress.getLocalHost(),9999);
	
			byte[] b=new byte[3];
			b[0]=p.byteValueExact();
			b[1]=g.byteValueExact();
			b[2]=A.byteValueExact();
		
		
		DatagramPacket packet = new DatagramPacket(b,3);
		socket.send(packet);
		System.out.println("sent");
		socket.receive(packet);
				b=packet.getData();
		System.out.print("From Bob, shared key = "+b[2]+" ");
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
}