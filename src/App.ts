const Koa = require('koa');
const app = new Koa();
const System = require('systemjs');
const { api } = require("./API/Acount");
const formRouter = require('koa-router');
app.context.GetParams = require("./Utils/d").GetParams;
app.context.db = require("./DB/d").db;
app.use(async (ctx: any, next: any) => {
    console.log("第一次进入")
    await next();
    console.log("第二次退出");
});
app.use(async (ctx: any, next: any) => {
    console.log("第二次进入")
    await next();
    console.log("第一次退出")

    ctx.body = JSON.stringify(ctx.body)
});

// 注册路由规则
new formRouter().use('/acount', api.routes())

app.use(api.routes())

app.use((ctx: any, next: any) => {
    ctx.body = "404"
})

app.on('error', (err: any, ctx: any) => {
    // log.error('server error', err, ctx)
    ctx.body = err

});
app.listen(3000);