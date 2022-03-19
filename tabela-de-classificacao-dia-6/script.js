var jogadores = [];

function construirTabela(nomeJogador, imagemDoJogador) {
  return (jogador = {
    nome: nomeJogador || textoPadrao,
    link: imagemDoJogador || semImagem,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
}

function adicionarJogador() {
  var nomeJogador = document.getElementById("valorNome").value;
  var imagemDoJogador = document.getElementById("valorImagem").value;

  var semConteudo = "";

  if (nomeJogador == semConteudo) {
    alert("É necessário preencher o nome do jogador para continuar!");
  } else if (imagemDoJogador == semConteudo) {
    var imagemPadrao =
      "https://cdn.discordapp.com/attachments/950532220651729036/953056311011082240/4546.jpg";
    jogadores.push(construirTabela(nomeJogador, imagemPadrao));
  } else {
    jogadores.push(construirTabela(nomeJogador, imagemDoJogador));
  }

  exibeJogadoresNaTela(jogadores);

  document.getElementById("valorNome").value = "";
  document.getElementById("valorImagem").value = "";
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td class='img'><img src='" + jogadores[i].link + "'></td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" +
      i +
      ")' class='second-button -green'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" +
      i +
      ")'class='second-button -yellow'>Empate</button></td>";
    // elemento +=
    //   "<td><button onClick='adicionarDerrota(" +
    //   i +
    //   ")' class='second-button -red'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='limparHistorico(" +
      i +
      ")' class='second-button -grey'>Limpar Histórico</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;

  for (i2 = 0; i2 < jogadores.length; i2++) {
    if (!(jogadores[i2] === jogador)) {
      jogadores[i2].derrotas++;
    }
  }
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  for (i2 = 0; i2 < jogadores.length; i2++) {
    var jogador = jogadores[i2];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(jogadores);
}

// function adicionarDerrota(i) {
//   var jogador = jogadores[i];
//   jogador.derrotas++;
//   jogador.pontos = jogador.pontos - 1;
//   exibeJogadoresNaTela(jogadores);
// }

function limparHistorico(i) {
  var jogador = jogadores[i];
  jogador.vitorias = jogador.vitorias * 0;
  jogador.empates = jogador.empates * 0;
  jogador.derrotas = jogador.derrotas * 0;
  jogador.pontos = jogador.pontos * 0;
  exibeJogadoresNaTela(jogadores);
}

function limparJogadores() {
  jogadores = [];
  exibeJogadoresNaTela(jogadores);
}