function buscar() {
  const valor = document.getElementById('inputData').value.toLowerCase();
  let resultado = '';

  if (valor.includes('rest')) {
    resultado += '<h3>REST</h3><p>REST es un estilo arquitectónico...</p>';
  }
  if (valor.includes('soap')) {
    resultado += '<h3>SOAP</h3><p>SOAP es un protocolo basado en XML...</p>';
  }
  if (valor.includes('json')) {
    resultado += '<h3>JSON</h3><p>JSON es un formato ligero de intercambio de datos...</p>';
  }
  if (valor.includes('xml')) {
    resultado += '<h3>XML</h3><p>XML es un lenguaje para estructurar información...</p>';
  }

  if (!resultado) {
    resultado = '<p>No se encontraron resultados. Intenta con REST, SOAP, JSON o XML.</p>';
  }

  document.getElementById('resultado').innerHTML = resultado;
}

function borrar() {
  document.getElementById('inputData').value = '';
  document.getElementById('resultado').innerHTML = '';
}

function verTodos() {
  document.getElementById('resultado').innerHTML = `
    <h3>REST</h3><p>REST es un estilo arquitectónico...</p>
    <h3>SOAP</h3><p>SOAP es un protocolo basado en XML...</p>
    <h3>JSON</h3><p>JSON es un formato ligero de intercambio de datos...</p>
    <h3>XML</h3><p>XML es un lenguaje para estructurar información...</p>
  `;
}

function mostrarBibliografia() {
  document.getElementById('resultado').innerHTML = `
    <h3>Bibliografía</h3>
    <ul>
      <li>Allamaraju, S. (2010). RESTful Web Services.</li>
      <li>Erl, T. (2009). Web Service Contract Design & Versioning for SOA.</li>
      <li>Hohpe, G., Woolf, B. (2003). Enterprise Integration Patterns.</li>
      <li>Newman, S. (2015). Building Microservices.</li>
    </ul>
  `;
}
