// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let ans = [];
    
    intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1] );
    
    let start = intervals[0][0];
    let end = intervals[0][1];
    
    for(let i = 0; i < intervals.length; i++) {
        if(intervals[i][0] <= end) {
            if(intervals[i][1] >= end) {
                end = intervals[i][1];
            }
            
        } else {
            ans.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    
    ans.push([start, end]);
    
    return ans;
};