const Tea = require('../models/Tea')
const User = require('../models/User')
const Mood = require('../models/Moods')
const mongoose = require('../db/connection')

const greenTea = new Tea({
    typeOfTea: "Green",
    mood: "Refreshing",
    caffiene_content: "Moderate"
})
const jasmineTea = new Tea({
    typeOfTea: "Green"
    
})
const blackTea = new Tea({
    typeOfTea:"Black",
    mood: "Energizing",
    caffiene_content: "High"
})

const whiteTea = new Tea({
    typeOfTea: "White",
    mood: "Uplifting",
    caffiene_content: "Low"
})
const oolongTea = new Tea({
    typeOfTea: "Oolong",
    mood: "Energizing",
    caffiene_content: "High"
})
const herbalTea = new Tea({
    typeOfTea: "Herbal",
    mood: "Mellow",
    caffiene_content: "None"
})
const energized = new Mood({
    typeOfTea: [
        "blackTea", 
        "oolongTea"
    ]
})
const relaxed = new Mood({
    typeOfTea: [
        "whiteTea",
        "greenTea",
        "herbalTea"
    ]
})
const refreshed = new Mood({
    typeOfTea: "greenTea"
})

const user = new User({
    email: 'melissa@yahoo.com',
    favoriteTea: [greenTea, blackTea, whiteTea, oolongTea, herbalTea, jasmineTea],
    mood: [refreshed, relaxed, energized]
})

User.remove({})
    .then(() => Tea.remove({}))
    .then(() => Mood.remove({}))
    .then(() => Tea.insertMany([greenTea, blackTea, whiteTea, oolongTea, herbalTea, jasmineTea]))
    .then(() => Mood.insertMany([energized, relaxed, refreshed]))
    .then(() => user.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())