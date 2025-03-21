const {Router} = require('express')
const router = new Router();
const cabinetController = require('../controllers/CabinetController')

router.get('/', cabinetController.getAllCabinets)
router.get('/:id', cabinetController.getOneCabinet)

module.exports = router;