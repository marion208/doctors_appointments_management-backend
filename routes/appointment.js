const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const appointmentCtrl = require('../controllers/appointment');

router.get('/:iddoctor', auth, appointmentCtrl.getAllAppointmentByDoctor);
router.post('/', auth, appointmentCtrl.createAppointment);
router.delete('/:id', auth, appointmentCtrl.deleteAppointment);

module.exports = router;