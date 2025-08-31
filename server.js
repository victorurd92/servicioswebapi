// server.js
const express = require('express');
const path = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Servir estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// (Opcional) endpoint de salud
app.get('/health', (_req, res) => res.send('OK'));

// Si tu index.html está en /public, no necesitas más rutas.
app.listen(PORT, () => console.log(`✅ API en puerto ${PORT}`));
