var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma, 4 para subtração, 5 para potenciação, 6 para raiz quadrada, 7 para porcentagem")

if (operacao == 1){
  var primeirovalor = parseInt(prompt ("Digite o primeiro valor:"))
  var segundovalor = parseInt(prompt ("Digite o segundo valor:"))
  var resultado = primeirovalor / segundovalor
  document.write("<h2>" + primeirovalor + " / " + segundovalor + " = " + resultado + "</h2>")
}else if (operacao == 2) { 
  var primeirovalor = parseInt(prompt ("Digite o primeiro valor:"))
  var segundovalor = parseInt(prompt ("Digite o segundo valor:"))
  var resultado = primeirovalor * segundovalor
  document.write("<h2>" + primeirovalor + " x " + segundovalor + " = " +      resultado + "</h2>")
}else if (operacao == 3) {
  var primeirovalor = parseInt(prompt ("Digite o primeiro valor:"))
  var segundovalor = parseInt(prompt ("Digite o segundo valor:"))
  var resultado = primeirovalor + segundovalor
  document.write("<h2>" + primeirovalor + " + " + segundovalor + " = " + resultado + "</h2>")
}else if (operacao == 4) {
  var resultado = primeirovalor - segundovalor
  document.write("<h2>" + primeirovalor + " - " + segundovalor + " = " + resultado + "</h2>")  
} else if (operacao == 5) {
  var primeirovalor = parseInt(prompt ("Digite o número da Base"))
  var segundovalor = parseInt(prompt ("Digite numero do expoente"))
  var resultado = Math.pow(primeirovalor,segundovalor)
  document.write("<h2>" + primeirovalor + " Elevado " + segundovalor + " = " + resultado + "</h2>") 
}else if (operacao == 6) {
  var primeirovalor = parseInt(prompt ("Digite o número"))
  var resultado = Math.sqrt(primeirovalor)
  document.write("<h2>" + resultado  +"</h2>") 
}else if (operacao == 7) {
  var primeirovalor = parseInt(prompt ("Digite o número"))
  var segundovalor = parseInt(prompt ("Digite o valor da porcentagem desejada"))
  var resultado = (primeirovalor * segundovalor) / 100
  document.write("<h2>" + segundovalor + " porcento de " + primeirovalor + " = " + resultado + "</h2>")
}else {
  document.write("<h2>Opção invalida</h2>")
}



//revisão
//escrevendo na tela - document.write 
//concatenação (juntar palavra com váriavel)
// == (comparação) diferente do = para atribuição 
//if = se
//else = senão
//else if = senão se
  