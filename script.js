async function cargarConceptos() {
  try {
    const respuesta = await fetch("data.json");
    return await respuesta.json();
  } catch (error) {
    console.error("Error al cargar los conceptos:", error);
    alert("Error al cargar los conceptos.");
    return [];
  }
}

function mostrarConceptos(conceptos) {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  if (conceptos.length === 0) {
    resultados.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  conceptos.forEach(concepto => {
    const div = document.createElement("div");
    div.classList.add("concepto");
    div.innerHTML = `
      <h3>${concepto.termino}</h3>
      <p><strong>Definición:</strong> ${concepto.definicion}</p>
      <p><strong>Fuente:</strong> ${concepto.fuente}</p>
    `;
    resultados.appendChild(div);
  });
}

document.getElementById("buscarBtn").addEventListener("click", async () => {
  const termino = document.getElementById("termino").value.trim().toLowerCase();
  const conceptos = await cargarConceptos();
  const filtrados = conceptos.filter(c => c.termino.toLowerCase().includes(termino));
  mostrarConceptos(filtrados);
});

document.getElementById("verTodosBtn").addEventListener("click", async () => {
  const conceptos = await cargarConceptos();
  mostrarConceptos(conceptos);
});

document.getElementById("borrarBtn").addEventListener("click", () => {
  document.getElementById("termino").value = "";
  document.getElementById("resultados").innerHTML = "";
});

document.getElementById("bibliografiaBtn").addEventListener("click", async () => {
  const conceptos = await cargarConceptos();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "<h3>Bibliografía:</h3>";

  const fuentes = new Set();
  conceptos.forEach(c => fuentes.add(c.fuente));

  fuentes.forEach(fuente => {
    const p = document.createElement("p");
    p.textContent = `- ${fuente}`;
    resultados.appendChild(p);
  });
});
