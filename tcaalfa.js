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
class alfa {
 constructor (leta, Nleta) {
  this.leta = leta
  this.Nleta= Nleta
 }
}

for(let t = 0; t < 6; t++){
  for(let p = 0; p < 6; p++){
    if (segredo[t]==segredo[p]){
    let yt = 0;
    yt++
    }
    
 }
}

//numero da tentativa = n
// let n = 0;
function button1(){
  verificar(n=0)
}
function button2(){
  verificar(n=1)
}
function button3(){
  verificar(n=2)
}
function button4(){
  verificar(n=3)
}
function button5(){
  verificar(n=4)
}
function verificar(n) {
  let palavra = '';
  let Vetorpalavra = [];
  let inp = [[], [], [], [], []];
  let letra = [[], [], [], [], []];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < 5; j++) {
      console.log(`${i} ${j}`)
      inp[i][j] = document.getElementById(`id${i}${j}`)
      letra[i][j] = document.getElementById(`id${i}${j}`).value
      palavra += letra[i][j]
      palavra.toUpperCase;
      console.log(palavra)
    }
    Vetorpalavra.push(palavra);
    palavra = '';
  }
//  for (let i = 0; i < 5; i++) {
//    palavra += inp[n][i]
//  }
  console.log(Vetorpalavra)
  console.log(segredo)
   if (true) {
    palavra = Vetorpalavra[n]
    for (let i = 0; i < 5; i++) {
      if (segredo[i] == palavra[i]) {
        inp[n][i].style.background = "green"
      } else if ((segredo.includes(palavra[i]))&&()) {
        inp[n][i].style.background = "yellow"
      } else {
        inp[n][i].style.background = "red"
      }
    }
  } if (Vetorpalavra[n] == segredo) {
    alert(`voce ganhou`);
  } if ((palavra != segredo)&&(n==4)) {
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
