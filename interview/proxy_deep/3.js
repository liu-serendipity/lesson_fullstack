let obj = { a: 1 }
let pObj = new Proxy(obj, {
    get (target, key, receiver) {
        return Reflect.get(receiver, key)
    }
})

console.log(pObj.a)