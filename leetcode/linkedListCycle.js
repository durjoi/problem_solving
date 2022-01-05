// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let set = new Set();
    while(head) {
        if(set.has(head)) return true;
        set.add(head);
        head = head.next;
    }

    return false;
};

// Floyd's Tortoise & Hare

var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow) return true;
    }

    return false;
}
