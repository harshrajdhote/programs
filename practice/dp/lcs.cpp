#include<bits/stdc++.h>
using namespace std;
int lcs(string s, string t){
    if(s.size() == 0 || t.size() == 0) 
 { return 0; } 
    if(s[0] == t[0])
    return 1 + lcs(s.substr(1),t.substr(1));
    else
    return max({lcs(s.substr(1),t),lcs(s,t.substr(1))});
}
int lcsmem(string s,string t,int **output){
     if(s.size() == 0 || t.size() == 0)
    return 0;

    int m = s.size();
    int n = t.size();
     
    if(output[m][n] != -1)
    return output[m][n];
  
    int ans;
    if(s[0] == t[0])
    ans = 1+lcsmem(s.substr(1),t.substr(1),output);
    else
    ans = max(lcsmem(s.substr(1),t,output),lcsmem(s,t.substr(1),output));
    output[m][n] = ans;
    return ans;
}
int lcsmem(string s,string t){
    int m = s.size();
    int n = t.size();
    int **out = new int*[m+1];
    for(int i = 0;i<=m;i++)
    {
        out[i] = new int[n+1];
        for(int j = 0;j<=n;j++)
        {
            out[i][j] = -1;
        }
    }
    return lcsmem(s,t,out);

}
int main(){

    cout<<lcsmem("abcs","asde");
}
// int lcs(string s, string t) 
// { // Base case
//  if(s.size() == 0 || t.size() == 0) 
//  { return 0; } // Recursive calls if(s[0] == t[0]) { return 1 + lcs(s.substr(1), t.substr(1)); } else { int a = lcs(s.substr(1), t); int b = lcs(s, t.substr(1)); int c = lcs(s.substr(1), t.substr(1)); return max(a, max(b, c)); } } int main() { string s, t; cin >> s >> t; cout << lcs(s, t) << endl; }