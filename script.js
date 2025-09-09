async function cargarDatos() {
  const response = await fetch('data/data.json');
  const datos = await response.json();
  return datos;
}

function mostrarModal(contenido) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = '<span class="close" onclick="cerrarModal()">×</span>';
  contenido.forEach((item, index) => {
    modalContent.innerHTML += `
      <div class="resultado">
        <h4>${index + 1}. ${item.titulo}</h4>
        <p>${item.descripcion}</p>
      </div>
      <hr>
    `;
  });
  modal.style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

async function verTodos() {
  const datos = await cargarDatos();
  mostrarModal(datos);
}

async function buscar() {
  const texto = document.getElementById('inputBuscar').value.toLowerCase();
  const datos = await cargarDatos();
  const resultados = datos.filter(item =>
    item.titulo.toLowerCase().includes(texto) ||
    item.descripcion.toLowerCase().includes(texto)
  );
  mostrarModal(resultados);
}

function borrar() {
  document.getElementById('inputBuscar').value = '';
}
