const Tea = require('../models/Tea');
const User = require('../models/User');
const Mood = require('../models/Moods');

const userController = {
new: (req, res) => {
    res.render('user/new')
  },

create: (req, res) => {
    User.create(req.body).then((newUser) => {
        res.redirect(`/${newUser._id}`)
    })
}
}



module.exports = userController