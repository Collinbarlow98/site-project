const express = require('express')
const router = express.Router()
const PortfolioController = require('../controllers/portfolioController')

router.get('/', PortfolioController.portfolio)

module.exports = router
