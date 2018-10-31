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
        User.find({}).then((users) => {
            res.render('user/index', {
                users: users
            })
        })
    },
    show: (req, res) => {
        console.log(req.params.id)
        User.findById(req.params.id).populate('tea')
            .then(user => { //user is an object
                console.log(user)
                res.render('user/show', {
                    user: user // placeholder. The 1st user refers to the 
                })
            })
    },

    edit: (req, res) => {
        User.findById(req.params.id).then(user => {
            res.render('user/edit', 
            {
                user: user
            })
        })
    },

    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body)
            .then((userUpdated) => {
                res.render(`user/${userUpdated._id}`, {
                    user: user
                })
            })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.id)
            .then((user) => {
                res.redirect('/')
            })
    }
}


module.exports = userController