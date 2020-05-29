
// const { GetParams } = require("../../Utils/d")
exports.User = async (ctx: any) => {
    // let { query } = await ctx.GetParams(ctx)

    let db, sql;

    sql = `SELECT * FROM  User`;

    db = await ctx.db(sql);
    let name = db[0];
    console.log("调用数", name)

    ctx.body = db;


    // console.log("调用数据3", db)

}