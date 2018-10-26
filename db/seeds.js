const Tea = require('../models/Tea')
const User = require('../models/User')
const Mood = require('../models/Moods')
const mongoose = require('../db/connection')

const greenTea = new Tea({
    typeOfTea: "Green",
    mood: "Refreshing",
    caffiene_content: "Moderate"
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

