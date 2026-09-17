// 1. Install dependency 'npm i mongoose'
// 2. Import the dependency
const mongoose = require('mongoose')

// Connecting to the MongoDb database
// You can copy the connection string from MongoDb Compass:
// Click on the three dots next to the connection name,
// Click "Copy connection string"
// Paste it here
mongoose.connect('mongodb://localhost:27017/carsdb')
    .then(() => {
        console.log(`Database connected successfully ✅`)
    })
    .catch((error) => {
        console.log(`Database connections error ❌\n${error.message}`)
    })

// 3. Create schemas for models
const carSchema = new mongoose.Schema({
    brand: String,
    year: String,
    odometer: Number,
    color: String,
    isElectric: Boolean,
    manufactureDate: Date,
})

// 3. Create models
const carModel = mongoose.model('cars', carSchema)

// export a db wrapper object that has models connected
const db = {
    car: carModel
}

module.exports = db