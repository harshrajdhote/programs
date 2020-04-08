#include<bits/stdc++.h>
using namespace std;
//here in dp it is bottom up because we are starting from initial states 
int fibo_dp(int n) {
	int *ans = new int[n+1];

	ans[0] = 0;
	ans[1] = 1;

	for(int i = 2; i <= n; i++) {
		ans[i] = ans[i-1] + ans[i-2];
	}

	return ans[n];
}
int fibohelper(int n,int *ans){
    if(n<=1)
    return n;
    if(ans[n] != -1)
    return ans[n];
    int a = fibohelper(n-1,ans);
    int b = fibohelper(n-2,ans);
    ans[n] = a+b;
    return ans[n];
}
int fibo(int n){
   int *ans = new int[n+1];
  // memset(ans,-1,sizeof(ans));
  for(int i = 0;i<=n;i++){
      ans[i] = -1;
  }
   return fibohelper(n,ans);
}
int main(){
    int a;
    cin>>a;
     cout<<fibo(a);
}
//this example is of memoization it is top down approach as we are dividing problem in to the smaller parts