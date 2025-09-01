const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (index, css, js)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint API para data.json
app.get("/api/data", (req, res) => {
  res.sendFile(path.join(__dirname, "data.json"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
