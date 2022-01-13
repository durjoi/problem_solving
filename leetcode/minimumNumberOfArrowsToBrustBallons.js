// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/

/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    
    points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    let start = points[0][0]; 
    let end = points[0][1];
    let arrows = 1; 
    
    for(let i = 0; i < points.length; i++) {
        if(points[i][0] <= end) {
            start = points[i][0];
            if(points[i][1] <= end) end = points[i][1];
             
        } else {
            start = points[i][0];
            end = points[i][1];
            
            arrows++;
        }
    }
    
    return arrows;
};