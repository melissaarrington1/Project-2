const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    favoriteTea: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tea"
        }
    ],
    email: String,
    mood: [
        {
            type: Schema.Types.ObjectId,
            ref: "Mood"
        }
    ]

})

module.exports = mongoose.model('User', User)