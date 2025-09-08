document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("busqueda");
  const buscarBtn = document.getElementById("buscar");
  const borrarBtn = document.getElementById("borrar");
  const resultado = document.getElementById("resultado");
  const verTodosBtn = document.getElementById("ver-todos");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const cerrarModalBtn = document.getElementById("cerrar-modal");

  buscarBtn.addEventListener("click", () => {
    const valor = input.value.trim().toLowerCase();
    if (!valor) return;

    fetch("data/data.json")
      .then((res) => res.json())
      .then((datos) => {
        const encontrado = datos.find((item) =>
          item.titulo.toLowerCase().includes(valor)
        );
        resultado.innerHTML = encontrado
          ? `<h3>${encontrado.titulo}</h3><p>${encontrado.descripcion}</p>`
          : `<p>No se encontró el concepto.</p>`;
      });
  });

  borrarBtn.addEventListener("click", () => {
    input.value = "";
    resultado.innerHTML = "";
  });

  verTodosBtn.addEventListener("click", () => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((datos) => {
        modalContent.innerHTML =
          '<span id="cerrar-modal">&times;</span><h2>Conceptos disponibles</h2>';
        datos.forEach((item, i) => {
          modalContent.innerHTML += `
            <div>
              <h3>${i + 1}. ${item.titulo}</h3>
              <p>${item.descripcion}</p>
              <hr>
            </div>
          `;
        });
        modal.style.display = "block";
        document.getElementById("cerrar-modal").onclick = () => {
          modal.style.display = "none";
        };
      });
  });
});
