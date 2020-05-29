exports.Login = async (ctx: any) => {
    let { method } = await ctx.GetParams(ctx);
    let db = null;
    switch (method) {
        case 'get': {
            break;
        };
        case 'post': {
            db = await post(ctx);
            break;
        }
        case 'put': {
            break;
        }
        case 'delet': {
            break;
        }
        default: {
            db = 'default' + method
            break;
        }
    }

    ctx.body = db;
}
/**
 *  处理登陆功能
 * @param ctx 为 koa 对象
 */
async function post(ctx: any) {
    return new Promise(async resolve => {
        let { query } = await ctx.GetParams(ctx);
        let db, sql = null;
        sql = require("./LoginDb").post(query.name);
        db = await ctx.db(sql);
        resolve(db)
    })

}