const {Router} = require('express')
const router = new Router();

const userRouter = require('./userRouter')
const orgRouter = require('./OrgStructure')
const divisionRouter = require('./divisionsRouter')
const cabinetRouter = require('./cabinetsRouter')
const positionsRouter = require('./positionsRouter')

router.use('/user', userRouter)
router.use('/OrganizationStructure', orgRouter)
router.use('/Divisions', divisionRouter)
router.use('/Positions', positionsRouter)
router.use('/Cabinets', cabinetRouter)

module.exports = router;