function buscar() {
  const input = document.getElementById("inputConcepto").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  const conceptos = {
    rest: "REST es un estilo de arquitectura software para construir servicios web. Fuente: RESTful Web Services Cookbook (2010)",
    soap: "SOAP es un protocolo para el intercambio de información estructurada. Fuente: Thomas Erl (2009)",
    json: "JSON es un formato ligero de intercambio de datos. Fuente: Allamaraju (2010)",
    xml: "XML es un lenguaje de marcado que define un conjunto de reglas para codificar documentos. Fuente: Allamaraju (2010)"
  };

  resultado.innerHTML = conceptos[input] || "Concepto no encontrado. Intenta con REST, SOAP, JSON o XML.";
}

function borrar() {
  document.getElementById("inputConcepto").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function verTodos() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <strong>REST:</strong> REST es un estilo de arquitectura software para construir servicios web. Fuente: RESTful Web Services Cookbook (2010)<br><br>
    <strong>SOAP:</strong> SOAP es un protocolo para el intercambio de información estructurada. Fuente: Thomas Erl (2009)<br><br>
    <strong>JSON:</strong> JSON es un formato ligero de intercambio de datos. Fuente: Allamaraju (2010)<br><br>
    <strong>XML:</strong> XML es un lenguaje de marcado que define un conjunto de reglas para codificar documentos. Fuente: Allamaraju (2010)
  `;
}

function irCampus() {
  window.open("https://campus.intep.edu.co", "_blank");
}

function mostrarBibliografia() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <strong>Bibliografía:</strong><br>
    - Allamaraju, S. (2010). RESTful Web Services Cookbook.<br>
    - Erl, T. (2005). Service-Oriented Architecture (SOA).<br>
    - Erl, T. (2009). Web Service Contract Design and Versioning for SOA.<br>
    - Hohpe, G., & Woolf, B. (2003). Enterprise Integration Patterns.<br>
    - Newman, S. (2015). Building Microservices.
  `;
}
