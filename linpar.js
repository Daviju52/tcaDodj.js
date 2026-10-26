function limpar() {
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      const campo = document.getElementById(`id${j}${i}`);

      if (campo) {
        campo.value = "";
        campo.style.backgroundColor = "white";
      }
    }
  }
}
limpar()