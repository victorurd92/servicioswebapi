const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos (HTML, CSS, imágenes, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Render maneja todas las rutas desconocidas devolviendo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
