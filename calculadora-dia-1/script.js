//Médias
function enviar(){
    var notaPrimeirobimestre = parseFloat(document.querySelector("#note1").value);
    var notaSegundobimestre = parseFloat(document.querySelector("#note2").value);
    var notaTerceirobimestre = parseFloat(document.querySelector("#note3").value);
    var notaQuartobimestre = parseFloat(document.querySelector("#note4").value);
    
    var notaFinal = (notaPrimeirobimestre + notaSegundobimestre + notaTerceirobimestre + notaQuartobimestre) / 4;
    var notaFixada = notaFinal.toFixed(1);
    
     let resultadoFinal = "";
     if (notaFixada >= 6) {
      resultadoFinal = "Parabéns você foi aprovad@!"
      console.log("Parabéns você foi aprovad@!");
    } else if (notaFixada < 6) {
      resultadoFinal = "Que pena você foi reprovad@."
      console.log("Que pena você foi reprovad@.");
    }
      
    document.getElementById("resultado").innerHTML = resultadoFinal + notaFixada;
    }
    
    //Conversor de temperatura
    
    //Entrada Celsius
    function enviarCFK(){
    
      var temperaturaX =  parseFloat(document.querySelector("#celsius").value);
    
      var fahrenheit = temperaturaX * 1.8 + 32;
      var kelvin = temperaturaX + 273.15;
      
      var temperaturaFixada = fahrenheit.toFixed(1);
      var temperaturaFixada2 = kelvin.toFixed(1);
    
      document.getElementById("resultado2").innerHTML = temperaturaFixada + "°F e " + temperaturaFixada2 + "K";
      
    }
    
    //Entrada Fahrenheit
    function enviarFKC(){
    
      var temperaturaX =  parseFloat(document.querySelector("#fahrenheit").value);
    
      var celsius = (temperaturaX - 32) / 1.8;
      var kelvin = celsius + 273;
      
      var temperaturaFixada = celsius.toFixed(1);
      var temperaturaFixada2 = kelvin.toFixed(1);
    
      document.getElementById("resultado2").innerHTML = temperaturaFixada + "°C e " + temperaturaFixada2 + "K" ;
      
    }
    
    //Entrada Kelvin
    function enviarKCF(){
    
      var temperaturaX =  parseFloat(document.querySelector("#kelvin").value);
    
      var celsius = temperaturaX - 273; 
      var fahrenheit = celsius * 1.8 + 32;
      
      var temperaturaFixada = celsius.toFixed(1);
      var temperaturaFixada2 = fahrenheit.toFixed(1);
    
      document.getElementById("resultado2").innerHTML = temperaturaFixada + "°C e " + temperaturaFixada2 + "°F";
      
    }
    
    //console.log("bem-vind@ " + nome);
    //console.log(notaPrimeirobimestre);