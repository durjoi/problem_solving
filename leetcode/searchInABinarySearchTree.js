// https://leetcode.com/problems/search-in-a-binary-search-tree/

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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    let ans = null;
    const travers = (node, val) => {
        if(!node) return;
        if(node.val === val) {
          ans = node;  
          return;
        } 
        if(node.val > val) {
            travers(node.left, val);
        } 
        
        if(node.val < val) {
            travers(node.right, val);
        }
    }
    
    travers(root, val);
    
    
    
    return ans;
};