let datos = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    datos = data;
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
    document.getElementById('resultado').innerText = 'Error al cargar los conceptos.';
  });

function buscar() {
  const termino = document.getElementById('termino').value.trim().toLowerCase();
  const resultado = datos.find(item => item.termino.toLowerCase() === termino);

  if (resultado) {
    document.getElementById('resultado').innerHTML = `
      <p><strong>Definición:</strong> ${resultado.definicion}</p>
      <p><strong>Fuente:</strong> ${resultado.fuente}</p>
    `;
  } else {
    document.getElementById('resultado').innerText = 'Concepto no encontrado.';
  }
}

function borrar() {
  document.getElementById('termino').value = '';
  document.getElementById('resultado').innerHTML = '';
}

function verTodos() {
  if (datos.length === 0) return;

  let html = '<ul>';
  datos.forEach(item => {
    html += `<li><strong>${item.termino}</strong>: ${item.definicion} <em>(${item.fuente})</em></li>`;
  });
  html += '</ul>';

  document.getElementById('resultado').innerHTML = html;
}

function mostrarBibliografia() {
  const fuentes = [...new Set(datos.map(item => item.fuente))];
  let html = '<h3>Bibliografía</h3><ul>';
  fuentes.forEach(f => html += `<li>${f}</li>`);
  html += '</ul>';
  document.getElementById('resultado').innerHTML = html;
}
