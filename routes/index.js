var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application');
const teasController = require('../controllers/teas');
//const moodsController = require('../controllers/moods');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//Tea Tree Home Page
router.get('/', applicationController.index)

router.get('/teas', teasController.index)

//router.get('/teas/:_id', teasController.new)
//router.get('')

module.exports = router;
