// https://leetcode.com/problems/maximize-distance-to-closest-person/

/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {
    let left = seats.indexOf(1);
    let max = left;
    for (let right = left + 1; right < seats.length; right++) {
        if (seats[right] === 0) {
          continue;
        }
    
        [max, left] = [Math.max(max, ((right - left) / 2) | 0), right];
    }
    return Math.max(max, seats.length - left - 1);
    
};