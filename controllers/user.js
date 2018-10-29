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
show: (req, res) => {
    User.findById(req.params.id)
    .then((user) => { //user is an object
        res.render('user/show', {
            user: user // placeholder. The 1st user refers to the 
        })
    })
}
}


module.exports = userController