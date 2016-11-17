const express = require('express');
const router = express.Router();
const authController = require('../controller/user.controller')
const threadController = require('../controller/thread.controller')


router.post('/auth/register', authController.processRegister);
router.post('/auth/login', authController.processLogin);

router.get('/thread', threadController.getAllThread)
router.get('/thread/:id', threadController.getOneThread)
router.post('/thread', threadController.createNewThread)
router.put('/thread/:id', threadController.updateThread)
router.delete('/thread/:id', threadController.deleteThread)

module.exports = router;
