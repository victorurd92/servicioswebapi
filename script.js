// Buscar términos en data.json
function buscar() {
  const texto = document.getElementById('busqueda').value.toLowerCase();
  fetch('./data/data.json')
    .then(res => res.json())
    .then(data => {
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = '';
      const filtrado = data.filter(item =>
        item.titulo.toLowerCase().includes(texto) ||
        item.descripcion.toLowerCase().includes(texto)
      );
      if (filtrado.length === 0) {
        resultado.innerHTML = '<p>No se encontraron resultados.</p>';
      } else {
        filtrado.forEach((item, index) => {
          resultado.innerHTML += `<p><strong>${index + 1}. ${item.titulo}</strong><br>${item.descripcion}</p><hr>`;
        });
      }
    });
}

function borrar() {
  document.getElementById('busqueda').value = '';
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('bibliografia').style.display = 'none';
}

// Modal Ver Todos
function verTodos() {
  fetch('./data/data.json')
    .then(res => res.json())
    .then(data => {
      const modal = document.getElementById('modal');
      const contenido = document.getElementById('contenidoModal');
      contenido.innerHTML = '';
      data.forEach((item, index) => {
        contenido.innerHTML += `<p><strong>${index + 1}. ${item.titulo}</strong><br>${item.descripcion}</p><hr>`;
      });
      modal.style.display = 'block';
    });
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

function mostrarBibliografia() {
  document.getElementById('bibliografia').style.display = 'block';
}
