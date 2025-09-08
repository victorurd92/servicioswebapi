const conceptos = {
  rest: "REST (Representational State Transfer) es un estilo de arquitectura que usa HTTP para obtener y manipular datos.",
  soap: "SOAP (Simple Object Access Protocol) es un protocolo basado en XML para intercambiar información entre sistemas.",
  json: "JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos fácil de leer y escribir.",
  xml: "XML (eXtensible Markup Language) es un lenguaje de marcado utilizado para almacenar y transportar datos."
};

function buscar() {
  const termino = document.getElementById("termino").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");
  if (termino && conceptos[termino]) {
    resultado.innerHTML = `<p><strong>${termino.toUpperCase()}:</strong> ${conceptos[termino]}</p>`;
  } else {
    resultado.innerHTML = `<p style="color:red;">Término no encontrado. Intenta con REST, SOAP, JSON o XML.</p>`;
  }
}

function borrar() {
  document.getElementById("termino").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function verTodos() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = Object.entries(conceptos)
    .map(([key, value]) => `<p><strong>${key.toUpperCase()}:</strong> ${value}</p>`)
    .join("");
}
