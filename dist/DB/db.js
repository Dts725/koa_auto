var mysql = require('mysql');
var _a = require("./Config"), conf = _a.conf, YZX = _a.YZX;
var pool = mysql.createPool(YZX);
exports.pool = function (str) { return pool.escape(str); };
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
//# sourceMappingURL=DB.js.map