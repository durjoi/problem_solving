// https://leetcode.com/problems/sort-colors/

// Quick Sort / partitioning array
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    const swap = (i, j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp   
    }
    
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    
    while(i <= right) {
        if(nums[i] == 0) {
            swap(left, i);
            left = left + 1;
        } else if(nums[i] == 2) {
            swap(right, i);
            right = right - 1;
            i = i - 1;
        }
        
        i++;
    }
    
    return nums;
};