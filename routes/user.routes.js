const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express.Router()

const userController = new UserController();
router.post('/user/register', userController.register);
router.post('/user/login', userController.login);

module.exports = router;