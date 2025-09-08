document.getElementById('btnBibliografia').addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Bibliografía</h2>
      <p>
        • Allamaraju, Subbu. <i>RESTful Web Services</i> (2010)<br>
        • Erl, Thomas. <i>Service-Oriented Architecture</i> (2005, 2009)<br>
        • Hohpe, Gregor; Woolf, Bobby. <i>Enterprise Integration Patterns</i> (2003)
      </p>
      <button onclick="this.parentElement.parentElement.remove()">Cerrar</button>
    </div>
  `;
  document.body.appendChild(modal);
});
