// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let zeroCount = 0;
    let zeroIndex = -1;
    let allZero = false;
    let allProduct = 1;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            if(zeroCount > 0) {
                allZero = true;
                break;
            }
            
            zeroCount++;
            zeroIndex = i;
        } else {
            allProduct = allProduct * nums[i];
        }
    }
    
    if(allZero) {
        for(let i = 0; i < nums.length; i++) {
            nums[i] = 0;
        }
        
        return nums;
    }
    
    if(zeroIndex != -1) {
        for(let i = 0; i < nums.length; i++) {
            if(i == zeroIndex) {
                nums[i] = allProduct;
            } else {
                nums[i] = 0;
            }
        }
        
        return nums;
    }
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] = allProduct / nums[i];
    }
    
    return nums;
};