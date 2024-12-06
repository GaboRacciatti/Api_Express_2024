const axios = require('axios')

const baseURL = process.env.MOCK_API_URL_EMPLEADOS

exports.getAllEmpleados = async (req, res) => {
  try {
    console.log('obteniendo todos los empleados')
    const response = await axios.get(`${baseURL}/Empleado`)
    console.log('Response data:', response.data)
    res.status(200).json({ status: 'ok', data: response.data })
  } catch (error) {
    console.error('Error obteniendo los empleados:', error) // hago un console.log para conocer el error en caso de que se presente
    res.status(500).json({ status: 'error', msg: 'Error al obtener los empleados' })
  }
}
exports.getEmpleadoById = async (req, res) => {
  const { id } = req.params
  try {
    console.log(`obteniendo todos los empleados con ID ${id} desde ${baseURL}/Empleado/${id}`)
    const response = await axios.get(`${baseURL}/Empleado/${id}`)
    if (response.data) {
      console.log('Response data:', response.data)
      res.status(200).json({ status: 'ok', data: response.data })
    } else {
      res.status(404).json({ status: 'error', msg: 'Empleado no encontrado' })
    }
  } catch (error) {
    console.error('Error obteniendo empleado:', error) // hago un console.log para conocer el error en caso de que se presente
    res.status(500).json({ status: 'error', msg: 'Error al obtener el empleado' })
  }
}

exports.filterEmpleados = async (req, res) => {
  const { nombre = '', sexo = '' } = req.query

  const validSexos = ['male', 'female'] // validar el sexo de los empleados
  if (sexo && !validSexos.includes(sexo)) {
    res.status(400).json({ status: 'error', msg: 'El parámetro sexo debe ser "male" o "female"' })
    return
  }

  try {
    if (nombre === '' && sexo === '') { // si no se proporciona nombre ni sexo, se devuelven todos los empleados
      res.status(401).json({ status: 'error', msg: 'Error al enviar los filtros' })
      return
    }

    let filtros = '' // si se proporciona nombre o sexo, se filtran los empleados
    let operador = '?'

    if (nombre !== '') {
      filtros += `${operador}nombre=${encodeURIComponent(nombre)}` // encodeURIComponent convierte el nombre en una cadena codificada
      operador = '&'
    }

    if (sexo !== '') {
      filtros += `${operador}sexo=${encodeURIComponent(sexo)}`
    }

    const url = `${baseURL}/Empleado${filtros}`
    console.log(`Filtrando empleados con nombre=${nombre} y sexo=${sexo} desde ${url}`) // CONSOLE.LOG PARA VERIFICAR EL FILTRO
    const response = await axios.get(url)
    res.status(200).json({ status: 'ok', data: response.data })
  } catch (error) {
    console.error('Error filtrando empleados:', error)
    res.status(500).json({ status: 'error', msg: 'Error al filtrar los empleados', error })
  }
}
