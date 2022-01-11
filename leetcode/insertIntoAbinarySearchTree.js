// https://leetcode.com/problems/insert-into-a-binary-search-tree/

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
 var insertIntoBST = function(root, val) { 
    let newNode = new TreeNode(val, null, null);
    if(!root) return newNode;
    const traverse = (node, val) => {
        
        if(!node.left && node.val > val) {
            node.left = newNode;
            return;
        }
        if(!node.right && node.val < val) {
            node.right = newNode;
        }
        
        if(node.val > val) traverse(node.left, val);
        if(node.val < val) traverse(node.right, val);
    }
    
    traverse(root, val);
    
    return root;
};