const express = require('express')
const router = express.Router()
const empleadoController = require('../controllers/EmpleadosControllers')

router.get('/', empleadoController.getAllEmpleados) // Listado de empleados
router.get('/:id', empleadoController.getEmpleadoById) // Obtener un empleado por ID
router.get('/filter', empleadoController.filterEmpleados) // Filtrar empleados

module.exports = router
