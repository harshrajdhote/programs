#include<stdlib.h>
#include<stdio.h>
int main(){
int sum ;
int a,b,c=0;
/*
sum = (a = 4,b= 5);
printf("%d",sum);
float f = 3.5f;
if(sum != 5)
printf("a");
else if(sum == 5)
printf("b");
else if(sum == 5)
printf("c");
switch(sum)
{
 case 5 : printf("%ld"sizeof(4.56));
            break;
}
int y = c++ + c++;
printf("%d\n",y);
printf("%d %d %d \n", c++,c++,c++);
c = 0;
printf("%d %d %d \n", ++c,c,++c); */
a  = 3;
a = a-- * a++; //!a;
printf("%d",a); 
int ar[][2] ={{23},{23}};
int *ptr = (int*)malloc(sizeof(int)*4); //there is no way to calculate the size of the dynamic array
printf("%ld",sizeof(ar));
}
