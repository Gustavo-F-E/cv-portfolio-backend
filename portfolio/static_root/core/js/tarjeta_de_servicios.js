const d = document;

let item_servicios = d.getElementById("service-card");

export default function tarjetaDeServicios() {
  fetch("static/core/js/datos.json") // Cargar el archivo JSON
      .then((response) => response.json()) // Parsear la respuesta como JSON
      .then((data) => {
          data.tarjeta_de_servicios.forEach((e) => {
              item_servicios.innerHTML += `
          <article class="service-card">
            ${e.svg}
            <h3><i>${e.nombre}</i></h3>
            <p>${e.descripcion}</p>
          </article>`;
          });
      })
      .catch((error) => console.error("Error al cargar los datos:", error)); // Manejar errores
}