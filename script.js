// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    const inputBusqueda = document.getElementById("busqueda");
    const resultado = document.getElementById("resultado");
    const btnBuscar = document.getElementById("btnBuscar");
    const btnBorrar = document.getElementById("btnBorrar");
    const btnVerTodos = document.getElementById("btnVerTodos");
    const btnBibliografia = document.getElementById("btnBibliografia");
    const modal = document.getElementById("modal");
    const cerrarModal = document.getElementById("cerrarModal");

    // Función para mostrar conceptos
    const mostrarConceptos = (conceptos) => {
        resultado.innerHTML = "";
        if (conceptos.length === 0) {
            resultado.innerHTML = "<p>No se encontraron resultados.</p>";
            return;
        }
        conceptos.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("resultado-item");
            div.innerHTML = `
                <h3>${item.term}</h3>
                <p>${item.definition}</p>
            `;
            resultado.appendChild(div);
        });
    };

    // Cargar datos desde JSON
    const cargarDatos = async () => {
        try {
            const res = await fetch("data/data.json");
            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Error al cargar data.json", error);
            resultado.innerHTML = "<p>Error al cargar datos.</p>";
            return [];
        }
    };

    // Buscar término
    btnBuscar.addEventListener("click", async () => {
        const termino = inputBusqueda.value.trim().toLowerCase();
        const data = await cargarDatos();
        const filtrado = data.filter(item =>
            item.term.toLowerCase().includes(termino)
        );
        mostrarConceptos(filtrado);
    });

    // Mostrar todos
    btnVerTodos.addEventListener("click", async () => {
        const data = await cargarDatos();
        mostrarConceptos(data);
    });

    // Borrar búsqueda
    btnBorrar.addEventListener("click", () => {
        inputBusqueda.value = "";
        resultado.innerHTML = "";
    });

    // Mostrar bibliografía
    btnBibliografia.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Cerrar modal
    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal si hacen clic fuera de la ventana
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
