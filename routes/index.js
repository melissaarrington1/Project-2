var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application');
const teasController = require('../controllers/teas');
const userController = require('../controllers/user');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//Tea Tree Home Page
router.get('/', applicationController.index)

router.get('/teas', teasController.index)

router.get('/user/new', userController.new)
router.post('/user', userController.create)
router.get('/user/:id',userController.show)


module.exports = router;
