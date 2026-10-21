let inp00 = document.getElementById("id00")
let inp01 = document.getElementById("id01")
let inp02 = document.getElementById("id02")
let inp03 = document.getElementById("id03")
let inp04 = document.getElementById("id04")
let inp10 = document.getElementById("id10")
let inp11 = document.getElementById("id11")
let inp12 = document.getElementById("id12")
let inp13 = document.getElementById("id13")
let inp14 = document.getElementById("id14")
let inp20 = document.getElementById("id20")
let inp21 = document.getElementById("id21")
let inp22 = document.getElementById("id22")
let inp23 = document.getElementById("id23")
let inp24 = document.getElementById("id24")
let inp30 = document.getElementById("id30")
let inp31 = document.getElementById("id31")
let inp32 = document.getElementById("id32")
let inp33 = document.getElementById("id33")
let inp34 = document.getElementById("id34")
let inp40 = document.getElementById("id40")
let inp41 = document.getElementById("id41")
let inp42 = document.getElementById("id42")
let inp43 = document.getElementById("id43")
let inp44 = document.getElementById("id44")


for (let i = 0; i < 5; i++) {
    if (palavra == palavrasenha) {
        alert(`voce ganhou ${palavra}`);
        break;
    } else {

        palavra.toUpperCase;


        
        for (let ind = 0; ind < 5; ind++) {
          if (palavrasenha.includes(inp00)){
            inp.style.background = 'yellow'
          }
        }
      


        if (palavra != palavrasenha) {
            alert(`Você perdeu e a palavra era ${palavrasenha}`);
        }
    }
}