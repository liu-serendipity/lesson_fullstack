let obj = { a: 1 }
let pObj = new Proxy(obj, {
    get (target, key, receiver) {
        // console.log(target, key, receiver)
        // return target[key]
        // return Reflect.get(target, key)
        return receiver
    }
})

console.log(pObj.getReceiver)
let child = Object.create(pObj)
console.log(child.getReceiver)