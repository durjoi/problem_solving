// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    const traverse = (node) => {
        if(p.val < node.val && q.val < node.val) return traverse(node.left);
        if(p.val > node.val && q.val > node.val) return traverse(node.right);
        
        return node;
    }
    
    return traverse(root);
};