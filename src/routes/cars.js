const router = require('express').Router()

const sequelize = require('../models')

// get all cars
router.get('/', async (req, res) => {
    try {
        // perform the fetch (remember AWAIT!)
        const results = await sequelize.models.Car.findAll()
        res.json({ status: "success", data: results })
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

// get car by ID
router.get('/:id', async (req, res) => {
    try {
        const carId = req.params.id

        if (!carId || isNaN(carId)) {
            res.status(400).json({ status: "error", message: `Invalid Car ID.` })
            return
        }

        // perform the fetch (remember AWAIT!)
        const result = await sequelize.models.Car.findByPk(carId)

        if (!result) {
            res.status(404).json({ status: "error", message: `Car with id = ${carId} not found.` })
            return
        }

        res.json({ status: "success", data: result })
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

// add new car to the DB
router.post('/', async (req, res) => {
    try {
        // perform the insert (remember AWAIT!)
        const result = await sequelize.models.Car.create(req.body)

        res.status(201).json({ status: "success", data: result })
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

// update a car by ID
router.put('/:id', async (req, res) => {
    try {
        const carId = req.params.id

        // 400
        if (!carId || isNaN(carId)) {
            res.status(400).json({ status: "error", message: "Car ID is invalid." })
            return
        }

        // perform the update (remember AWAIT!)
        const result = await sequelize.models.Car.update(req.body, { where: { id: carId } })

        // 404
        if (result[0] === 0 || !result) {
            res.status(404).json({ status: "success", message: `Car with ID = ${carId} not found.` })
            return
        }

        // success
        res.status(204).json()
        return

    } catch (error) {
        // 500
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

// delete a car by ID
router.delete('/:id', async (req, res) => {
    try {
        const carId = req.params.id

        if (isNaN(carId) || !carId) {
            // 400
            res.status(400).json({ status: "error", message: "Invalid Car ID." })
            return
        }

        // perform the delete (remember AWAIT!)
        const result = await sequelize.models.Car.destroy({ where: { id: carId } })

        if (!result || result === 0) {
            // 404
            res.status(404).json({ status: "error", message: `Car with ID ${carId} not found.` })
            return
        }

        // success
        res.status(204).json()
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

module.exports = router