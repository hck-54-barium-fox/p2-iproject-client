const express = require('express')
const router = express.Router()
const userRoutes = require("./user")
const planetRoutes = require("./planet")

router.use(userRoutes)
router.use(planetRoutes)

module.exports = router