# API de Gestión de Empleados

## Integrante 1: Racciatti Gabriel

## Descripción
Esta API permite la gestión de empleados utilizando **Express** y **Axios** para realizar solicitudes HTTP a un servidor remoto.

Incluye la obtención de todos los empleados, la búsqueda de empleados por ID, y el filtrado de empleados por nombre y sexo.

## Instalación

### Requisitos previos
- [Node.js](https://nodejs.org/) (versión 12 o superior)
  
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)

### Pasos para instalar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/GaboRacciatti/Api_Express_2024
2. Instalar las dependencias
    ```bash
    npm install
3. Iniciar la aplicación en modo desarrollo:
    ```bash
    npm run dev
4. Ejecutar el linter:
   ```bash
   npm run lint

## Dependencias
#### axios: ^1.7.7 - Cliente HTTP basado en promesas para el navegador y Node.js.

#### dotenv: ^16.4.5 - Carga variables de entorno desde un archivo .env.

#### express: ^4.21.0 - Framework para crear servidores web en Node.js.

#### standard: ^17.1.2 - Herramienta de linting para mantener el código consistente y limpio.

#### husky: ^9.1.6 - Pre-commit hooks para automatizar tareas como linting.

## Endpoints

### 1. Obtener todos los empleados

Descripción: Devuelve una lista de todos los empleados.

Método: GET

Ruta: http://localhost:3000/api/v1/Empleado

Respuesta:

   ```bash
      {
        "status": "ok",
        "data": [
          {
            "id": 1,
            "nombre": "Juan Pérez",
            "sexo": "male"
          },
          ...
        ]
      }
```
Errores:
   ```bash
{
  "status": "error",
  "msg": "Error al obtener los empleados"
}
```
### 2. Obtener empleado por ID

Descripción: Devuelve los datos de un empleado específico por su ID.

Método: GET

Ruta:http://localhost:3000/api/v1/Empleado/:id

Parámetros:

id (obligatorio): El ID del empleado que se desea obtener.

Respuesta:

   ```bash
   {
  "nombre": "Joyce",
  "puesto": "Central Optimization Consultant",
  "sexo": "female",
  "id": "1"
   }
```
Errores:
Si el empleado no existe:
   ```bash

{
  "status": "error",
  "msg": "Empleado no encontrado"
}
```
Error del servidor:
   ```bash
{
  "status": "error",
  "msg": "Error al obtener el empleado"
}
 ```
### 3. Filtrar empleados por nombre y sexo
Descripción: Filtra los empleados por nombre o sexo. Si no se proporcionan parámetros, devuelve un error.

Método: GET

Ruta: http://localhost:3000/api/v1/Empleado/filter

Parámetros de consulta (query):
El primero debe ser: 
# ?
los siguientes:
# &

nombre (opcional): Filtra empleados cuyo nombre coincide con el valor proporcionado.

sexo (opcional): Filtra empleados por sexo. Los valores aceptados son male y female.

Ejemplo de URL:

http://localhost:3000/api/v1/Empleado/filter?nombre=Joyce

Respuesta:

   ```bash
[
  {
    "nombre": "Joyce",
    "puesto": "Central Optimization Consultant",
    "sexo": "female",
    "id": "1"
  }
]
```
Errores:

Si se proporciona un valor inválido para sexo:

   ```bash
{
  "status": "error",
  "msg": "El parámetro sexo debe ser 'male' o 'female'"
}
```
Si no se proporcionan parámetros de filtrado:

   ```bash
{
  "status": "error",
  "msg": "Error al enviar los filtros"
}
```





 




      

# API de Gestión de Areas

## Integrante 2: Alvarez Moreno Agustin 

## Descripción
Esta API permite la gestión de Areas utilizando **Express** y **Axios** para realizar solicitudes HTTP a un servidor remoto.

Incluye la obtención de todas las Areas, la búsqueda de area por ID, y el filtrado de areas por nombre y cantidad de empleados.

## Endpoints

### 1. Obtener todas las areas

Descripción: Devuelve una lista de todas las areas.

Método: GET

Ruta: http://localhost:3000/api/v1/Area

Respuesta:

   ```bash
      {
"name": "Global Factors Liaison",
"cantEmpleadosArea": 56,
"id": "1"
},
          ...
        ]
      }
```
Errores:
   ```bash
{
  "status": "error",
  "msg": "Error al obtener las areas"
}
```
### 2. Obtener area por ID

Descripción: Devuelve los datos de un area específica por su ID.

Método: GET

Ruta:http://localhost:3000/api/v1/Empleado/:id

Parámetros:

id (obligatorio): El ID del area que se desea obtener.

Respuesta:

   ```bash
   "name": "Global Factors Liaison",
"cantEmpleadosArea": 56,
"id": "1"
}
```
Errores:
Si el area no existe:
   ```bash

{
  "status": "error",
  "msg": "Area no encontrada"
}
```
Error del servidor:
   ```bash
{
  "status": "error",
  "msg": "Error al obtener el area"
}
 ```
### 3. Filtrar area por cantidad de empleados
Descripción: Filtra el area por cantidad de empleados. Si no se proporcionan parámetros, devuelve un error.

Método: GET

Ruta: http://localhost:3000/api/v1/Empleado/filter

Parámetros de consulta (query):
El primero debe ser: 
# ?
los siguientes:
# &

nombre (opcional): Filtra area cuyo nombre coincide con el valor proporcionado.

cantidad de empleados (opcional): Filtra area por cantidad de empleados.

Ejemplo de URL:

http://localhost:3000/api/v1/Empleado/filter?name=Product Web Strategist

Respuesta:

   ```bash
[
  {
  "name": "Product Web Strategist",
  "cantEmpleadosArea": 17,
  "id": "5"
  },
]
```
Errores:

Si se proporciona un valor inválido cantidad de empleados:

   ```bash
{
  "status": "error",
  "msg": "Error al enviar los filtros"
}
```
Si no se proporcionan parámetros de filtrado:

   ```bash
{
  "status": "error",
  "msg": "Error al enviar los filtros"
}
```
      
