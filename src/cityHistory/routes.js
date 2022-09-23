const {Router} = require('express');
const router = Router();

const CityHistoryController = require('./controller');
const controller = new CityHistoryController();

router.get('/:id', (req, res) => controller.findByCity(req, res));

router.post('/', (req, res) => controller.create(req, res));
router.get('/', (req, res) => controller.findAll(req, res));

// router.put('/', (req, res) => controller.updateRegister(req, res));
// router.delete('/', (req, res) => controller.deteRegister(req, res));

module.exports = router;