const express = require('express');

const classicController = require("../controller/classicGuess.controller")
const quoteController = require("../controller/quoteGuess.controller")
const skillController = require("../controller/skillGuess.controller")

const router = express.Router()

router.get('/classic', classicController.getTodayInfo)

router.get('/quote', quoteController.getTodayInfo)

router.get('/skill', skillController.getTodayInfo)

router.put('/classiccount', classicController.updateCount)

router.put('/quotecount', quoteController.updateCount)

router.put('/skillcount', skillController.updateCount)

module.exports = router;