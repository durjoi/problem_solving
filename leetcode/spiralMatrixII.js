// https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let rowBegin = 0;
    let rowEnd = n - 1;
    let colBegin = 0;
    let colEnd = n - 1;
    
    let counter = 1;
    
    let matrix = new Array(n).fill(null).map(() => new Array(n).fill(null));
    
    
    while(rowBegin <= rowEnd && colBegin <= colEnd) {
        // draw first row;
        for(let i = colBegin; i <= colEnd; i++) {
            matrix[rowBegin][i] = counter++;
        }
        rowBegin++;
        
        for(let i = rowBegin; i <= rowEnd; i++) {
            matrix[i][colEnd] = counter++;
        }
        
        colEnd--;
        
        if(rowBegin <= rowEnd) {
            for(let i = colEnd; i >= colBegin; i--) {
                matrix[rowEnd][i] = counter++;
            }
        }
        
        rowEnd--;
        
        if(colBegin <= colEnd) {
            for(let i = rowEnd; i >= rowBegin; i--) {
                matrix[i][colBegin] = counter++;
            }
        }
        
        colBegin++;
        
    }
    
    return matrix;
};