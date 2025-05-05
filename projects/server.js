// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos compilados
app.use(express.static(path.join(__dirname, 'dist/remote')));

// Enruta todo al index.html (HTML5 pushState)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/remote', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Remote app listening on port ${PORT}`);
});
