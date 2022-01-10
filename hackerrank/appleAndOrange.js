/*
 * Complete the 'countApplesAndOranges' function below.
 *
//  https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

* The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0;
    let orangeCount = 0;
    
    for(let i = 0; i < apples.length; i++) {
        if(apples[i] < 1) continue;
        if((a + apples[i]) >= s &&  (a + apples[i]) <= t) {
            appleCount++;
        }
    }
    
    for(let i = 0; i < oranges.length; i++) {
        if(oranges[i] > -1) continue;
        if((b + oranges[i]) >= s &&  (b + oranges[i]) <= t) {
            orangeCount++;
        }
    }
    
    console.log(appleCount);
    console.log(orangeCount);
}