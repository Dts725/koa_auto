const Koa = require('koa');
const System = require('systemjs');
const KoaOnerror = require('Koa-onerror');
const koaLogger = require('koa-logger');
const { acount } = require("./API/Acount");
var bodyParser = require('koa-bodyparser');

const app = new Koa();
KoaOnerror(app);
app.use(koaLogger());
app.use(bodyParser());

app.context.GetParams = require("./Utils/GetParams").GetParams;
app.context.db = require("./DB/db").db;
app.context.pool = require("./DB/db").pool;
app.use(async (ctx: any, next: any) => {
    // console.log("第一次进入")
    await next();
    // console.log("第二次退出");
});
app.use(async (ctx: any, next: any) => {
    // console.log("传递数据", await ctx.GetParams(ctx))
    // console.log("第二次进入")
    await next();
    // console.log("第一次退出")

    ctx.body = JSON.stringify(ctx.body)
});

// 注册路由规则
// formRouter.use('/acount', api.routes())

app.use(acount)

app.use((ctx: any, next: any) => {
    ctx.body = "404" + ctx.parth
})

app.on('error', (err: any, ctx: any) => {
    // log.error('server error', err, ctx)
    ctx.body = err

});
app.listen(3000);