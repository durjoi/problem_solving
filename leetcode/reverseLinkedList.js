// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Interative way
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let current, previous;
    current = head;
    previous = null;
    while(current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        
    }

    return previous;
};

// Recursive Way
var reverseList = function(head) {
    reverse(head.next)

    return head;
};

const reverse = (node, head) => {
    if(node.next == null) {
        head = node;
        return;
    }
    reverse(node, head);
    let lastNode = node.next;
    lastNode.next = node;
    node.next = null;
}