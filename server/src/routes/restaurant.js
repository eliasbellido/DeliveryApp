const router = require('express').Router()

const restaurantController = require('../controllers/restaurantController')

router.get('/', restaurantController.list)
router.get('/usuarios/:id', restaurantController.edit)

module.exports = router