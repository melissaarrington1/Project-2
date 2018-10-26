const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Tea = new Schema({
    typeOfTea: String,
    mood: String,
    caffiene_content: String
})

module.exports = mongoose.model('Tea', Tea)