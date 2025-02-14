// 1. IMPORTS (importamos todas las dependencias con las que vamos a trabajar)

const express = require('express');
const cors = require('cors');

// 2. CREAL EL SERVIDOR

//creamos una constante donde le ponemos el nombre que va a tener mi servidor, como por ejemplo app, server
const server = express();

// 3. CONFIGURAR EL SERVIDOR

//indicamos al servidor que acepte peticiones de cualquier ruta externa (react, html, etc. desde cualquier lado)
server.use(cors());

//especificamos por qué puerto va a escuchar nuestro servidor, la variable del puerto suele ir en mayúscula
const PORT = 5001;

//especificamos que el servidor está escuchando sobre ese puerto con la función listen que tiene dos parámetros
server.listen(PORT, () => {
    console.log(`Servidor corriendo por http://localhost:${PORT}`)
});

// 4. ENDPOINTS: rutas endpoints --> api // method: get, post, put, delete



//servidor estático
const urlServerStatic = './src/public'; //vamos a buscar desde la carpeta raiz
server.use(express.static(urlServerStatic));