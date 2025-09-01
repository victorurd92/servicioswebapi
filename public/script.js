// ---- Config -------------------------------------------------
const DATA_URL = 'data.json'; // MISMO nivel que index.html

console.log('script.js listo v6');

// ---- DOM ----------------------------------------------------
const $q          = document.getElementById('q');
const $btnBuscar  = document.getElementById('btnBuscar');
const $btnLimpiar = document.getElementById('btnLimpiar');
const $status     = document.getElementById('status');
const $cards      = document.getElementById('cards');

// ---- Utilidades ---------------------------------------------
function cardHTML(item){
  return `
    <article class="card">
      <h3>${item.termino}</h3>
      <p><strong>Definición:</strong> ${item.definicion}</p>
      <p><em>Fuente:</em> ${item.fuente || '-'}</p>
    </article>
  `;
}
function pintar(lista){
  if(!lista || lista.length === 0){
    $cards.innerHTML = '';
    $status.textContent = '🔎 No se encontraron resultados.';
    return;
  }
  $status.textContent = `Resultados: ${lista.length}`;
  $cards.innerHTML = lista.map(cardHTML).join('');
  // acercar al usuario a los resultados
  $cards.scrollIntoView({ behavior:'smooth', block:'start' });
}
async function fetchJSON(url){
  const res = await fetch(url, { cache: 'no-store' });
  if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}
function bloquea(b){
  $btnBuscar.disabled  = b;
  $btnLimpiar.disabled = b;
}

// ---- Handlers -----------------------------------------------
async function onBuscar(){
  const termino = ($q.value||'').trim().toLowerCase();
  if(!termino){
    $status.textContent = 'Escribe un término para buscar.';
    $cards.innerHTML = '';
    $q.focus();
    return;
  }
  try{
    bloquea(true);
    $status.textContent = 'Buscando...';
    const data = await fetchJSON(DATA_URL);
    const filtrados = data.filter(x =>
      (x.termino||'').toLowerCase().includes(termino) ||
      (x.definicion||'').toLowerCase().includes(termino)
    );
    pintar(filtrados);
  }catch(err){
    $status.textContent = `❌ Error: ${err.message}`;
    $cards.innerHTML = '';
  }finally{
    bloquea(false);
  }
}

function onLimpiar(){
  $q.value = '';
  $status.textContent = 'Escribe un término o usa los botones.';
  $cards.innerHTML = '';
  $q.focus();
}

// ---- Init ----------------------------------------------------
(function init(){
  onLimpiar();
  $btnBuscar.addEventListener('click', onBuscar);
  $btnLimpiar.addEventListener('click', onLimpiar);
  $q.addEventListener('keydown', (e)=>{ if(e.key==='Enter') onBuscar(); });
})();
