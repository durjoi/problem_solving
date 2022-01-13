// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {

    // The Boyer Moore majority vote algorithm
    // https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
    let pme;
    let counter = 0;
    
    for(let num of nums) {
        if(counter === 0) pme = num;
        
        if(pme === num) {
            counter++;
        } else {
            counter--;
        }
    }
    
    return pme;
};