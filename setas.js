function focarNoFinal(campo) {
  campo.focus();
  const fim = campo.value.length;
  campo.setSelectionRange(fim, fim);
}

const campos = [];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const campo = document.querySelector(`#id${i}${j}`);

    if (campo) {
      campos.push(campo);
    }
  }
}

campos.forEach((campo, indice) => {
  campo.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && indice < campos.length - 1) {
      event.preventDefault();
      focarNoFinal(campos[indice + 1]);
    }

    if (event.key === "ArrowLeft" && indice > 0) {
      event.preventDefault();
      focarNoFinal(campos[indice - 1]);
    }
  });
});

