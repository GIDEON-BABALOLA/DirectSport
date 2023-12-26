const path = require("path")
const logEvents = require(path.join(__dirname, "logEvents"))
const requestLogs = (req, res, next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt")
    next();
}
module.exports = requestLogs