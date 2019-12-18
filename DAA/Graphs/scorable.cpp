#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int max_array[12] = {0};
        int n;
        cin>>n;
        while(n--)
        {
            int ps_no,score;
            cin>>ps_no>>score;
            if(max_array[ps_no] < score)
            max_array[ps_no] = score;
        }
        int sum=0;
        //cout<<accumulate(max_array,max_array + 12,sum);
        for(int i = 1;i<12;i++){
        sum += max_array[i];
        cout<<max_array[i]<<endl;
        }
        cout<<sum;
    }
}