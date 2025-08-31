// server.js
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "public")));

// Cargar data.json de forma segura
let data = [];
try {
  const DATA_PATH = path.join(__dirname, "data.json");
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  data = JSON.parse(raw);
  console.log("✅ data.json cargado con", data.length, "items");
} catch (e) {
  console.warn("⚠️ No se pudo leer data.json. Arranco con []:", e.message);
  data = [];
}

// API: todos los conceptos
app.get("/api/all", (_req, res) => {
  res.json(data);
});

// API: buscar por término exacto (case-insensitive)
app.get("/api/search", (req, res) => {
  const q = (req.query.q || "").trim().toLowerCase();
  if (!q) return res.status(400).json({ error: "Parámetro q vacío" });

  const item = data.find(d => (d.termino || "").toLowerCase() === q);
  return item ? res.json(item) : res.status(404).json({ error: "No encontrado" });
});

// Ruta raíz → index.html
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ API en puerto ${PORT}`);
});
