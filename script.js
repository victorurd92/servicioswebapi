let data = [];

fetch("data.json")
  .then((response) => response.json())
  .then((json) => (data = json))
  .catch((error) => console.error("Error cargando JSON:", error));

function buscar() {
  const termino = document.getElementById("busqueda").value.toLowerCase();
  const resultado = data.find((item) =>
    item.termino.toLowerCase().includes(termino)
  );

  document.getElementById("resultado").innerHTML = resultado
    ? `<h3>${resultado.termino}</h3><p>${resultado.definicion}</p><p><em>${resultado.fuente}</em></p>`
    : "<p>No se encontró el término.</p>";
}

function borrar() {
  document.getElementById("busqueda").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function verTodos() {
  const html = data
    .map(
      (item) =>
        `<div><strong>${item.termino}</strong>: ${item.definicion}<br><em>${item.fuente}</em></div><hr>`
    )
    .join("");
  document.getElementById("resultado").innerHTML = html;
}

function irCampus() {
  window.open("https://campus.intep.edu.co", "_blank");
}

function verBibliografia() {
  const fuentes = data.map((item) => `• ${item.fuente}`).join("<br>");
  document.getElementById("resultado").innerHTML =
    "<h3>Bibliografía:</h3><p>" + fuentes + "</p>";
}
