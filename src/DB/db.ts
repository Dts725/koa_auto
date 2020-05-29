const mysql = require('mysql');
let { conf, YZX } = require("./Config")
// var pool = mysql.createPool(conf);
let pool = mysql.createPool(YZX);
exports.pool = (str: any) => pool.escape(str);
exports.db = function (sql: String) {
    // 使用连接
    return new Promise(resolve => {
        pool.getConnection(function (err: any, connection: any) {
            if (err) throw err;
            // let en = pool.escape(sql)
            connection.query(sql, function (err: any, result: any, rows: any) {
                // 使用连接执行查询
                if (err) throw err;
                // 返回数据格式化 暂未发现影响
                let r = JSON.stringify(result);
                r = JSON.parse(r)
                resolve(r);
                // resolve(result);
                connection.release();
                //连接不再使用，返回到连接池
            });
        })

    });

}

/**
  * 连接池里面创建了一个新连接时，会触发一个连接事件。如需要在使用此连接之前设置会话变量，将要对此事件进行监听。
  */
pool.on('connection', function (connection: any) {
    // connection.query('SET SESSION auto_increment_increment=1')
});

function end(): void {
    pool.end(function (err: any) {
        // all connections in the pool have ended
    });
}