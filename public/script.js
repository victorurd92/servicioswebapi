function buscar() {
  const termino = document.getElementById('busqueda').value.toLowerCase();
  const resultado = document.getElementById('resultado');
  let respuesta = '';

  switch (termino) {
    case 'rest':
      respuesta = 'REST: Arquitectura de software para sistemas distribuidos.';
      break;
    case 'soap':
      respuesta = 'SOAP: Protocolo para intercambio estructurado de información.';
      break;
    case 'json':
      respuesta = 'JSON: Formato ligero de intercambio de datos.';
      break;
    case 'xml':
      respuesta = 'XML: Lenguaje de marcado para almacenar e intercambiar datos.';
      break;
    default:
      respuesta = 'No se encontró el término.';
  }

  resultado.innerText = respuesta;
}

function borrar() {
  document.getElementById('busqueda').value = '';
  document.getElementById('resultado').innerText = '';
}

function verTodos() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <ul>
      <li><strong>REST:</strong> Arquitectura de software para sistemas distribuidos.</li>
      <li><strong>SOAP:</strong> Protocolo para intercambio estructurado de información.</li>
      <li><strong>JSON:</strong> Formato ligero de intercambio de datos.</li>
      <li><strong>XML:</strong> Lenguaje de marcado para datos.</li>
    </ul>
  `;
}

function verBibliografia() {
  const biblio = document.getElementById('bibliografia');
  biblio.classList.toggle('oculto');
}
