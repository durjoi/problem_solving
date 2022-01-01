// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {

    let intersectArr = [];
    for(const item of nums1) {
        if(nums2.indexOf(item) !== -1) {
            intersectArr.push(item);
            nums2.splice(nums2.indexOf(item), 1);
        }; 
    }

    return intersectArr;
};


console.log(intersect([1,2,2,1], [2, 2]))