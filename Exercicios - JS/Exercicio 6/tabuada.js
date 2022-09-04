let numero = prompt("Digite o numero a ser realizado a tabuada:")
let tabuada = "Tabuada de multiplicação de 1 a 20\n"
for(let i = 1; i <=20; i++){
    tabuada += "\n"+numero+" * "+i+" = "+parseFloat(numero * i)
}
alert(tabuada)