// const Tea = require('../models/Tea')
const User = require('../models/User')
// const Mood = require('../models/Moods')

const userController = {
new: (req, res) => {
    res.render('user/new')
},

create: (req, res) => {
    User.create(req.body).then((newUser) => {
        res.redirect(`/user/${newUser._id}`)
    })
},

index: (req, res) => {
    User.find().then((users) => {
        res.render('user/index', {
            users: users
        })
    })
},
show: (req, res) => {
    User.findById(req.params.id)
    .then((user) => { //user is an object
        res.render('user/show', {
            user: user // placeholder. The 1st user refers to the 
        })
    })
},

update: (req, res) => {
    User.findByIdAndUpdate(req.params.id)
    .then((user) => {
        res.render('user/update', {
            user: user
        })
    })
},
delete: (req, res) => {
    User.findByIdAndRemove({_id: req.params.id})
    .then(() => {
        res.redirect('/')
    })
}
}


module.exports = userController