// https://leetcode.com/problems/non-overlapping-intervals/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])
    let removeCount = 0;
    let end = intervals[0][1];
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < end) {
            removeCount++;
        } else {
            end = intervals[i][1];
        }
    }
    
    return removeCount;
};