const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
router.post('/basketCreate', basketController.create)
router.post('/basketDelete', basketController.delete)
// router.get('/',basketController.getOne)
router.get('/getAll', basketController.getAll)
router.get('/getOne', basketController.getOne)

module.exports = router