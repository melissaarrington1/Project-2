var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application');
const teasController = require('../controllers/teas');
//const moodsController = require('../controllers/moods');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', applicationController.index)

router.get('/teas', teasController.index)
//router.get('/mood', moodsController.index)

//router.get('')

module.exports = router;
