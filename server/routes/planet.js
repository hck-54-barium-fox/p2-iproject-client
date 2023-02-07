const express = require('express')
const PlanetController = require('../controllers/PlanetController')
const router = express.Router()

router.get("/planets",PlanetController.readPlanets)

module.exports= router