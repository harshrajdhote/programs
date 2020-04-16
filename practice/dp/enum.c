#include<stdio.h>
void main(){
    enum t {a};
    enum month {jan,feb=2,mar=2,jun} ;
    enum month m;
    m = a;
     printf("%d",m);
}