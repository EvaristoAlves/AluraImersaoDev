var numerosecreto = parseInt((Math.random() * 20))
var tentativas = 3
  while (tentativas > 0) {
      var chute = parseInt(prompt('Adivinhe o número que estou pensando! Escolha um número entre 0 e 20 '))
      if (numerosecreto == chute){
      alert('Acertou!! ')
       break
        
    } else if (numerosecreto > chute) {
      alert("O número secreto é menor, tente novamente!")
      tentativas = tentativas - 1
      
    } else if (numerosecreto < chute) {
      alert("O número secreto é maior, tente novamente!")
      tentativas = tentativas - 1
    }
    }

if (chute != numerosecreto) {
  alert('Sua tentativas acabaram! O número secreto era ' + numerosecreto)
}