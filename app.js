function ConverterDeDolarParaReal(){
    //1 - Pegar o valor que foi digitado no campo com id #valor
    let ValorEmDolar = document.getElementById("valor").value
    //2 - Converter o valor de dólar para real
    let valorConvertido = ValorEmDolar *5.3
    //3 - Mostrar o valor no h2 com id #valorConvertido
    document.getElementById("valorConvertido").innerText = valorConvertido.toFixed(2)
    }
