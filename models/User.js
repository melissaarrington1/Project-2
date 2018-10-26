const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    favoriteTea: String,
    email: String,
    mood: [
        {
            type: Schema.Types.ObjectId,
            ref: "Mood"
        }
    ]
})

module.exports = mongoose.model('User', User)