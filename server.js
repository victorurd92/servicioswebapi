// server.js
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// servir carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// sanidad
app.get('/health', (_req, res) => res.json({ ok: true }));

// fallback al index (por si Render pierde el index)
app.get('*', (_req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.listen(PORT, () => console.log(`✅ Server en http://localhost:${PORT}`));
