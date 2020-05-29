var Router = require('koa-router');
var router = new Router();
var formRouter = new Router();
var basicUrl = '/acount';
router.all('/user', require("../Service/Acount/User/User").User);
router.all('/login', require("../Service/Acount/Login/Login").Login);
formRouter.use(basicUrl, router.routes());
exports.acount = formRouter.routes();
//# sourceMappingURL=Acount.js.map