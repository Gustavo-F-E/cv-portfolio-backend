const d = document;
let item_barra = d.getElementById("barra-de-progreso");

export default function barraDeProgreso() {
    fetch("static/core/js/datos.json")
      .then((response) => response.json())
        .then((data) => {
            data.datos_barra.forEach((e) => {
                item_barra.innerHTML += `
          <div class="progress">
            <p>
              <b><i>${e.nombre}</i></b>
              <b>${e.porcentaje}%</b>
            </p>
            <progress value="${e.porcentaje}" min="0" max="100"></progress>
          </div>`;
            });
        })
      .catch((error) => {
          console.error("Error al cargar los datos:", error);
      });
}