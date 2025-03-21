const {Router} = require('express')
const router = new Router();
const divisionController = require('../controllers/DivisionsController')

router.get('/', divisionController.getAllDivisions)
router.get('/:id', divisionController.getOneDivisions)

module.exports = router;