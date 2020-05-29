
let Router = require('koa-router');
let router = new Router();
function acount() {

}
router.all('/User', require("../Service/d").User)
router.use("/acount", () => router)
exports.api = router