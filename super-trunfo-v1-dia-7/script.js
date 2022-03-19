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
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Squirtle",
    link:
      "https://cdn.discordapp.com/attachments/950532220651729036/953401213716693082/sqrtl.png",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
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
  
  var cartas = [carta1, carta2, carta3, carta4, carta5];
  var cartaMaquina = 0;
  var cartaJogador = 0;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 5);
    }
  
    cartaJogador = cartas[numeroCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirImagens();
    exibirOpcoes();
  }
  
  function exibirImagens() {
    var elementoImagem = document.getElementById("pokemon");
    var valorCartaJogador = cartaJogador.link;
  
    elementoImagem.innerHTML =
      "<img src='" + valorCartaJogador + "' class='pokemonimg'>";
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "' checked>" +
        atributo;
    }
  
    opcoes.innerHTML = opcoesTexto;
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
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Foi uma batalha incrível, você ganhou";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Infelizmente o seu adversário ganhou";
    } else {
      elementoResultado.innerHTML = "Empate!";
    }
  }  