alert("Os valores das moedas não são atualizados.");

//FUNÇÃO DOLAR
function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmDolar = valorEmRealNumerico / 5;
    console.log(valorEmDolar);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dólar é US$" + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  //FUNÇÃO DOLAR
  function Converter2() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmEuro = valorEmRealNumerico / 6;
    console.log(valorEmEuro);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Euro é €" + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  //FUNÇÃO BITCOIN
  function Converter3() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmBitcon = valorEmRealNumerico / 196000;
    console.log(valorEmBitcon);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Bitcoin é ₿" + valorEmBitcon;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  //Conversor de quilômetros para anos luz
  function Converter4() {
    var valorElemento = document.getElementById("quilometro");
    var valor = valorElemento.value;
    var valorQuilometroNumerico = parseFloat(valor);
  
    var distanciaEmLuz = valorQuilometroNumerico / 9500000000000;
    console.log(distanciaEmLuz);
    var tempoPercorrido = distanciaEmLuz * 365;
  
    var valorDistanciaConvertida = document.getElementById("distanciaConvertida");
    var valorDistanciaFinal =
      "O resultado é de: " +
      distanciaEmLuz +
      " anos luz. E o tempo percorrido é de: " +
      tempoPercorrido +
      " dias.";
    valorDistanciaConvertida.innerHTML = valorDistanciaFinal;
  }