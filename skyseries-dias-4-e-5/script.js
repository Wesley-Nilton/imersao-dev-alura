//Váriaveis
var listaFilmes = [];
var errou = document.getElementById("erro");
var resultado = document.getElementById("inserir");

// Função enviar
function Enviar() {
  var filmes = document.getElementById("valor").value;
  var nomeFilme = document.getElementById("valorFilme").value;

  //verifica se o filme é .jpg ou .png
  if (filmes.endsWith(".jpg" || ".png")) {
    adicionarFilme(filmes, nomeFilme);
  } else {
    errou.innerHTML = "Infelizmente esse link não é compátivel";
  }

  //Zera as caixas
  document.getElementById("valor").value = "";
  document.getElementById("valorFilme").value = "";
}

//Função adicionar filme
function adicionarFilme(filmes, nomeFilme) {
  //Verifica se o link já foi adicionado
  if (listaFilmes.includes(filmes)) {
    errou.innerHTML = "Esse link já foi adicionado, tente outro";
  } else {
    listaFilmes.push(filmes);
    console.log(listaFilmes);
    var quantidade = listaFilmes.length;
    resultado.innerHTML =
      resultado.innerHTML +
      "<div class='remove'><img src=" +
      listaFilmes[quantidade - 1] +
      ">" +
      "<p>" +
      nomeFilme +
      "</p></div>";
  }
}

//Função remover filmes
function Remover() {
  var remover = document.querySelector(".remove");
  remover.parentNode.removeChild(remover);
  listaFilmes.shift();
}