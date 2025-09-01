// ---------- Config ----------
const DATA_URL = '/data.json';  // asegúrate de tener data.json en la raíz del repo

console.log('script.js listo v7');

// ---------- DOM ----------
const $q         = document.getElementById('q');
const $btnBuscar = document.getElementById('btnBuscar');
const $btnLimpiar= document.getElementById('btnLimpiar');
const $btnCampus = document.getElementById('btnCampus');
const $status    = document.getElementById('status');
const $cards     = document.getElementById('cards');

// ---------- Helpers ----------
const cardHTML = (item)=> `
  <article class="card">
    <h3>${item.termino}</h3>
    <p><strong>Definición:</strong> ${item.definicion}</p>
    <p><em>Fuente:</em> ${item.fuente || '-'}</p>
  </article>
`;

function pintar(lista){
  if(!lista?.length){
    $cards.innerHTML = '';
    $status.textContent = '🔎 No se encontraron resultados.';
    return;
  }
  $status.textContent = `Resultados: ${lista.length}`;
  $cards.innerHTML = lista.map(cardHTML).join('');
}

async function getData(){
  const res = await fetch(DATA_URL, {cache:'no-store'});
  if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

// ---------- Actions ----------
async function onBuscar(){
  const term = ($q.value||'').trim().toLowerCase();
  if(!term){
    $status.textContent = 'Escribe un término para buscar.';
    $cards.innerHTML = '';
    return;
  }
  try{
    toggleBtns(true);
    $status.textContent = 'Buscando...';
    const data = await getData();
    const out = data.filter(x =>
      (x.termino||'').toLowerCase().includes(term) ||
      (x.definicion||'').toLowerCase().includes(term)
    );
    pintar(out);
  }catch(err){
    $status.textContent = `❌ Error: ${err.message}`;
    $cards.innerHTML = '';
  }finally{
    toggleBtns(false);
  }
}

function onLimpiar(){
  $q.value = '';
  $status.textContent = 'Escribe un término o usa los botones.';
  $cards.innerHTML = '';
  $q.focus();
}

function onCampus(){
  // cambia si prefieres otra URL del campus
  window.open('https://campus.intep.edu.co/', '_blank', 'noopener');
}

function toggleBtns(disabled){
  $btnBuscar.disabled = disabled;
  $btnLimpiar.disabled = disabled;
  $btnCampus.disabled  = disabled;
}

// ---------- Init ----------
(function init(){
  $status.textContent = 'Escribe un término o usa los botones.';
  $cards.innerHTML = '';

  $btnBuscar .addEventListener('click', onBuscar);
  $btnLimpiar.addEventListener('click', onLimpiar);
  $btnCampus .addEventListener('click', onCampus);
  $q.addEventListener('keydown', (ev)=>{ if(ev.key==='Enter') onBuscar(); });
})();
