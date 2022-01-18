// https://leetcode.com/problems/add-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    num1 = num1.split("");
    num2 = num2.split("");
    
    let num1len = num1.length - 1;
    let num2len = num2.length - 1;
    let sum = 0; 
    let carry = 0;
    let ans = "";
    
    let maxlen = Math.max(num1.length, num2.length);
    
    while(maxlen-- > 0) {
        const num1int = (num1len >= 0) ? (num1[num1len--] - '0') : 0;
        const num2int = (num2len >= 0) ? (num2[num2len--] - '0') : 0;
        
        sum = num1int + num2int + carry;
        
        if(sum > 9) {
            carry = Math.floor(sum/10);
            sum = sum%10;
        } else {
            carry = 0;
        }
        
        ans = sum + ans;
    }
    
    if(carry > 0) {
        ans = carry + ans;
    }
    
    return ans;
};