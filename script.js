let conceptos = [];

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    conceptos = data;
  })
  .catch(() => {
    document.getElementById('resultados').innerText = 'Error al cargar los conceptos.';
  });

function mostrarResultados(filtrados) {
  const contenedor = document.getElementById('resultados');
  contenedor.innerHTML = '';

  if (filtrados.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }

  filtrados.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${item.termino}</h3>
      <p><strong>Definición:</strong> ${item.definicion}</p>
      <p><strong>Fuente:</strong> ${item.fuente}</p>
      <hr>
    `;
    contenedor.appendChild(div);
  });
}

// Buscar
document.getElementById('btnBuscar').addEventListener('click', () => {
  const termino = document.getElementById('inputBusqueda').value.toLowerCase().trim();
  const resultados = conceptos.filter(c => c.termino.toLowerCase().includes(termino));
  mostrarResultados(resultados);
});

// Ver todos
document.getElementById('btnVerTodos').addEventListener('click', () => {
  mostrarResultados(conceptos);
});

// Borrar
document.getElementById('btnBorrar').addEventListener('click', () => {
  document.getElementById('inputBusqueda').value = '';
  document.getElementById('resultados').innerHTML = '';
});

// Bibliografía
document.getElementById('btnBibliografia').addEventListener('click', () => {
  const fuentesUnicas = [...new Set(conceptos.map(c => c.fuente))];
  const contenedor = document.getElementById('resultados');
  contenedor.innerHTML = '<h3>Bibliografía</h3><ul>' +
    fuentesUnicas.map(f => `<li>${f}</li>`).join('') +
    '</ul>';
});
