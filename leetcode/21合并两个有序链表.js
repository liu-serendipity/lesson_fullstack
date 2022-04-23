// 题目：将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例 1：
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 示例 2：
// 输入：l1 = [], l2 = []
// 输出：[]

// 示例 3：
// 输入：l1 = [], l2 = [0]
// 输出：[0]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = (list1, list2) => {  // 此处用的是递归的方法
    if(list1 == null) return list2  // 如果list1为空，则返回list2
    if(list2 == null) return list1  // 如果list1为空，则返回list2，如果都为空，就返回[]，这样写大大简洁了代码
    if(list1.val < list2.val) {     // 如果对位比较，list1的值比list2小，则list1的next指向脱钩，指向当前比较的list2的节点，依此类推，谁小谁脱钩，
        list1.next = mergeTwoLists(list1.next, list2);  // 这里要注意的是当前比较的谁小谁脱钩，指向对位的更大的那个节点，此节点之前已比较完的不脱钩
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};