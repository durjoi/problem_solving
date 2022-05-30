//https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // let x = 0;
    // for(let num of nums) x = x ^ num;
    
    // return x;
     
     nums.reduce((acc, cur) => (acc ^= cur), 0);
    
};