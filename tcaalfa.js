// jogador
class jogador {
  contructor() {
    this.nickDoJogador = prompt("qual seu nick");
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
  let ind = Math.trunc(Math.random() * vetor.length);
  let palavrasenha = vetor[ind];
  palavrasenha = palavrasenha.toUpperCase();
  return palavrasenha
}
//palavra senha
let segredo = sortpalavra(vdapalavra)
class alfa {
  constructor(leta, Nleta) {
    this.leta = leta
    this.Nleta = Nleta
  }
}

//numero da tentativa = n
// let n = 0;
function button1() {
  verificar(n = 0)
}
function button2() {
  verificar(n = 1)
}
function button3() {
  verificar(n = 2)
}
function button4() {
  verificar(n = 3)
}
function button5() {
  verificar(n = 4)
}
function verificar(n) {
  let palavra = '';
  let Vetorpalavra = [];
  let inp = [[], [], [], [], []];
  let letra = [[], [], [], [], []];
  let vezap = []
  let vtp = []
  
  for (let v = 0; v < 5; v++) {
    let lt = 0;
    for (let p = 0; p < 5; p++) {
      if (segredo[v] == segredo[p]) {
        lt++
      }
      let novalfas = new alfa(segredo[v], lt);
      vezap.push(novalfas);
    }
  }
  
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < 5; j++) {
      console.log(`${i} ${j}`)
      inp[i][j] = document.getElementById(`id${i}${j}`)
      letra[i][j] = document.getElementById(`id${i}${j}`).value
      palavra += letra[i][j]
      palavra = palavra.toUpperCase();
    }
    Vetorpalavra.push(palavra);
    palavra = '';
    for (let t = 0; t < 5; t++) {
      let yt = 0;
      for (let p = 0; p < 5; p++) {
        if (letra[t][p] == segredo[p]) {
          yt++
          LT = letra[t][p]
          let novalfa = new alfa(LT, yt);
          vtp.push(novalfa);
        }
      }
    }
  }
  
  
  console.log(segredo)
  if (true) {
    palavra = Vetorpalavra[n]
    for (let i = 0; i < 5; i++) {
      for (let q = 0; q < 5; q++){
        let vezr = 0
        let obl = vtp[q]
        if (segredo[i] == palavra[i]) {
          inp[n][i].style.background = "green"
          vezr++
      } else if (!(segredo.includes(palavra[i]))) {
          inp[n][i].style.background = "red"
      } else {
        if ((vtp[q].leta == vezap[i].leta)&&(vtp[q].Nleta <= vezap[i].Nleta)&&(vezr <= vezap[q].Nleta)) { 
          inp[n][i].style.background = "yellow"
          vezr++
        } else {
          inp[n][i].style.background = "cinza"
        }
      }
    }
   }
  } if (Vetorpalavra[n] == segredo) {
    alert(`voce ganhou`);
  } if ((palavra != segredo) && (n == 4)) {
    alert(`Você perdeu e a palavra era ${segredo}`);
  }
  n++;
}




// if (palavra == segredo) {
//   jogador1.jogosganhos++;
// } else {
//   jogador1.jogosperdidos++;
// }

// jogador1.jogosjogados = jogador1.jogosganhos + jogador1.jogosperdidos;
