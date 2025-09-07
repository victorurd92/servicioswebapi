const conceptos = {
  "REST": "REST es un estilo de arquitectura para diseñar servicios web escalables.",
  "SOAP": "SOAP es un protocolo estándar para intercambio de información estructurada en servicios web.",
  "JSON": "JSON es un formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas.",
  "XML": "XML es un lenguaje de marcado que define reglas para codificar documentos en un formato legible.",
  "UDDI": "UDDI es un estándar para directorios de servicios web que permite registrar y descubrir servicios."
};

function buscar() {
  const termino = document.getElementById("busqueda").value.trim().toUpperCase();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  if (termino && conceptos[termino]) {
    const li = document.createElement("li");
    li.textContent = conceptos[termino];
    resultados.appendChild(li);
  } else {
    resultados.innerHTML = "<li>No se encontraron resultados.</li>";
  }
}

function borrar() {
  document.getElementById("busqueda").value = "";
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("bibliografia").style.display = "none";
}

function verTodos() {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";
  for (const termino in conceptos) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${termino}</strong>: ${conceptos[termino]}`;
    resultados.appendChild(li);
  }
  document.getElementById("bibliografia").style.display = "none";
}

function mostrarBibliografia() {
  const bib = document.getElementById("bibliografia");
  bib.style.display = bib.style.display === "none" ? "block" : "none";
}
