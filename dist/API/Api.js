var Router = require('koa-router');
var router = new Router();
router.all('/User', require("./Service/d").User);
exports.api = router;
//# sourceMappingURL=Api.js.map