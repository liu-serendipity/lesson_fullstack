module.exports = async (ctx, next) => {
    // 白名单
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    await next();
}