const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');


router.use('/', homeController.home);
// router.use('/', homeController.action);

console.log("routes has loaded");

module.exports = router;