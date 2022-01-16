// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    
    
    let pascal = [[1], [1, 1]];
    for(let i = 2; i <= rowIndex; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for(let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
        pascal[i][i] = 1;
        
    }
    
    return pascal[rowIndex];
};