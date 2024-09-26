const express = require('express')
const { getAllAreas, getAreaById, filterArea } = require('../controllers/Area')

const router = express.Router()

router.get('/filter', filterArea) // Obtener un Area por ID
router.get('/', getAllAreas) // Listado de todas las Areas
router.get('/:id', getAreaById) // Obtener un Area por ID

module.exports = router
