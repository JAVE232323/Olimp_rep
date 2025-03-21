const {Router} = require('express')
const router = new Router();

const userController = require('../controllers/userController')

router.get('/signin', userController.signin)

module.exports = router;