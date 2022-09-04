//Exercicio 2.1
/*alert("Exercicio 2.1")
let nomeV1 = prompt("Digite o nome do primeiro veiculo")
let velV1 = prompt("Digite a velocidade do "+nomeV1)
let nomeV2 = prompt("Digite o nome do segundo veiculo")
let velV2 = prompt("Digite a velocidade do "+nomeV2)
let resultado
velV1 = parseFloat(velV1)
velV2 = parseFloat(velV2)
velV1 === velV2?resultado = nomeV1+" e "+nomeV2+" tem velocidades iguais!":
velV1 > velV2?resultado = nomeV1+" é mais rapido!":
resultado = nomeV2+" é mais rapido!"
alert(resultado)*/
//Exercicio 2.2
alert("Exercicio 2.2")
let nomeP1 = prompt("Digite o nome do primeiro personagem:")
let poderAtaque = Number(prompt("Digite o poder de ataque do "+nomeP1))
let nomeP2 = prompt("Digite o nome do segundo personagem:")
let life = Number(prompt("Digite a quantidade de vida do "+nomeP2))
let defesa = Number(prompt("Digite a quantidade de defesa do "+nomeP2))
let escudo = confirm("O "+nomeP2+" possui escudo?")
let danoFinal = 0
if (escudo === true){
    if (poderAtaque > defesa){
        danoFinal = (poderAtaque - defesa)/2
    }
}
else{
    if (poderAtaque > defesa){
        danoFinal = poderAtaque - defesa
    }
}  
if (danoFinal > 0){
    life -= danoFinal
}
alert("O total de dano causado é "+danoFinal+", e a vida final é "+life)