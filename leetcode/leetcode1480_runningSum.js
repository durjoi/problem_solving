// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let sum = 0;
    let runningSum = [];
    
    for(num of nums) {
        sum = sum+num;
        runningSum.push(sum);
    }
    
    return runningSum;
};