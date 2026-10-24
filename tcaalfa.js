// jogador
class jogador {
  contructor() {
    this.nickDoJogador = pronpt("qual seu nick");
    this.jogosjogados = 0;
    this.jogosganhos = 0;
    this.jogosperdidos = 0;
  }
}
// jogador

//palavra senha
let vdapalavra = [
  "amigo",
  "barco",
  "carro",
  "casas",
  "chuva",
  "claro",
  "corpo",
  "dedos",
  "festa",
  "folha",
  "fruta",
  "garfo",
  "gatos",
  "livro",
  "lugar",
  "manga",
  "mesas",
  "mundo",
  "nuvem",
  "olhos",
  "papel",
  "peixe",
  "pedra",
  "plano",
  "porta",
  "praia",
  "ratos",
  "roupa",
  "sabor",
  "salto",
  "santo",
  "sonho",
  "tempo",
  "terra",
  "tigre",
  "treno",
  "valor",
  "vento",
  "verde",
  "vinho",
  "viver",
  "aguas",
  "aviao",
  "bolas",
  "campo",
  "canto",
  "carta",
  "coisa",
  "danca",
];
function sortpalavra(vetor) {
  let ind = Math.trunc(Math.random() * vetor.length - 1);
  let palavrasenha = vetor[ind];
  palavrasenha.toUpperCase;
  return palavrasenha
}
//palavra senha
let segredo = sortpalavra(vdapalavra)
//numero da tentativa = n
// let n = 0;
function button1(){
  verificar(n=0)
}
function verificar(n) {
  let palavra = '';
  let inp = [[]]
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < 5; j++) {
      console.log(`${i} ${j}`)
      inp[i][j] = document.getElementById(`id${i}${j}`)
      palavra += inp[i][j]
      console.log(inp[i][j])
      console.log(`id${i}${j}`)
    }

  }
  for (let i = 0; i < 5; i++) {
    palavra += inp[n][i]
  }
  console.log(palavra)
  console.log(segredo)
  if (palavra == segredo) {
    alert(`voce ganhou ${palavra}`);
  } else {

    for (let i = 0; i < 5; i++) {
      if (segredo[i] == palavra[i]) {
        inp[n][i].style.background = "green"
      } else if (segredo.includes(palavra[i])) {
        inp[n][i].style.background = "yellow"
      } else {
        inp[n][i].style.background = "red"
      }
    }
  }
  n++;
}

// if (palavra != segredo) {
//   alert(`Você perdeu e a palavra era ${segredo}`);
// }

// if (palavra == segredo) {
//   jogador1.jogosganhos++;
// } else {
//   jogador1.jogosperdidos++;
// }

// jogador1.jogosjogados = jogador1.jogosganhos + jogador1.jogosperdidos;
