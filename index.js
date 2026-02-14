// asigna el puerto

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());//middlewere
app.use(express.static('public'));//middleware para la ruta del css

const dias = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sabado'];

//Petición GET  para fecha y hora
app.get('/', (req, res) => {
  const now = new Date();
  const diaNombre = dias[now.getDay()];
  const diaNumero = now.getDate();
  const mes = now.getMonth() + 1; // empieza en 0
  const año = now.getFullYear();
  const hora = now.getHours();
  const minutos = now.getMinutes();
  const segundos = now.getSeconds();

  res.setHeader('Content-Type', 'text/html');

  res.send(`
    <html>
   <head>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Fecha y Hora del Servidor</h1>
        <p>${diaNombre}, ${diaNumero}/${mes}/${año}</p>
        <p>${hora}:${minutos}:${segundos}</p>
      </body>
    </html>
  `);
  });

 // palabra aleatoria 3-10 letras con GET
 
const palabras = ['Casa', 'Perro','Selva','Carniceria', 'Gato', 'Libro', 'Sol', 'Luna', 'Estrella','Sal','Aji','Chocolate','Peluqueria'];

app.get('/random-data', (req, res) => {
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];

  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
    <head>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Palabra Aleatoria</h1>
        <p>${palabra}</p>
      </body>
    </html>
  `);
});
 
//número aleatorio entre 10 y 50,000 con PUT
app.put('/random-data', (req, res) => {
  const numero = Math.floor(Math.random() * (50000 - 10 + 1)) + 10;

  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
      <body>
        <h1>Número Aleatorio</h1>
        <p>${numero}</p>
      </body>
    </html>
  `);
});

// respuesta estándar otros metodos HTTP
app.all('/random-data', (req, res) => {
  if (req.method !== 'GET' && req.method !== 'PUT') {
    res.setHeader('Content-Type', 'text/plain');
    res.send(`Aún no estoy preparado para responder al método ${req.method}`);
  }
});
  
//inicia el servidor

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

