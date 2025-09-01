// script.js
const DATA_URL = 'data.json';
console.log('script.js listo');

const $q          = document.getElementById('q');
const $btnBuscar  = document.getElementById('btnBuscar');
const $btnLimpiar = document.getElementById('btnLimpiar');
const $status     = document.getElementById('status');
const $cards      = document.getElementById('cards');

const cardHTML = (item) => `
  <article class="card">
    <h3>${item.termino}</h3>
    <p><strong>Definición:</strong> ${item.definicion}</p>
    <p><em>Fuente:</em> ${item.fuente || '-'}</p>
  </article>
`;

const pintar = (lista) => {
  if (!lista || lista.length === 0) {
    $cards.innerHTML = '';
    $status.textContent = '🔎 No se encontraron resultados.';
    return;
  }
  $status.textContent = `Resultados: ${lista.length}`;
  $cards.innerHTML = lista.map(cardHTML).join('');
};

const fetchJSON = async (url) => {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
};

async function onBuscar() {
  const termino = ($q.value || '').trim().toLowerCase();
  if (!termino) {
    $status.textContent = 'Escribe un término para buscar.';
    $cards.innerHTML = '';
    return;
  }
  try {
    $status.textContent = 'Buscando...';
    const data = await fetchJSON(DATA_URL);
    const lista = data.filter(x =>
      (x.termino || '').toLowerCase().includes(termino) ||
      (x.definicion || '').toLowerCase().includes(termino)
    );
    pintar(lista);
  } catch (e) {
    $status.textContent = `❌ Error: ${e.message}`;
    $cards.innerHTML = '';
  }
}

function onLimpiar() {
  $q.value = '';
  $status.textContent = 'Escribe un término o usa los botones.';
  $cards.innerHTML = '';
  $q.focus();
}

(function init() {
  $btnBuscar.addEventListener('click', onBuscar);
  $btnLimpiar.addEventListener('click', onLimpiar);
  $q.addEventListener('keydown', (ev) => ev.key === 'Enter' && onBuscar());
})();
