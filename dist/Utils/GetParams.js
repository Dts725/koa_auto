var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.GetParams = function (ctx) {
    return new Promise(function (resolve, reject) {
        var path = ctx.request.path;
        var query = ctx.query;
        var method = ctx.method;
        var url = ctx.url;
        var pam = { path: path, query: __assign({}, query), method: method, url: url };
        return resolve(pam);
    });
};
//# sourceMappingURL=GetParams.js.map