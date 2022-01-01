// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function plusMinus(arr) {
    // Write your code here
    const len = arr.length;
    let count = [0, 0, 0];
    for(let i = 0; i < len; i++ ) {
        if(arr[i] > 0) {
            count[0] = count[0] + 1; 
        }
        else if(arr[i] < 0) {
            count[2] = count[2] + 1;
        }
        else if(arr[i] === 0) {
            count[1] = count[1] + 1;
        }
    }

    console.log((count[0] / len).toFixed(6))
    console.log((count[2] / len).toFixed(6))
    console.log((count[1] / len).toFixed(6))

}

plusMinus([-4, 3, -9, 0, 4, 1])