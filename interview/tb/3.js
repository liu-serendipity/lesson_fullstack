// es6 map 
var containDuplicate = function(nums) {
    const map = new Map
    for (let i of nums) {
        if (map.has(i)) {
            return true
        } else {
            map.set(i, 1)
        }
    }
    return false
}

console.log(containDuplicate([2, 4, 3, 2, 6, 3]))