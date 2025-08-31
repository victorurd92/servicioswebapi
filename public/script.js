const $q = document.getElementById("q");
const $btnBuscar = document.getElementById("btnBuscar");
const $btnTodos = document.getElementById("btnTodos");
const $status = document.getElementById("status");
const $cards = document.getElementById("cards");

function cardHTML(item){
  return `
    <article class="card">
      <h3>${item.termino}</h3>
      <p><strong>Definición:</strong> ${item.definicion}</p>
      <p><em>Fuente:</em> ${item.fuente || "—"}</p>
    </article>`;
}

async function fetchJSON(url){
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

async function renderAll(){
  $status.textContent = "Cargando todos...";
  $cards.innerHTML = "";
  try{
    const data = await fetchJSON("/api/all");
    $cards.innerHTML = data.length
      ? data.map(cardHTML).join("")
      : `<p>No hay datos.</p>`;
    $status.textContent = "";
  }catch(e){
    $status.textContent = "Error: " + e.message;
  }
}

async function renderOne(q){
  $status.textContent = "Buscando...";
  $cards.innerHTML = "";
  try{
    const item = await fetchJSON(`/api/search?q=${encodeURIComponent(q)}`);
    $cards.innerHTML = cardHTML(item);
    $status.textContent = "";
  }catch(e){
    $status.textContent = (e.message.includes("404"))
      ? "No encontrado"
      : "Error: " + e.message;
  }
}

$btnBuscar.addEventListener("click", () => {
  const q = ($q.value || "").trim();
  if (!q) { renderAll(); return; }
  renderOne(q);
});
$btnTodos.addEventListener("click", renderAll);

// Render inicial
renderAll();
