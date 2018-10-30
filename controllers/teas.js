const Tea = require('../models/Tea');
// const User = require();
const Mood = require('../models/Moods');

const teasController = {
    index: (req, res) => {
        
        Tea.find().then(teas => {
                res.render('teas/index', {
                    teas: teas
                })
            })
    }
}

module.exports = teasController