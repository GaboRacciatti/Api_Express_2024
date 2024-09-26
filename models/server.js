const express = require('express')
const empleadoRoutes = require('../routes/EmpleadoRoutes')
const AreaRoutes = require('../routes/Area')

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
    this.app.use('/api/v1/Area', AreaRoutes)
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API está escuchando en http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
