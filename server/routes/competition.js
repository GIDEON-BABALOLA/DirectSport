const express = require("express")
const path = require("path")
const router = express.Router()
const competitionLogo = require(path.join(__dirname, "..", "controllers", "competition"))
router.get("/",  competitionLogo)
module.exports = router