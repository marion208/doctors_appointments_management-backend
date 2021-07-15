const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const doctorCtrl = require('../controllers/doctor');

router.get('/', auth, doctorCtrl.getAllDoctor);
router.post('/', auth, doctorCtrl.createDoctor);
router.delete('/:id', auth, doctorCtrl.deleteDoctor);

module.exports = router;