let conceptos = [];

fetch("data/data.json")
  .then((res) => res.json())
  .then((data) => {
    conceptos = data;
  })
  .catch((err) => console.error("Error cargando JSON:", err));

function buscarConcepto() {
  const input = document.getElementById("inputBusqueda").value.toLowerCase();
  const resultado = conceptos.filter((item) =>
    item.titulo.toLowerCase().includes(input)
  );
  mostrarResultado(resultado);
}

function borrarBusqueda() {
  document.getElementById("inputBusqueda").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("bibliografia").style.display = "none";
}

function mostrarConceptos() {
  mostrarResultado(conceptos);
}

function mostrarResultado(data) {
  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = data.map((item, i) => `
    <div>
      <strong>${i + 1}. ${item.titulo}</strong>
      <p>${item.descripcion}</p>
    </div>
  `).join("");
}

function mostrarBibliografia() {
  document.getElementById("bibliografia").style.display = "block";
}
