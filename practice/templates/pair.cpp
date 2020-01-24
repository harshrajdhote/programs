
#include<iostream>
using namespace std;
int main(){
    pair <string,int> student[4];
    student[0] = make_pair("ani",1);
    student[1] = make_pair("modi",2);
    student[2] = make_pair("vaishu",3);
    student[3] = make_pair("somu",4);
    cout<<"hello";
    cout<<student[0].first;
    
    for(int i =0;i<4;i++)
       cout<<student[i].first<<" --> "<<student[i].second;
       //student.size();
    // for(int i = 0;i<5;i++)
    // cout<<arr[i];
    

}