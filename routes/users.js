const express = require('express');
const router = express.Router();

const UsersController = require("../controllers/users_controller");


router.get('/user_profile', UsersController.profile);


module.exports = router;