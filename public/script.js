// ---- Config --------------------------------------------
const DATA_URL = '/datos.json'; // cambia a '/data.json' si tu archivo se llama así

console.log('script.js ACTIVO v4');

// ---- Referencias al DOM --------------------------------
const $q         = document.getElementById('q');
const $btnBuscar = document.getElementById('btnBuscar');
const $btnTodos  = document.getElementById('btnTodos');
const $status    = document.getElementById('status');
const $cards     = document.getElementById('cards');

// ---- Utilidades ----------------------------------------
function cardHTML(item) {
  return `
  <article class="card">
    <h3>${item.termino}</h3>
    <p><strong>Definición:</strong> ${item.definicion}</p>
    <p><em>Fuente:</em> ${item.fuente || '-'}</p>
  </article>`;
}

function pintar(lista) {
  if (!lista || lista.length === 0) {
    $cards.innerHTML = '';
    $status.innerHTML = '🔎 No se encontraron resultados.';
    return;
  }
  $status.textContent = `Resultados: ${lista.length}`;
  $cards.innerHTML = lista.map(cardHTML).join('');
}

async function fetchJSON(url) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

function bloqueaBotones(bloquear) {
  $btnBuscar.disabled = bloquear;
  $btnTodos.disabled  = bloquear;
}

// ---- Handlers ------------------------------------------
async function onBuscar() {
  const termino = ($q.value || '').trim().toLowerCase();
  if (!termino) {
    $status.textContent = 'Escribe un término para buscar.';
    $cards.innerHTML = '';
    return;
  }

  try {
    bloqueaBotones(true);
    $status.textContent = 'Buscando...';
    const data = await fetchJSON(DATA_URL);
    const filtrados = data.filter(x =>
      (x.termino || '').toLowerCase().includes(termino) ||
      (x.definicion || '').toLowerCase().includes(termino)
    );
    pintar(filtrados);
  } catch (e) {
    $status.innerHTML = `❌ Error: ${e.message}`;
    $cards.innerHTML = '';
  } finally {
    bloqueaBotones(false);
  }
}

async function onVerTodos() {
  try {
    bloqueaBotones(true);
    $status.textContent = 'Cargando todos...';
    const data = await fetchJSON(DATA_URL);
    pintar(data);
  } catch (e) {
    $status.innerHTML = `❌ Error: ${e.message}`;
    $cards.innerHTML = '';
  } finally {
    bloqueaBotones(false);
  }
}

// ---- Inicialización (NO carga nada al inicio) -----------
(function init() {
  // Mensaje inicial y contenedor vacío:
  $status.textContent = 'Escribe un término o usa los botones.';
  $cards.innerHTML = '';

  // Eventos:
  $btnBuscar.addEventListener('click', onBuscar);
  $btnTodos.addEventListener('click', onVerTodos);
  $q.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') onBuscar();
  });
})();
