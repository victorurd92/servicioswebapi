document.getElementById("btnBuscar").addEventListener("click", () => {
  const termino = document.getElementById("searchInput").value.toLowerCase();
  let resultado = "";

  switch (termino) {
    case "rest":
      resultado = "REST es un estilo de arquitectura para diseñar servicios web.";
      break;
    case "soap":
      resultado = "SOAP es un protocolo para intercambiar información estructurada.";
      break;
    case "json":
      resultado = "JSON es un formato ligero de intercambio de datos.";
      break;
    case "xml":
      resultado = "XML es un lenguaje de marcado que define reglas para codificar documentos.";
      break;
    default:
      resultado = "Concepto no encontrado. Prueba con REST, SOAP, JSON o XML.";
  }

  document.getElementById("resultado").textContent = resultado;
  document.getElementById("enlacesBibliografia").style.display = "none";
});

document.getElementById("btnBorrar").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("enlacesBibliografia").style.display = "none";
});

document.getElementById("btnCampus").addEventListener("click", () => {
  window.open("https://campus.intep.edu.co", "_blank");
});

document.getElementById("btnVerTodos").addEventListener("click", () => {
  document.getElementById("resultado").textContent =
    "REST: estilo de arquitectura para servicios web. | SOAP: protocolo para intercambio estructurado. | JSON: formato ligero de datos. | XML: lenguaje de marcado estructurado.";
  document.getElementById("enlacesBibliografia").style.display = "none";
});

document.getElementById("btnBibliografia").addEventListener("click", () => {
  document.getElementById("enlacesBibliografia").style.display = "block";
});
