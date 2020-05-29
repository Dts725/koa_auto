
let loginPoll = require("../../../DB/DB").pool
exports.post = (name: string): String => {
    return `SELECT * FROM Admin WHERE account = ${loginPoll(name)}`
}
