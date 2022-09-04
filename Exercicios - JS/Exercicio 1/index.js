//Exercicio 1.1
alert("Exercicio 1.1")
let nome = prompt("Digite o primeiro nome:")
let sobrenome = prompt("Digite o sobrenome:")
let campo = prompt("Digite o campo de estudo:")
let anoNasc = prompt("Digite o ano de nascimento:")
anoNasc = parseInt(anoNasc)
let idade = 2022 - anoNasc
let nomeCompleto = nome +" "+sobrenome
alert(nomeCompleto+"\n"+campo+"\n"+idade)
//Exercicio 1.2
alert("Exercicio 1.2")
let n1 = prompt("Digite o primeiro numero:")
let n2 = prompt("Digite o segundo numero:")
n1 = parseFloat(n1)
n2 = parseFloat(n2)
let soma = n1 + n2
let sub = n1 - n2
let div = n1 / n2
let mult = n1 * n2
alert("Resultado da soma é: "+soma+"\nResultado da subtração é: "+sub+"\nResultado da divisão é: "+div+"\nResultado da multiplicação é: "+mult)

