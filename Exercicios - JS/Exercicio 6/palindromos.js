const palavra = prompt("Digite uma palavra para verificar se é palíndroma:")
let palavraInversa = ""
for(let i = palavra.length - 1; i >= 0; i--){
    palavraInversa += palavra[i]
}
palavra == palavraInversa?alert("A palavra "+palavra+" é um palíndromo!"):alert("A palavra não é um palíndromo!\nPalavra digitada: "+palavra+"\nPalavra invertida: "+palavraInversa)
