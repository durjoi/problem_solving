// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let col = matrix[0].length;
    let row = matrix.length;
    
    for(let i = 0; i < row; i++) {
        for(let j = i; j < col; j++) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j]; 
            matrix[i][j] = temp;
        }
    }
    
    for(let row of matrix) {
        row.reverse();
    }
    
    return matrix;
};