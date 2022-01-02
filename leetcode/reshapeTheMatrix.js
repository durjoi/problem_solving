//https://leetcode.com/problems/reshape-the-matrix/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    if(mat.length * mat[0].length !== r*c)return mat;
    
     let newMat = [];
    for(item of mat) {
        newMat = [...newMat, ...item];
    }
    const len = newMat.length;
    const data = len / r;
    let finalMat = [];
    let prevIndex = 0;
    for(let i = 0; i < r; i++) {
        finalMat[i] = [...newMat.slice(prevIndex, prevIndex+data)];
        prevIndex = prevIndex+data;
    }

    return finalMat;
};

console.log(matrixReshape([[1,2],[3,4]], 4, 1));