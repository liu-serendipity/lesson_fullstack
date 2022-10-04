const deleteDuplicates = function(head) {
    let current = head
    // 空链表 尾节点
    while (current !== null && current.next !==null) {
        // 如果相等有多个，while 一直执行
        if (current.value === current.next.value) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
}