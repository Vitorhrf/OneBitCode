let valor = Number(prompt("Digite a quantidade inicial de dinheiro disponivel:"))
let opcao = 0

do {
    opcao = Number(prompt("Saldo atual: "+valor+"\n\nDigite a operação desejada:\n1 - Deposito\n2 - Saque\n3 - Sair"))
    switch(opcao){
        case 1:
            valor += Number(prompt("Digite a quantia a ser adicionada:"))
            break
        case 2:
            valor -= Number(prompt("Digite a quantia a ser sacada:"))
            break
        default:
            alert("Encerrando o programa!")
    }    
} while (opcao !== 3);