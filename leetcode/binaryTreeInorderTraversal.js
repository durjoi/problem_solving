// https://leetcode.com/problems/binary-tree-inorder-traversal/

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

const traversTree = (root, ans) => {
    if(root === null) return null;
    traversTree(root.left, ans);
    ans.push(root.val);
    traversTree(root.right, ans);
}

var inorderTraversal = function(root) {
    let ans = [];
    traversTree(root, ans);

    return ans;
};


// Iterative Way 
var inorderTraversal = function(root) {
    let ans = [];
    let stack = [];
    if(root === null) return ans;
    
    stack.push(root);
    
    while(stack.length > 0) {
        let current = stack[stack.length - 1];
        
        if(current.left != null) {
            stack.push(current.left);
            current.left = null;
        } 
        else {
            ans.push(current.val);
            stack.pop();
            if(current.right) stack.push(current.right);
        }
    }

    return ans;
}