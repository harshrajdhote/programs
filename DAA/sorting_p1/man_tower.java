import java.util.*;

public class man_tower {

    public void getTowerHeight(man[] arr) {

        int weightArray[] = new int[arr.length];
        for (int i=0;i<arr.length;i++) {
            weightArray[i] = 1;
        }
        int maxLength = 0;

        for (int i=1;i<arr.length;i++) {
            for (int j=0;j<i;j++) {
                if( weightArray[j]+1>weightArray[i] && arr[i].weight>arr[j].weight) {
                    weightArray[i] = weightArray[j] + 1;
                    if(maxLength<weightArray[i]) {
                        maxLength = weightArray[i];
                    }
                }
            }
        }
        for (int i = 0; i < arr.length; i++) {
            if (weightArray[i] == maxLength) {
                System.out.println("length of tower = " + maxLength);
            }
        }

    }

    public static void main(String[] args) {
        man_tower ct = new man_tower();
        man p1 = new man(65,100);
        man p2 = new man(70,150);
        man p3 = new man(56, 90);
        man p4 = new man(75, 190);
        man p5 = new man(60, 95);
        man p6 = new man(68, 110);

        man[] array = new man[]{p1,p2,p3,p4,p5,p6};

        Arrays.sort(array);

        ct.getTowerHeight(array);

    }

}
class man implements Comparable<man> 
{
    int height;
    int weight;

    public man(int height, int weight) 
    {
        this.height = height;
        this.weight = weight;
    }
    

  
    public int compareTo(man p) {
        if(this.height>p.height) {
            return 1;
        } else if(this.height < p.height) {
            return -1;
        } else {
            return 0;
        }
    }
}
