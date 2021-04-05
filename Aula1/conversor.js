var valoremdolartexto = prompt('Qual o valor em dolar?')

var valoremdolarnumero = parseFloat(valoremdolartexto)

var valoremreal = valoremdolarnumero * 5.50
var valoremrealfixed = valoremreal.toFixed(2)

alert("O Valor em Dolar é:"+ valoremrealfixed)