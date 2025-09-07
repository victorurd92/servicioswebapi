function buscar() {
  const termino = document.getElementById("inputBusqueda").value.toLowerCase();
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const resultado = data.find(
        (item) => item.termino.toLowerCase() === termino
      );
      mostrarResultado(resultado);
    });
}

function verTodos() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      mostrarLista(data);
    });
}

function borrar() {
  document.getElementById("inputBusqueda").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function verBibliografia() {
  // Puedes añadir más enlaces si quieres
  window.open("https://libros.intep.edu.co", "_blank");
}

function irAlCampus() {
  window.open("https://intep.edu.co", "_blank");
}

function mostrarResultado(resultado) {
  const contenedor = document.getElementById("resultado");
  if (resultado) {
    contenedor.innerHTML = `
      <p><strong>Término:</strong> ${resultado.termino}</p>
      <p><strong>Definición:</strong> ${resultado.definicion}</p>
      <p><strong>Fuente:</strong> ${resultado.fuente}</p>
    `;
  } else {
    contenedor.innerHTML = "<p>No se encontraron resultados.</p>";
  }
}

function mostrarLista(data) {
  const contenedor = document.getElementById("resultado");
  let html = "<ul>";
  data.forEach((item) => {
    html += `<li><strong>${item.termino}:</strong> ${item.definicion} <em>(${item.fuente})</em></li>`;
  });
  html += "</ul>";
  contenedor.innerHTML = html;
}
