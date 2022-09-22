const {Router} = require('express');
const {isAuth} = require('../middlewares/isAuth');
const router = Router();

const MandatoController = require('./controller');
const controller = new MandatoController();

router.post('/', (req, res) => controller.create(req, res));

router.get('/', (req, res) => controller.list(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));

router.put('/', (req, res) => controller.update(req, res));
router.delete('/', (req, res) => controller.delete(req, res));

module.exports = router;