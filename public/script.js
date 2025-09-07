// Buscar concepto
document.getElementById("btnBuscar").addEventListener("click", () => {
  const termino = document.getElementById("inputBusqueda").value.toLowerCase();
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const resultado = data.find(item => item.termino.toLowerCase() === termino);
      if (resultado) {
        alert(`📘 Definición: ${resultado.definicion}\n🔗 Fuente: ${resultado.fuente}`);
      } else {
        alert("⚠️ Término no encontrado.");
      }
    });
});

// Borrar campo de búsqueda
document.getElementById("btnBorrar").addEventListener("click", () => {
  document.getElementById("inputBusqueda").value = "";
});

// Ver todos los términos
document.getElementById("btnVerTodos").addEventListener("click", () => {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const todos = data.map(item => `🔹 ${item.termino}: ${item.definicion}`).join("\n\n");
      alert(todos);
    });
});

// Ir a bibliografía
document.getElementById("btnBibliografia").addEventListener("click", () => {
  window.open("https://www.akamai.com/blog/cloud/performance/apis-rest-soap-graphql", "_blank");
});

// Ir al campus INTEP
document.getElementById("btnCampus").addEventListener("click", () => {
  window.open("https://campus.intep.edu.co", "_blank");
});
