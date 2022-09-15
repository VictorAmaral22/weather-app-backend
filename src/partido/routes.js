const { Router } = require('express');
const { isAuth } = require('../middlewares/isAuth');
const router = Router();

const PoliticoController = require('./controller');
const controller = new PoliticoController();

router.post('/', (req, res) => controller.create(req, res));
router.get('/list', (req, res) => controller.list(req, res));
router.get('/profile', (req, res) => controller.profile(req, res));

module.exports = router;