class jogador {
  contructor() {
    this.nickDoJogador = pronpt("qual seu nick");
    this.jogosjogados = 0;
    this.jogosganhos = 0;
    this.jogosperdidos = 0;
  }
}
function verificar() {
  let inp00 = document.getElementById("id00");
  let inp01 = document.getElementById("id01");
  let inp02 = document.getElementById("id02");
  let inp03 = document.getElementById("id03");
  let inp04 = document.getElementById("id04");
  let inp10 = document.getElementById("id10");
  let inp11 = document.getElementById("id11");
  let inp12 = document.getElementById("id12");
  let inp13 = document.getElementById("id13");
  let inp14 = document.getElementById("id14");
  let inp20 = document.getElementById("id20");
  let inp21 = document.getElementById("id21");
  let inp22 = document.getElementById("id22");
  let inp23 = document.getElementById("id23");
  let inp24 = document.getElementById("id24");
  let inp30 = document.getElementById("id30");
  let inp31 = document.getElementById("id31");
  let inp32 = document.getElementById("id32");
  let inp33 = document.getElementById("id33");
  let inp34 = document.getElementById("id34");
  let inp40 = document.getElementById("id40");
  let inp41 = document.getElementById("id41");
  let inp42 = document.getElementById("id42");
  let inp43 = document.getElementById("id43");
  let inp44 = document.getElementById("id44");

  for (let i = 0; i < 5; i++) {
    palavra.toUpperCase;

    if (palavra == palavrasenha) {
      alert(`voce ganhou ${palavra}`);
      break;
    } else {
      for (let ind = 0; ind < 5; ind++) {
        if (palavrasenha.includes(inp00)) {
          inp00.style.background = "yellow";
        }
        if (palavrasenha.includes(inp01)) {
          inp01.style.background = "yellow";
        }
        if (palavrasenha.includes(inp02)) {
          inp02.style.background = "yellow";
        }
        if (palavrasenha.includes(inp03)) {
          inp03.style.background = "yellow";
        }
        if (palavrasenha.includes(inp04)) {
          inp04.style.background = "yellow";
        }
      }
      for (let ind = 0; ind < 5; ind++) {
        if (palavrasenha.includes(inp10)) {
          inp10.style.background = "yellow";
        }
        if (palavrasenha.includes(inp11)) {
          inp11.style.background = "yellow";
        }
        if (palavrasenha.includes(inp12)) {
          inp12.style.background = "yellow";
        }
        if (palavrasenha.includes(inp13)) {
          inp13.style.background = "yellow";
        }
        if (palavrasenha.includes(inp14)) {
          inp14.style.background = "yellow";
        }
      }
      for (let ind = 0; ind < 5; ind++) {
        if (palavrasenha.includes(inp20)) {
          inp20.style.background = "yellow";
        }
        if (palavrasenha.includes(inp21)) {
          inp21.style.background = "yellow";
        }
        if (palavrasenha.includes(inp22)) {
          inp22.style.background = "yellow";
        }
        if (palavrasenha.includes(inp23)) {
          inp23.style.background = "yellow";
        }
        if (palavrasenha.includes(inp24)) {
          inp24.style.background = "yellow";
        }
      }
      for (let ind = 0; ind < 5; ind++) {
        if (palavrasenha.includes(inp30)) {
          inp30.style.background = "yellow";
        }
        if (palavrasenha.includes(inp31)) {
          inp31.style.background = "yellow";
        }
        if (palavrasenha.includes(inp32)) {
          inp32.style.background = "yellow";
        }
        if (palavrasenha.includes(inp33)) {
          inp33.style.background = "yellow";
        }
        if (palavrasenha.includes(inp34)) {
          inp34.style.background = "yellow";
        }
      }
      for (let ind = 0; ind < 5; ind++) {
        if (palavrasenha.includes(inp40)) {
          inp40.style.background = "yellow";
        }
        if (palavrasenha.includes(inp41)) {
          inp41.style.background = "yellow";
        }
        if (palavrasenha.includes(inp42)) {
          inp42.style.background = "yellow";
        }
        if (palavrasenha.includes(inp43)) {
          inp43.style.background = "yellow";
        }
        if (palavrasenha.includes(inp44)) {
          inp44.style.background = "yellow";
        }
      }

      if (palavra != palavrasenha) {
        alert(`Você perdeu e a palavra era ${palavrasenha}`);
      }
    }
  }

  if (palavra == palavrasenha) {
    jogador1.jogosganhos++;
  } else {
    jogador1.jogosperdidos++;
  }

  jogador1.jogosjogados = jogador1.jogosganhos + jogador1.jogosperdidos;
}
