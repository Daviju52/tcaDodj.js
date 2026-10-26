//const campos = [...document.querySelectorAll('input[type="text"]')];
//
//  campos.forEach((campo, indice) => {
//    campo.addEventListener('keydown', (event) => {
//      if ((event.key === 'ArrowRight') && (indice < campos.length - 1)) {
//        campos[indice + 1].focus();
//        campos.length - 1
//      }
//
//      if ((event.key === 'ArrowLeft') && (indice > 0)) {
//        campos[indice - 1].focus();
//        campos.length - 1
//      }
//    });
//  });
//  // me explique como se eu fose uma criança de 5 anos

// for (let i = 0; i < 5; i++){
// for (let j = 0; j < 5; j++){
//   const campos = [...document.querySelectorAll(input[id=`id${i}${j}`])];
// }
// }
//   campos.forEach((campo, indice) => {
//     campo.addEventListener('keydown', (event) => {
//       if (event.key === 'ArrowRight' && indice < campos.length - 1) {
//         campos[indice + 1].focus();
//         campos.length - 1
//       }
// 
//       if (event.key === 'ArrowLeft' && indice > 0) {
//         campos[indice - 1].focus();
//         campos.length - 1
//       }
//     });
//  });
// me explique como se eu fose uma criança de 5 anos e dizendo o que cada prate do codigo faz

function focarNoFinal(campo,) {
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
  campo.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && indice < campos.length - 1) {
      event.preventDefault();
      focarNoFinal(campos[indice + 1]);
    }

    if (event.key === 'ArrowLeft' && indice > 0) {
      event.preventDefault();
      focarNoFinal(campos[indice - 1]);
    }
  });
});