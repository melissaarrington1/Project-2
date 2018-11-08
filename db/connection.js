
const mongoose = require('mongoose');

require('dotenv').config();
// mongoose.connect('mongodb://localhost/teatree') 
// mongoose.connection.once('open', () => {
//     console.log(`Mongoose has connected to MongoDB`)
// })
mongoose.connect(process.env.MONGODB_URI).then(() => {
console.log('Connected to MongoDB')})

module.exports = mongoose