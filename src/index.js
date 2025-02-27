// 1. IMPORTS (importamos todas las dependencias con las que vamos a trabajar)

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');


// 2. CREAL EL SERVIDOR

//creamos una constante donde le ponemos el nombre que va a tener mi servidor, como por ejemplo app, server
const server = express();

// 3. CONFIGURAR EL SERVIDOR

//indicamos al servidor que acepte peticiones de cualquier ruta externa (react, html, etc. desde cualquier lado)
server.use(cors());
server.use(express.json({limit:"25mb"}));
server.set("view engine", "ejs");
require('dotenv').config();

async function connectDB(){
    const conex = await mysql.createConnection({
        host: process.env.DATABASE_HOST, //process.env.nombrevariable
        user: process.env.DATABASE_USER, 
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    })
    conex.connect();
    return conex
};

server.get ("/project/list", async (req, res)=>{
  try {
    const connection = await connectDB();
    const sql = 'SELECT proyectos.name AS name, proyectos.slogan AS slogan, proyectos.technologies AS technologies, proyectos.url_github AS repo, proyectos.url_demo AS demo, proyectos.description AS `desc`, proyectos.image AS image, autor.name AS autor, autor.job AS job, autor.photo AS photo FROM proyectos INNER JOIN autor ON autor.id_autor = proyectos.fk_autor';
    const [result] = await connection.query(sql);
    connection.end();
    console.log(result)
    if(result.length === 0) {
        res.status(404).json({
          success: false,
          data: "No se encontraron proyectos",
        });
      } else {
        res.status(200).json({
            success:true,
            data: result,
        })
      }
    
  } catch (error) {
    console.log(error)
      res.status(500).json({
      status:"error",
      message: error,
    });
  }  
    
})

server.post("/newproject", async (req, res)=>{
    try {
        const newProject = req.body;
        console.log(newProject);
        
        const connection = await connectDB();
        
        
        if (newProject && newProject.autor !== "" && newProject.job !== "" && newProject.photo !== "" && newProject.name !== "" && newProject.desc !== "" && newProject.technologies !== "" && newProject.image !== "" && newProject.repo !== "" && newProject.demo !== "" && newProject.slogan !== "") {

          const insertAutora = 'INSERT INTO autor (name, job, photo) VALUE (?, ?, ?)'
          const [resultAutora] = await connection.query(insertAutora, [
              newProject.autor, 
              newProject.job, 
              newProject.photo,
          ]);
          const insertProject = 'INSERT INTO proyectos (name, description, technologies, image, url_github, url_demo, fk_autor, slogan) VALUES (?,?,?,?,?,?,?,?)';
          const [resultProject] = await connection.query(insertProject, [
              newProject.name,
              newProject.desc, 
              newProject.technologies, 
              newProject.image,
              newProject.repo,
              newProject.demo,
              resultAutora.insertId,
              newProject.slogan,
          ])
          connection.end();
          res.status(200).json({
            success: true,
            cardURL: `${process.env.URL_SERVER}/detail/${resultProject.insertId}`,
          })
        }
        
    
    } catch (error) {
        res.status(500).json({
        status:"error",
        message: error.message,
        });
     }
});

server.get('/detail/:id', async (req, res) => {
  try {
    const connection = await connectDB();
    const {id} = req.params;
    const sql = "SELECT proyectos.name AS name, proyectos.slogan AS slogan, proyectos.technologies AS technologies, proyectos.url_github AS repo, proyectos.url_demo AS demo, proyectos.description AS `desc`, proyectos.image AS image, autor.name AS autor, autor.job AS job, autor.photo AS photo FROM proyectos INNER JOIN autor ON autor.id_autor = proyectos.fk_autor WHERE id_proyecto = ?"
    const [result] = await connection.query(sql, [id]);
    connection.end();
    res.render("detail", {project: result[0]})
  } catch (error) {
    
  }
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
server.use(express.static("./css"))