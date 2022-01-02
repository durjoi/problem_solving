// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = candles.sort((a, b) => b - a);

    max = max.filter(item => item === max[0]).length;

    return max;
}

console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 8, 90, 43]));