// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    
    let triplets = [];
    
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] !== nums[i-1]) {
            let left = i+1;
            let right = nums.length-1;

            while(left < right) {
                let sum = nums[i] + nums[left] + nums[right];

                if(sum === 0) {
                    triplets.push([nums[i], nums[left], nums[right]]);

                    left++;
                    
                    while(nums[left] === nums[left-1] && left < right) left++;
                } 
                else if(sum > 0) right--; 
                else if(sum < 0) left++;
            }
        }
        
    }
    
    return triplets;
};