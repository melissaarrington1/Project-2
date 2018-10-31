const Tea = require('../models/Tea');
const User = require('../models/User');
const Mood = require('../models/Moods');

const teasController = {
    index: (req, res) => {
        
        Tea.find().then(teas => {
                res.render('teas/index',{
                    teas: teas
                })
            })
    },
    show: (req, res) => {
        User.findById(req.params.id).populate('tea')
        Tea.findById(req.params.teaId)
        .then((tea) => { //user is an object
            console.log(tea)
            res.render('teas/show', {
                tea: tea // placeholder. The 1st user refers to the 
            })
        })
    }
}

module.exports = teasController