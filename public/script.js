function buscar() {
  const termino = document.getElementById('buscador').value.trim();
  if (termino) {
    alert("Buscando: " + termino);
    // Aquí podrías agregar una consulta real a un JSON o API.
  } else {
    alert("Por favor escribe un término.");
  }
}

function borrar() {
  document.getElementById('buscador').value = '';
}

function abrirBibliografia() {
  document.getElementById('modalBiblio').style.display = 'block';
}

function cerrarBibliografia() {
  document.getElementById('modalBiblio').style.display = 'none';
}

window.onclick = function(e) {
  const modal = document.getElementById('modalBiblio');
  if (e.target == modal) {
    cerrarBibliografia();
  }
};
