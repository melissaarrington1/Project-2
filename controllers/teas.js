const Tea = require('../models/Tea');
const User = require('../models/User');
const Mood = require('../models/Moods');

const teasController = {
    index: (req, res) => {
        
        Tea.find().then(teas => {
                res.render('teas/index', {
                    teas: teas
                })
            })
    },
    show: (req, res) => {
        User.findById(req.params.id)
        .then((user) => { //user is an object
            res.render('teas/show', {
                user: user // placeholder. The 1st user refers to the 
            })
        })
    }
}

module.exports = teasController