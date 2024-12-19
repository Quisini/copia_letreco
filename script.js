const palavras = [
    "CASAS", "BOLAS", "LIVRO", "FRUTA", "FLORA",
    "PRAIA", "CARRO", "TORRE", "VIDRO", "PEIXE",
    "PEDRA", "LUZES", "CORPO", "AMIGO", "SABOR",
    "FLOCO", "TERRA", "FOGOS", "NUVEM", "LADOS",
    "VIOLA", "SONHO", "DENTE", "GRAMA", "FESTA"
  ];

const input = document.getElementById('entrada');
const palavra = document.querySelectorAll(".palavra");
var cont = 0;
var ativo = true;

const certo = palavras[(Math.floor(Math.random() * palavras.length))];
console.log(certo);

function testar()
{
    if(cont > 5)
    {
        alert("ACABARAM AS CHANCES, A PALAVRA ERA " + certo);
        ativo = false;
        input.disabled = true;
        return 0;
    }

    var tentativa = input.value.toUpperCase();
    input.value = "";

    if (ativo)
    {
        if (tentativa == certo)
        {
            alert("PARABÉNS, VOCÊ ACERTOU A PALAVRA!");
            ativo = false;
            input.disabled = true;
        }

        var letras = palavra[cont].querySelectorAll(".letra");

        if (tentativa.length != 5)
        {
            alert("PALAVRA INVÁLIDA, ELA DEVE CONTER 5 LETRAS");
            input.value = "";
            return 1;
        }

        //Colocando as letras na palavra
        for(var i = 0; i < 5; i++)
        {
            letras[i].textContent = tentativa[i];
        }

        //Checando cada palavra
        letras.forEach(letra => {
            letra.classList.add('vermelho');
        });

        for (var i = 0; i < 5; i++)
        {
            for(var j = 0; j < 5; j++)
            {
                if(tentativa[j] == certo[i])
                {
                    if (i == j)
                    {
                        letras[j].classList.add('verde');
                        letras[j].classList.remove('vermelho');
                        break;
                    }
                    else 
                    {
                        letras[j].classList.add('amarelo');
                        letras[j].classList.remove('vermelho');
                    }
                }
            }
        }

        if(cont >= 5 && ativo == true)
        {
            alert("ACABARAM AS CHANCES, A PALAVRA ERA " + certo);
            ativo = false;
            input.disabled = true;
        }
        cont++;
    }
}