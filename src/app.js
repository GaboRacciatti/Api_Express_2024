require('dotenv').config()// Cargar variables de entorno al inicio
const express = require('express')
const empleadosController = require('./controllers/EmpleadosControllers')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/empleados', empleadosController)

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
