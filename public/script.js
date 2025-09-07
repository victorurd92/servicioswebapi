// Botón Buscar
document.getElementById("btnBuscar").addEventListener("click", () => {
  const termino = document.getElementById("searchInput").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  if (termino === "rest") resultado.textContent = "REST: Arquitectura que utiliza HTTP para la comunicación.";
  else if (termino === "soap") resultado.textContent = "SOAP: Protocolo basado en XML para intercambiar información estructurada.";
  else if (termino === "json") resultado.textContent = "JSON: Formato ligero de intercambio de datos.";
  else if (termino === "xml") resultado.textContent = "XML: Lenguaje de marcado para estructurar datos.";
  else resultado.textContent = "No se encontró el concepto.";
});

// Botón Borrar
document.getElementById("btnBorrar").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultado").textContent = "";
});

// Botón Ir al Campus
document.getElementById("btnCampus").addEventListener("click", () => {
  window.open("https://campus.intep.edu.co", "_blank");
});

// Botón Ver Todos
document.getElementById("btnVerTodos").addEventListener("click", () => {
  window.open("https://www.w3schools.com/xml/xml_soap.asp", "_blank");
});

// Botón Bibliografía
document.getElementById("btnBibliografia").addEventListener("click", () => {
  window.open("https://aws.amazon.com/es/what-is/api/", "_blank");
});
