const path = require("path")
const logEvents = require(path.join(__dirname, "logEvents.js"))
const errLogger = (err, req, res, next) => {
console.log(err.name)
console.log(err.stack);
res.status(500).json({"message": "Internal Server Error"})
logEvents(`${err.name} : ${err.message}`, "errLog.txt")
next()
}
module.exports = errLogger
