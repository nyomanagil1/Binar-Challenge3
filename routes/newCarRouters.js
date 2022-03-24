var express = require('express');
var router = express.Router();
var newCarControllers = require('../controllers/newCarControllers');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('addNewCar', newCarControllers.index);
});

module.exports = router;
