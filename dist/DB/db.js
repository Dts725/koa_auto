var mysql = require('mysql');
var conf = require("./Config").conf;
var pool = mysql.createPool(conf);
exports.db = function (sql) {
    return new Promise(function (resolve) {
        pool.getConnection(function (err, connection) {
            if (err)
                throw err;
            connection.query(sql, function (err, result, rows) {
                if (err)
                    throw err;
                var r = JSON.stringify(result);
                r = JSON.parse(r);
                resolve(r);
                connection.release();
            });
        });
    });
};
pool.on('connection', function (connection) {
});
function end() {
    pool.end(function (err) {
    });
}
//# sourceMappingURL=db.js.map