Integrantes:
Leonardo Arbelo 
Naren Biardo 
Gonzalo Cánepa

Para realizar el segundo laboratorio primero estuvimos indagando entre distintas apis hasta que nos decidimos por una la cual tiene una gran base de datos sobre videojuegos, mostrándonos información, imágenes, trailers, entre otras cosas de una gran cantidad de juegos de distintas consolas. Lamentablemente la api es paga pero tiene una versión gratuita la cual a pesar de ser limitada aún así nos permite manejar mucha información de los juegos.

La aplicación la decidimos hacer en React-Bootstrap ya que es la tecnología que más nos convenció para el caso (además de ser una de las más populares).


Para comenzar a utilizar la aplicación debemos descargar el fichero del git, paso seguido abrirlo con la terminal (o con la terminal del Visual Studio Code) y ejecutar el comando “npm install react-scripts” .

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria1.jpg">

Ahora para ejecutar el programa sólo hace falta ejecutar el comando “npm start” en la consola.

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria2.jpg" alt="accesibility text">

Ésto va a abrir en un navegador la aplicación web pero sin datos cargados, ya que faltaría cargarle una clave.

Para conseguir una clave vamos a tener que ir al sitio web de la api “https://rawg.io” y registrarnos.

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria3.jpg" alt="accesibility text">


Luego de registrados entramos al menú de arriba a la derecha y le damos al botón “Get an API key”,

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria4.jpg" alt="accesibility text">

ponemos un nombre, una dirección random y una descripción cualquiera y le damos a submit,

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria5.jpg" alt="accesibility text">

y finalmente vamos a tener nuestra key en el apartado “API key”.

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria6.jpg" alt="accesibility text">

Una vez obtenida la key debemos pegarla dentro de la aplicación en “src/services/games.js” en la línea 12 (donde dice const API = “Pegar nuestra key”;).

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria7.jpg" alt="accesibility text">

Mock ups:
https://www.figma.com/file/JQbP20Z5c4a8MRV4YKIJf5/Untitled?node-id=0%3A1
