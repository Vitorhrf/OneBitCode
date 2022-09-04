const nomeTurista = prompt("Digite seu nome:")
let cidade = ""
let contador = 0

while(confirm("Você já visitou alguma cidade?") == true){
    cidade += prompt("Digite o nome da cidade:") + "\n"
    contador++
}
alert("Seu nome: "+nomeTurista+
    "\nQuantidade de cidades visitadas: "+contador+
    "\nCidades visitadas: "+cidade)