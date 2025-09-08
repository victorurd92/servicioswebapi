function buscar() {
  const input = document.getElementById('input').value.trim().toUpperCase();
  const resultado = document.getElementById('resultado');

  let contenido = "";

  switch (input) {
    case 'REST':
      contenido = "<b>REST</b> es un estilo de arquitectura de software para construir servicios web. <br><em>Referencia:</em> RESTful Web Services Cookbook (2010)";
      break;
    case 'SOAP':
      contenido = "<b>SOAP</b> es un protocolo basado en XML para el intercambio de mensajes. <br><em>Referencia:</em> Understanding SOAP (2002)";
      break;
    case 'JSON':
      contenido = "<b>JSON</b> es un formato ligero de intercambio de datos. <br><em>Referencia:</em> Introducing JSON (2013)";
      break;
    case 'XML':
      contenido = "<b>XML</b> es un lenguaje de marcado para estructurar información. <br><em>Referencia:</em> XML Developer's Guide (2000)";
      break;
    case 'HTTP':
      contenido = "<b>HTTP</b> es el protocolo base de comunicación en la web. <br><em>Referencia:</em> RFC2616 (HTTP/1.1)";
      break;
    default:
      contenido = "Por favor, escribe REST, SOAP, JSON, XML o HTTP.";
  }

  resultado.innerHTML = `<div class='resultado'>${contenido}</div>`;
}

function borrar() {
  document.getElementById('input').value = '';
  document.getElementById('resultado').innerHTML = '';
}

function verTodos() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <ul>
      <li><strong>REST:</strong> Arquitectura para servicios web.</li>
      <li><strong>SOAP:</strong> Protocolo basado en XML.</li>
      <li><strong>JSON:</strong> Formato de intercambio de datos.</li>
      <li><strong>XML:</strong> Lenguaje de marcado estructurado.</li>
      <li><strong>HTTP:</strong> Protocolo de comunicación web.</li>
    </ul>
  `;
}

function mostrarBibliografia() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <ul>
      <li>Allamaraju, S. (2010). RESTful Web Services Cookbook.</li>
      <li>Erl, T. (2005). Service-Oriented Architecture (SOA).</li>
      <li>Hohpe, G., & Woolf, B. (2003). Enterprise Integration Patterns.</li>
      <li>Newman, S. (2015). Building Microservices.</li>
    </ul>
  `;
}
