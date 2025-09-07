document.getElementById("btnBuscar").addEventListener("click", () => {
  const termino = document.getElementById("searchInput").value.toLowerCase();
  let resultado = "";

  switch (termino) {
    case "rest":
      resultado = "REST: Estilo de arquitectura para servicios web basada en recursos accesibles por URL usando HTTP.";
      break;
    case "soap":
      resultado = "SOAP: Protocolo basado en XML para el intercambio estructurado de información en servicios web.";
      break;
    case "json":
      resultado = "JSON: Formato ligero de intercambio de datos, comúnmente usado en APIs por su simplicidad.";
      break;
    case "xml":
      resultado = "XML: Lenguaje de marcas para estructurar documentos, ampliamente utilizado en sistemas antiguos.";
      break;
    default:
      resultado = "Término no encontrado. Intenta con: REST, SOAP, JSON o XML.";
  }

  document.getElementById("resultado").textContent = resultado;
});

document.getElementById("btnBorrar").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultado").textContent = "";
});

document.getElementById("btnCampus").addEventListener("click", () => {
  window.open("https://campus.intep.edu.co", "_blank");
});

document.getElementById("btnBibliografia").addEventListener("click", () => {
  window.open("https://aws.amazon.com/es/what-is/api/", "_blank");
});

document.getElementById("btnVerTodos").addEventListener("click", () => {
  const panel = document.getElementById("panelDefiniciones");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});
