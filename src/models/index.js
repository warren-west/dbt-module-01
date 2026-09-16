require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize')
// Create a new connection to the database:
const sequelize = new Sequelize({
    database: process.env.DB_NAME || 'carsdb',
    dialect: process.env.DB_DIALECT || 'mysql',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'admin',
    host: process.env.DB_HOST || 'localhost'
})

// Create some models:
sequelize.define('Car', {
    year: DataTypes.STRING(4),
    brand: DataTypes.STRING(100),
    color: DataTypes.STRING(100),
    odometer: DataTypes.INTEGER,
    manufactureDate: DataTypes.DATEONLY,
}, {
    timestamps: false
})

sequelize.define('Buyer', {
    fullname: DataTypes.STRING(200),
    dob: DataTypes.DATEONLY,
}, {
    timestamps: false
})

module.exports = sequelize