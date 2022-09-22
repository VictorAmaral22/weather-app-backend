const {Router} = require('express');
const {isAuth} = require('../middlewares/isAuth');
const router = Router();

const ExerciciosController = require('./controller');
const controller = new ExerciciosController();

router.post('/', (req, res) => controller.create(req, res));
router.post('/auth', (req, res) => controller.auth(req, res));

router.get('/', (req, res) => controller.list(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));

router.put('/', isAuth, (req, res) => controller.update(req, res));
router.delete('/', isAuth, (req, res) => controller.delete(req, res));

module.exports = router;