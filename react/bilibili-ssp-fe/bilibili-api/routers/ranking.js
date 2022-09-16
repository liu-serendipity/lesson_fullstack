const router = require('koa-router')()
const rankingPartitions = require('../data/rankingPartitions')
const {
    fetchRankingById
} = require('../api')
// 向api服务添加排行榜路由模块
// 排行榜菜单
router.get('/partitions', (ctx, next) => {
    const resData = {
        data: rankingPartitions,
        code: 0,
        message: '0'
    }
    ctx.body = resData
})

// /ranking/1  params  query ?
router.get('/:rId', async (ctx, next) => {
    const { rId } = ctx.params
    // ctx.body = rId
    try {
        // 分层 api | controller
        const data = await fetchRankingById(rId)
        ctx.body = data
    } catch (err) {
        next(err)
    }
})

module.exports = router.routes()