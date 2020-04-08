class Solution {
public:
    int minPathSum(vector<vector<int>>& input) {
        int m = input.size();
        int n = input[0].size();
        vector<int> t(n); 
        vector<vector<int>> ans(m,t);
        
        ans[m-1][n-1] = input[m-1][n-1];

	// Last row
	for(int j = n - 2; j >= 0; j--) {
		ans[m-1][j] = input[m-1][j] + ans[m-1][j+1];
	}

	// Last col
	for(int i = m-2; i >= 0; i--) {
		ans[i][n-1] = input[i][n-1] + ans[i+1][n-1];
	}

	for(int i = m-2; i >= 0; i--) {
		for(int j = n-2; j >= 0; j--) {
			ans[i][j] = input[i][j] + min(ans[i][j+1],  ans[i+1][j]);
		}
	}
	return ans[0][0];
    }
};