const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const absenceCtrl = require('../controllers/absence');

router.get('/:id_doctor/:date_begin/:date_end', auth, absenceCtrl.getAllAbsenceByDoctor);
router.post('/', auth, absenceCtrl.createAbsence);
router.delete('/:id', auth, absenceCtrl.deleteAbsence);

module.exports = router;