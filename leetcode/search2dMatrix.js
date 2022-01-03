// https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const row = matrix.length;
    const col = matrix[0].length;

    if(target > matrix[row-1][col-1] || target < matrix[0][0]) return false;

    for(let i = 0; i < row; i++) {
        if(target >= matrix[i][0] && target <= matrix[i][col-1]) {
            if(matrix[i].filter((element) => element === target).length > 0) return true;
            else return false;
        }
    }

    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))