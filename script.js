let data = [];

fetch('data.json')
  .then(response => response.json())
  .then(json => data = json);

function buscarTermino() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultados = data.filter(item => item.termino.toLowerCase().includes(input));

  mostrarResultados(resultados);
}

function borrarBusqueda() {
  document.getElementById('searchInput').value = '';
  document.getElementById('resultados').innerHTML = '';
}

function mostrarTodo() {
  mostrarResultados(data);
}

function mostrarResultados(resultados) {
  const div = document.getElementById('resultados');
  if (resultados.length === 0) {
    div.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }

  div.innerHTML = resultados.map(item => `
    <div>
      <strong>${item.termino}</strong>: ${item.definicion}
      <br><em>Fuente:</em> ${item.fuente}
    </div>
    <hr>
  `).join('');
}

// Modal bibliografía
function mostrarBibliografia() {
  document.getElementById('modalBiblio').showModal();
}
document.getElementById('closeBiblio').addEventListener('click', () => {
  document.getElementById('modalBiblio').close();
});
