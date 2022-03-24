var express = require('express');
var router = express.Router();
var listCarControllers = require('../controllers/listCarControllers');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('listCar', listCarControllers.index);
});

module.exports = router;
