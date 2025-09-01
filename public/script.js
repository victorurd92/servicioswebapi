// --- Config ---
const DATA_URL = 'datos.json'; // mismo nivel que index.html

console.log('script.js listo v6');

// --- DOM ---
const $q         = document.getElementById('q');
const $btnBuscar = document.getElementById('btnBuscar');
const $btnLimpiar= document.getElementById('btnLimpiar');
const $status    = document.getElementById('status');
const $cards     = document.getElementById('cards');

// --- utilidades ---
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
  if(!lista || !lista.length){
    $cards.innerHTML = '';
    $status.innerHTML = '🔎 No se encontraron resultados.';
    return;
  }
  $status.textContent = `Resultados: ${lista.length}`;
  $cards.innerHTML = lista.map(cardHTML).join('');
}
async function fetchJSON(url){
  const res = await fetch(url, { cache: 'no-store' });
  if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

// --- acciones ---
async function onBuscar(){
  const t = ($q.value || '').trim().toLowerCase();
  if(!t){
    $status.textContent = 'Escribe un término para buscar.';
    $cards.innerHTML = '';
    return;
  }
  try{
    deshabilitar(true);
    $status.textContent = 'Buscando...';
    const data = await fetchJSON(DATA_URL);
    const res = data.filter(x =>
      (x.termino||'').toLowerCase().includes(t) ||
      (x.definicion||'').toLowerCase().includes(t)
    );
    pintar(res);
  }catch(e){
    $status.innerHTML = `❌ Error: ${e.message}`;
    $cards.innerHTML = '';
  }finally{
    deshabilitar(false);
  }
}
function onLimpiar(){
  $q.value = '';
  $status.textContent = 'Escribe un término o usa los botones.';
  $cards.innerHTML = '';
  $q.focus();
}
function deshabilitar(b){
  $btnBuscar.disabled = b;
  $btnLimpiar.disabled = b;
}

// --- inicio ---
(function init(){
  onLimpiar();
  $btnBuscar.addEventListener('click', onBuscar);
  $btnLimpiar.addEventListener('click', onLimpiar);
  $q.addEventListener('keydown', e => { if(e.key==='Enter') onBuscar(); });
})();
