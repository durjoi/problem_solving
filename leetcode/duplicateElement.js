//https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    const dupEle = nums.filter((item, index) => nums.indexOf(item) !== index);
    
    if(dupEle.length > 0) {
        return true;
    }
    
    return false;
};

containsDuplicate([1, 2, 3, 4]);