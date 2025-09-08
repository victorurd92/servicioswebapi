document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputConcepto");
  const resultado = document.getElementById("resultado");

  let conceptos = [];

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      conceptos = data;
      console.log("Conceptos cargados correctamente");
    })
    .catch((err) => {
      resultado.innerHTML = "<p style='color:red'>Error al cargar los conceptos.</p>";
      console.error(err);
    });

  document.getElementById("btnBuscar").addEventListener("click", () => {
    const texto = input.value.toLowerCase().trim();
    if (!texto) return;

    const encontrados = conceptos.filter(c =>
      c.termino.toLowerCase().includes(texto)
    );

    if (encontrados.length > 0) {
      resultado.innerHTML = encontrados.map(c => `
        <p><strong>${c.termino}</strong>: ${c.definicion}<br><em>Fuente: ${c.fuente}</em></p>
      `).join("");
    } else {
      resultado.innerHTML = "<p>No se encontraron resultados.</p>";
    }
  });

  document.getElementById("btnVerTodos").addEventListener("click", () => {
    resultado.innerHTML = conceptos.map(c => `
      <p><strong>${c.termino}</strong>: ${c.definicion}<br><em>Fuente: ${c.fuente}</em></p>
    `).join("");
  });

  document.getElementById("btnBorrar").addEventListener("click", () => {
    input.value = "";
    resultado.innerHTML = "";
  });

  document.getElementById("btnBibliografia").addEventListener("click", () => {
    resultado.innerHTML = `
      <h3>Bibliografía</h3>
      <ul>
        <li>RESTful Web Services Cookbook (2010)</li>
        <li>Web Services: Concepts, Architectures and Applications (2005)</li>
        <li>RFC 2616: HTTP/1.1 (1999)</li>
        <li>Introducing JSON (2006)</li>
        <li>XML 1.0 Specification</li>
        <li>WSDL 1.1 Specification</li>
        <li>UDDI Specification</li>
      </ul>
    `;
  });
});
