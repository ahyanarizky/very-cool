const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller')

router.post('/auth/register', controller.processRegister);
router.post('/auth/login', controller.processLogin);

module.exports = router;
