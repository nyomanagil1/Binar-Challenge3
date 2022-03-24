var express = require('express');
var router = express.Router();
var dashboardControllers = require('../controllers/dashboardControllers');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('dashboard', dashboardControllers.index);
});

module.exports = router;
