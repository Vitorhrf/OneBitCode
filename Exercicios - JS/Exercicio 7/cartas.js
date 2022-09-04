let baralho = [2,4,8,9,10,"Ás","Dama"]
let opcao
do {
    let pilha = "Cartas atualmente no baralho:\n"
    let posicao = 1
    for(let i = baralho.length - 1;i >= 0; i--){
        pilha += posicao+"º - "+baralho[i]+"\n"
        posicao++
    }
    opcao = Number(prompt(
        pilha
        +"\nEscolha uma das opções:\n"
        +"1 - Adicionar uma carta\n"
        +"2 - Puxar uma carta\n"
        +"3 - Sair"
        ))
    switch (opcao){
        case 1:
            baralho.push(prompt("Digite a carta a ser adicionada:"))
            break
        case 2:
            baralho.length>0?alert("A carta "+baralho.pop()+" foi retirada do baralho!"):alert("Não há cartas no baralho!")
            break
        case 3:
            alert("Encerrando programa!")
            break
        default:
            alert("Opção invalida!")
    }
}while (opcao !== 3);