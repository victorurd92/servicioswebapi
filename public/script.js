function buscar() {
    const termino = document.getElementById("termino").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    let definicion = "";

    switch (termino) {
        case "rest":
            definicion = "REST es un estilo de arquitectura para diseñar servicios web.";
            break;
        case "soap":
            definicion = "SOAP es un protocolo para intercambio estructurado de información.";
            break;
        case "json":
            definicion = "JSON es un formato ligero de intercambio de datos.";
            break;
        case "xml":
            definicion = "XML es un lenguaje de marcado para almacenar y transportar datos.";
            break;
        default:
            definicion = "Término no encontrado. Intenta con REST, SOAP, JSON o XML.";
    }

    resultado.innerHTML = `<p><strong>${termino.toUpperCase()}:</strong> ${definicion}</p>`;
}

function borrar() {
    document.getElementById("termino").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function verTodos() {
    document.getElementById("resultado").innerHTML = `
        <ul>
            <li><strong>REST:</strong> REST es un estilo de arquitectura para diseñar servicios web.</li>
            <li><strong>SOAP:</strong> SOAP es un protocolo para intercambio estructurado de información.</li>
            <li><strong>JSON:</strong> JSON es un formato ligero de intercambio de datos.</li>
            <li><strong>XML:</strong> XML es un lenguaje de marcado para almacenar y transportar datos.</li>
        </ul>`;
}

function mostrarBibliografia() {
    document.getElementById("modalBibliografia").style.display = "block";
}

function cerrarBibliografia() {
    document.getElementById("modalBibliografia").style.display = "none";
}
