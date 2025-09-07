let data = [];

fetch('data/data.json')
  .then(response => response.json())
  .then(json => data = json);

function buscar() {
  const termino = document.getElementById('inputBusqueda').value.toLowerCase();
  const resultados = data.filter(item => item.termino.toLowerCase().includes(termino));
  mostrarResultados(resultados);
}

function borrar() {
  document.getElementById('inputBusqueda').value = '';
  document.getElementById('resultados').innerHTML = '';
  document.getElementById('bibliografia').classList.add('oculto');
}

function verTodos() {
  mostrarResultados(data);
}

function mostrarResultados(resultados) {
  const div = document.getElementById('resultados');
  div.innerHTML = '';
  if (resultados.length === 0) {
    div.innerHTML = '<p>No se encontraron resultados.</p>';
  } else {
    resultados.forEach(item => {
      const concepto = `
        <div>
          <h3>${item.termino}</h3>
          <p>${item.definicion}</p>
          <p><strong>Fuente:</strong> ${item.fuente}</p>
        </div>
        <hr>`;
      div.innerHTML += concepto;
    });
  }
}

function mostrarBibliografia() {
  document.getElementById('bibliografia').classList.toggle('oculto');
}
