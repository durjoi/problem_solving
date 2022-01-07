// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let openToClose = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    
    let stack = [];
    
    for(let char of s) {
        if(openToClose[char]) {
            stack.push(char)
        } else {
            if(openToClose[stack.pop()] !== char) {
                return false
            }
        }
    }
    
    if(stack.length === 0) return true
    else return false;
};