// server.js
const express = require("express");
const path = require("path");
const app = express();

// Configurar puerto dinámico (Render usa process.env.PORT)
const PORT = process.env.PORT || 4000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
