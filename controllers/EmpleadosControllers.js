const axios = require('axios')

const baseURL = process.env.MOCKAPI_BASE_URL

console.log('Mock API Base URL:', baseURL)

exports.getAllEmpleados = async (req, res) => {
  try {
    console.log(`Requesting all empleados from ${baseURL}/Empleado`)
    const response = await axios.get(`${baseURL}/Empleado`)
    console.log('Response data:', response.data)
    res.status(200).json({ status: 'ok', data: response.data })
  } catch (error) {
    console.error('Error fetching empleados:', error)
    res.status(500).json({ status: 'error', msg: 'Error al obtener los empleados' })
  }
}
exports.getEmpleadoById = async (req, res) => {
  const { id } = req.params
  try {
    console.log(`Requesting empleado with ID ${id} from ${baseURL}/Empleado/${id}`)
    const response = await axios.get(`${baseURL}/Empleado/${id}`)
    if (response.data) {
      console.log('Response data:', response.data)
      res.status(200).json({ status: 'ok', data: response.data })
    } else {
      console.log('Empleado not found')
      res.status(404).json({ status: 'error', msg: 'Empleado no encontrado' })
    }
  } catch (error) {
    console.error('Error fetching empleado:', error)
    res.status(500).json({ status: 'error', msg: 'Error al obtener el empleado' })
  }
}

exports.filterEmpleados = async (req, res) => {
  const { sexo, page = 1, limit = 10 } = req.query
  try {
    console.log(`Filtering empleados with sexo=${sexo}, page=${page}, limit=${limit}`)
    const response = await axios.get(`${baseURL}/Empleado`, {
      params: { sexo, page, limit }
    })
    console.log('Response data:', response.data)
    res.status(200).json({ status: 'ok', data: response.data })
  } catch (error) {
    console.error('Error filtering empleados:', error)
    res.status(500).json({ status: 'error', msg:'Error al filtrar los empleados' })
    }
  }
