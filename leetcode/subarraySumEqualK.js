// https://leetcode.com/problems/subarray-sum-equals-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let currsum = 0;
    let res = 0;
    let prefixSum = {0:1};
    
    for(let num of nums) {
        currsum = currsum + num;
        let diff = currsum - k;
        if(prefixSum[diff]) {
            res = res + prefixSum[diff];
            if(prefixSum[currsum]) prefixSum[currsum] = 1 + prefixSum[currsum];
            else prefixSum[currsum] = 1;
        } else {
            if(prefixSum[currsum]) prefixSum[currsum] = 1 + prefixSum[currsum];
            else prefixSum[currsum] = 1;
        }
    }
    
    return res;
    
};