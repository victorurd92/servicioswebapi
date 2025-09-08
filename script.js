function buscar() {
  const valor = document.getElementById('inputData').value.toLowerCase();
  let resultado = '';

  if (valor.includes('rest')) {
    resultado += '<h3>REST</h3><p>REST es un estilo arquitectónico para diseñar servicios de red que utilizan los protocolos HTTP. Permite operaciones como GET, POST, PUT y DELETE.</p>';
  }
  if (valor.includes('soap')) {
    resultado += '<h3>SOAP</h3><p>SOAP es un protocolo basado en XML que permite el intercambio estructurado de información entre servicios web. Opera sobre HTTP y otros protocolos.</p>';
  }
  if (valor.includes('json')) {
    resultado += '<h3>JSON</h3><p>JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas.</p>';
  }
  if (valor.includes('xml')) {
    resultado += '<h3>XML</h3><p>XML (eXtensible Markup Language) es un lenguaje de marcado que define reglas para la codificación de documentos en un formato legible por humanos y máquinas.</p>';
  }

  if (!resultado) {
    resultado = '<p>No se encontraron resultados. Intenta con REST, SOAP, JSON o XML.</p>';
  }

  document.getElementById('resultado').innerHTML = resultado;
  abrirModal();
}

function borrar() {
  document.getElementById('inputData').value = '';
  cerrarModal();
}

function verTodos() {
  document.getElementById('resultado').innerHTML = `
    <h3>REST</h3><p>REST es un estilo arquitectónico para diseñar servicios de red que utilizan los protocolos HTTP...</p>
    <h3>SOAP</h3><p>SOAP es un protocolo basado en XML para el intercambio de información...</p>
    <h3>JSON</h3><p>JSON es un formato ligero de intercambio de datos, usado ampliamente en APIs...</p>
    <h3>XML</h3><p>XML es un lenguaje de marcado extensible que estructura información...</p>
  `;
  abrirModal();
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
  abrirModal();
}

function abrirModal() {
  document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}
