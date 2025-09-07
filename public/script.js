function buscar() {
  const termino = document.getElementById("termino").value;
  alert("Buscar: " + termino);
}

function borrar() {
  document.getElementById("termino").value = "";
}

function verTodos() {
  alert("Mostrando todos los términos...");
}

function mostrarBibliografia() {
  alert("Bibliografía:\n\n- https://es.wikipedia.org/wiki/REST\n- https://es.wikipedia.org/wiki/SOAP\n- https://es.wikipedia.org/wiki/JSON\n- https://es.wikipedia.org/wiki/XML");
}
