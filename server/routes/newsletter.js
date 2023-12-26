const path = require("path")
const express = require("express")
const router = express.Router()
const newsletter = require(path.join(__dirname, "..", "controllers", "newsletter"))
router.post("/", newsletter)
module.exports = router


