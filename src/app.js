window.onload = function() {
  const btn = document.getElementById("btnGenerar");
  const salida = document.getElementById("dominio");

  function generarDominio() {
    const pronouns = ["the", "our"];
    const adjectives = ["great", "big"];
    const nouns = ["jogger", "racoon"];

    // combinamos todo
    const domains = [];
    for (const p of pronouns) {
      for (const a of adjectives) {
        for (const n of nouns) {
          domains.push(`${p}${a}${n}.com`);
        }
      }
    }

    const aleatorio = domains[Math.floor(Math.random() * domains.length)];

    salida.textContent = aleatorio;
    console.log("Dominio generado:", aleatorio);
  }

  generarDominio();
  btn.addEventListener("click", generarDominio);
};
