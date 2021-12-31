// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    
    let tempSum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        tempSum = tempSum + nums[i];

        if(nums[i] > tempSum) {
            tempSum = nums[i];
        }
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
};

console.log(maxSubArray([-2, -1]));
