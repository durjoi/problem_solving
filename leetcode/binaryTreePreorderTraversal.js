// https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/

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

// Recursive Way

 const traversNode = (root, value) => {
    if(root === null) return null
    value.push(root.val);
    traversNode(root.left, value);
    traversNode(root.right, value);
}

var preorderTraversal = function(root) {
    let value = []
    traversNode(root, value);
    return value;
};

// Iterative way
var preorderTraversal = function(root) {
    let stack = [];
    let ans = [];
    
    if(root === null) return ans;
    
    stack.push(root);
    
    while(stack.length > 0) {
        const data = stack.pop();
        ans.push(data.val);
        if(data.right) stack.push(data.right);
        if(data.left) stack.push(data.left);
    }
    
    return ans;
    
};