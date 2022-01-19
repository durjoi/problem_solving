// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    function binarySearch(array, target) {
        let left = 0
        let right = array.length - 1
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (target === array[mid]) {
                return mid
            } else if (target > array[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        
        return -1
    }
    
    return binarySearch(nums, target)
};