// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    s = s.split("");
    
   for(let i = 0; i < s.length; i++) {
       if(s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) {
            return s.indexOf(s[i]);
       }
   }

   return -1;
};

console.log(firstUniqChar("aabb"));
