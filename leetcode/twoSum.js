// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        for(let j = i+1; j < len; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([3, 2, 4], 6));