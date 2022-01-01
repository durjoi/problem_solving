// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr) {
    // Write your code here
    let min = 0;
    let max = 0;

    for(let i = 0; i < 5; i++) {
        let tempArr = [...arr];

        tempArr.splice(i, 1);

        const currentSum = tempArr.reduce((prevTotal, value) => prevTotal + value, 0);

        if(i === 0) {
            max = currentSum;
            min = currentSum;
        }
        else if(currentSum > max) max = currentSum;
        else if(currentSum < min) min = currentSum;
    }

    console.log(min, max);
}

console.log(miniMaxSum([769082435, 210437958, 673982045, 375809214, 380564127]))