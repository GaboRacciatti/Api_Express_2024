const express = require('express')
const empleadoRoutes = require('../routes/EmpleadoRoutes')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000

    this.middlewares()

    this.rutas()
  }

  middlewares () {
    this.app.use(express.json())
  }

  rutas () {
    this.app.use('/api/v1/Empleado', empleadoRoutes)
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API está escuchando en http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
