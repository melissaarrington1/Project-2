const Tea = require('../models/Tea')
const User = require('../models/User')
const Mood = require('../models/Moods')
const mongoose = require('../db/connection')

const greenTea = new Tea({
    typeOfTea: "Green Tea",
    img: "https://www.healthline.com/hlcmsresource/images/AN_images/AN79-Green_tea_on_wood-732x549-Thumb_0.jpg",
    mood: "Mood: Refreshing",
    caffiene_content: "Caffiene Level: Moderate"
})
const jasmineTea = new Tea({
    typeOfTea: "Jasmine Tea",
    img: "http://aeroastery.com/wp-content/uploads/2012/08/red-flower-jasmine.jpg",
    mood: "Mood: Floral",
    caffiene_content: "Caffiene Level: Moderate"
})
const blackTea = new Tea({
    typeOfTea: "Black Tea",
    img: 'https://cdn.shopify.com/s/files/1/0262/7435/products/Earl_Grey_1280.jpg?v=1527117020',
    mood: "Mood: Energizing",
    caffiene_content: "Caffiene Level: High"
})

const whiteTea = new Tea({
    typeOfTea: "White Tea",
    img: 'https://www.bettys.co.uk/media/catalog/product/cache/1/image/705x705/9df78eab33525d08d6e5fb8d27136e95/y/u/yu-luo-white-tea-2000871_2.jpg',
    mood: "Mood: Uplifting",
    caffiene_content: "Caffiene Level: Low"
})
const oolongTea = new Tea({
    typeOfTea: "Oolong Tea",
    img:'https://www.taiwanteacrafts.com/wp-content/uploads/2015/10/Oriental-Beauty-Premium-Oolong-Tea.jpg',
    mood: "Mood: Energizing",
    caffiene_content: "Caffiene Level: High"
})
const herbalTea = new Tea({
    typeOfTea: "Herbal Tea",
    img: 'https://media.mehrnews.com/d/2017/12/04/4/2653853.jpg',
    mood: "Mood: Mellow",
    caffiene_content: "Caffiene Level: None"
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