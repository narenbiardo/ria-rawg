# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)








● Diseño del sistema y descripción de tecnologías 

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

ponemos un nombre, una dirección random y una descripción cualquiera y le damos a submit,

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria4.jpg" alt="accesibility text">

y finalmente vamos a tener nuestra key en el apartado “API key”.

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria5.jpg" alt="accesibility text">

Una vez obtenida la key debemos pegarla dentro de la aplicación en “src/services/games.js” en la línea 12 (donde dice const API = “Pegar nuestra key”;).

<img src="https://github.com/narenbiardo/ria-rawg/blob/main/imgRia/Ria6.jpg" alt="accesibility text">

Mock ups:
https://www.figma.com/file/JQbP20Z5c4a8MRV4YKIJf5/Untitled?node-id=0%3A1
