class rotate {
    public static void main(String[] args) {
        int arr [] = {6,7,8,9,0,1,2,3};
        System.out.println("found at "+valsearch(arr,9)+1);
    }
    public static int valsearch(int[] nums, int target) {
        if(nums==null || nums.length==0) return -1;
        int pivot = findpivot(nums);
        int result = search(nums, 0, pivot, target);
        if(result!=-1) return result;
        result = search(nums, pivot+1, nums.length-1, target);
        return result;
    }
    
    static int  findpivot(int[] nums){
        int val=nums[0];
        int left=1;
        int right=nums.length-1;
        while(left<=right){
            int mid = left+(right-left)/2;
            if(nums[mid]>val) left=mid+1;
            else if(nums[mid]<val){
                if(mid==1 || nums[mid-1]>val) return mid-1;
                else right=mid-1;
            }
        }
        return nums.length-1;
    }
    
   static int  search(int[] nums, int left, int right, int target){
        while(left<=right){
            int mid = left + (right-left)/2;
            if(nums[mid]==target) return mid;
            else if(nums[mid]<target) left=mid+1;
            else right=mid-1;
        }
        return -1;
    }
}