const express = require('express')
const router = express.Router()
const empleadoController = require('../controllers/EmpleadosControllers')
// rutas gabriel racciatti
router.get('/filter', empleadoController.filterEmpleados)
router.get('/', empleadoController.getAllEmpleados)
router.get('/:id', empleadoController.getEmpleadoById)

module.exports = router
