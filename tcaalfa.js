class jogador {
  contructor(nomeJ) {
    this.nickDoJogador = nomeJ;
    this.jogosjogados = 0;
    this.jogosganhos = 0;
    this.jogosperdidos = 0;
  }
}

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

let botaoC = document.getElementById("buttonc")
let botao1 = document.getElementById("button-addon1");
let botao2 = document.getElementById("button-addon2");
let botao3 = document.getElementById("button-addon3");
let botao4 = document.getElementById("button-addon4");
let botao5 = document.getElementById("button-addon5");

botaoC.disabled = true;
botao1.disabled = false;
botao2.disabled = true;
botao3.disabled = true;
botao4.disabled = true;
botao5.disabled = true;

function sortpalavra(vetor) {
  let ind = Math.trunc(Math.random() * vetor.length);
  let palavrasenha = vetor[ind];
  palavrasenha = palavrasenha.toUpperCase();
  return palavrasenha;
}

let segredo = ""

function comeco(){
segredo = sortpalavra(vdapalavra);
botaoC.disabled = true;
botao1.disabled = false;

return segredo
}
segredo = comeco()

class alfa {
  constructor(leta, Nleta) {
    this.leta = leta;
    this.Nleta = Nleta;
  }
}

function button1() {
  verificar((n = 0));
  botao1.disabled = true;
  botao2.disabled = false;
}
function button2() {
  verificar((n = 1));
  botao2.disabled = true;
  botao3.disabled = false;
}
function button3() {
  verificar((n = 2));
  botao3.disabled = true;
  botao4.disabled = false;
}
function button4() {
  verificar((n = 3));
  botao4.disabled = true;
  botao5.disabled = false;
}
function button5() {
  verificar((n = 4));
  botao5.disabled = true;
  botaoC.disabled = false;
}
function verificar(n) {
  let palavra = "";
  let Vetorpalavra = [];
  let inp = [[], [], [], [], []];
  let letra = [[], [], [], [], []];
  let vezap = [];
  const vtp = [[], [], [], [], []];

  for (let v = 0; v < 5; v++) {
    let lt = 0;
    for (let p = 0; p < 5; p++) {
      if (segredo[v] == segredo[p]) {
        lt++;
      }
    }
    let novalfas = new alfa(segredo[v], lt);
    vezap.push(novalfas);
  }
  let vezapO = vezap;
  console.log(vezap);
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < 5; j++) {
      inp[i][j] = document.getElementById(`id${i}${j}`);
      letra[i][j] = document.getElementById(`id${i}${j}`).value;
      letra[i][j] = letra[i][j].toUpperCase();
      palavra += letra[i][j];
      palavra = palavra.toUpperCase();
    }
    Vetorpalavra.push(palavra);
    palavra = "";
  }

  if (true) {
    palavra = Vetorpalavra[n];
    vezap = vezapO;
    let vezr = [vezap[0].Nleta, vezap[1].Nleta, vezap[2].Nleta, vezap[3].Nleta, vezap[4].Nleta]
    for (let i = 0; i < 5; i++) {
      if (segredo[i] == palavra[i]) {
        inp[n][i].style.background = "green";
        vezr[i] = vezr[i] - 1;
      } else if (!segredo.includes(palavra[i])) {
        inp[n][i].style.background = "red";
      } else {
       if ((((0 >= vezr[i]))&&(!((segredo[0] == palavra[0])||(segredo[1] == palavra[1])||(segredo[2] == palavra[2])||(segredo[3] == palavra[3])||(segredo[3] == palavra[3])||(segredo[4] == palavra[4]))))){
          inp[n][i].style.background = "red";
        } else {
          inp[n][i].style.background = "yellow";
          vezr[i] = vezr[i] - 1;
        }
      }
    }
  }
  if (Vetorpalavra[n] == segredo) {
    alert(`voce ganhou`);
    botaoC.disabled = false
   // jogador1.jogosganhos++;
  }
  if (palavra != segredo && n == 4) {
    alert(`Você perdeu e a palavra era ${segredo}`);
   // jogador1.jogosperdidos++;
  }
  n++;
}
// jogador1.jogosjogados = jogador1.jogosganhos + jogador1.jogosperdidos;