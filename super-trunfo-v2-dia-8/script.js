alert("Observação: todos os valores utilizados nos atributos são fictícios");

var carta1 = {
  nome: "Bulbassauro",
  link:
    "https://cdn.discordapp.com/attachments/950532220651729036/953401213959929916/Bulbasaur-Pokemon-Background-PNG-Image.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Pikachu",
  link:
    "https://cdn.discordapp.com/attachments/950532220651729036/953401214207418368/pkc.png",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 8
  }
};

var carta3 = {
  nome: "Squirtle",
  link:
    "https://cdn.discordapp.com/attachments/950532220651729036/953401213716693082/sqrtl.png",
  atributos: {
    ataque: 6,
    defesa: 9,
    magia: 4
  }
};

var carta4 = {
  nome: "Snorlax",
  link:
    "https://cdn.discordapp.com/attachments/950532220651729036/953401214513606716/snx.png",
  atributos: {
    ataque: 5,
    defesa: 10,
    magia: 2
  }
};

var carta5 = {
  nome: "Charmander",
  link:
    "https://cdn.discordapp.com/attachments/950532220651729036/953401213414682624/char.png",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 9
  }
};

var carta6 = {
  nome: "Eevee",
  link:
    "https://cdn.discordapp.com/attachments/950532220651729036/953731386441867314/ev.png",
  atributos: {
    ataque: 5,
    defesa: 6,
    magia: 3
  }
};

var carta7 = {
  nome: "Celebi",
  link:
    "https://cdn.discordapp.com/attachments/950532220651729036/953733035575099462/clb.png",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 10
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado =
      "<p class='resultado-final'>Foi uma batalha incrível, você ganhou</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado =
      "<p class='resultado-final'>Infelizmente o seu adversário ganhou</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;

  exibirCartaMaquina();
}

function estruturarCartaMaquina(opcoesTexto) {
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.link})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.link + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "' checked>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.link})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaMaquina.link + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
