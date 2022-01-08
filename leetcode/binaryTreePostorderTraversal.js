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
// Recursive way 

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

// Iterative Way
var postorderTraversal = function(root) {
    let ans = [];
    let stack = [];
    
    if(root === null) return ans;
    
    stack.push(root)
    
    while(stack.length > 0)
    {
        let current = stack[stack.length - 1];
        
        if(current.left === null && current.right === null) {
            ans.push(current.val);
            stack.pop();
        } else {
            if(current.right != null) {
                stack.push(current.right);
                current.right = null;
            }
            if(current.left != null) {
                stack.push(current.left);
                current.left = null;
            }
        }
        
    }
    
    return ans;
};