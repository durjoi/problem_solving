// https://leetcode.com/problems/transpose-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    const totalCol = matrix[0].length;
    const totalRow = matrix.length;
    let ans = [];
    
    for(let col = 0; col < matrix[0].length; col++) {
        let newRow = [];
        for(let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        }
        
        ans.push(newRow);
    }
    
    return ans;
};
