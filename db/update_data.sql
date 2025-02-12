INSERT INTO freedb_proyectosMolonesB2025.autor (name, job,photo)
VALUES ("Anacleta", "Fullstack Developer","https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826"),
("Petra" , "Backend Developer","https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826"),
("Maria" , "Frontend Developer", "https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826"),
("Lucia", "UX/UI","https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826");

INSERT INTO freedb_proyectosMolonesB2025.proyectos(name, description, technologies, image, url_github, url_demo)
VALUES ("PixelCraft", "Una plataforma interactiva para artistas digitales que permite crear, compartir y vender obras en formato pixel art", "React, Firebase, TailwindCSS, Node.js","https://img.freepik.com/vector-gratis/companeros-piso-comenzando-proyecto-empresarial_23-2148857003.jpg","https://adalab.es/","https://adalab.es/"),
("CodeSphere", "Un sistema de gestión de tareas para equipos de desarrollo, con integración de seguimiento de errores y control de versiones.", "Vue.js, Express.js, PostgreSQL, Docker","https://d2fl3xywvvllvq.cloudfront.net/wp-content/uploads/2019/10/nutcache-image-2-600x360.jpg","https://adalab.es/","https://adalab.es/"),
("GreenTrail", "Una aplicación móvil para excursionistas que ofrece mapas interactivos, seguimiento de rutas y alertas de clima en tiempo real", "Flutter, Google Maps API, GraphQL, AWS Lambda.","https://media.istockphoto.com/id/1423812541/es/vector/gesti%C3%B3n-de-proyectos-plan-estrat%C3%A9gico-para-administrar-recursos-para-el-desarrollo-proceso.jpg?s=612x612&w=0&k=20&c=joeJiCynQuczSkUXdu6m7oaUSTy4LN7RfVfLbq1wv6U=","https://adalab.es/","https://adalab.es/"),
("DataBridge", "Un dashboard empresarial para conectar fuentes de datos en tiempo real, analizar KPIs y generar informes dinámicos.", "Angular, D3.js, MongoDB, Kubernetes.","https://educatics.ar/wp-content/uploads/proyectos-finales-exitosos.jpg","https://adalab.es/","https://adalab.es/");

UPDATE freedb_proyectosMolonesB2025.autor SET photo = "https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2876.jpg?t=st=1739273301~exp=1739276901~hmac=76eb3a0906e0b8412bbf5536d4cf08808ecf7927518171de26f79820ca1b9ac7&w=826";
SELECT * FROM freedb_proyectosMolonesB2025.autor;
SELECT * FROM freedb_proyectosMolonesB2025.proyectos;

SELECT *
FROM freedb_proyectosMolonesB2025.proyectos, freedb_proyectosMolonesB2025.autor
WHERE autor.id_autor = proyectos.fk_autor;

