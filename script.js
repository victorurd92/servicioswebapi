document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputConcepto");
  const resultado = document.getElementById("resultado");

  let conceptos = [];

  // Cargar los conceptos desde conceptos.json
  fetch("conceptos.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo de conceptos.");
      }
      return response.json();
    })
    .then((data) => {
      conceptos = data;
      resultado.textContent = "Conceptos cargados correctamente.";
      resultado.style.color = "green";
    })
    .catch((error) => {
      resultado.textContent = "Error al cargar los conceptos.";
      resultado.style.color = "red";
    });

  // Buscar
  document.getElementById("btnBuscar").addEventListener("click", function () {
    const termino = input.value.trim().toLowerCase();
    if (!termino) return;

    const encontrados = conceptos.filter((c) =>
      c.concepto.toLowerCase().includes(termino)
    );

    if (encontrados.length > 0) {
      resultado.innerHTML = encontrados
        .map((c) => `<p><strong>${c.concepto}:</strong> ${c.definicion}</p>`)
        .join("");
    } else {
      resultado.innerHTML = "<p>No se encontraron resultados.</p>";
    }
  });

  // Ver todos
  document.getElementById("btnVerTodos").addEventListener("click", function () {
    if (conceptos.length > 0) {
      resultado.innerHTML = conceptos
        .map((c) => `<p><strong>${c.concepto}:</strong> ${c.definicion}</p>`)
        .join("");
    } else {
      resultado.innerHTML = "<p>No hay conceptos disponibles.</p>";
    }
  });

  // Borrar
  document.getElementById("btnBorrar").addEventListener("click", function () {
    input.value = "";
    resultado.innerHTML = "";
  });
});
