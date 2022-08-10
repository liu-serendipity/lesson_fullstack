const comment = (ctx) => {
    console.log(ctx.request.uid, 'comment, ---------');
    // 不是从ctx.request.body来
    // 从ctx.request.header来
    ctx.body = '1111111'
}

module.exports = {
    comment
}