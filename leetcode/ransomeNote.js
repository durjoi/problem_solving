// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const tempMagazine = magazine.split("");

    for(let i = 0; i < ransomNote.length; i++) {
        // console.log(tempMagazine.indexOf(ransomNote[i]))
        if(tempMagazine.indexOf(ransomNote[i]) !== -1) {
            const idx = tempMagazine.indexOf(ransomNote[i]);
            tempMagazine.splice(idx, 1, "0");
        } else {
            return false;
        }
    }

    // console.log(tempMagazine);
    return true;
};

console.log(canConstruct("aab", "baa"));