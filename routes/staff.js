const express = require('express');
const router = express.Router();

const staffCtrl = require('../controllers/staff');

router.post('/login', staffCtrl.login);

module.exports = router;