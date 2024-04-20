const d = document;

let item_portfolio = d.getElementById("container-portfolio");

export default function portfolio() {
  // Cargar el JSON de datos
  fetch("static/core/js/datos.json")
      .then((response) => response.json())
      .then((data) => {
          // Obtener los datos del objeto datos_portfolio del JSON
          data.datos_portfolio.forEach((e) => {
              // Utilizar los datos del objeto en lugar de la lista
              console.log(`${e.imagen}`);
              item_portfolio.innerHTML += `
          <a href="#trabajo-${e.id}" class="portfolio-card">
            <img src='${e.imagen}' alt="${e.titulo}">
            <aside class="portfolio-card-info">
              <div>
                <h3>${e.titulo}</h3>
                <p>${e.descripcion}</p>
              </div>
            </aside>
          </a>
        `;
              let item_modal_portfolio = d.getElementById(`trabajo-${e.id}`);
              item_modal_portfolio.innerHTML = `
          <div class="modal-content">
            <a href="#cerrar" class="modal-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
              </svg>
            </a>
            <article class="portfolio-modal">
              <img src="${e.imagen}" alt="${e.titulo}">
              <div class="portfolio-info">
                <h3>${e.titulo}</h3>
                <p>${e.descripcion}</p>
                <aside class="portfolio-details">
                  <small><b>CLIENTE:</b></small>
                  <small>${e.cliente}</small>
                  <small><b>FECHA:</b></small>
                  <small>${e.fecha}</small>
                  <small><b>TIPO:</b></small>
                  <small>${e.tipo}</small>
                  <small><b>Enlace al sitio:</b></small>
                  <small><a href="${e.enlace_sitio}" target="_blank" rel="noopener noreferrer">Link</a></small>
                  <small><b>Enlace al repositorio:</b></small>
                  <small><a href="${e.enlace_repositorio}" target="_blank" rel="noopener noreferrer">Link</a></small>
                </aside>
              </div>
            </article>
          </div>
        `;
          });
      })
      .catch((error) => {
          console.error("Error al cargar los datos:", error);
      });
};
