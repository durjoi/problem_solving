// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let pTriangle = [];
    for(let i = 0; i < numRows; i++) {
        let pTriangleRow = [];
        for(let j = 0; j < i+1; j++) {
            if(i <= 1 || j === 0 || j === i) {
                pTriangleRow.push(1);
            }else {
                pTriangleRow.push(pTriangle[i - 1][j-1] + pTriangle[i - 1][j]);
            }
        }

        pTriangle.push(pTriangleRow);

        
    }

    return pTriangle;
};

console.log(generate(5));