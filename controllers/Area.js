const axios = require('axios')

const baseURL = 'https://66d9de7f4ad2f6b8ed564dbf.mockapi.io'

const getAllAreas = async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/Area`)
    res.status(200).json({
      status: 'ok',
      data: response.data
    })
  } catch (error) {
    console.error('Error fetching areas:', error)
    res.status(500).json({
      status: 'error',
      msg: 'Error al obtener las áreas'
    })
  }
}

const getAreaById = async (req, res) => {
  const { id } = req.params
  try {
    const response = await axios.get(`${baseURL}/Area/${id}`)
    if (response.data) {
      res.status(200).json({
        status: 'ok',
        data: response.data
      })
    } else {
      res.status(404).json({
        status: 'error',
        msg: 'Área no encontrada'
      })
    }
  } catch (error) {
    console.error('Error fetching area:', error)
    res.status(500).json({
      status: 'error',
      msg: 'Error al obtener el área',
      error
    })
  }
}

const filterArea = async (req, res) => {
  const { name = '', cantEmpleadosArea = null } = req.query

  try {
    if (name === '' && cantEmpleadosArea === null) {
      res.status(401).json({ status: 'error', msg: 'Error al enviar los filtros' })
      return
    }

    let filtros = ''
    let operador = '?'

    if (name !== '') {
      filtros += `${operador}name=${encodeURIComponent(name)}`
      operador = '&'
    }

    if (cantEmpleadosArea !== null) {
      filtros += `${operador}cantEmpleadosArea=${cantEmpleadosArea}`
    }

    const url = `${baseURL}/Area${filtros}`
    console.log(`Filtrando empleados con nombre=${name} y cantEmpleadosArea=${cantEmpleadosArea} desde ${url}`) // CONSOLE.LOG PARA VERIFICAR EL FILTRO
    const response = await axios.get(url)
    res.status(200).json({ status: 'ok', data: response.data })
  } catch (error) {
    console.error('Error filtrando empleados:', error)
    res.status(500).json({ status: 'error', msg: 'Error al filtrar los empleados' })
  }
}

module.exports = {
  getAllAreas,
  getAreaById,
  filterArea
}
