import javax.swing.*;
import java.awt.event.*;
class Demo implements ActionListener,ItemListener{
    JFrame f;
    JButton btn;
    JCheckBox cb1,cb2;
    Demo(){
        f = new JFrame();
        
         btn = new JButton("Click me");
         cb1 = new JCheckBox("Shridhar");
         cb2 = new JCheckBox("Chambhya");
         cb1.setBounds(130,200,100,40);
         cb2.setBounds(130,300,100,40);
         f.add(cb1);
         f.add(cb2);
       btn.setBounds(130,100,100, 40); 
        f.add(btn);
        btn.addActionListener(this);
        f.setSize(400,500);
        f.setLayout(null);
        f.setVisible(true);

    }
    public void itemStateChanged(ItemEvent ie){
        JCheckBox cb = (JCheckBox)ie.getItem();
       JOptionPane.showMessageDialog(f, "My Goodness, this is so concise");
    }
    public void actionPerformed(ActionEvent ae){
        //if(ae.getSource() == btn){
            JOptionPane.showMessageDialog(f, "My Goodness, this is so concise");
        //}
    }
    public static void main(String[] args) {
        Demo d = new Demo();

    }
}
// import javax.swing.*;  
//  class Simple {  
// JFrame f;  
// Simple(){  
// f=new JFrame();//creating instance of JFrame  
          
// JButton b=new JButton("click");//creating instance of JButton  
// b.setBounds(130,100,100, 40);  
          
// f.add(b);//adding button in JFrame  
          
// f.setSize(400,500);//400 width and 500 height  
// f.setLayout(null);//using no layout managers  
// f.setVisible(true);//making the frame visible  
// }  
  
// public static void main(String[] args) {  
// new Simple();  
// }  
// }  