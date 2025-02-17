// 1. IMPORTS (importamos todas las dependencias con las que vamos a trabajar)

const express = require('express');
const cors = require('cors');

// 2. CREAL EL SERVIDOR

//creamos una constante donde le ponemos el nombre que va a tener mi servidor, como por ejemplo app, server
const server = express();

// 3. CONFIGURAR EL SERVIDOR

//indicamos al servidor que acepte peticiones de cualquier ruta externa (react, html, etc. desde cualquier lado)
server.use(cors());
server.use(express.json());

const projectsList =[

    {
        name: "PixelCraft",
        slogan: "Una plataforma interactiva para artistas digitales que permite crear, compartir y vender obras en formato pixel art",
        technologies:"React, Firebase, TailwindCSS, Node.js",
        repo:"https://adalab.es/",
        demo:"https://adalab.es/",
        desc:"Una plataforma interactiva para artistas digitales que permite crear, compartir y vender obras en formato pixel art",
        autor:"Anacleta",
        job:"Fullstack Developer",
        image:"https://img.freepik.com/vector-gratis/companeros-piso-comenzando-proyecto-empresarial_23-2148857003.jpg",
        photo: "https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826",
    },
    {
        name: "CodeSphere",
        slogan: "Un sistema de gestión de tareas para equipos de desarrollo, con integración de seguimiento de errores y control de versiones.",
        technologies:"Vue.js, Express.js, PostgreSQL, Docker",
        repo:"https://adalab.es/",
        demo:"https://adalab.es/",
        desc:"Un sistema de gestión de tareas para equipos de desarrollo, con integración de seguimiento de errores y control de versiones.",
        autor:"Petra",
        job:"Backend Developer",
        image:"https://d2fl3xywvvllvq.cloudfront.net/wp-content/uploads/2019/10/nutcache-image-2-600x360.jpg",
        photo: "https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826",
    },
    {
        name: "GreenTrail",
        slogan: "Una aplicación móvil para excursionistas que ofrece mapas interactivos, seguimiento de rutas y alertas de clima en tiempo real",
        technologies:"Flutter, Google Maps API, GraphQL, AWS Lambda",
        repo:"https://adalab.es/",
        demo:"https://adalab.es/",
        desc:"Una aplicación móvil para excursionistas que ofrece mapas interactivos, seguimiento de rutas y alertas de clima en tiempo real",
        autor:"Maria",
        job:"Frontend Developer",
        image:"https://media.istockphoto.com/id/1423812541/es/vector/gesti%C3%B3n-de-proyectos-plan-estrat%C3%A9gico-para-administrar-recursos-para-el-desarrollo-proceso.jpg?s=612x612&w=0&k=20&c=joeJiCynQuczSkUXdu6m7oaUSTy4LN7RfVfLbq1wv6U=",
        photo: "https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826",
    },
    {
        name: "DataBridge",
        slogan: "Un dashboard empresarial para conectar fuentes de datos en tiempo real, analizar KPIs y generar informes dinámicos.",
        technologies:"Angular, D3.js, MongoDB, Kubernetes",
        repo:"https://adalab.es/",
        demo:"https://adalab.es/",
        desc:"Un dashboard empresarial para conectar fuentes de datos en tiempo real, analizar KPIs y generar informes dinámicos.",
        autor:"Lucia",
        job:"UX/UI",
        image:"https://educatics.ar/wp-content/uploads/proyectos-finales-exitosos.jpg",
        photo: "https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826",
    }
]

server.get ("/project/list", (req, res)=>{
  
    res.json({
        success:true,
        data: projectsList
    })
})

server.post("/newproject", (req, res)=>{
    const newData = req.body;
    projectsList.push(newData);
    res.status(200).json({
        success: true,
        message: "Proyecto añadido con éxito",
        data: projectsList,
    })
})


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