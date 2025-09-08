function buscarConcepto() {
  const input = document.getElementById("busqueda").value.trim().toLowerCase();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  if (input === "") {
    resultados.innerHTML = "<p>Por favor ingresa un término.</p>";
    return;
  }

  fetch("data/conceptos.json")
    .then(res => res.json())
    .then(data => {
      const concepto = data.find(item => item.termino.toLowerCase() === input);
      if (concepto) {
        resultados.innerHTML = `<h3>${concepto.termino}</h3><p>${concepto.definicion}</p>`;
      } else {
        resultados.innerHTML = `<p>No se encontró el término "<strong>${input}</strong>".</p>`;
      }
    })
    .catch(err => {
      console.error("Error al cargar conceptos:", err);
      resultados.innerHTML = "<p>Error al cargar los conceptos.</p>";
    });
}

function limpiarBusqueda() {
  document.getElementById("busqueda").value = "";
  document.getElementById("resultados").innerHTML = "";
}

function verTodos() {
  window.location.href = "data/conceptos.json";
}

function irBibliografia() {
  window.location.href = "data/bibliografia.html";
}

function irCampus() {
  window.open("https://campus.intep.edu.co", "_blank");
}
