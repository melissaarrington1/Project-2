const Tea = require('../models/Tea');
// const User = require();
const Mood = require('../models/Moods');

const teasController = {
    index: (req, res) => {
        const teaId = req.params.teaId
        Tea.findById(teaId).populate('teas')
        .then(tea => {
            console.log("TEA IS HERE", tea)
            const teas = Tea.teas
            res.send(teas)
        })
        Tea.find({})
        .then(teas => {
            res.send(teas)
        })
    }
}

module.exports = teasController