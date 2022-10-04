const deleteDuplicates = function(head) {
    // 空的链表
    if (!head || !head.next) return head
    // 头节点就重复
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            // 重复的值
            let val = cur.next.val
            while(cur.next && cur.next.val === val) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
}