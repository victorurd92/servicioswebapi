const conceptos = {
  "REST": "REST (Representational State Transfer) es un estilo de arquitectura de software que utiliza peticiones HTTP para acceder y manipular datos.",
  "SOAP": "SOAP (Simple Object Access Protocol) es un protocolo estándar basado en XML para el intercambio de información estructurada en servicios web.",
  "JSON": "JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas.",
  "XML": "XML (eXtensible Markup Language) es un lenguaje de marcado que define reglas para codificar documentos en formato que tanto humanos como máquinas puedan leer."
};

function buscar() {
  const termino = document.getElementById('termino').value.trim().toUpperCase();
  const resultado = document.getElementById('resultado');
  if (conceptos[termino]) {
    resultado.innerHTML = `<p><strong>${termino}:</strong> "${conceptos[termino]}"</p>`;
  } else {
    resultado.innerHTML = `<p>No se encontró información para: <strong>${termino}</strong>.</p>`;
  }
}

function borrar() {
  document.getElementById('termino').value = '';
  document.getElementById('resultado').innerHTML = '';
}

function verTodos() {
  const resultado = document.getElementById('resultado');
  let html = '';
  for (let clave in conceptos) {
    html += `<p><strong>${clave}:</strong> "${conceptos[clave]}"</p>`;
  }
  resultado.innerHTML = html;
}

function mostrarBibliografia() {
  const biblio = document.getElementById('bibliografia');
  biblio.style.display = biblio.style.display === 'none' ? 'block' : 'none';
}
