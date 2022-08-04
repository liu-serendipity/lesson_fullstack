const router = require('koa-router')();
const partitionsData = require('../data/partitions')

router.get("/partitions", async (ctx) => {
    ctx.body = partitionsData
})

module.exports = router.routes();