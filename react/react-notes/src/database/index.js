// 封装数据库模块
import Loki from 'lokijs'

// 增删改查
// 1. 建数据库  notes 数据库
// 2. 建立数据库|连接数据库，db 代表这数据库对象，句柄
    // 通过db就可以操作数据库了
// 3. 建个表 | 打开表
// 4. CRUD 操作
export const db = new Loki('notes', {
    autoload: true,
    autoloadCallback: databaseInitialize, 
    autosave: true,
    autosaveInterval: 3000,
    persistenceMethod: 'localStorage'  // 持久化的方式
})
// 初始化时，检测有没有准备好表
// Lokijs 太友好了
function databaseInitialize() {
    // 数据库初始化
    const notes = db.getCollection('notes');  // 集合 表 table collection
    if (notes === null) {
        db.addCollection('notes')  // 创建一个表，集合
    }
}
// select 供其他模块调用  参数是表明
export function loadCollection(collection) {  // thenable
    return new Promise((resolve) => {  // 查询需要时间
        // 内存切换到硬盘 读写速度是差千倍万倍的 I/O操作
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(collection) || db.addCollection(collection);
            resolve(_collection);
        })
    })
}