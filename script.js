document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputConcepto");
  const resultado = document.getElementById("resultado");

  let conceptos = [];

  // Cargar conceptos desde data.json
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      conceptos = data;
      resultado.innerHTML = "<p style='color:green'>Conceptos cargados correctamente.</p>";
    })
    .catch(() => {
      resultado.innerHTML = "<p style='color:red'>Error al cargar los conceptos.</p>";
    });

  // Buscar por término
  document.getElementById("btnBuscar").addEventListener("click", () => {
    const texto = input.value.toLowerCase().trim();
    if (texto === "") return;

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

  // Mostrar todos
  document.getElementById("btnVerTodos").addEventListener("click", () => {
    if (conceptos.length === 0) {
      resultado.innerHTML = "<p>No hay conceptos cargados.</p>";
      return;
    }
    resultado.innerHTML = conceptos.map(c => `
      <p><strong>${c.termino}</strong>: ${c.definicion}<br><em>Fuente: ${c.fuente}</em></p>
    `).join("");
  });

  // Limpiar
  document.getElementById("btnBorrar").addEventListener("click", () => {
    input.value = "";
    resultado.innerHTML = "";
  });

  // Bibliografía
  document.getElementById("btnBibliografia").addEventListener("click", () => {
    resultado.innerHTML = `
      <h3>Bibliografía</h3>
      <ul>
        <li>Allamaraju, S. (2010). RESTful Web Services. O'Reilly.</li>
        <li>Erl, T. (2005). Service-Oriented Architecture. Prentice Hall.</li>
        <li>Erl, T. (2009). Web Service Contract Design and Versioning. Prentice Hall.</li>
        <li>Hohpe, G., & Woolf, B. (2003). Enterprise Integration Patterns. Addison-Wesley.</li>
        <li>Newman, S. (2015). Building Microservices. O'Reilly.</li>
        <li>W3C. (1999). HTTP/1.1 RFC 2616.</li>
        <li>Introducing JSON (2006). JSON.org</li>
        <li>XML 1.0 Specification</li>
        <li>UDDI Specification</li>
        <li>WSDL 1.1 Specification</li>
      </ul>
    `;
  });
});
