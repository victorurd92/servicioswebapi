const conceptos = {
  REST: "REST es un estilo de arquitectura de software para sistemas hipermedia distribuidos como la World Wide Web.",
  SOAP: "SOAP es un protocolo de mensajería para el intercambio de información estructurada en la implementación de servicios web.",
  JSON: "JSON es un formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas.",
  XML: "XML es un lenguaje de marcado que define un conjunto de reglas para codificar documentos en un formato legible."
};

function buscar() {
  const termino = document.getElementById("termino").value.trim().toUpperCase();
  const resultado = document.getElementById("resultado");

  if (termino && conceptos[termino]) {
    resultado.innerHTML = `<p><strong>${termino}</strong>: ${conceptos[termino]}</p>`;
  } else if (termino) {
    resultado.innerHTML = `<p>No se encontró el término <strong>${termino}</strong>.</p>`;
  } else {
    resultado.innerHTML = `<p>Por favor, escribe un término.</p>`;
  }
}

function borrar() {
  document.getElementById("termino").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function verTodos() {
  const resultado = document.getElementById("resultado");
  let html = "<ul>";
  for (let termino in conceptos) {
    html += `<li><strong>${termino}</strong>: ${conceptos[termino]}</li>`;
  }
  html += "</ul>";
  resultado.innerHTML = html;
}
