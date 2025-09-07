// Utilidad: pinta un item
function itemHTML(i){
  return `<li><strong>${i.termino}:</strong> ${i.definicion} <em>(${i.fuente})</em></li>`;
}

// Buscar por término exacto (case-insensitive)
function buscar(){
  const q = document.getElementById("inputBusqueda").value.trim().toLowerCase();
  if(!q){
    document.getElementById("resultado").innerHTML = "<p>Escribe un término para buscar.</p>";
    return;
  }
  fetch("data.json")
    .then(r=>r.json())
    .then(data=>{
      const found = data.find(d => d.termino.toLowerCase() === q);
      if(found){
        document.getElementById("resultado").innerHTML =
          `<ul>${itemHTML(found)}</ul>`;
      }else{
        document.getElementById("resultado").innerHTML = "<p>No se encontraron resultados.</p>";
      }
    })
    .catch(()=> document.getElementById("resultado").innerHTML = "<p>Error cargando datos.</p>");
}

function borrar(){
  document.getElementById("inputBusqueda").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function verTodos(){
  fetch("data.json")
    .then(r=>r.json())
    .then(data=>{
      const html = `<ul>${data.map(itemHTML).join("")}</ul>`;
      document.getElementById("resultado").innerHTML = html;
    })
    .catch(()=> document.getElementById("resultado").innerHTML = "<p>Error cargando datos.</p>");
}

function verBibliografia(){
  const dlg = document.getElementById("modalBiblio");
  if(!dlg.open) dlg.showModal();
}

function cerrarBibliografia(){
  const dlg = document.getElementById("modalBiblio");
  if(dlg.open) dlg.close();
}

function irAlCampus(){
  window.open("https://intep.edu.co", "_blank", "noopener");
}

// Eventos
document.getElementById("btnBuscar").addEventListener("click", buscar);
document.getElementById("btnBorrar").addEventListener("click", borrar);
document.getElementById("btnVerTodos").addEventListener("click", verTodos);
document.getElementById("btnBibliografia").addEventListener("click", verBibliografia);
document.getElementById("btnCampus").addEventListener("click", irAlCampus);

document.getElementById("closeBiblio").addEventListener("click", cerrarBibliografia);
// Cerrar modal con ESC
document.getElementById("modalBiblio").addEventListener("cancel", e=>{
  e.preventDefault(); cerrarBibliografia();
});
