// https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let count0 = 1;
    
    for(let i = 0; i < flowerbed.length; i++) {
        if(n <= 0) break;
        
        if(flowerbed[i] == 0) {
            count0++;
            if(count0 == 3) {
                count0 = 1;
                n--;
            }
        } else {
            count0 = 0;
        }
    }
    
    if(count0 == 2) {
        n--;
    }
    
    return n == 0 ? true : false;
};