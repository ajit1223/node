const express = require('express');
const router = express.Router();

const UsersController = require("../controllers/users_controller");


router.get('/user_profile', UsersController.profile);

router.get('/sign-Up', UsersController.signUp);
router.get('/sign-In', UsersController.signIn);


module.exports = router;