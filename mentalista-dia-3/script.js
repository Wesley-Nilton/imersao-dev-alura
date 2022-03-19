var tentativas = 3;
var contador = 0;
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultante = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultante.innerHTML = "Você acertou!";
  }

  if (numeroSecreto != chute) {
    contador++;
  }

  var tentativasFinais = tentativas - contador;

  if (tentativasFinais == 0) {
    var buttonEnabled = document.getElementById("button");
    button.disabled = true;
  }

  if (chute > numeroSecreto) {
    elementoResultante.innerHTML =
      "Você errou!<br> Dica: Tente um número menor.<br>" +
      "Tentativas restantes:" +
      tentativasFinais;
  } else if (chute < numeroSecreto) {
    elementoResultante.innerHTML =
      "Você errou!<br> Dica: Tente um número maior.<br>" +
      "Tentativas restantes:" +
      tentativasFinais;
  }

  if (chute >= 11 || chute < 0) {
    elementoResultante.innerHTML = "Você deve digitar um número de 0 a 10";
  }

  if (button.disabled == true) {
    elementoResultante.innerHTML =
      "Infelizmente você excedeu o limite de tentativas, reinicie a página e tente novamente.";
  }
}