const palavras = [
  "CASAS",
  "BOLAS",
  "LIVRO",
  "FRUTA",
  "FLORA",
  "PRAIA",
  "CARRO",
  "TORRE",
  "VIDRO",
  "PEIXE",
  "PEDRA",
  "LUZES",
  "CORPO",
  "AMIGO",
  "SABOR",
  "FLOCO",
  "TERRA",
  "FOGOS",
  "NUVEM",
  "LADOS",
  "VIOLA",
  "SONHO",
  "DENTE",
  "GRAMA",
  "FESTA",
];

const input = document.getElementById("entrada");
const palavra = document.querySelectorAll(".palavra");
const textWrongDiv = document.getElementById("textWrongDiv");
const certo = palavras[Math.floor(Math.random() * palavras.length)];
const button = document.getElementById("button");
var cont = 0;
var ativo = true;

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

button.addEventListener("click", testar);

console.log(certo);

function testar() {
  console.log(cont);
  var tentativa = input.value.toUpperCase();

  if (ativo) {
    if (tentativa == certo) {
      alert("PARABÉNS, VOCÊ ACERTOU A PALAVRA!");
      ativo = false;
      input.disabled = true;
    }

    var arrLetras = palavra[cont].querySelectorAll(".letra");

    if (tentativa.length != 5) {
      //   alert("PALAVRA INVÁLIDA, ELA DEVE CONTER 5 LETRAS");
      if (!textWrongDiv.hasChildNodes()) {
        let wrongTextMessage = document.createElement("p");
        wrongTextMessage.classList.add("text__wrong");
        wrongTextMessage.textContent = "A palavra deve conter 5 letras";
        textWrongDiv.appendChild(wrongTextMessage);
      }
      return;
    } else if (tentativa.length == 5 && textWrongDiv.hasChildNodes()) {
      textWrongDiv.removeChild(textWrongDiv.children[0]);
    }

    //Colocando as letras na palavra
    arrLetras.forEach((elementLetra, index) => {
      elementLetra.textContent = tentativa[index];
      let textoLetra = elementLetra.textContent;
      if (certo.includes(textoLetra)) {
        index == certo.indexOf(textoLetra, index)
          ? elementLetra.classList.add("verde")
          : elementLetra.classList.add("amarelo");
      } else {
        elementLetra.classList.add("vermelho");
      }
    });

    //Checando cada palavra
    // letras.forEach((letra) => {
    //   letra.classList.remove("vermelho");
    //   letra.classList.remove("verde");
    //   letra.classList.remove("amarelo");
    // });

    // for (var i = 0; i < 5; i++) {
    //   for (var j = 0; j < 5; j++) {
    //     if (tentativa[j] == certo[i]) {
    //       if (i == j) {
    //         letras[j].classList.add("verde");
    //         break;
    //       } else {
    //         letras[j].classList.add("amarelo");
    //       }
    //     }
    //   }
    // }

    input.value = "";

    if (cont <= 4 && ativo) {
      cont++;
    } else {
      alert("ACABARAM AS CHANCES, A PALAVRA ERA " + certo);
      ativo = false;
      input.disabled = true;
    }
  }
}
