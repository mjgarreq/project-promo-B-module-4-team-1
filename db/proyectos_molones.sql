CREATE DATABASE proyectos_molones;
USE proyectos_molones;
CREATE TABLE proyectos(
name VARCHAR(100) not null,
description TEXT not null, 
technologies VARCHAR(200) not null, 
image TEXT not null, 
url_github VARCHAR(1000) not null, 
url_demo VARCHAR(1000) not null
);

CREATE TABLE autor(
id_autor INT auto_increment primary key not null,
name VARCHAR(100) not null,
job VARCHAR(100) not null,
photo TEXT not null, 
description TEXT not null
);
ALTER TABLE proyectos ADD id_proyecto INT auto_increment primary key not null FIRST;