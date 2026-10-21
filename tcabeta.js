class jogador {
  contructor() {
    this.nickDoJogador = pronpt("qual seu nick");
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

// sorteio da palavra do jogo
    let ind = Math.trunc(Math.random() * vdapalavra.length - 1);
    let palavrasenha = vdapalavra[ind];
    palavrasenha.toUpperCase;
  // sorteio da palavra do jogo

function termo() {
 


  let lcr = "";
  let ulcr = [];
  let lcc = "";
  let ulcc = [];
  let palavra = "";
  let palavrasjogadas = [];
  

  // verificação das letras das palavras do jogo
    let alfabeto = [
    { letra: "a", numero: 0 },
    { letra: "b", numero: 0 },
    { letra: "c", numero: 0 },
    { letra: "d", numero: 0 },
    { letra: "e", numero: 0 },
    { letra: "f", numero: 0 },
    { letra: "g", numero: 0 },
    { letra: "h", numero: 0 },
    { letra: "i", numero: 0 },
    { letra: "j", numero: 0 },
    { letra: "k", numero: 0 },
    { letra: "l", numero: 0 },
    { letra: "m", numero: 0 },
    { letra: "n", numero: 0 },
    { letra: "o", numero: 0 },
    { letra: "p", numero: 0 },
    { letra: "q", numero: 0 },
    { letra: "r", numero: 0 },
    { letra: "s", numero: 0 },
    { letra: "t", numero: 0 },
    { letra: "u", numero: 0 },
    { letra: "v", numero: 0 },
    { letra: "w", numero: 0 },
    { letra: "x", numero: 0 },
    { letra: "y", numero: 0 },
    { letra: "z", numero: 0 },
  ];
  let testeln = [];
  class letenumqt {
    constructor(letra, numero) {
      this.letra = letra;
      this.numero = numero;
    }
  }


  function temLetra() {
    for (let n = 0; n < alfabeto.length; n++) {
      if (palavrasenha.includes(alfabeto[n].letra)) {
        alfabeto[n].numero += 1;
        if (n == 0) {
          letnum = new letenumqt(alfabeto[n].letra, alfabeto[n].numero);
        }
        if (n == 1) {
          letnum1 = new letenumqt(alfabeto[n].letra, alfabeto[n].numero);
        }
        if (n == 2) {
          letnum2 = new letenumqt(alfabeto[n].letra, alfabeto[n].numero);
        }
        if (n == 3) {
          letnum3 = new letenumqt(alfabeto[n].letra, alfabeto[n].numero);
        } else {
          letnum4 = new letenumqt(alfabeto[n].letra, alfabeto[n].numero);
        }
      }
      testeln.push(letnum);
      testeln.push(letnum1);
      testeln.push(letnum2);
      testeln.push(letnum3);
      testeln.push(letnum4);
    }
  }
// verificação das letras das palavras do jogo


  for (let i = 0; i < 5; i++) {
    if (palavra == palavrasenha) {
      alert(`voce ganhou ${palavra}`);
      break;
    } else {

      palavra = document.getElementById("palavra1").value;
      palavra = document.getElementById("palavra2").value;
      palavra = document.getElementById("palavra3").value;
      palavra = document.getElementById("palavra4").value;
      palavra = document.getElementById("palavra5").value;

      palavra.toUpperCase;

      lcr = "";
      lcc = "";

      palavrasjogadas.push(palavra);
     
     
     
     
     
     
     
     
     
     
     // verificação das palavras
      for (let ind = 0; ind < 5; ind++) {
        if (palavrasenha.includes(testeln[ind].letra)) {
          lcr += testeln[ind].numero;
        } else {
          lcr += "-";
        }

        if (palavrasenha[ind] == palavra[ind]) {
          lcc += palavra[ind];
        } else {
          lcc += "-";
        }
      }
    // verificação das palavras













      ulcr.push(lcr);
      ulcc.push(lcc);
    }
  }
  if (palavra != palavrasenha) {
    alert(`Você perdeu e a palavra era ${palavrasenha}`);
  }
}
