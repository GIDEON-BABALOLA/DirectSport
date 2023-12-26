const express = require("express")
const path = require("path")
const router = express.Router()
const {getHotNews, postHotNews} = require(path.join(__dirname, "..", "controllers", "hotNews"))
console.log(getHotNews)
router.get("/", getHotNews).post("/", postHotNews)
module.exports = router