// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

/**
 * @param {number[]} time
 * @return {number}
 */
 var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    for(let i = 0; i < time.length; i++) {
        for(let j = i+1; j < time.length; j++) {
            if((time[i] + time[j]) % 60 === 0) count++;
        }
    }

    return count;
};


console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]))