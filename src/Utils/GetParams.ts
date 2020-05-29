/** 获取请求接口返回值
 * @returns {Promise | Object}   { path, query: { ...query }, method, url }
 * 
 */
exports.GetParams = (ctx: any): Object => {
    return new Promise((resolve, reject) => {
        let path = ctx.request.path;
        let query = ctx.query;
        let method = ctx.method.toLowerCase();
        let url = ctx.url;
        if (method !== "get") {
            query = ctx.request.body
        }
        let pam = { path, query: { ...query }, method, url }
        return resolve(pam)
    })
}