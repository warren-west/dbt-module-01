const router = require('express').Router()

const sequelize = require('../models')

// get all buyers
router.get('/', async (req, res) => {
    try {
        const results = await sequelize.models.Buyer.findAll()
        res.json({ status: "success", data: results })
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

// get buyer by ID
router.get('/:id', async (req, res) => {
    try {
        const buyerId = req.params.id

        if (!buyerId || isNaN(buyerId)) {
            res.status(400).json({ status: "error", message: `Invalid Buyer ID.` })
            return
        }

        const result = await sequelize.models.Buyer.findByPk(buyerId)

        if (!result) {
            res.status(404).json({ status: "error", message: `Buyer with id = ${buyerId} not found.` })
            return
        }

        res.json({ status: "success", data: result })
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

// add new buyer to the DB
router.post('/', async (req, res) => {
    try {
        const result = await sequelize.models.Buyer.create(req.body)

        res.status(201).json({ status: "success", data: result })
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

// update a buyer by ID
router.put('/:id', async (req, res) => {
    try {
        const buyerId = req.params.id

        if (!buyerId || isNaN(buyerId)) {
            res.status(400).json({ status: "error", message: "Buyer ID is invalid." })
            return
        }

        const result = await sequelize.models.Buyer.update(req.body, { where: { id: buyerId } })

        if (result[0] === 0 || !result) {
            res.status(404).json({ status: "error", message: `Buyer with ID = ${buyerId} not found.` })
            return
        }

        res.status(204).json()
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

// delete a buyer by ID
router.delete('/:id', async (req, res) => {
    try {
        const buyerId = req.params.id

        if (isNaN(buyerId) || !buyerId) {
            res.status(400).json({ status: "error", message: "Invalid Buyer ID." })
            return
        }

        const result = await sequelize.models.Buyer.destroy({ where: { id: buyerId } })

        if (!result || result === 0) {
            res.status(404).json({ status: "error", message: `Buyer with ID ${buyerId} not found.` })
            return
        }

        res.status(204).json()
        return

    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error" })
        return
    }
})

module.exports = router
