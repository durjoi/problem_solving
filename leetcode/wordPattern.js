// https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let wordToPattern = {};
    let patternToWord = {}
    let word = s.split(" ");
    
    
    if(pattern.length !== word.length) return false;
    
    for(let i = 0; i < pattern.length; i++) {
        if(wordToPattern[word[i]] && patternToWord[pattern[i]]) {
            if(wordToPattern[word[i]] == pattern[i] && patternToWord[pattern[i]] == word[i]) {
                continue;
            } else {
                return false;
            }
        } else if(wordToPattern[word[i]] || patternToWord[pattern[i]]) {
            return false;
        } else {
            wordToPattern[word[i]] = pattern[i];
            patternToWord[pattern[i]] = word[i];
        }
    }
    
    
    return true;
};