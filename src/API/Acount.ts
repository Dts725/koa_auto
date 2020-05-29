
let Router = require('koa-router');
let router = new Router();
let formRouter = new Router();
let basicUrl = '/acount';
router.all('/user', require("../Service/Acount/User/User").User);
router.all('/login', require("../Service/Acount/Login/Login").Login);









formRouter.use(basicUrl, router.routes())
exports.acount = formRouter.routes();