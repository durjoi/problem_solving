// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let count = 0;
    let charmap = {};
    
    for(let char of s) {
        if(!charmap[char]) charmap[char] = 0;
        charmap[char]++;
        if(charmap[char] % 2 === 0) count += 2;
    }
    
    return (s.length > count) ? count + 1: count;
};