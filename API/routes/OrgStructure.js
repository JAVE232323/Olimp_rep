const {Router} = require('express')
const router = new Router();

const OrgStructure = require('../controllers/OrgStructure')

router.get('/getAll', OrgStructure.AllEmployees)
router.get('/SmartRoads', OrgStructure.SmartRoads)
router.get('/AdminDep', OrgStructure.AdminDep)
router.get('/Dogovornoy', OrgStructure.Dogovornoy)
router.get('/MiddleDep', OrgStructure.MiddleDep)
router.get('/LisenceDep', OrgStructure.LisenceDep)
router.get('/Marketing', OrgStructure.Marketing)


module.exports = router;