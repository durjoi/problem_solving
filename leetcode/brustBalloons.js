// https://leetcode.com/problems/burst-balloons/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxCoins = function(nums) {
    let coins = 0;
    while(nums.length > 0) {
        // console.log(nums);
        const len = nums.length;
        let currentValue = 0;
        let currentIdx;

        if(nums.indexOf(1) !== -1) { 
            if(len === 1 ) tempCoins = 1;
            else if(nums.indexOf(1) === 0) currentValue = nums[nums.indexOf(1)+1];
            else if(nums.indexOf(1) === len-2) currentValue = nums[nums.indexOf(1)-1];
            else currentValue = nums[nums.indexOf(1) - 1] * nums[nums.indexOf(1)+1];
            
            currentIdx = nums.indexOf(1);
            coins = coins + currentValue;
            nums.splice(currentIdx, 1);
            
            continue;
        }

        let sortedNums =[ ...nums.slice(1, len-1)].sort((a, b) => a - b);
        console.log(sortedNums);

        if(len === 3) {
            currentValue = nums[0] * nums[1] * nums[2] 
            currentIdx = 1;
            coins = coins + currentValue;
            nums.splice(currentIdx, 1);

            continue;
        } else if (len < 3) {
            sortedNums =[ ...nums].sort((a, b) => a - b);
        }

        
        let tempCoins = 0;

        let si = 0;
        let idx = nums.indexOf(sortedNums[si]);
        
        if(len === 1 ) tempCoins = nums[0];
        else if(idx === 0) tempCoins = nums[idx] * nums[idx+1];
        else if(idx === len-1) tempCoins = nums[idx-1] * nums[idx];
        else tempCoins = nums[idx - 1] * nums[idx] * nums[idx+1];

        
        currentValue = tempCoins;
        currentIdx = idx;
        

        coins = coins + currentValue;
        nums.splice(currentIdx, 1);
        sortedNums.splice(si, 1);

        
    }

    return coins;
};

console.log(maxCoins([35,16,83,87,84,59,48,41]))