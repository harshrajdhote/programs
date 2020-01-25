#include<iostream>
using namespace std;
template  <class X,class Y>
class Pair{
    X a;
    Y b;
    public :
    X getX(){
        return a;
    }
    Y getY(){
        return b;
    }
    void setX(X a){
        this->a = a;
    }
    void setY(Y b){
        this->b = b;
    }

};
int main(){
    Pair<Pair<int,int>,int> p;
    Pair<int,int> c;
    c.setX(1);
    c.setY(3);
    p.setX(c);
    p.setY(14);
    cout<<"X = "<<p.getX().getX()<<" Y = "<<p.getY();
}