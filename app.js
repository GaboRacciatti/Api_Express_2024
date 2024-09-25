require('dotenv').config()// Cargar variables de entorno al inicio
const express = require('express')
const empleadoRoutes = require('./routes/EmpleadoRoutes.js') // Importa el archivo de rutas

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/Empleado', empleadoRoutes)// Usa el router en lugar del controlador

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
