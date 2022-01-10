// https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    
    if(!root) return false;
    
    let hasSum = false;
    
    const pathSum = (node, sum) => {
        if(node.left === null && node.right === null) {
            if(sum === node.val) {
                hasSum = true;
                
                return;
            }
            
            return;
        }
        
        if(node.left) pathSum(node.left, sum-node.val)
        if(node.right) pathSum(node.right, sum-node.val)
    }
    
    pathSum(root, targetSum)
    return hasSum;
    
};