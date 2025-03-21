const {Router} = require('express')
const router = new Router();
const positionsController = require('../controllers/PositionController')

router.get('/', positionsController.getAllPositions)
router.get('/:id', positionsController.getOneDivisions)

module.exports = router;