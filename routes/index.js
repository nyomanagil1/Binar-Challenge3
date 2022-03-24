var express = require('express');
var router = express.Router();
const credential = {
  email: 'admin@gmail.com',
  password: 'admin123',
};

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { layout: false });
});

module.exports = router;
