// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let set = [];
    let isTarget = false;
    
    const traverse = (node, set) => {
        if(!node) return;
        
        if(set.indexOf(k - node.val) !== -1) {
            isTarget = true;
            return;
        }
        
        set.push(node.val);
        
        if(node.left) traverse(node.left, set);
        if(node.right) traverse(node.right, set);
    }
    
    traverse(root, set);
    
    return isTarget;
};