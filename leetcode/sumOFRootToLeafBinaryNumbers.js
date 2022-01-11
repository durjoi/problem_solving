// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

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
 * @return {number}
 */
 var sumRootToLeaf = function(root) {
    let sum = 0;
    
    const depthSum = (node, sum) => {
        if(!node.left && !node.right) {
            return (sum << 1) + node.val;
        }
        
        let sumLeft = 0;
        let sumRight = 0;
        
        if(node.left) {
            sumLeft = depthSum(node.left, (sum << 1) + node.val)
        }
        
        if(node.right) {
            sumRight = depthSum(node.right, (sum << 1) + node.val);
        }
         
        
        return sumLeft + sumRight;
        
    }
    
    return depthSum(root, sum);
};