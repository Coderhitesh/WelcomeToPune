const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const url = process.env.MongoLink
        await mongoose.connect(url)
        console.log('DataBase is Connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB