/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Generar dominios automáticamente al cargar la página
  generarDominios();

  // Volver a generar dominios al hacer clic en el botón
  document.querySelector("#btnGenerar").addEventListener("click", generarDominios);

  function generarDominios() {
    // Listas base
    const pronouns = ["the", "our"];
    const adjectives = ["great", "big"];
    const nouns = ["jogger", "racoon"];

    // Crear combinaciones
    const domains = [];
    for (let pronoun of pronouns) {
      for (let adjective of adjectives) {
        for (let noun of nouns) {
          domains.push(`${pronoun}${adjective}${noun}.com`);
        }
      }
    }

    // Mostrar en consola
    console.log("Dominios generados:", domains);

    // Mostrar en pantalla
    document.querySelector("#dominio").innerHTML = domains
      .map(domain => `<div>${domain}</div>`)
      .join("");
  }
};
