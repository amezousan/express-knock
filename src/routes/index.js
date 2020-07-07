const express = require('express');
const router  = express.Router();

// Require controller modules.
const home_controller = require('../controllers/homeController');

router.get('/', home_controller.index);
router.get('/health', home_controller.health_check);

module.exports = router;