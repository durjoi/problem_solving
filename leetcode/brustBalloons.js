// https://leetcode.com/problems/burst-balloons/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxCoins = function(nums) {
    let coins = 0;
    while(nums.length > 0) {
        const len = nums.length;
        let currentValue = 0;
        let currentIdx;

        if(nums.indexOf(1) !== -1) { 
            if(len === 1 ) tempCoins = 1;
            else if(nums.indexOf(1) === 0) currentValue = nums[nums.indexOf(1)+1];
            else if(nums.indexOf(1) === len-1) currentValue = nums[nums.indexOf(1)-1];
            else currentValue = nums[nums.indexOf(1) - 1] * nums[nums.indexOf(1)+1];
            
            currentIdx = nums.indexOf(1);
            coins = coins + currentValue;
            nums.splice(currentIdx, 1);
            
            continue;
        }

        for(let i = 0; i < len; i++) {
            let tempCoins = 0;
            if(len === 1 ) tempCoins = nums[i];
            else if(i === 0) tempCoins = nums[i] * nums[i+1];
            else if(i === len-1) tempCoins = nums[i-1] * nums[i];
            else tempCoins = nums[i - 1] * nums[i] * nums[i+1];

            if(currentValue < tempCoins) {
                currentValue = tempCoins;
                currentIdx = i;
            }
        }

        coins = coins + currentValue;
        nums.splice(currentIdx, 1);
    }

    return coins;
};

console.log(maxCoins([1,76,64,21,97,60,5]))