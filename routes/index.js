var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application');
const teasController = require('../controllers/teas');
const userController = require('../controllers/user');


//Tea Tree Home Page
router.get('/', applicationController.index)

//Show all Teas in the Database
router.get('/teas', teasController.index)

//Create a new user
router.get('/user/new', userController.new)

router.get('/user', userController.index)

router.post('/user', userController.create)

//Display a user by their ID
router.get('/user/:id',userController.show)
router.get('/user/:id/tea/:teaId', teasController.show)

//Edit a user
router.get('/:id/edit', userController.edit)
//Update a user in the database
router.put('/user/:id', userController.update)
router.patch('/user/:id', userController.update)

//Delete a user from the database
router.delete('/user/:id', userController.delete)

module.exports = router;
