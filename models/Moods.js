const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Mood = new Schema({
    mood: String,
    energy_level: String
})

module.exports = mongoose.model('Mood', Mood)