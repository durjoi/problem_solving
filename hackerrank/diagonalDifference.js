//https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function diagonalDifference(arr) {
    // Write your code here
    const len = arr.length;

    let diag1 = 0;
    let diag2 = 0;

    for(let i = 0; i < len; i++) {
        diag1 = diag1 + arr[i][i] 
    }

    for(let i = len-1; i >= 0; i--) {
        diag2 = diag2 + arr[i][len-i-1];
    }

    console.log(Math.abs(diag1 - diag2));

}

const arr = [[11, 2, 4],[4, 5, 6],[10, 8, -12]];

diagonalDifference(arr);