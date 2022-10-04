function hasCycle(head) {
    let low = head
    let fast = head
    while (fast !== null && fast.next !== null) {
        low = low.next
        fast = fast.next.next
        if (low == fast) {
            return true
        }
    }
    return false
}