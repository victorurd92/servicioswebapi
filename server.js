const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta para JSON
app.get("/data.json", (req, res) => {
  res.sendFile(path.join(__dirname, "data.json"));
});

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
