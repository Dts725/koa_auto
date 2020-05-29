var Router = require('koa-router');
var router = new Router();
function acount() {
}
router.all('/User', require("../Service/d").User);
router.use("/acount", function () { return router; });
exports.api = router;
//# sourceMappingURL=Acount.js.map