function buscar() {
  const termino = document.getElementById("busqueda").value.toLowerCase();
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      const resultado = data.filter(item =>
        item.titulo.toLowerCase().includes(termino) || item.descripcion.toLowerCase().includes(termino)
      );

      mostrarResultado(resultado);
    });
}

function borrar() {
  document.getElementById("busqueda").value = '';
  document.getElementById("resultado").innerHTML = '';
}

function verTodos() {
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      mostrarResultado(data);
    });
}

function mostrarResultado(data) {
  const div = document.getElementById("resultado");
  if (data.length === 0) {
    div.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  div.innerHTML = data.map((item, index) => `
    <div style="background:#fff;margin:10px auto;padding:10px;border-radius:5px;width:80%;text-align:left;">
      <strong>${index + 1}. ${item.titulo}</strong><br>
      <span>${item.descripcion}</span>
    </div>
  `).join('');
}
