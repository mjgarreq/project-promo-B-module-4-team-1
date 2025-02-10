## Hola! acabas de llegar a nuestro proyecto del modulo 3, utilizando REACT!

### En este proyecto vamos a realizar una aplicación web que nos permite crear una página para hablar sobre un proyecto personal o un proyecto que nos mole mucho. En la página web podemos introducir los datos del proyecto y obtener una vista maquetada con esta información.

##### En el desarrollo de esta aplicación web usaremos las siguientes tecnologías:

*Uso de mediaqueries para que el diseño sea adaptable al dispositivo.
*Uso de React para la estructuración en componentes de la aplicación.
*Uso de git para el control de versiones del proyecto, con ramas y pull-requests para revisar los cambios de las compañeras.

##### Funcionaiento

La aplicación debe permitir a la usuaria introducir la información en un formulario y que este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta con información del proyecto.

## Planificación del proyecto
### Sprints
Para la realización de este proyecto se ha trabajado en 2 sprints de 5 sesiones cada uno. Siguiendo los principios ágiles se establecieron pequeños ciclos iterativos de forma que al final de cada uno se generó valor perceptible para nuestros usuarios (los visitantes de la web). El primer día se dedicó a la planificación del sprint (sprint planning) y el resto a trabajar en el desarrollo del proyecto. Se creó el tablero del proyecto y se definieron las tareas principales y los working agreements. Al final de cada sprint se hizo una demo del proyecto para presentar los resultados conseguidos, y una retrospectiva (retro) para evaluar el trabajo en equipo y mejorar en el siguiente sprint.

## Instalación
Dentro de nuestro archivo de trabajo abrir una terminal BASH y clonar el repositorio de github.
Comprobar que estamos en la ruta del directorio adecuada. Posteriormente instalar las dependencias "node_modules" para la ejecución del framework Vite, e iniciar el proyecto. 


Clonar repositorio:
~~~
$ git clone [jacquelinlopez/project-promo-B-module-3-team-1](https://github.com/jacquelinlopez/project-promo-B-module-3-team-1)
~~~
Ruta directorio:
~~~
$ cd ../path/to/the/file
~~~
Instalación dependencias:
~~~
$ npm install 
~~~
Iniciar proyecto:
~~~
$ npm run dev
~~~
## Publicación 
En la terminal BASH introducimos los comandos:
1. Generar la página para producción. 
~~~
$ npm run build
~~~
2. Subir el repositorio a la carpeta `docs/` que se acaba de generar.
Se puede usar el comando siguiente para hacer los dos pasos anteriores de una vez:
~~~
$ npm run push-docs
~~~
3. Entrar en la pestaña `settings` del repositorio.
4. En el apartado de GitHub Pages activar la opción **master branch /docs folder**.



