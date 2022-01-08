// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
 * @return {number[]}
 */
 const traversTree = (root, ans) => {
    if(root === null) return null;
    traversTree(root.left, ans);
    traversTree(root.right, ans);
    ans.push(root.val);
}

var postorderTraversal = function(root) {
    let ans = [];
    traversTree(root, ans);
    
    return ans;
};