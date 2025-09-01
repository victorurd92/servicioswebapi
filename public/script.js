console.log("script.js listo v8");

const $q = document.getElementById("q");
const $btnBuscar = document.getElementById("btnBuscar");
const $btnLimpiar = document.getElementById("btnLimpiar");
const $btnCampus = document.getElementById("btnCampus");
const $status = document.getElementById("status");
const $cards = document.getElementById("cards");

let data = [];

// Cargar data.json desde el servidor
fetch("/api/data")
  .then(res => res.json())
  .then(json => {
    data = json;
    console.log("Datos cargados:", data);
  })
  .catch(err => {
    console.error("Error cargando data.json", err);
    $status.textContent = "Error cargando datos.";
  });

// Buscar
$btnBuscar.addEventListener("click", () => {
  const query = $q.value.trim().toLowerCase();
  $cards.innerHTML = "";
  $status.textContent = "";

  if (!query) {
    $status.textContent = "Escribe un término para buscar.";
    return;
  }

  const resultados = data.filter(item =>
    item.termino.toLowerCase().includes(query)
  );

  if (resultados.length > 0) {
    resultados.forEach(item => {
      const card = document.createElement("div");
      card.innerHTML = `<h3>${item.termino}</h3><p>${item.definicion}</p>`;
      $cards.appendChild(card);
    });
  } else {
    $status.textContent = "No se encontraron resultados.";
  }
});

// Limpiar
$btnLimpiar.addEventListener("click", () => {
  $q.value = "";
  $cards.innerHTML = "";
  $status.textContent = "";
});

// Ir al Campus INTEP
$btnCampus.addEventListener("click", () => {
  window.open("https://campus.intep.edu.co/", "_blank");
});
