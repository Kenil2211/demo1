const express =require('express')
const router = express.Router()
const itemController = require('../controller/ItemController')

router.post('/add',itemController.addItem)

module.exports = router