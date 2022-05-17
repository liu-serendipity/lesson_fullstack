// 链表由节点组成
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// 前驱节点  后继节点

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

function reverseList(head) {
    // 如果是一个空链表或者只有一个头节点
    if (!head || !head.next) return head;
    // 头变尾  前驱节点变后继节点
    // 链表  线性结构
    let curr = head;  // 当前节点
    let prev = null;  // 前驱节点
    while (curr) {  // 尾部 null  es6 const let 块级作用域
        const next = curr.next;  // 当前节点的下一个节点  后继节点
        curr.next = prev;
        prev = curr;  // 前驱节点  为成为下一轮的后继节点 存好值
        curr = next;  // 遍历
    }
    return prev
}

console.log(reverseList(a1));

// Go语言
/**
 * Definition for singly-linked list.
 * type 自定义类型
 * type ListNode struct {
 *  声明Val go 强类型 int 整信
 *     Val int
 *      声明Next * 指针 地址指向对象的类型
 *     Next *ListNode
 * }
 */
// func reverseList(head *ListNode) *ListNode {
//     var prev *ListNode;
//     for head != nil {
//         // Go语言里面如果声明的同时赋值，不需要var
//         temp := head.Next;
//         head.Next = prev;
//         prev = head;
//         head = temp
//     }
//     return prev
// }
