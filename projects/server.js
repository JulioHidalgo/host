// server.js
const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_FOLDER = path.join(__dirname, 'dist/host'); // <- Ajusta "host" si tu outputPath es distinto

// Middleware de seguridad
app.use(helmet());

// Gzip compression para todos los assets estáticos
app.use(compression());

// Logging de peticiones HTTP
app.use(morgan('combined'));

// Servir los archivos compilados de Angular
app.use(express.static(DIST_FOLDER, {
  maxAge: '1y',         // cache en navegador
  etag: false
}));

// Fallback: todas las rutas van al index.html (HTML5 pushState)
app.get('/*', (req, res) => {
  res.sendFile(path.join(DIST_FOLDER, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Host app listening on port ${PORT}`);
});
