// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// -------- Config Básica --------
const PORT = process.env.PORT || 3000;
// data.json debe estar en la RAÍZ del repo (mismo nivel que server.js)
const DATA_PATH = path.join(__dirname, 'data.json');

// Desactivar caché para evitar archivos viejos en Render
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// Servir archivos estáticos desde /public
app.use(
  express.static(path.join(__dirname, 'public'), {
    etag: false,
    lastModified: false,
    cacheControl: false,
    extensions: ['html']
  })
);

// -------- Endpoints API --------

// Salud para Render
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

// Devuelve el contenido de data.json
app.get('/data.json', (_req, res) => {
  fs.readFile(DATA_PATH, 'utf8', (err, text) => {
    if (err) {
      console.error('No se pudo leer data.json:', err);
      return res.status(500).json({ error: 'DATA_NOT_FOUND' });
    }
    try {
      const json = JSON.parse(text);
      return res.json(json);
    } catch (e) {
      console.error('JSON inválido en data.json:', e);
      return res.status(500).json({ error: 'DATA_BAD_JSON' });
    }
  });
});

// Cualquier otra ruta -> index.html (soporta SPA / recargas)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Arranque
app.listen(PORT, () => {
  console.log(`✅ API en puerto ${PORT}`);
});
