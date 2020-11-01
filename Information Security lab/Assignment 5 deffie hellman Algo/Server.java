import java.net.*;
import java.math.*;
import java.util.*;
class Server
{
	public static void main(String[] args) throws Exception
	{
		Scanner sc=new Scanner(System.in);

        
		DatagramSocket socket = new DatagramSocket(9999,InetAddress.getLocalHost());
		byte[] b=new byte[3];
		DatagramPacket packet = new DatagramPacket(b,3);
		socket.receive(packet);
		
		System.out.println("Connected");
		b=packet.getData();
		System.out.print("From Alice, shared key = "+b[2]+" ");
		
		Byte b1 = b[0];
		Byte b2=b[1];
		
		BigInteger p=new BigInteger(b1.toString());
		BigInteger g=new BigInteger(b2.toString());
		
		 System.out.print("\nEnter secret no for Bob less than "+p+" (b) = ");
        BigInteger bb= sc.nextBigInteger();
		
		BigInteger B=g.modPow(bb,p);

		b[2]=B.byteValueExact();
				 packet = new DatagramPacket(b,3);
socket.connect(InetAddress.getLocalHost(),8888);
		socket.send(packet);
		}
}