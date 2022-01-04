// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sMap = getCharMap(s);
    let tMap = getCharMap(t);
    console.log(sMap);
    console.log(tMap);
    for(let char in sMap) {
        if(sMap[char] !== tMap[char]) return false;
    }

    return true;
};

const getCharMap = (str) => {
    let charMap = {};

    for(let char in str) {
        charMap[str[char]] = charMap[str[char]] + 1 || 1
    }

    return charMap;
}

//  var isAnagram = function(s, t) {
//     const tempT = t.split("");

//     if(s.length !== t.length) return false;
//     for(let i = 0; i < s.length; i++) {
//         if(tempT.indexOf(s[i]) !== -1) {
//             const idx = tempT.indexOf(s[i]);
//             tempT.splice(idx, 1, "0");
//         } else {
//             return false;
//         }
//     }
//     return true;
// };


console.log(isAnagram("anagram", "agnaram"));