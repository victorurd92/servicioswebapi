console.log("script.js cargado ✅");

// Diccionario de conceptos
const conceptos = {
  "REST": "REST es un estilo de arquitectura para servicios web que utiliza HTTP para la comunicación.",
  "SOAP": "SOAP es un protocolo basado en XML para el intercambio de información en servicios web.",
  "JSON": "JSON es un formato ligero de intercambio de datos, fácil de leer y escribir por humanos y máquinas.",
  "XML": "XML es un lenguaje de marcado que define un conjunto de reglas para la codificación de documentos."
};

document.getElementById("btnBuscar").addEventListener("click", () => {
  const termino = document.getElementById("searchInput").value.trim().toUpperCase();
  const resultado = document.getElementById("resultado");

  if (termino in conceptos) {
    resultado.textContent = conceptos[termino];
  } else {
    resultado.textContent = "❌ No se encontró el término.";
  }
});

document.getElementById("btnBorrar").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultado").textContent = "";
});

document.getElementById("btnVertodos").addEventListener("click", () => {
  window.open("https://aws.amazon.com/es/what-is/api/", "_blank");
});

document.getElementById("btnCampus").addEventListener("click", () => {
  window.open("https://campus.intep.edu.co", "_blank");
});

