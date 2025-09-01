// server.js
const path = require('path');
const express = require('express');
const app = express();

// Render/Heroku/etc asignan el puerto por env:
const PORT = process.env.PORT || 3000;

// Desactiva cache agresiva en proxy/CDN
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

// Sirve estáticos de /public en /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Home (index.html)
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// JSON de datos (¡asegúrate que exista en la raíz!)
app.get('/data.json', (_req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

// Healthcheck simple
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

// 404
app.use((_req, res) => res.status(404).send('Not found'));

// 500
app.use((err, _req, res, _next) => {
  console.error('❌ Uncaught error:', err);
  res.status(500).send('Server error');
});

// Escucha en 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ API escuchando en http://0.0.0.0:${PORT}`);
});
