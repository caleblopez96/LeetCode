/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();

    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }
    return dummy.next;
}

let a = new ListNode(1, new ListNode(2, new ListNode(4)));
let b = new ListNode(1, new ListNode(3, new ListNode(4)));

let merged = mergeTwoLists(a, b);
console.log(JSON.stringify(merged));
