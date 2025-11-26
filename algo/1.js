/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let max = 0;
    while(right > left){
        let current = 0;
        for(let i = left;i <= right;i++){
            current = current + nums[i];
        }
        if(nums[left]>nums[right]){
            right--;
        }else{
            left++;
        }
        max = Math.max(max,current);
    }
    return max;
};
